import React from 'react';
import { motion } from 'framer-motion';
import { Video, ArrowLeft, Play, Film, Aperture, Music, Clapperboard, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Showreel Sinematik 2024", category: "Showreel", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2670&auto=format&fit=crop" },
    { title: "Cerita Urban: Jakarta", category: "Dokumenter", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2600&auto=format&fit=crop" },
    { title: "Video Musik: Gema", category: "Video Musik", image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2702&auto=format&fit=crop" },
    { title: "Film Pendek: Penantian", category: "Film Pendek", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop" },
];

export const VideoPage = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[#050505]"></div>
                {/* Film Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-orange-900/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <Link to="/info" className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Kembali ke Divisi
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
                            <Video size={32} />
                        </div>
                        <span className="text-orange-400 font-bold tracking-widest text-sm uppercase">Divisi Produksi</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Editing</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        Menangkap esensi momen dan merangkai narasi visual yang menggugah emosi.
                        Dari pemotongan presisi hingga color grading yang dramatis, kami menghidupkan setiap frame.
                    </p>
                </motion.div>

                {/* Stats / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {[
                        { icon: Clapperboard, label: "Visual Storytelling", value: "Sinematik" },
                        { icon: Aperture, label: "Kualitas Visual", value: "4K Ready" },
                        { icon: MonitorPlay, label: "Pasca Produksi", value: "Profesional" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-orange-900/5 border border-orange-500/10 p-6 rounded-2xl hover:border-orange-500/30 transition-colors group"
                        >
                            <stat.icon className="text-orange-400 mb-4 group-hover:scale-110 transition-transform" size={24} />
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-orange-500/50"></div> Produksi Unggulan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video overflow-hidden rounded-2xl bg-gray-900 border border-white/5"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                <div className="w-16 h-16 bg-orange-500/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                                    <Play className="text-white fill-current ml-1" size={24} />
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-orange-400 text-sm font-bold tracking-wider uppercase mb-2">{project.category}</span>
                                <h3 className="text-white text-2xl font-serif">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
