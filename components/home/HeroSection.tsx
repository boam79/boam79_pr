'use client';

import Link from 'next/link';
import { routes } from '@/lib/constants/routes';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-cyan-100">
        <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-blue-300/35 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/65 to-white/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center rounded-full border border-blue-200 bg-white/85 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-blue-700 mb-6 shadow-sm"
          >
            Healthcare Facility × Digital Transformation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
              Boam79
            </h1>
            <h2 className="mb-8 text-2xl font-semibold text-slate-700 md:text-4xl lg:text-5xl">
              현장 경험과 개발 역량을 연결하는
              <span className="block text-blue-700">헬스케어 디지털 전환 전문가</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-700 md:text-2xl"
          >
            21년 시설관리 실무를 기반으로 병원 운영과 IT를 함께 이해합니다.
            <br />
            데이터·AI·웹 기술로 의료기관의 개선을 실행 가능한 결과로 만듭니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
          >
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <div className="mb-1 text-3xl font-extrabold text-slate-900">21년</div>
              <div className="text-sm font-medium text-slate-600">시설관리 경력</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <div className="mb-1 text-3xl font-extrabold text-slate-900">7개</div>
              <div className="text-sm font-medium text-slate-600">자격·면허</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <div className="mb-1 text-3xl font-extrabold text-slate-900">AI TOP100</div>
              <div className="text-sm font-medium text-slate-600">카카오임팩트</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link href={routes.experience}>
              <Button size="lg" className="px-8 py-4 text-lg shadow-lg">
                개발/시설관리 경력 보기
              </Button>
            </Link>
            <Link href={`${routes.contact}#contact-primary`}>
              <Button variant="secondary" size="lg" className="px-8 py-4 text-lg shadow-sm">
                협업 문의 바로가기 <ArrowRight className="ml-2 inline" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

