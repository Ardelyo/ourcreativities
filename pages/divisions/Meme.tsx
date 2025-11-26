import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Smile, ArrowLeft, Zap, MessageCircle, TrendingUp, Laugh } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Konten Relatable", category: "Sehari-hari", image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=2574&auto=format&fit=crop" },
    { title: "Humor Teknologi", category: "Niche", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop" },
    { title: "Tren Viral", category: "Trending", image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2670&auto=format&fit=crop" },
    { title: "Jokes Internal", category: "Meta", image: "https://images.unsplash.com/photo-1516251193000-18e6586ee186?q=80&w=2670&auto=format&fit=crop" },
    { title: "Starter Pack", category: "Format", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=2674&auto=format&fit=crop" },
];

export const Meme = () => {
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
            className="h-screen w-screen overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory bg-yellow-400 text-black scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {/* Fixed Navigation */}
            <div className="fixed top-8 left-8 z-50">
                <Link to="/info" className="inline-flex items-center text-black font-bold hover:text-white transition-colors group bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-black/10">
                    <ArrowLeft size={24} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    KEMBALI
                </Link>
            </div>

            {/* SECTION 1: LOUD INTRO */}
            <section className="min-w-screen w-screen h-screen snap-start flex items-center justify-center shrink-0 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-transparent to-transparent bg-[size:20px_20px]"></div>

                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="relative z-10 text-center"
                >
                    <div className="inline-block bg-black text-yellow-400 px-6 py-2 text-xl font-black uppercase tracking-widest mb-6 -rotate-2">
                        Divisi Hiburan
                    </div>
                    <h1 className="text-[12rem] font-black leading-none tracking-tighter mb-4 drop-shadow-xl">
                        MEME
                    </h1>
                    <h2 className="text-6xl font-black text-white stroke-black stroke-2" style={{ WebkitTextStroke: "2px black" }}>
                        CREATOR
                    </h2>
                </motion.div>

                <div className="absolute bottom-12 right-12 font-bold text-xl animate-pulse">
                    GESER KE KANAN &rarr;
                </div>
            </section>

            {/* SECTION 2: THE FEED (Horizontal Masonry) */}
            <section className="min-w-screen w-auto h-screen snap-start flex items-center px-20 shrink-0 bg-[#111] gap-8">
                <div className="w-80 shrink-0 text-white">
                    <h2 className="text-6xl font-black mb-6 leading-tight">
                        HALL OF <br /><span className="text-yellow-400">FAME</span>
                    </h2>
                    <p className="text-xl font-bold text-gray-500">
                        Koleksi kurasi konten terbaik yang bikin ngakak (atau nangis).
                    </p>
                </div>

                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, rotate: i % 2 === 0 ? -2 : 2 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className={`w-[400px] shrink-0 relative group rounded-3xl overflow-hidden border-4 border-black bg-white ${i % 2 === 0 ? 'h-[60vh] self-start mt-20' : 'h-[60vh] self-end mb-20'}`}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span className="bg-yellow-400 text-black text-xs font-black px-2 py-1 uppercase">{project.category}</span>
                            <h3 className="text-2xl font-black mt-2">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}

                <div className="w-40 shrink-0"></div>
            </section>

            {/* SECTION 3: IMPACT STATS */}
            <section className="min-w-screen w-screen h-screen snap-start flex items-center justify-center shrink-0 bg-yellow-400 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>

                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                        { icon: Zap, label: "Dampak Viral", value: "TINGGI" },
                        { icon: MessageCircle, label: "Interaksi", value: "AKTIF" },
                        { icon: TrendingUp, label: "Relevansi", value: "TERKINI" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-black text-white p-12 rounded-[3rem] text-center border-b-8 border-r-8 border-white/20 hover:translate-y-2 hover:border-0 transition-all"
                        >
                            <stat.icon className="mx-auto mb-6 text-yellow-400" size={48} />
                            <div className="text-5xl font-black mb-2">{stat.value}</div>
                            <div className="text-xl font-bold text-gray-500 uppercase">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};
