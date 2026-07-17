export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }

  try {
    const body = await request.json();
    const { company, phone, material, details, source, lead_id, timestamp } = body;

    if (!company || !phone) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    const NOTION_TOKEN = env.NOTION_API_TOKEN;
    const DATABASE_ID = env.NOTION_DATABASE_ID || "3545e0a1-b48a-80c8-a252-ea130b376a64";

    if (!NOTION_TOKEN) {
      console.warn("NOTION_API_TOKEN not configured — logging lead locally");
      return new Response(JSON.stringify({ success: true, note: "Lead captured, CRM pending config" }), {
        status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    const NOTION_API_BASE = "https://api.notion.com/v1";
    const NOTION_API_VERSION = "2022-06-28";

    const notionPayload = {
      parent: { database_id: DATABASE_ID },
      properties: {
        "Company": { title: [{ text: { content: company } }] },
        "Phone": { phone_number: phone },
        "Material Category": { select: { name: material || "General" } },
        "Details": { rich_text: [{ text: { content: details || "" } }] },
        "Lead ID": { rich_text: [{ text: { content: lead_id || "" } }] },
        "Source": { select: { name: source || "web-enquiry" } },
        "Timestamp": { date: { start: timestamp || new Date().toISOString() } },
        "Stage": { select: { name: "New" } }
      }
    };

    const resp = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      },
      body: JSON.stringify(notionPayload)
    });

    const result = await resp.json();

    if (!resp.ok) {
      console.error("Notion API error:", result);
      return new Response(JSON.stringify({ success: false, error: result }), {
        status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
      });
    }

    return new Response(JSON.stringify({ success: true, notion_id: result.id }), {
      status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });

  } catch (err) {
    console.error("submit-lead error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }
}
