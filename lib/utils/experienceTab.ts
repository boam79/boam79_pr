import { routes } from '@/lib/constants/routes';

export type CareerTab = 'development' | 'facility';

export function parseExperienceTab(tab: string | null | undefined): CareerTab {
  return tab === 'facility' ? 'facility' : 'development';
}

export function experienceTabHref(
  tab: CareerTab,
  search: string | { toString(): string } = ''
): string {
  const next = new URLSearchParams(
    typeof search === 'string' ? search.replace(/^\?/, '') : search.toString()
  );
  next.set('tab', tab);
  return `${routes.experience}?${next.toString()}`;
}

export function readExperienceTabFromSearch(search: string): CareerTab {
  return parseExperienceTab(new URLSearchParams(search.replace(/^\?/, '')).get('tab'));
}
