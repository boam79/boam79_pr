export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm select-none" aria-hidden="true">
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-50 via-white to-teal-50" />
      <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-8 -right-4 h-48 w-48 rounded-full bg-teal-200/40 blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 240 240"
        fill="none"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 40} x2="240" y2={i * 40} stroke="currentColor" strokeWidth="1" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="240" stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>

      <svg viewBox="0 0 240 240" className="absolute inset-0 h-full w-full p-12">
        <defs>
          <linearGradient id="heroMotifGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>

        <rect x="98" y="36" width="44" height="168" rx="16" fill="url(#heroMotifGradient)" opacity="0.92" />
        <rect x="36" y="98" width="168" height="44" rx="16" fill="url(#heroMotifGradient)" opacity="0.92" />

        <g stroke="url(#heroMotifGradient)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.55">
          <path d="M32 32 L92 92" />
          <path d="M208 32 L148 92" />
          <path d="M32 208 L92 148" />
          <path d="M208 208 L148 148" />
        </g>

        <circle cx="32" cy="32" r="6" fill="#2563eb" />
        <circle cx="208" cy="32" r="6" fill="#0d9488" />
        <circle cx="32" cy="208" r="6" fill="#0d9488" />
        <circle cx="208" cy="208" r="6" fill="#2563eb" />
      </svg>

      <div className="absolute -bottom-6 left-1/2 w-52 -translate-x-1/2 rounded-xl border border-zinc-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:-bottom-8 sm:left-auto sm:right-[-1.25rem] sm:translate-x-0">
        <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">환자 데이터 분석</p>
        <div className="mt-3 flex h-14 items-end gap-1.5">
          {[42, 68, 50, 82, 60, 74].map((height, index) => (
            <div
              key={height + index}
              className={`flex-1 rounded-t-sm ${index % 2 === 0 ? 'bg-blue-500' : 'bg-teal-500'}`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
