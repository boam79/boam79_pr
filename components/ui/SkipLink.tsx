export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
    >
      본문으로 건너뛰기
    </a>
  );
}
