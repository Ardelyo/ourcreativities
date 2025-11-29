import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Tag, ArrowRight, Star, Zap, Layout, Smartphone, Palette, Layers, Box, Image, Share2, Compass, Rocket, Shield, Megaphone, History, Clock, Globe, Cpu, X, ChevronRight } from 'lucide-react';
import { ChangelogTimeline } from '../components/ChangelogTimeline';

// --- Data: Log Perubahan Sistem ---
// --- Data: Log Perubahan Sistem dipindahkan ke data/changelogData.ts ---

// --- Data: Pembaruan Komunitas ---
const events = [
    {
        id: 0,
        title: "OurCreativity v5.0: The Revolution",
        subtitle: "A New Era Begins",
        date: "November 2025",
        category: "Launch",
        status: "Baru",
        color: "from-rose-500 via-purple-500 to-emerald-500",
        description: "Kami dengan bangga mempersembahkan evolusi terbesar platform ini. Jelajahi desain baru, fitur canggih, dan pengalaman yang benar-benar revolusioner.",
        content: "Selamat datang di era baru OurCreativity. Versi 5.0 bukan sekadar pembaruan, melainkan sebuah revolusi dalam cara kita berinteraksi, berkarya, dan berkolaborasi. Dengan desain 'Revolution Edition' yang sepenuhnya baru, kami menghadirkan estetika gelap yang elegan, animasi yang hidup, dan performa yang tak tertandingi. Fitur utama meliputi Creation Studio yang didesain ulang, navigasi Bento Grid yang intuitif, dan integrasi komunitas yang lebih dalam.",
        highlights: ["New UI/UX", "Dark Mode", "Performance Boost"]
    },
    {
        id: 1,
        title: "Pekan Kreativitas Vol. 4",
        subtitle: "Cyberpunk 2077 Edition",
        date: "20-27 Oktober 2025",
        category: "Event",
        status: "Selesai",
        color: "from-yellow-400 to-pink-500",
        description: "Kompetisi tahunan terbesar kembali dengan tema futuristik. Tunjukkan interpretasi visualmu tentang masa depan dystopia yang penuh neon dan teknologi.",
        content: "Pekan Kreativitas kembali hadir! Kali ini kita menyelami dunia Cyberpunk. Kami menantang seluruh kreator—baik grafis, video, maupun penulis—untuk membayangkan masa depan tahun 2077. Apakah itu utopia teknologi atau dystopia neon? Pilihan ada di tanganmu. Pemenang akan mendapatkan badge eksklusif dan fitur spotlight di halaman utama selama satu bulan penuh.",
        highlights: ["Pameran Virtual", "Workshop Digital Art", "Live Coding Session"]
    },
    {
        id: 2,
        title: "Tagwall Community",
        subtitle: "Jejak Digital Anggota",
        date: "September 2025",
        category: "Activity",
        status: "Aktif",
        color: "from-blue-400 to-indigo-500",
        description: "Fitur baru di mana setiap anggota dapat meninggalkan pesan, tanda tangan, atau doodle digital di dinding komunitas kita.",
        content: "Ingin meninggalkan jejakmu? Tagwall Community adalah kanvas digital raksasa milik kita bersama. Tulis pesan semangat, gambar doodle lucu, atau sekadar tinggalkan tanda tanganmu. Ini adalah monumen hidup dari kebersamaan kita. Setiap kontribusi akan tersimpan selamanya dalam sejarah OurCreativity.",
        highlights: ["Interactive Canvas", "Real-time Updates", "Member Badges"]
    },
    {
        id: 3,
        title: "Workshop: Glowar Design",
        subtitle: "Mastering Luminous Depth",
        date: "Agustus 2025",
        category: "Workshop",
        status: "Arsip",
        color: "from-cyan-400 to-teal-500",
        description: "Sesi bedah desain sistem 'Glowar' bersama tim pengembang. Pelajari cara membuat antarmuka yang bercahaya dan imersif.",
        content: "Pelajari rahasia di balik tampilan OurCreativity v4.0. Dalam workshop ini, kita akan membedah filosofi 'Luminous Depth', cara menggunakan gradient mesh untuk menciptakan kedalaman, dan teknik glassmorphism yang tepat. Cocok untuk UI/UX designer yang ingin meningkatkan skill visual mereka.",
        highlights: ["Design Principles", "Figma Assets", "Q&A Session"]
    }
];

export const Announcement = () => {
    const [activeTab, setActiveTab] = useState<'updates' | 'changelog'>('updates');
    const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Bagian Header */}
            <div className="pt-32 pb-12 px-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10"
                >
                    <span className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-4 block">Pusat Informasi</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">What's New?</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
                        Ikuti perkembangan terbaru dari komunitas dan evolusi teknis platform kami.
                    </p>

                    {/* Tab */}
                    <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                        <button
                            onClick={() => setActiveTab('updates')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'updates' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            <Megaphone size={16} /> Papan Pengumuman
                        </button>
                        <button
                            onClick={() => setActiveTab('changelog')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'changelog' ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            <History size={16} /> Riwayat Sistem
                        </button>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'updates' ? (
                    <motion.div
                        key="updates"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="max-w-6xl mx-auto px-4 pb-20"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {events.map((event, i) => (
                                <motion.div
                                    layoutId={`card-${event.id}`}
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-white/30 transition-all ${i === 0 ? 'md:col-span-2' : ''}`}
                                >
                                    {/* Latar Belakang Seni Generatif */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
                                    <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />

                                    <div className="p-8 md:p-10 relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                                                <Calendar size={12} /> {event.date}
                                            </div>
                                            <span className={`text-xs font-bold px-2 py-1 rounded ${event.status === 'Baru' ? 'bg-rose-500/20 text-rose-400 animate-pulse' : event.status === 'Aktif' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-400'}`}>
                                                {event.status}
                                            </span>
                                        </div>

                                        <motion.h3 layoutId={`title-${event.id}`} className={`font-serif text-white mb-2 ${i === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{event.title}</motion.h3>
                                        <p className={`text-transparent bg-clip-text bg-gradient-to-r ${event.color} font-bold text-sm mb-4 uppercase tracking-wider`}>
                                            {event.subtitle}
                                        </p>

                                        <p className={`text-gray-400 mb-8 leading-relaxed ${i === 0 ? 'text-lg max-w-3xl' : ''}`}>
                                            {event.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {event.highlights.map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-300 border border-white/5">
                                                    # {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                            Baca Selengkapnya <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="changelog"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="pb-20"
                    >
                        <ChangelogTimeline />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal Tampilan Artikel */}
            <AnimatePresence>
                {selectedEvent && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedEvent(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[60]"
                        />
                        <motion.div
                            layoutId={`card-${selectedEvent.id}`}
                            className="fixed inset-0 z-[70] overflow-y-auto custom-scrollbar"
                        >
                            <div className="min-h-full flex items-center justify-center p-4 md:p-8">
                                <motion.div
                                    className="w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        onClick={() => setSelectedEvent(null)}
                                        className="absolute top-6 right-6 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors z-20"
                                    >
                                        <X size={20} />
                                    </button>

                                    <div className={`h-64 md:h-80 relative overflow-hidden`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${selectedEvent.color} opacity-20`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-96 h-96 rounded-full bg-gradient-to-r ${selectedEvent.color} blur-[100px] opacity-40 animate-pulse`} />
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                                                    {selectedEvent.category}
                                                </span>
                                                <span className="text-gray-400 text-sm flex items-center gap-1">
                                                    <Calendar size={12} /> {selectedEvent.date}
                                                </span>
                                            </div>
                                            <motion.h2 layoutId={`title-${selectedEvent.id}`} className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                                                {selectedEvent.title}
                                            </motion.h2>
                                        </div>
                                    </div>

                                    <div className="p-8 md:p-12 space-y-8">
                                        <p className="text-xl text-gray-300 leading-relaxed font-serif">
                                            {selectedEvent.description}
                                        </p>

                                        <div className="w-full h-px bg-white/10" />

                                        <div className="prose prose-invert prose-lg max-w-none">
                                            <p className="text-gray-400 leading-relaxed">
                                                {selectedEvent.content}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-3 pt-4">
                                            {selectedEvent.highlights.map((tag, idx) => (
                                                <span key={idx} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-gray-300">
                                                    # {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};
