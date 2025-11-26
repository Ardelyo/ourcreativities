import React from 'react';
import { motion } from 'framer-motion';
import { Smile, ArrowLeft, Zap, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Relatable Content", category: "Daily Life", image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=2574&auto=format&fit=crop" },
    { title: "Tech Humor", category: "Niche", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop" },
    { title: "Viral Trends", category: "Trending", image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2670&auto=format&fit=crop" },
    { title: "Community Inside Jokes", category: "Meta", image: "https://images.unsplash.com/photo-1516251193000-18e6586ee186?q=80&w=2670&auto=format&fit=crop" },
];

export const Meme = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[#050505]"></div>
                <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-yellow-900/20 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <Link to="/info" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Divisions
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400">
                            <Smile size={32} />
                        </div>
                        <span className="text-yellow-400 font-bold tracking-widest text-sm uppercase">Entertainment Division</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Meme <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">Creator</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        Menyebarkan tawa dan kritik sosial melalui humor visual.
                        Karena terkadang, satu gambar lucu lebih bermakna dari seribu kata serius.
                    </p>
                </motion.div>

                {/* Stats / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {[
                        { icon: Zap, label: "Impact", value: "Viral" },
                        { icon: MessageCircle, label: "Engagement", value: "High" },
                        { icon: Share2, label: "Reach", value: "Global" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-yellow-900/5 border border-yellow-500/10 p-6 rounded-2xl hover:border-yellow-500/30 transition-colors"
                        >
                            <stat.icon className="text-yellow-400 mb-4" size={24} />
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio Grid - Masonry Style */}
                <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-yellow-500/50"></div> Hall of Fame
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-2xl bg-gray-900 ${i === 0 || i === 3 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-yellow-400 text-xs font-bold uppercase mb-1">{project.category}</span>
                                <h3 className="text-white text-lg font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
