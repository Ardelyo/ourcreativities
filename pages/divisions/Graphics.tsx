import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PenTool, ArrowLeft, Layers, Palette, Image as ImageIcon, Grid, LayoutTemplate, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Festival Musik 2024", category: "Poster Event", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" },
    { title: "Identitas Visual Startup", category: "Branding", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" },
    { title: "Kampanye Lingkungan", category: "Infografis", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" },
    { title: "Pameran Seni Digital", category: "Desain Layout", image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2670&auto=format&fit=crop" },
];

export const Graphics = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Enable horizontal scrolling with mouse wheel
    const handleWheel = (e: React.WheelEvent) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div
            ref={containerRef}
            onWheel={handleWheel}
            className="h-screen w-screen overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory bg-[#050505] scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {/* Fixed Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            {/* Fixed Navigation */}
            <div className="fixed top-8 left-8 z-50">
                <Link to="/info" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-purple-500/20">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Kembali
                </Link>
            </div>

            {/* SECTION 1: HERO */}
            <section className="min-w-screen w-screen h-screen snap-start flex items-center justify-center relative px-20 shrink-0">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                <PenTool size={32} />
                            </div>
                            <span className="text-purple-400 font-bold tracking-widest text-sm uppercase">Divisi Kreatif</span>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-serif text-white mb-8 leading-tight">
                            Desain <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Grafis</span>
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed max-w-md border-l-2 border-purple-500/30 pl-6">
                            Menciptakan harmoni visual dalam setiap piksel. Geser untuk menjelajahi galeri kami.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
                            alt="Abstract Art"
                            className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-700"
                        />
                    </motion.div>
                </div>

                <div className="absolute bottom-12 right-12 animate-bounce text-purple-400/50 flex items-center gap-2">
                    Scroll Horizontal <ArrowLeft className="rotate-180" />
                </div>
            </section>

            {/* SECTION 2: PHILOSOPHY & STATS */}
            <section className="min-w-screen w-screen h-screen snap-start flex items-center justify-center relative px-20 shrink-0 bg-black/20 backdrop-blur-sm">
                <div className="max-w-7xl w-full">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-serif text-white mb-16 text-center"
                    >
                        Filosofi Desain
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: LayoutTemplate, title: "Komposisi", desc: "Keseimbangan elemen visual yang memandu mata audiens." },
                            { icon: Palette, title: "Warna", desc: "Psikologi warna untuk membangun mood dan identitas yang kuat." },
                            { icon: MousePointer2, title: "Interaksi", desc: "Desain yang tidak hanya indah, tapi juga komunikatif." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-[#0f0f0f] border border-white/5 p-10 rounded-3xl hover:border-purple-500/30 transition-all group"
                            >
                                <item.icon className="text-purple-500 mb-6 w-12 h-12 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: PORTFOLIO GALLERY */}
            <section className="min-w-screen w-auto h-screen snap-start flex items-center px-20 shrink-0 gap-12">
                <div className="w-64 shrink-0">
                    <h2 className="text-6xl font-serif text-white leading-tight">
                        Karya <br />
                        <span className="text-purple-400">Terpilih</span>
                    </h2>
                    <div className="w-20 h-1 bg-purple-500 mt-8"></div>
                </div>

                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-[600px] h-[70vh] shrink-0 relative group rounded-3xl overflow-hidden border border-white/10 bg-gray-900"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 flex flex-col justify-end p-10">
                            <span className="text-purple-400 font-bold tracking-widest uppercase mb-2">{project.category}</span>
                            <h3 className="text-4xl font-serif text-white">{project.title}</h3>
                        </div>
                    </motion.div>
                ))}

                <div className="w-40 shrink-0 flex items-center justify-center">
                    <div className="w-1 h-40 bg-white/10 rounded-full"></div>
                </div>
            </section>
        </div>
    );
};
