import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Crosshair, Grid, Maximize2, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "NEON GENESIS",
        category: "Event Branding",
        year: "2024",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
    },
    {
        title: "VOID IDENTITY",
        category: "Visual System",
        year: "2024",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "ECO DYSSTOPIA",
        category: "Campaign",
        year: "2023",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "CYBER GALLERY",
        category: "Web Layout",
        year: "2023",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2670&auto=format&fit=crop"
    },
];

const Noise = () => (
    <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
    </div>
);

const Marquee = ({ text, direction = 1 }: { text: string, direction?: number }) => {
    return (
        <div className="flex overflow-hidden whitespace-nowrap border-y border-purple-900/30 bg-purple-900/5 py-4">
            <motion.div
                className="flex gap-8 text-4xl md:text-6xl font-black uppercase tracking-tighter text-purple-500/20"
                animate={{ x: direction > 0 ? [0, -1000] : [-1000, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="flex items-center gap-8">
                        {text} <span className="text-purple-500/40">★</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export const Graphics = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500 selection:text-black overflow-x-hidden">
            <Noise />

            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
                <div className="flex justify-between items-center px-6 py-4">
                    <Link to="/info" className="flex items-center gap-2 text-sm font-mono hover:text-purple-400 transition-colors">
                        <ArrowLeft size={16} /> BACK_TO_BASE
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-xs font-mono text-gray-500">
                        <span>COORDS: 00.00.00</span>
                        <span>SYS: ONLINE</span>
                        <span className="text-purple-500 animate-pulse">● REC</span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col pt-20 border-x border-white/5 max-w-[1600px] mx-auto">
                <div className="flex-1 flex flex-col justify-center px-6 md:px-12 relative">
                    {/* Decorative Grid Lines */}
                    <div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-20">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="border-r border-purple-500/30 h-full"></div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="relative z-10"
                    >
                        <div className="flex items-start justify-between mb-4 border-b border-purple-500/30 pb-4">
                            <span className="font-mono text-purple-400 text-sm">[ DIV_01: GRAPHICS ]</span>
                            <Maximize2 className="text-purple-500" size={24} />
                        </div>

                        <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mix-blend-difference">
                            Visual <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-400 to-white">Anarchy</span>
                        </h1>

                        <div className="mt-12 flex flex-col md:flex-row gap-12 items-start md:items-end justify-between">
                            <p className="max-w-xl text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                                We break the grid to build new realities.
                                <span className="text-purple-400 font-bold"> Brutal aesthetics</span> for the digital age.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-32 h-32 border border-purple-500/30 rounded-full flex items-center justify-center animate-spin-slow">
                                    <Crosshair className="text-purple-500" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <Marquee text="DESIGN IS CHAOS CONTROLLED" />
            </header>

            {/* Manifesto Section */}
            <section className="border-x border-white/5 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="p-12 border-b md:border-b-0 md:border-r border-white/10 bg-purple-900/5">
                    <h2 className="text-4xl font-black uppercase mb-8 flex items-center gap-4">
                        <Grid className="text-purple-500" />
                        Our Manifesto
                    </h2>
                    <ul className="space-y-6 font-mono text-sm md:text-base text-gray-300">
                        {[
                            "01. FUNCTION OVER FORM, ALWAYS.",
                            "02. RAW IS BETTER THAN POLISHED.",
                            "03. MAKE IT BIG. MAKE IT LOUD.",
                            "04. PURPLE IS THE NEW BLACK."
                        ].map((item, i) => (
                            <li key={i} className="border-l-2 border-purple-500 pl-4 py-2 hover:bg-purple-500/10 transition-colors cursor-default">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-12 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <p className="text-center text-6xl font-black text-white/10 rotate-12 scale-150">
                        NO<br />MORE<br />BORING<br />DESIGN
                    </p>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="py-20 border-x border-white/5 max-w-[1600px] mx-auto px-6">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
                        Selected <span className="text-purple-500">Works</span>
                    </h2>
                    <span className="font-mono text-gray-500 hidden md:block">SCROLL_DOWN_FOR_MORE</span>
                </div>

                <div className="grid grid-cols-1 gap-y-24">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative"
                        >
                            {/* Project Header */}
                            <div className="flex items-center justify-between border-b-2 border-white/20 pb-4 mb-4 group-hover:border-purple-500 transition-colors">
                                <span className="text-4xl md:text-6xl font-bold uppercase group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </span>
                                <span className="font-mono text-xl text-gray-500">{project.year}</span>
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden bg-gray-900">
                                <div className="absolute inset-0 bg-purple-900/20 z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                />

                                {/* Overlay Info */}
                                <div className="absolute bottom-0 left-0 p-6 z-20 bg-black/80 backdrop-blur-sm border-t border-r border-purple-500/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="font-mono text-purple-400 text-sm uppercase mb-1">CATEGORY</p>
                                    <p className="text-xl font-bold">{project.category}</p>
                                </div>

                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-purple-500 text-black p-3 rounded-full">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer CTA */}
            <footer className="border-t border-white/10 bg-[#0a0a0a] py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/5"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-8">
                        Ready to break <br /> the <span className="text-purple-500 underline decoration-4 underline-offset-8">rules?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join the Graphics Division. We don't just design; we define the visual language of tomorrow.
                    </p>
                    <button className="group relative px-8 py-4 bg-transparent overflow-hidden border-2 border-purple-500 text-purple-500 font-bold uppercase tracking-widest hover:text-black transition-colors">
                        <div className="absolute inset-0 w-full h-full bg-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            Initialize Protocol <Plus size={20} />
                        </span>
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full border-t border-white/5 py-4 px-6 flex justify-between items-center font-mono text-xs text-gray-600">
                    <span>© 2024 OURCREATIVITIES</span>
                    <span>SYSTEM_STATUS: STABLE</span>
                </div>
            </footer>
        </div>
    );
};
