const DEFAULT_SITE_URL = 'https://boam79.vercel.app';

function normalizeSiteUrl(url: string): string {
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (!envUrl) {
    return DEFAULT_SITE_URL;
  }

  return normalizeSiteUrl(envUrl);
}
