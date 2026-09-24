const SKIP_LINE = /^(#{1,6}\s|```|---+|\||\[!\[|!\[|<)/;

function stripMarkdownInline(text: string): string {
  return text
    .replace(/!\[[^\]]*]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    .replace(/[*_~`#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * README 본문에서 GitHub About 대신 쓸 짧은 한 줄 소개를 뽑습니다.
 */
export function extractReadmeBrief(markdown: string, maxLength = 110): string {
  const withoutFrontmatter = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const lines = withoutFrontmatter.split(/\r?\n/);
  const paragraphs: string[] = [];
  let buffer: string[] = [];

  const flush = () => {
    if (buffer.length === 0) return;
    paragraphs.push(buffer.join(' '));
    buffer = [];
  };

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) {
      flush();
      continue;
    }

    if (SKIP_LINE.test(trimmed)) {
      flush();
      continue;
    }

    const asText = trimmed.startsWith('>') ? trimmed.replace(/^>\s?/, '') : trimmed;
    if (!asText || SKIP_LINE.test(asText)) {
      flush();
      continue;
    }

    buffer.push(asText);
  }
  flush();

  const candidate =
    paragraphs
      .map(stripMarkdownInline)
      .find((paragraph) => paragraph.length >= 12) ?? '';

  if (!candidate) return '';
  if (candidate.length <= maxLength) return candidate;
  return `${candidate.slice(0, maxLength - 1).trimEnd()}…`;
}
