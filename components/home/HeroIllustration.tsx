import { Activity, Building2 } from 'lucide-react';

export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm select-none" aria-hidden="true">
      <div className="absolute -left-10 -top-6 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="absolute -bottom-10 -right-8 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl" />

      <div className="absolute right-4 top-6 flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/90 px-3 py-1.5 text-[11px] font-medium text-zinc-600 shadow-sm backdrop-blur">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-500" />
        </span>
        실시간 연동
      </div>

      <div className="absolute left-1/2 top-16 w-[80%] -translate-x-1/2 -rotate-2 rounded-2xl border border-zinc-200/80 bg-white/90 p-5 shadow-md backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">운영 데이터 추이</p>
          <span className="text-[11px] font-semibold text-blue-600">+18%</span>
        </div>
        <svg viewBox="0 0 200 64" className="mt-3 h-16 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroAreaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroLineStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
          </defs>
          <path
            d="M0 46 L28 38 L56 42 L84 22 L112 28 L140 12 L168 18 L200 8 V64 H0 Z"
            fill="url(#heroAreaFill)"
          />
          <path
            d="M0 46 L28 38 L56 42 L84 22 L112 28 L140 12 L168 18 L200 8"
            fill="none"
            stroke="url(#heroLineStroke)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-8 left-1/2 w-[72%] -translate-x-1/2 translate-y-2 rotate-1 rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl sm:bottom-4 sm:left-auto sm:right-0 sm:translate-x-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                <Activity className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="text-xs font-medium text-zinc-700">환자 데이터 분석</span>
            </div>
            <span className="text-xs font-semibold tabular-nums text-blue-600">+18%</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-600">
                <Building2 className="h-3.5 w-3.5" aria-hidden />
              </span>
              <span className="text-xs font-medium text-zinc-700">시설 가동률</span>
            </div>
            <span className="text-xs font-semibold tabular-nums text-teal-600">99.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
