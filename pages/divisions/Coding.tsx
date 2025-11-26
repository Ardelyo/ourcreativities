import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowLeft, Code, Cpu, Globe, Database, Lock, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Proyek: NEBULA", category: "Web App", status: "Deployed", desc: "Platform komunitas next-gen dengan React & Node.js" },
    { title: "CyberGuard", category: "Keamanan", status: "Aktif", desc: "Scanner kerentanan otomatis untuk jaringan lokal" },
    { title: "AlgoVisualizer", category: "Edukasi", status: "Beta", desc: "Visualisasi algoritma sorting interaktif" },
    { title: "Bot: Sentinel", category: "Otomasi", status: "Online", desc: "Bot moderasi Discord dengan kapabilitas AI" },
];

export const Coding = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4 font-mono">
            {/* Background Ambience - Matrix Style */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="absolute top-[-20%] right-[20%] w-[800px] h-[800px] bg-green-900/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <Link to="/info" className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm">cd ..</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-16 border-l-2 border-green-500/50 pl-6"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-500/10 rounded-sm text-green-500">
                            <Terminal size={32} />
                        </div>
                        <span className="text-green-500 font-bold tracking-widest text-sm uppercase">./divisions/coding</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                        Software <span className="text-green-500">Engineering</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        <span className="text-green-500 mr-2">$</span>
                        Membangun infrastruktur digital masa depan. Kami mengubah kopi menjadi kode dan ide menjadi realitas fungsional.
                    </p>
                </motion.div>

                {/* Stats / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {[
                        { icon: Code, label: "Bahasa", value: "Polyglot" },
                        { icon: Cpu, label: "Performa", value: "Optimal" },
                        { icon: Globe, label: "Skala", value: "Global" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0a0a0a] border border-green-500/20 p-6 rounded-sm hover:bg-green-500/5 transition-colors group"
                        >
                            <stat.icon className="text-green-500 mb-4 group-hover:animate-pulse" size={24} />
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio Grid - Terminal Style */}
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="text-green-500">root@portfolio:~/projects#</span> ls -la
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-6 bg-[#050505] border border-green-500/20 hover:border-green-500/50 transition-all rounded-sm"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-xs font-bold text-green-500 mb-1 block">[{project.category}]</span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{project.title}</h3>
                                </div>
                                <span className="px-2 py-1 text-xs border border-green-500/30 text-green-500/80 rounded-sm">
                                    {project.status}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mb-6 border-l border-gray-800 pl-3">
                                {project.desc}
                            </p>
                            <div className="flex items-center text-sm text-gray-500 group-hover:text-green-500 transition-colors">
                                <span className="mr-2">&gt;</span> Lihat Source Code
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
