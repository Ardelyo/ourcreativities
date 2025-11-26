import React, { useState, useEffect, useRef } from 'react';
import { MemoryRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Karya } from './pages/Karya';
import { Tim } from './pages/Tim';
import { Info } from './pages/Info';
import { Story } from './pages/Story';
import { Announcement } from './pages/Announcement';
import { Graphics } from './pages/divisions/Graphics';
import { VideoPage } from './pages/divisions/Video';
import { Writing } from './pages/divisions/Writing';
import { Meme } from './pages/divisions/Meme';
import { Coding } from './pages/divisions/Coding';

// Wrapper component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animated Routes Wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname} className="w-full">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/karya" element={<Karya />} />
          <Route path="/tim" element={<Tim />} />
          <Route path="/info" element={<Info />} />
          <Route path="/story" element={<Story />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/division/graphics" element={<Graphics />} />
          <Route path="/division/video" element={<VideoPage />} />
          <Route path="/division/writing" element={<Writing />} />
          <Route path="/division/meme" element={<Meme />} />
          <Route path="/division/coding" element={<Coding />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#030303] text-white selection:bg-rose-500/30 font-sans overflow-x-hidden flex flex-col relative">

        {/* Background Ambience - Luminous Editorial Style */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

          {/* Main Glows - More diffused and elegant */}
          <div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-rose-900/10 blur-[150px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[20%] w-[900px] h-[900px] bg-[#0a0a0a] blur-[100px] rounded-full" />

          {/* Accent Spots */}
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-emerald-900/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}