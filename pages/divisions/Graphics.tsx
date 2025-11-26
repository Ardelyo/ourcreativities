import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, ArrowLeft, Layers, Palette, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Brand Identity 2024", category: "Branding", image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" },
    { title: "Neon Dreams", category: "Illustration", image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2670&auto=format&fit=crop" },
    { title: "Social Media Kit", category: "Social Media", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" },
    { title: "Abstract Flow", category: "Art Direction", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" },
];

export const Graphics = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[#050505]"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-900/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <Link to="/info" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Divisions
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                            <PenTool size={32} />
                        </div>
                        <span className="text-purple-400 font-bold tracking-widest text-sm uppercase">Creative Division</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Desain <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Grafis</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        Mengeksplorasi batas visual melalui warna, tipografi, dan komposisi.
                        Kami menciptakan identitas visual yang kuat dan karya seni yang memukau.
                    </p>
                </motion.div>

                {/* Stats / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {[
                        { icon: Palette, label: "Color Theory", value: "Mastery" },
                        { icon: Layers, label: "Composition", value: "Expert" },
                        { icon: ImageIcon, label: "Visual Assets", value: "Unlimited" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-purple-900/5 border border-purple-500/10 p-6 rounded-2xl hover:border-purple-500/30 transition-colors"
                        >
                            <stat.icon className="text-purple-400 mb-4" size={24} />
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-purple-500/50"></div> Featured Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video overflow-hidden rounded-2xl bg-gray-900"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-purple-400 text-sm font-medium mb-2">{project.category}</span>
                                <h3 className="text-white text-2xl font-serif">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
