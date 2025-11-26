import React from 'react';
import { motion } from 'framer-motion';
import { Type, ArrowLeft, BookOpen, Feather, Quote, PenLine, ScrollText } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Seni dalam Keheningan", category: "Esai", excerpt: "Di tengah kebisingan dunia, diam menjadi sebuah tindakan revolusioner..." },
    { title: "Renaisans Digital", category: "Artikel", excerpt: "Bagaimana teknologi membentuk ulang batasan kreativitas modern..." },
    { title: "Renungan Tengah Malam", category: "Puisi", excerpt: "Bintang-bintang berbaris dalam kekacauan hamparan kota..." },
    { title: "Narasi Masa Depan", category: "Cerpen", excerpt: "Tahun 2089, dan perpustakaan terakhir sedang menutup pintunya..." },
];

export const Writing = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 px-4 bg-[#0a0a0a]">
            {/* Background Ambience - Subtle Grayscale */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[#050505]"></div>
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <Link to="/info" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Kembali ke Divisi
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-white/10 rounded-xl text-white">
                            <Type size={32} />
                        </div>
                        <span className="text-gray-400 font-bold tracking-widest text-sm uppercase">Divisi Editorial</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                        Karya <span className="italic font-light text-gray-400">Tulis</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-serif italic">
                        "Kata-kata adalah senjata yang paling kuat untuk mengubah dunia."
                        Kami merangkai narasi, puisi, dan esai yang menggugah pikiran dan menyentuh jiwa.
                    </p>
                </motion.div>

                {/* Stats / Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {[
                        { icon: Feather, label: "Gaya Bahasa", value: "Elegan" },
                        { icon: BookOpen, label: "Kedalaman Konten", value: "Analitis" },
                        { icon: Quote, label: "Dampak Tulisan", value: "Inspiratif" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group"
                        >
                            <stat.icon className="text-white mb-4 group-hover:-translate-y-1 transition-transform" size={24} />
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Portfolio Grid - Text Focused */}
                <h2 className="text-2xl font-serif text-white mb-8 flex items-center gap-3">
                    <div className="w-8 h-[1px] bg-white/50"></div> Tulisan Terpilih
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 bg-[#111] border border-white/10 rounded-2xl hover:border-white/30 transition-all"
                        >
                            <div className="mb-6">
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-2 block">{project.category}</span>
                                <h3 className="text-3xl font-serif text-white mb-4 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                                <p className="text-gray-400 font-serif italic leading-relaxed">"{project.excerpt}"</p>
                            </div>
                            <div className="flex items-center text-sm text-white/50 group-hover:text-white transition-colors">
                                Baca Selengkapnya <ArrowLeft className="ml-2 rotate-180" size={16} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
