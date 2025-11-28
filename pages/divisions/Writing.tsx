import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Feather, BookOpen, Quote, PenTool, Send, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const writings = [
    {
        title: "Dialektika Sunyi",
        author: "Sarah A.",
        category: "Esai Filosofis",
        excerpt: "Dalam keheningan, kita menemukan kebisingan pikiran yang paling jujur. Sebuah kritik terhadap modernitas yang menolak jeda.",
        date: "12 Okt 2024"
    },
    {
        title: "Matinya Sang Penulis",
        author: "Rian K.",
        category: "Kritik Sastra",
        excerpt: "Apakah intensi penulis masih relevan ketika teks telah dilepas ke publik? Membedah kembali teori Barthes di era media sosial.",
        date: "08 Nov 2024"
    },
    {
        title: "Kota Tanpa Jendela",
        author: "Dina M.",
        category: "Prosa",
        excerpt: "Mereka membangun dinding-dinding kaca, namun tak ada yang benar-benar melihat ke luar. Sebuah alegori tentang narsisme urban.",
        date: "21 Nov 2024"
    }
];

const chatHistory = [
    {
        user: "Arif (Filsuf)",
        text: "Tapi bukankah kritik itu sendiri adalah bentuk cinta tertinggi? Kita tidak mengkritik apa yang tidak kita pedulikan. Kita membedah karena kita ingin memperbaiki.",
        time: "23:42"
    },
    {
        user: "Bela (Penyair)",
        text: "Setuju. Namun ada garis tipis antara kritik dan sinisme. Kritik membangun jembatan pemahaman baru, sinisme hanya membakar jembatan yang sudah ada. Tulisan kita harus menjadi jembatan itu.",
        time: "23:45"
    },
    {
        user: "Dimas (Esais)",
        text: "Menarik. Jadi, esensi dari 'Karya Tulis' di sini bukan sekadar merangkai kata indah, tapi melatih ketajaman berpikir. Kita adalah filter bagi realitas yang semakin keruh.",
        time: "23:50"
    }
];

const TypewriterEffect = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <span className="font-serif text-4xl md:text-6xl text-gray-900 leading-tight">
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export const Writing = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="min-h-screen bg-[#fdfbf7] text-gray-900 font-serif selection:bg-gray-900 selection:text-white overflow-x-hidden">
            {/* Paper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.4] z-0 mix-blend-multiply"
                style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
                <Link to="/info" className="flex items-center gap-3 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity pointer-events-auto">
                    <ArrowLeft size={18} /> Kembali
                </Link>
                <div className="hidden md:block text-xs tracking-[0.2em] uppercase opacity-70">
                    Est. 2024 • Divisi Editorial
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 z-10">
                <motion.div
                    style={{ opacity, scale }}
                    className="max-w-4xl w-full text-center"
                >
                    <div className="mb-8 flex justify-center">
                        <div className="w-16 h-16 border border-gray-900 rounded-full flex items-center justify-center">
                            <Feather size={32} className="text-gray-900" />
                        </div>
                    </div>

                    <h1 className="mb-6 min-h-[120px]">
                        <TypewriterEffect text="Menulis adalah Tindakan Berpikir." />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="text-xl md:text-2xl text-gray-600 italic max-w-2xl mx-auto leading-relaxed"
                    >
                        "Kami bukan sekadar penulis. Kami adalah pemikir, pengkritik, dan penjaga kewarasan di tengah kebisingan zaman."
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                        className="mt-16 flex flex-col items-center gap-4"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Gulir untuk Membaca</span>
                        <div className="w-[1px] h-24 bg-gradient-to-b from-gray-900 to-transparent"></div>
                    </motion.div>
                </motion.div>
            </header>

            {/* Philosophy Section */}
            <section className="py-32 px-6 relative z-10 bg-white border-y border-gray-100">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-7xl mb-8 leading-none">
                            Kritis.<br />
                            Filosofis.<br />
                            <span className="italic text-gray-400">Mendalam.</span>
                        </h2>
                        <div className="w-20 h-1 bg-gray-900 mb-8"></div>
                        <p className="text-lg text-gray-600 leading-loose mb-6 font-sans">
                            Di sini, tulisan bukan sekadar konten. Tulisan adalah medium untuk membedah realitas. Anggota kami adalah mereka yang tidak puas dengan permukaan. Kami menyelam ke kedalaman makna, mempertanyakan yang mapan, dan merangkai argumen dengan presisi bedah.
                        </p>
                        <p className="text-lg text-gray-600 leading-loose font-sans">
                            Setiap paragraf adalah tesis. Setiap kalimat adalah premis. Kami menulis untuk memahami dunia, dan kadang, untuk mengubahnya.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gray-100 transform rotate-3 rounded-lg -z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop"
                            alt="Writing Philosophy"
                            className="w-full h-auto rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 shadow-xl max-w-xs border border-gray-100 hidden md:block">
                            <Quote size={24} className="text-gray-300 mb-4" />
                            <p className="text-sm italic text-gray-600">
                                "Orang yang tidak bisa menulis, tidak bisa berpikir. Dan orang yang tidak bisa berpikir, akan dikendalikan oleh orang lain."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Chat / Narrative Section */}
            <section className="py-32 px-6 relative z-10 bg-[#fdfbf7]">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <MessageSquare className="mx-auto mb-4 text-gray-400" />
                        <h2 className="text-3xl font-bold mb-4">Ruang Diskusi</h2>
                        <p className="text-gray-500 font-sans">Di mana percakapan sehari-hari berubah menjadi naskah filosofis.</p>
                    </div>

                    <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gray-200 pl-8 md:pl-0 before:hidden md:before:block md:before:left-1/2">
                        {chatHistory.map((chat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="hidden md:block w-1/2"></div>
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-[#fdfbf7] transform -translate-x-[5px] md:-translate-x-1/2 mt-6 z-10"></div>

                                <div className="w-full md:w-1/2">
                                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group">
                                        <div className="absolute -top-3 left-6 bg-gray-900 text-white text-xs px-3 py-1 uppercase tracking-widest">
                                            {chat.user}
                                        </div>
                                        <p className="text-lg leading-relaxed text-gray-700 font-serif italic">
                                            "{chat.text}"
                                        </p>
                                        <div className="mt-4 text-xs text-gray-400 font-sans text-right">
                                            {chat.time}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showcase Section */}
            <section className="py-32 px-6 relative z-10 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-8">
                        <h2 className="text-4xl md:text-6xl font-serif">Antologi</h2>
                        <Link to="#" className="text-sm uppercase tracking-widest hover:text-gray-400 transition-colors flex items-center gap-2">
                            Lihat Semua <ArrowLeft className="rotate-180" size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {writings.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <div className="bg-gray-800 aspect-[3/4] p-8 flex flex-col justify-between relative overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <BookOpen size={100} />
                                    </div>

                                    <div>
                                        <span className="text-xs font-sans uppercase tracking-widest text-gray-400 mb-2 block">{item.category}</span>
                                        <h3 className="text-2xl font-serif leading-tight mb-4 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
                                        <div className="w-8 h-[1px] bg-gray-600 mb-6 group-hover:w-16 transition-all"></div>
                                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                                            {item.excerpt}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-end mt-8">
                                        <div className="flex items-center gap-2 text-xs font-sans text-gray-500">
                                            <PenTool size={12} /> {item.author}
                                        </div>
                                        <span className="text-xs font-sans text-gray-600">{item.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-[#fdfbf7] text-center relative z-10">
                <div className="max-w-2xl mx-auto px-6">
                    <Feather size={48} className="mx-auto mb-8 text-gray-900" />
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">Bergabunglah dalam Diskusi</h2>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                        Jika pikiranmu terlalu berisik untuk disimpan sendiri, tuangkan di sini.
                        Mari berdialektika, mengkritik, dan menulis sejarah baru.
                    </p>
                    <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center gap-3 mx-auto">
                        Mulai Menulis <Send size={16} />
                    </button>
                </div>
            </footer>
        </div>
    );
};
