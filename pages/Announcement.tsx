import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Tag, ArrowRight, Star, Zap, Layout, Smartphone, Palette, Layers, Box, Image, Share2, Compass, Rocket, Shield, Megaphone, History, Clock } from 'lucide-react';

// --- Data: System Changelog ---
const releases = [
    {
        version: "v5.0",
        codename: "Revolution Edition",
        date: "November 2025",
        status: "Current Release",
        color: "from-rose-500 via-purple-500 to-emerald-500",
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
        color: "from-cyan-500 to-blue-500",
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
        color: "from-orange-500 to-red-500",
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
        color: "from-indigo-500 to-purple-500",
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
        color: "from-green-500 to-emerald-500",
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
    },
    {
        version: "v2.0",
        codename: "Internal Beta",
        date: "April 2025",
        status: "Archived",
        color: "from-gray-500 to-slate-500",
        description: "Pengujian internal dengan fitur terbatas untuk core team.",
        features: [],
        changes: [
            "Sistem manajemen anggota internal",
            "Draft awal konten website",
            "Pengujian infrastruktur hosting"
        ]
    },
    {
        version: "v1.0",
        codename: "Alpha Prototype",
        date: "Maret 2025",
        status: "Archived",
        color: "from-gray-600 to-gray-700",
        description: "Prototipe awal untuk validasi konsep.",
        features: [],
        changes: [
            "Basic landing page",
            "Konsep awal branding",
            "Setup repository dan tech stack"
        ]
    },
    {
        version: "v0.5",
        codename: "Inception",
        date: "Februari 2025",
        status: "Archived",
        color: "from-gray-700 to-gray-800",
        description: "Ideasi dan perencanaan awal platform.",
        features: [],
        changes: [
            "Brainstorming konsep",
            "Pemilihan tech stack (React/Vite)",
            "Initial commit"
        ]
    }
];

// --- Data: Community Updates ---
const events = [
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
        <div className="min-h-screen pt-32 pb-20 px-4 max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="text-purple-400 font-bold tracking-widest text-xs uppercase mb-4 block">Pusat Informasi</span>
                <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">What's New?</h1>
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

            <AnimatePresence mode="wait">
                {activeTab === 'updates' ? (
                    <motion.div
                        key="updates"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {events.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

                                <div className="p-8 relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white flex items-center gap-2">
                                            <Calendar size={12} /> {event.date}
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-1 rounded ${event.status === 'Aktif' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-400'}`}>
                                            {event.status}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-serif text-white mb-2">{event.title}</h3>
                                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${event.color} font-bold text-sm mb-4`}>
                                        {event.subtitle}
                                    </p>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
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
                    </motion.div>
                ) : (
                    <motion.div
                        key="changelog"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-24 relative"
                    >
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-white/10 to-transparent -translate-x-1/2 hidden md:block"></div>

                        {releases.map((release, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`relative grid grid-cols-1 md:grid-cols-2 gap-12 ${i % 2 === 0 ? '' : 'md:text-right md:grid-flow-dense'}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#030303] border-2 border-purple-500 -translate-x-1/2 z-10 hidden md:block">
                                    <div className="absolute inset-0 bg-purple-500/50 blur-sm rounded-full"></div>
                                </div>

                                {/* Content Side */}
                                <div className={`${i % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold mb-4 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                        <Tag size={12} />
                                        {release.codename}
                                    </div>

                                    <h2 className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${release.color} mb-4`}>
                                        {release.version}
                                    </h2>

                                    <div className={`flex items-center gap-4 text-gray-400 text-sm mb-6 ${i % 2 === 0 ? '' : 'md:justify-end'}`}>
                                        <span className="flex items-center gap-1"><Clock size={14} /> {release.date}</span>
                                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                        <span className={`${release.status === 'Current Release' ? 'text-emerald-400' : 'text-gray-500'}`}>{release.status}</span>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                        {release.description}
                                    </p>

                                    {release.features.length > 0 && (
                                        <div className="space-y-4">
                                            <h3 className="text-white font-bold flex items-center gap-2">
                                                <Star size={16} className="text-yellow-400" /> Highlight Fitur
                                            </h3>
                                            <div className="grid grid-cols-1 gap-3">
                                                {release.features.map((feat, idx) => (
                                                    <div key={idx} className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors">
                                                        <div className={`flex items-center gap-3 mb-1 ${i % 2 === 0 ? '' : 'md:flex-row-reverse md:justify-end'}`}>
                                                            <feat.icon size={16} className="text-purple-400" />
                                                            <span className="text-white font-bold text-sm">{feat.title}</span>
                                                        </div>
                                                        <p className="text-gray-500 text-xs">{feat.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Changelog Side */}
                                <div className={`${i % 2 === 0 ? 'md:pl-12 md:col-start-2' : 'md:pr-12 md:col-start-1'} relative`}>
                                    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${release.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

                                        <h3 className="text-xl font-serif text-white mb-6 relative z-10">Daftar Perubahan</h3>
                                        <ul className="space-y-4 relative z-10">
                                            {release.changes.map((change, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm group/item">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover/item:bg-purple-400 transition-colors shrink-0"></div>
                                                    <span className="group-hover/item:text-gray-300 transition-colors">{change}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
