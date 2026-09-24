import { NextResponse } from 'next/server';
import { syncGitHubCareers } from '@/lib/github';

export const revalidate = 60;

export async function GET() {
  const payload = await syncGitHubCareers('boam79');
  return NextResponse.json(payload, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}
