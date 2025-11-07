'use client';

import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/lib/constants/routes';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-primary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight tracking-tight drop-shadow-lg">
              Boam79
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 mb-8 drop-shadow-lg">
              Healthcare Facility × Digital Transformation Specialist
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            21년 시설관리 경력과 AI 기술을 융합한 하이브리드 전문가.<br />
            의료기관의 디지털 전환을 선도합니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 min-w-[160px] border border-white/50 shadow-xl">
              <div className="text-4xl font-bold text-gray-900 mb-2">21년</div>
              <div className="text-sm text-gray-600 font-medium">경력</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 min-w-[160px] border border-white/50 shadow-xl">
              <div className="text-4xl font-bold text-gray-900 mb-2">7개</div>
              <div className="text-sm text-gray-600 font-medium">자격증</div>
            </div>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 min-w-[160px] border border-white/50 shadow-xl">
              <div className="text-4xl font-bold text-gray-900 mb-2">AI</div>
              <div className="text-sm text-gray-600 font-medium">TOP 100</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href={routes.experience}>
              <Button size="lg" className="px-8 py-4 text-lg shadow-xl">
                경력 보기
              </Button>
            </Link>
            <Link href={routes.contact}>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg shadow-xl bg-white/90 backdrop-blur-md">
                연락하기
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

