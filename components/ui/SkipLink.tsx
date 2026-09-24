export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-900 focus:shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
    >
      본문으로 건너뛰기
    </a>
  );
}
