'use client';

import { useEffect, useRef, useCallback } from 'react';

interface TurnstileWidgetProps {
  siteKey: string;
  onToken: (token: string | null) => void;
  id?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, opts: {
        sitekey: string;
        callback?: (token: string) => void;
        'expired-callback'?: () => void;
        'error-callback'?: () => void;
        theme?: 'light' | 'dark' | 'auto';
      }) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
  }
}

export function TurnstileWidget({ siteKey, onToken, id = 'turnstile-widget' }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const scriptLoaded = useRef(false);
  const onTokenRef = useRef(onToken);

  useEffect(() => { onTokenRef.current = onToken; }, [onToken]);

  const readyCallback = useCallback(() => {
    if (!containerRef.current || widgetId.current) return;

    widgetId.current = window.turnstile!.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token: string) => onTokenRef.current(token),
      'expired-callback': () => onTokenRef.current(null),
      'error-callback': () => onTokenRef.current(null),
      theme: 'auto',
    });
  }, [siteKey]);

  useEffect(() => {
    if (document.getElementById('cf-turnstile-script')) {
      scriptLoaded.current = true;
      if (window.turnstile) {
        readyCallback();
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'cf-turnstile-script';
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=cfTurnstileOnload';
    script.async = true;
    script.defer = true;

    (window as unknown as Record<string, unknown>).cfTurnstileOnload = () => {
      scriptLoaded.current = true;
      readyCallback();
    };

    document.head.appendChild(script);

    return () => {
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [readyCallback]);

  return <div ref={containerRef} id={id} />;
}
