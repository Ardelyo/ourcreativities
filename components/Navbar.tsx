import React from 'react';
import { Menu, X, Asterisk } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Karya', href: '/karya' },
    { name: 'Tim', href: '/tim' },
    { name: 'Info', href: '/info' },
    { name: 'Pengumuman', href: '/announcement' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl shadow-black/50"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
            <Asterisk size={16} />
          </div>
          <span className="font-serif font-bold text-lg tracking-tight text-white">Our Creativity.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-5 py-2 text-xs font-medium uppercase tracking-wide transition-colors rounded-full ${isActive(link.href)
                  ? 'text-white bg-white/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/info"
            className="hidden sm:block bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Bergabung
          </Link>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-24 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-2xl font-serif py-2 border-b border-white/5 last:border-0 ${isActive(link.href) ? 'text-white pl-2 border-l-2 border-white' : 'text-gray-300 hover:text-white'
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/info"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-white text-black text-center py-4 rounded-xl font-bold mt-4"
          >
            Bergabung Sekarang
          </Link>
        </motion.div>
      )}
    </div>
  );
};