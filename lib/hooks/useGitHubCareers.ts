'use client';

import { useEffect, useState } from 'react';
import type { Career } from '@/types/career';
import type { GitHubCareersPayload } from '@/types/github';

export type GitHubCareersState = {
  careers: Career[];
  syncedAt: string | null;
  isLoading: boolean;
  error: string | null;
};

function parsePayload(data: unknown): GitHubCareersPayload | null {
  if (Array.isArray(data)) {
    return { careers: data as Career[], syncedAt: new Date().toISOString(), source: 'github' };
  }

  if (
    data &&
    typeof data === 'object' &&
    Array.isArray((data as GitHubCareersPayload).careers)
  ) {
    const payload = data as GitHubCareersPayload;
    return {
      careers: payload.careers,
      syncedAt: payload.syncedAt,
      source: 'github',
    };
  }

  return null;
}

export function useGitHubCareers(): GitHubCareersState {
  const [careers, setCareers] = useState<Career[]>([]);
  const [syncedAt, setSyncedAt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/github-careers', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error(`GitHub careers API failed with ${response.status}`);
        }

        const payload = parsePayload(await response.json());
        if (!payload) {
          throw new Error('Unexpected GitHub careers payload');
        }

        setCareers(payload.careers);
        setSyncedAt(payload.syncedAt);
      } catch (loadError) {
        console.error('Failed to load GitHub repos', loadError);
        setError('공개 저장소를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.');
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, []);

  return { careers, syncedAt, isLoading, error };
}
