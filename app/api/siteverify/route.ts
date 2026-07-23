import { NextRequest, NextResponse } from 'next/server';

const SITE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    if (!token) {
      return NextResponse.json({ success: false, error: 'Missing token' }, { status: 400 });
    }

    const secret = process.env.TURNSTILE_SECRET;
    if (!secret) {
      console.error('TURNSTILE_SECRET not configured');
      return NextResponse.json({ success: false, error: 'Server config error' }, { status: 500 });
    }

    const resp = await fetch(SITE_VERIFY_URL, {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token }),
    });

    const result = await resp.json();
    return NextResponse.json(result);
  } catch (err) {
    console.error('siteverify error:', err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 },
    );
  }
}
