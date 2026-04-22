import { NextResponse } from 'next/server';
import { fetchGitHubRepos } from '@/lib/github';

export async function GET() {
  const careers = await fetchGitHubRepos('boam79');
  return NextResponse.json(careers);
}
