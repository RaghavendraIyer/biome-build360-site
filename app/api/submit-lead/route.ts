import { NextRequest, NextResponse } from 'next/server';
import { getPostHogClient } from '@/lib/posthog-server';

const LEADS_DB_ID = '3545e0a1-b48a-80c8-a252-ea130b376a64';
const VENDORS_DB_ID = '3c05e0a1-b48a-80d3-a3cf-e7a83d43ab8e';

function buildVendorProperties(body: Record<string, unknown>) {
  const pincodes = Array.isArray(body.pincodes) ? body.pincodes : [];
  const categories = Array.isArray(body.product_categories) ? body.product_categories : [];
  const brands = Array.isArray(body.brand_affiliations) ? body.brand_affiliations : [];

  const props: Record<string, unknown> = {
    Company: { title: [{ text: { content: String(body.company || '') } }] },
    'Business Type': { select: { name: String(body.business_type || 'Supplier') } },
    'Contact Person': { rich_text: [{ text: { content: String(body.contact_person || '') } }] },
    Phone: { phone_number: String(body.phone || '') },
    Email: { rich_text: [{ text: { content: String(body.email || '') } }] },
    'Service Pincodes': { rich_text: [{ text: { content: pincodes.join(', ') } }] },
    'Product Categories': {
      multi_select: categories.map((c) => ({ name: String(c) })),
    },
    'Other Materials': { rich_text: [{ text: { content: String(body.other_materials || '') } }] },
    'Brand Affiliations': { rich_text: [{ text: { content: brands.join(', ') } }] },
    GSTIN: { rich_text: [{ text: { content: String(body.gstin || '') } }] },
    PAN: { rich_text: [{ text: { content: String(body.pan || '') } }] },
    'Udyam No': { rich_text: [{ text: { content: String(body.udyam || '') } }] },
    'DPDP Consent': { checkbox: Boolean(body.dpdp_consent) },
    'Lead ID': { rich_text: [{ text: { content: String(body.lead_id || '') } }] },
    Source: { select: { name: 'vendor-registration' } },
    Timestamp: { date: { start: new Date().toISOString() } },
    Stage: { select: { name: 'New' } },
  };

  if (body.esign_date) {
    props['eSign Agreement'] = { date: { start: String(body.esign_date) } };
  }

  if (body.website && String(body.website).trim()) {
    props.Website = { url: String(body.website).trim() };
  }

  return props;
}

function buildLeadProperties(body: Record<string, unknown>) {
  const phoneDigits = String(body.phone || '').replace(/\D/g, '');
  const phoneNumber = phoneDigits.length >= 10 ? parseInt(phoneDigits.slice(-10), 10) : null;

  const props: Record<string, unknown> = {
    Name: { title: [{ text: { content: String(body.company || '') } }] },
    'Company name': { rich_text: [{ text: { content: String(body.company || '') } }] },
    Message: { rich_text: [{ text: { content: String(body.details || '') } }] },
    Source: { rich_text: [{ text: { content: String(body.source || 'web-enquiry') } }] },
  };

  if (phoneNumber !== null) props['Phone number'] = { number: phoneNumber };
  if (body.email) props.Email = { email: String(body.email) };

  return props;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, phone, source } = body;

    if (!company || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const NOTION_TOKEN = process.env.NOTION_API_TOKEN;

    if (!NOTION_TOKEN) {
      console.warn('NOTION_API_TOKEN not configured — logging lead locally');
      const posthog = getPostHogClient();
      if (posthog) {
        posthog.capture({
          distinctId: body.lead_id || 'anonymous',
          event: source === 'vendor-registration' ? 'vendor_registered' : 'lead_submitted',
          properties: {
            source: source || 'web-enquiry',
          },
        });
        await posthog.flush();
      }
      return NextResponse.json({ success: true, note: 'Lead captured, CRM pending config' });
    }

    const isVendor = source === 'vendor-registration';
    const DATABASE_ID = isVendor
      ? process.env.NOTION_VENDOR_DATABASE_ID || VENDORS_DB_ID
      : process.env.NOTION_DATABASE_ID || LEADS_DB_ID;

    const notionPayload = {
      parent: { database_id: DATABASE_ID },
      properties: isVendor ? buildVendorProperties(body) : buildLeadProperties(body),
    };

    const resp = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(notionPayload),
    });

    const result = await resp.json();

    if (!resp.ok) {
      console.error('Notion API error:', result);
      return NextResponse.json({ success: false, error: result }, { status: 500 });
    }

    const posthog = getPostHogClient();
    if (posthog) {
      posthog.capture({
        distinctId: body.lead_id || 'anonymous',
        event: isVendor ? 'vendor_registered' : 'lead_submitted',
        properties: {
          material_category: body.material || 'General',
          source: source || 'web-enquiry',
        },
      });
      await posthog.flush();
    }

    return NextResponse.json({ success: true, notion_id: result.id, database: isVendor ? 'vendors' : 'leads' });
  } catch (err) {
    console.error('submit-lead error:', err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
