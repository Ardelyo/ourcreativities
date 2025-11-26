import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Tag, ArrowRight, Star, Zap, Layout, Smartphone, Palette, Layers, Box, Image, Share2, Compass, Rocket, Shield, Megaphone, History, Clock, Globe, Cpu } from 'lucide-react';

// --- Data: System Changelog ---
const releases = [
    {
        version: "v5.0",
        codename: "Revolution Edition",
        date: "November 2025",
        status: "Current Release",
        bg: "bg-[#050505]",
        accent: "text-rose-500",
        gradient: "from-rose-500 via-purple-500 to-emerald-500",
        description: "Redesign total platform dengan fokus pada estetika modern, interaksi tingkat lanjut, dan pengalaman pengguna premium.",
        features: [
            { icon: Sparkles, title: "Visual Revolution", desc: "Gaya editorial bercahaya dengan mode gelap sebagai default." },
            { icon: Zap, title: "Performance First", desc: "Optimasi core web vitals dan loading speed." },
            { icon: Layout, title: "Community Hub", desc: "Integrasi lebih dalam dengan aktivitas komunitas." }
        ],
        changes: [
            "Redesign Hero section dengan efek gradient glow",
            "Implementasi Bento Grid untuk navigasi utama",
            "Peningkatan tipografi dengan font serif modern",
            "Sistem animasi fluid menggunakan Framer Motion",
            "Mode gelap permanen untuk identitas visual yang kuat"
        ]
    },
    {
        version: "v4.0",
        codename: "Glowar Design System",
        date: "Agustus 2025",
        status: "Legacy",
        bg: "bg-[#080a0f]",
        accent: "text-cyan-400",
        gradient: "from-cyan-500 to-blue-600",
        description: "Pengenalan bahasa desain 'Glowar' yang berbasis pada kedalaman luminous dan interaksi cahaya.",
        features: [
            { icon: Palette, title: "Luminous Depth", desc: "Filosofi desain berbasis cahaya dalam kegelapan." },
            { icon: Layers, title: "Glassmorphism", desc: "Penggunaan layer kaca untuk hierarki visual." },
            { icon: Box, title: "Soft Geometry", desc: "Sudut membulat dan ritme visual yang konsisten." }
        ],
        changes: [
            "Implementasi 5 Pilar Glowar Design",
            "Background 'Deep Charcoal' menggantikan Pure Black",
            "Penggunaan 'Aurora Gradients' pada elemen kunci",
            "Transisi animasi berbasis GSAP feel",
            "Standardisasi border-radius dan spacing"
        ]
    },
    {
        version: "v3.7",
        codename: "Karya Integration",
        date: "Juli 2025",
        status: "Legacy",
        bg: "bg-[#0f0505]",
        accent: "text-orange-400",
        gradient: "from-orange-500 to-red-600",
        description: "Memperkenalkan fitur 'Karya' sebagai pusat showcase kreativitas anggota.",
        features: [
            { icon: Image, title: "Galeri Karya", desc: "Showcase visual untuk berbagai divisi." },
            { icon: Share2, title: "Social Sharing", desc: "Kemudahan membagikan karya ke media sosial." }
        ],
        changes: [
            "Peluncuran halaman Karya",
            "Sistem filter berdasarkan divisi",
            "Modal detail karya dengan metadata",
            "Integrasi awal dengan submission system"
        ]
    },
    {
        version: "v3.5",
        codename: "Creative Constellations",
        date: "Juni 2025",
        status: "Legacy",
        bg: "bg-[#0a0510]",
        accent: "text-indigo-400",
        gradient: "from-indigo-500 to-purple-600",
        description: "Menghadirkan pengalaman yang lebih segar, modern, dan intuitif untuk mendukung kreativitas.",
        features: [
            { icon: Star, title: "Fresh UI", desc: "Tampilan yang lebih bersih dan terorganisir." },
            { icon: Compass, title: "Intuitive Nav", desc: "Navigasi yang disederhanakan." }
        ],
        changes: [
            "Redesign navigasi utama",
            "Peningkatan responsivitas mobile",
            "Pembaruan palet warna 'Constellation'",
            "Optimasi aset gambar"
        ]
    },
    {
        version: "v3.0",
        codename: "The Launch",
        date: "Mei 2025",
        status: "Legacy",
        bg: "bg-[#051005]",
        accent: "text-emerald-400",
        gradient: "from-emerald-500 to-green-600",
        description: "Peluncuran publik pertama platform OurCreativity.",
        features: [
            { icon: Rocket, title: "Public Release", desc: "Akses terbuka untuk seluruh anggota." },
            { icon: Shield, title: "Stable Core", desc: "Fondasi teknis yang stabil." }
        ],
        changes: [
            "Rilis publik v1.0",
            "Halaman Profil Tim",
            "Halaman Info & FAQ",
            "Formulir pendaftaran anggota"
        ]
    }
];

// --- Data: Community Updates ---
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
        highlights: ["Design Principles", "Figma Assets", "Q&A Session"]
    }
];

export const Announcement = () => {
    const [activeTab, setActiveTab] = useState<'updates' | 'changelog'>('updates');

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header Section */}
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

                    {/* Tabs */}
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
                                    key={event.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all ${i === 0 ? 'md:col-span-2' : ''}`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

                                    <div className="p-8 md:p-10 relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                                                <Calendar size={12} /> {event.date}
                                            </div>
                                            <span className={`text-xs font-bold px-2 py-1 rounded ${event.status === 'Baru' ? 'bg-rose-500/20 text-rose-400 animate-pulse' : event.status === 'Aktif' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-400'}`}>
                                                {event.status}
                                            </span>
                                        </div>

                                        <h3 className={`font-serif text-white mb-2 ${i === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>{event.title}</h3>
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
                        {releases.map((release, i) => (
                            <section key={i} className={`relative py-24 overflow-hidden ${release.bg}`}>
                                {/* Abstract Background Elements */}
                                <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${release.gradient} opacity-5 blur-[150px] rounded-full pointer-events-none`} />

                                <div className="max-w-6xl mx-auto px-4 relative z-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                                        {/* Version Info (Left) */}
                                        <div className="lg:col-span-4 sticky top-32">
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold mb-6 ${release.accent}`}>
                                                    <Tag size={12} />
                                                    {release.codename}
                                                </div>
                                                <h2 className={`text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br ${release.gradient}`}>
                                                    {release.version}
                                                </h2>
                                                <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
                                                    <span className="flex items-center gap-1"><Clock size={14} /> {release.date}</span>
                                                </div>
                                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                                    {release.description}
                                                </p>

                                                {/* Changelog List */}
                                                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                                                    <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider opacity-70">Changes</h3>
                                                    <ul className="space-y-3">
                                                        {release.changes.map((change, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${release.gradient} shrink-0`} />
                                                                <span>{change}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Visual Features (Right) */}
                                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {release.features.map((feat, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className={`group relative bg-[#111] border border-white/5 p-8 rounded-3xl overflow-hidden hover:border-white/20 transition-all ${idx === 0 ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'}`}
                                                >
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${release.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                                    <div className="relative z-10 h-full flex flex-col justify-between">
                                                        <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${release.accent}`}>
                                                            <feat.icon size={24} />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white mb-2">{feat.title}</h3>
                                                            <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}

                                            {/* Decorative Abstract Box */}
                                            {release.features.length < 3 && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    className="relative bg-[#111] border border-white/5 rounded-3xl overflow-hidden aspect-square flex items-center justify-center"
                                                >
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${release.gradient} opacity-10`} />
                                                    <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${release.gradient} blur-[60px] animate-pulse`} />
                                                </motion.div>
                                            )}
                                        </div>

                                    </div>
                                </div>
                            </section>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
