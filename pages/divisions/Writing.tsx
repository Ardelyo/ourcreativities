import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Type, ArrowLeft, BookOpen, Feather, Quote, PenLine } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    { title: "Seni dalam Keheningan", category: "Esai", excerpt: "Di tengah kebisingan dunia, diam menjadi sebuah tindakan revolusioner..." },
    { title: "Renaisans Digital", category: "Artikel", excerpt: "Bagaimana teknologi membentuk ulang batasan kreativitas modern..." },
    { title: "Renungan Tengah Malam", category: "Puisi", excerpt: "Bintang-bintang berbaris dalam kekacauan hamparan kota..." },
    { title: "Narasi Masa Depan", category: "Cerpen", excerpt: "Tahun 2089, dan perpustakaan terakhir sedang menutup pintunya..." },
];

export const Writing = () => {
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
            className="h-screen w-screen overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory bg-[#e5e5e5] text-black scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {/* Fixed Background Ambience - Paper Texture */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            </div>

            {/* Fixed Navigation */}
            <div className="fixed top-8 left-8 z-50">
                <Link to="/info" className="inline-flex items-center text-black hover:text-gray-600 transition-colors group px-4 py-2">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Kembali
                </Link>
            </div>

            {/* SECTION 1: BOOK COVER / TITLE */}
            <section className="min-w-screen w-screen h-screen snap-start flex items-center justify-center shrink-0 relative bg-[#f0f0f0]">
                <div className="max-w-4xl w-full text-center px-12 border-y-2 border-black py-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-8">
                            <Feather size={48} className="text-black" />
                        </div>
                        <h1 className="text-7xl md:text-9xl font-serif text-black mb-6 tracking-tight">
                            Karya Tulis
                        </h1>
                        <p className="text-xl font-serif italic text-gray-600 max-w-xl mx-auto">
                            "Kata-kata adalah senjata yang paling kuat untuk mengubah dunia."
                        </p>
                        <div className="mt-12 text-sm font-bold tracking-widest uppercase">
                            Divisi Editorial • Edisi 2024
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: CHAPTERS (WORKS) */}
            <section className="min-w-screen w-auto h-screen snap-start flex items-center px-20 shrink-0 bg-[#e5e5e5] gap-20">
                <div className="w-96 shrink-0 border-r border-black/10 h-3/4 flex flex-col justify-center pr-12">
                    <h2 className="text-5xl font-serif mb-8">Daftar Isi</h2>
                    <p className="font-serif text-gray-600 leading-relaxed text-lg">
                        Sebuah koleksi narasi, puisi, dan esai yang menggugah pikiran.
                        Setiap tulisan adalah jendela menuju perspektif baru.
                    </p>
                </div>

                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="w-[500px] h-[70vh] shrink-0 bg-white shadow-xl p-12 flex flex-col justify-between relative group hover:-translate-y-4 transition-transform duration-500"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <div>
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">{project.category}</span>
                            <h3 className="text-4xl font-serif text-black mb-8 leading-tight group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                            <div className="w-12 h-[1px] bg-black mb-8"></div>
                            <p className="font-serif text-xl text-gray-600 italic leading-relaxed">
                                "{project.excerpt}"
                            </p>
                        </div>

                        <div className="flex justify-between items-end">
                            <span className="text-6xl font-serif text-black/5 font-bold">{i + 1}</span>
                            <button className="text-sm font-bold uppercase tracking-widest hover:text-gray-600 transition-colors flex items-center gap-2">
                                Baca <ArrowLeft className="rotate-180" size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))}

                <div className="w-40 shrink-0"></div>
            </section>

            {/* SECTION 3: EPILOGUE (STATS) */}
            <section className="min-w-screen w-screen h-screen snap-start flex items-center justify-center shrink-0 bg-[#1a1a1a] text-white">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {[
                        { icon: Feather, label: "Gaya Bahasa", value: "Elegan" },
                        { icon: BookOpen, label: "Kedalaman", value: "Analitis" },
                        { icon: Quote, label: "Dampak", value: "Inspiratif" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 border border-white/10 rounded-full aspect-square flex flex-col items-center justify-center hover:bg-white/5 transition-colors"
                        >
                            <stat.icon className="mb-4 text-gray-400" size={32} />
                            <div className="text-3xl font-serif font-bold mb-2">{stat.value}</div>
                            <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};
