import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Pause, SkipForward, SkipBack, Scissors, Layers, Monitor, HardDrive, Zap, Film, Aperture } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Assets & Data ---
const scenes = [
    {
        id: "intro",
        text: "INITIALIZING...",
        sub: "LOADING ASSETS"
    },
    {
        id: "chaos",
        title: "DIVISI PALING GILA",
        desc: "Kami tidak sekadar mengedit. Kami memanipulasi waktu, emosi, dan realitas.",
        tags: ["CHAOS", "GLITCH", "RENDER"]
    },
    {
        id: "styles",
        title: "MULTI-GENRE",
        items: [
            { label: "CINEMATIC", color: "text-orange-500" },
            { label: "BRUTALISM", color: "text-white" },
            { label: "DOCUMENTARY", color: "text-gray-400" },
            { label: "MEME/SHITPOST", color: "text-red-500" }
        ]
    },
    {
        id: "storage",
        title: "STORAGE FULL",
        desc: "99% DISK USAGE. Project file size: 500GB. But we keep rendering.",
        warning: true
    },
    {
        id: "allinone",
        title: "THE ALL-IN-ONE",
        desc: "Grafis? Bisa. Nulis? Jago. Meme? Makanan sehari-hari. Editor adalah spesies hybrid.",
        icons: [Layers, Monitor, Zap]
    }
];

// --- Components ---

const Timecode = ({ scrollProgress }: { scrollProgress: any }) => {
    const [time, setTime] = useState("00:00:00:00");

    useTransform(scrollProgress, (latest: number) => {
        const totalFrames = Math.floor(latest * 1000);
        const frames = totalFrames % 60;
        const seconds = Math.floor((totalFrames / 60) % 60);
        const minutes = Math.floor((totalFrames / 3600) % 60);
        const hours = Math.floor(totalFrames / 216000);

        const f = frames.toString().padStart(2, '0');
        const s = seconds.toString().padStart(2, '0');
        const m = minutes.toString().padStart(2, '0');
        const h = hours.toString().padStart(2, '0');

        return `${h}:${m}:${s}:${f}`;
    }).on("change", (latest) => setTime(latest));

    return (
        <div className="font-mono text-orange-500 text-xl md:text-2xl tracking-widest font-bold shadow-orange-500/20 drop-shadow-lg">
            {time}
        </div>
    );
};

const GlitchText = ({ text, active }: { text: string, active: boolean }) => {
    return (
        <div className="relative inline-block">
            <span className="relative z-10">{text}</span>
            {active && (
                <>
                    <span className="absolute top-0 left-0 -ml-1 text-red-500 opacity-70 animate-pulse">{text}</span>
                    <span className="absolute top-0 left-0 ml-1 text-blue-500 opacity-70 animate-pulse delay-75">{text}</span>
                </>
            )}
        </div>
    );
};

export const VideoPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Scroll Mappings (Widened ranges for better visibility) ---
    // Scene 1: Intro Fade Out
    const introOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const introScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.2]);

    // Scene 2: Chaos Fade In/Out
    const chaosOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.4, 0.5], [0, 1, 1, 0]);
    const chaosY = useTransform(scrollYProgress, [0.1, 0.5], ["50px", "-50px"]);

    // Scene 3: Styles
    const stylesOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
    const stylesX = useTransform(scrollYProgress, [0.45, 0.75], ["100%", "-100%"]);

    // Scene 4: Storage Warning
    const storageOpacity = useTransform(scrollYProgress, [0.7, 0.75, 0.85, 0.9], [0, 1, 1, 0]);
    const storageScale = useTransform(scrollYProgress, [0.75, 0.85], [0.9, 1.1]);

    // Scene 5: All In One
    const allOpacity = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);

    // Timeline Progress
    const timelineWidth = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="h-[600vh] bg-[#050505] text-white font-sans selection:bg-orange-500 selection:text-black relative">

            {/* --- FIXED UI OVERLAY (The Editor Interface) --- */}
            <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-between p-6 md:p-12">

                {/* Top Bar */}
                <div className="flex justify-between items-start">
                    <div className="pointer-events-auto">
                        <Link to="/info" className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-widest border border-gray-800 px-4 py-2 rounded bg-black/80 backdrop-blur-md">
                            <ArrowLeft size={14} /> Back to Project
                        </Link>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                            <span className="font-mono text-xs text-red-500 tracking-widest">REC</span>
                        </div>
                        <Timecode scrollProgress={scrollYProgress} />
                    </div>
                </div>

                {/* Center Crosshair/Grid (Subtle) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <div className="w-[1px] h-full bg-orange-500"></div>
                    <div className="h-[1px] w-full bg-orange-500 absolute"></div>
                    <div className="border border-orange-500 w-[80%] h-[80%] absolute"></div>
                </div>

                {/* Bottom Timeline UI */}
                <div className="w-full bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-gray-800/50">
                    {/* Controls */}
                    <div className="flex justify-center gap-8 mb-4 text-gray-500">
                        <SkipBack size={20} />
                        <Play size={20} className="text-orange-500 fill-current" />
                        <SkipForward size={20} />
                    </div>

                    {/* Timeline Track */}
                    <div className="relative h-12 bg-[#111] border border-gray-800 rounded overflow-hidden flex items-center">
                        {/* Ruler */}
                        <div className="absolute top-0 left-0 right-0 h-2 flex justify-between px-2 opacity-30">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <div key={i} className={`w-[1px] bg-gray-500 ${i % 5 === 0 ? 'h-2' : 'h-1'}`}></div>
                            ))}
                        </div>

                        {/* Clips (Visual Decoration) */}
                        <div className="flex gap-1 w-full px-4 opacity-60">
                            <div className="h-6 w-1/4 bg-blue-900/50 border border-blue-500/30 rounded"></div>
                            <div className="h-6 w-1/6 bg-green-900/50 border border-green-500/30 rounded"></div>
                            <div className="h-6 w-1/3 bg-orange-900/50 border border-orange-500/30 rounded"></div>
                            <div className="h-6 w-1/4 bg-purple-900/50 border border-purple-500/30 rounded"></div>
                        </div>

                        {/* Playhead */}
                        <motion.div
                            style={{ left: timelineWidth }}
                            className="absolute top-0 bottom-0 w-[2px] bg-orange-500 z-10 shadow-[0_0_15px_rgba(249,115,22,1)]"
                        >
                            <div className="absolute top-0 -translate-x-1/2 -mt-1 text-orange-500 text-[10px]">▼</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- FIXED CONTENT CONTAINER (Replaces Sticky) --- */}
            {/* This container stays fixed in the viewport while the parent 'h-[600vh]' div creates the scrollable area */}
            <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center pointer-events-none z-0">

                {/* SCENE 1: INTRO */}
                <motion.div style={{ opacity: introOpacity, scale: introScale }} className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505] z-40">
                    <Monitor size={64} className="text-orange-500 mb-8 animate-pulse" />
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4 text-center">
                        <GlitchText text="VIDEO EDITING" active={true} />
                    </h1>
                    <p className="font-mono text-orange-500 text-sm tracking-[0.5em] animate-pulse mt-4">SCROLL TO EDIT</p>
                </motion.div>

                {/* SCENE 2: CHAOS */}
                <motion.div style={{ opacity: chaosOpacity, y: chaosY }} className="absolute inset-0 flex flex-col items-center justify-center z-30">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                    <h2 className="text-[12vw] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mix-blend-difference text-center">
                        PALING GILA
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        {scenes[1].tags?.map((tag, i) => (
                            <span key={i} className="bg-orange-500 text-black font-bold px-4 py-1 text-sm md:text-xl transform rotate-[-5deg] hover:rotate-0 transition-transform">
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-12 max-w-xl text-center text-xl md:text-2xl font-mono text-gray-300 bg-black/80 p-6 border border-gray-800 backdrop-blur-sm">
                        "{scenes[1].desc}"
                    </p>
                </motion.div>

                {/* SCENE 3: STYLES (Horizontal Scroll Effect) */}
                <motion.div style={{ opacity: stylesOpacity, x: stylesX }} className="absolute flex items-center gap-20 pl-[50vw] z-20 whitespace-nowrap">
                    {scenes[2].items?.map((item, i) => (
                        <div key={i} className={`text-[15vw] font-black ${item.color} opacity-80 hover:opacity-100 transition-opacity drop-shadow-2xl`}>
                            {item.label}
                        </div>
                    ))}
                </motion.div>

                {/* SCENE 4: STORAGE WARNING */}
                <motion.div style={{ opacity: storageOpacity, scale: storageScale }} className="absolute inset-0 flex items-center justify-center z-30 bg-red-900/10 backdrop-blur-sm">
                    <div className="bg-black border-2 border-red-500 p-12 max-w-2xl w-full text-center shadow-[0_0_100px_rgba(239,68,68,0.4)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-pulse"></div>
                        <HardDrive size={80} className="mx-auto text-red-500 mb-6" />
                        <h2 className="text-6xl font-bold text-red-500 mb-4 tracking-tighter">DISK FULL</h2>
                        <p className="font-mono text-xl text-white mb-8">{scenes[3].desc}</p>
                        <div className="w-full bg-gray-900 h-6 rounded-full overflow-hidden border border-gray-700 relative">
                            <div className="h-full bg-red-500 w-[99%] animate-pulse absolute top-0 left-0"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-black z-10">CRITICAL</div>
                        </div>
                        <p className="text-xs font-mono text-red-400 mt-2 text-right">998GB / 1TB</p>
                    </div>
                </motion.div>

                {/* SCENE 5: ALL IN ONE */}
                <motion.div style={{ opacity: allOpacity }} className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-[#050505] pointer-events-auto">
                    <div className="grid grid-cols-3 gap-8 mb-12">
                        {[Aperture, Film, Scissors].map((Icon, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className="w-24 h-24 md:w-32 md:h-32 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 hover:border-orange-500 hover:bg-orange-900/20 transition-all group shadow-2xl"
                            >
                                <Icon size={40} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold mb-6 text-center">
                        <span className="text-orange-500">ALL</span> IN ONE
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl text-center leading-relaxed px-6 mb-12">
                        {scenes[4].desc}
                    </p>
                    <button className="bg-orange-500 text-black font-bold px-10 py-5 rounded-full hover:bg-white hover:scale-105 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(249,115,22,0.5)]">
                        <Play size={24} fill="currentColor" />
                        START RENDERING
                    </button>
                </motion.div>

            </div>
        </div>
    );
};
