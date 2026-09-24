/**
 * 라이트 포트폴리오 잉크 스케일.
 * Lee Robinson(흰 바탕 + 거의 검정 본문), Brittany Chiang(단일 액센트)을 참고.
 * 밝은 배경에서 zinc-400/500 본문은 WCAG AA에 못 미치므로 쓰지 않는다.
 */
export const palette = {
  page: '#ffffff',
  surface: '#f4f4f5',
  ink: '#18181b',
  inkBody: '#27272a',
  inkSecondary: '#3f3f46',
  inkMuted: '#52525b',
  inkPlaceholder: '#71717a',
  line: '#d4d4d8',
  lineSubtle: '#e4e4e7',
  accent: '#0f766e',
  accentInk: '#115e59',
  footer: '#09090b',
  onDark: '#fafafa',
  onDarkMuted: '#d4d4d8',
} as const;

export type PaletteColor = (typeof palette)[keyof typeof palette];

export const colors = {
  primary: {
    blue: palette.accent,
    dark: palette.ink,
  },
  secondary: {
    teal: palette.accent,
    gray: palette.inkMuted,
  },
  accent: {
    orange: palette.accent,
    green: palette.accentInk,
  },
  background: {
    light: palette.surface,
    white: palette.page,
    dark: palette.footer,
  },
  status: {
    active: palette.accent,
    inProgress: palette.accent,
    completed: palette.inkMuted,
  },
};
