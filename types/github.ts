import type { Career } from '@/types/career';

export type GitHubCareersPayload = {
  careers: Career[];
  syncedAt: string;
  source: 'github';
};
