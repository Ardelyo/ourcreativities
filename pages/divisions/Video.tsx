import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Video, ArrowLeft, Play, Film, Aperture, Clapperboard, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Showreel Sinematik 2024", category: "Showreel", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2670&auto=format&fit=crop" },
    { title: "Cerita Urban: Jakarta", category: "Dokumenter", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2600&auto=format&fit=crop" },
    { title: "Video Musik: Gema", category: "Video Musik", image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2702&auto=format&fit=crop" },
    { title: "Film Pendek: Penantian", category: "Film Pendek", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop" },
];

export const VideoPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleWheel = (e: React.WheelEvent) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div
            ref={containerRef}
            onWheel={handleWheel}
            className="h-screen w-screen overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory bg-black scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {/* Fixed Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-orange-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* Fixed Navigation */}
            <div className="fixed top-8 left-8 z-50">
                <Link to="/info" className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-orange-500/20">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Kembali
                </Link>
            </div>

            {/* SECTION 1: CINEMATIC INTRO */}
            <section className="min-w-screen w-screen h-screen snap-start flex items-center justify-center relative shrink-0">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2670&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-30"
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl w-full px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <Film className="text-orange-500" size={40} />
                            <span className="text-orange-500 tracking-[0.5em] text-sm uppercase font-bold">Production</span>
                        </div>
                        <h1 className="text-8xl md:text-[10rem] font-serif text-white leading-none mb-8">
                            CINEMA
                        </h1>
                        <p className="text-2xl text-gray-400 max-w-2xl font-light border-l-4 border-orange-500 pl-8 py-2">
                            Menangkap esensi momen dan merangkai narasi visual yang menggugah emosi.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: THE FILM STRIP */}
            <section className="min-w-screen w-auto h-screen snap-start flex items-center px-20 shrink-0 bg-[#050505] relative">
                {/* Film Strip Holes Decoration */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-black flex justify-between px-4 items-center border-b border-white/10 z-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="w-6 h-8 bg-white/10 rounded-sm"></div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-black flex justify-between px-4 items-center border-t border-white/10 z-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="w-6 h-8 bg-white/10 rounded-sm"></div>
                    ))}
                </div>

                <div className="flex gap-0 h-[60vh] items-center">
                    <div className="w-96 shrink-0 px-12">
                        <h2 className="text-5xl font-serif text-white mb-6">Produksi <br /><span className="text-orange-500">Terbaru</span></h2>
                        <p className="text-gray-500">Geser untuk melihat reel kami.</p>
                    </div>

                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="w-[500px] h-full shrink-0 relative group border-r-8 border-black overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-orange-500/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <Play className="text-white fill-current ml-1" size={32} />
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mt-2">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 3: CREDITS / STATS */}
            <section className="min-w-screen w-screen h-screen snap-start flex items-center justify-center shrink-0 bg-[#080808]">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: Clapperboard, label: "Visual Storytelling", value: "Sinematik" },
                        { icon: Aperture, label: "Kualitas Visual", value: "4K Ready" },
                        { icon: MonitorPlay, label: "Pasca Produksi", value: "Profesional" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-24 h-24 rounded-full border border-orange-500/20 flex items-center justify-center mb-8 bg-orange-900/5">
                                <stat.icon className="text-orange-500" size={40} />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-gray-500 uppercase tracking-widest text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};
