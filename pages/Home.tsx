import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { BentoGrid } from '../components/BentoGrid';
import { BottomCTA } from '../components/BottomCTA';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeInOut" } }
};

export const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-20"
    >
      <Hero />

      {/* Announcement Banner */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <a href="/announcement" className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-rose-900/20 via-purple-900/20 to-emerald-900/20 border border-white/10 p-1 hover:border-white/20 transition-all">
          <div className="relative bg-[#050505] rounded-xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-r from-rose-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">NEW</span>
              <div>
                <h3 className="text-white font-bold text-sm md:text-base">OurCreativity v5.0: Revolution Edition</h3>
                <p className="text-gray-400 text-xs hidden md:block">Lihat apa yang baru di pembaruan terbesar kami tahun ini.</p>
              </div>
            </div>
            <div className="text-purple-400 text-sm font-bold group-hover:translate-x-1 transition-transform">
              Baca Catatan Rilis &rarr;
            </div>
          </div>
        </a>
      </div>

      <div className="mt-12 md:mt-24">
        <BentoGrid />
      </div>
      <div className="mt-32 md:mt-48">
        <BottomCTA />
      </div>
    </motion.div>
  );
};