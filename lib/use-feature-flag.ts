'use client';

import { useEffect, useState } from 'react';
import posthog from 'posthog-js';

export function useFeatureFlag(key: string, defaultValue: boolean): boolean {
  const [enabled, setEnabled] = useState(defaultValue);

  useEffect(() => {
    let active = true;
    try {
      if (typeof posthog?.config === 'undefined') return;
      const apply = () => {
        if (!active) return;
        setEnabled(!!posthog.isFeatureEnabled(key, { defaultValue }));
      };
      apply();
      const off = posthog.onFeatureFlags(() => {
        try {
          apply();
        } catch {
          // noop
        }
      });
      return () => {
        active = false;
        off();
      };
    } catch {
      return;
    }
  }, [key, defaultValue]);

  return enabled;
}
