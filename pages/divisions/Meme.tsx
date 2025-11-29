import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Meme = () => {
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-[#000080] text-white font-serif overflow-x-hidden selection:bg-red-500 selection:text-yellow-300">
            {/* MARQUEE WARNING */}
            <div className="bg-red-600 text-yellow-300 border-b-4 border-white p-2 overflow-hidden whitespace-nowrap font-mono text-xl font-bold">
                <motion.div
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                >
                    AWAS!!! ZONA BERBAHAYA!!! JANGAN DIKLIK!!! KONTEN MENGANDUNG UNSUR KEBODOHAN DAN DRAMA BERLEBIHAN!!! --- DIVISI MEME & DRAMA ---
                </motion.div>
            </div>

            {/* NAVIGATION BAR (WIN95 STYLE) */}
            <div className="bg-[#c0c0c0] p-2 border-b-4 border-white border-r-black border-b-black text-black flex justify-between items-center">
                <div className="font-bold font-mono">MS_MEME.EXE</div>
                <div className="flex gap-2">
                    <Link to="/" className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-black px-4 py-1 active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold hover:bg-[#dcdcdc]">
                        [ X ] KELUAR
                    </Link>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="container mx-auto p-4 md:p-8 max-w-5xl">

                {/* HEADER */}
                <div className="text-center mb-12 border-4 border-dashed border-yellow-400 p-8 bg-black">
                    <motion.h1
                        className="text-6xl md:text-9xl font-black text-red-600 font-[Comic_Sans_MS]"
                        animate={{
                            scale: [1, 1.02, 0.98, 1],
                            rotate: [0, 1, -1, 0]
                        }}
                        transition={{ repeat: Infinity, duration: 0.2 }}
                        style={{ textShadow: "4px 4px 0px yellow" }}
                    >
                        DIVISI<br />MEME
                    </motion.h1>
                    <h2 className={`text-2xl md:text-4xl mt-4 text-green-400 font-mono ${blink ? 'opacity-100' : 'opacity-0'}`}>
                        &lt; TEMPATNYA ORANG GILA /&gt;
                    </h2>
                </div>

                {/* DRAMA LOG (MOSTCHREAL) */}
                <div className="bg-white text-black border-8 border-double border-blue-600 p-6 mb-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-4xl font-bold mb-4 bg-blue-600 text-white inline-block px-4 transform -rotate-2">
                        LOG DRAMA HARIAN
                    </h3>
                    <div className="font-mono text-lg space-y-4">
                        <div className="border-b-2 border-black pb-2">
                            <span className="bg-red-500 text-white px-2">STATUS: KRITIS</span>
                            <p className="mt-2">
                                <strong>KASUS #1: MOSTCHREAL</strong><br />
                                "Katanya sih mau revisi, tapi malah bikin drama baru. Siapa yang salah? Jelas bukan saya."
                            </p>
                        </div>
                        <div className="border-b-2 border-black pb-2">
                            <span className="bg-yellow-400 text-black px-2">STATUS: WASPADA</span>
                            <p className="mt-2">
                                <strong>KASUS #2: DEADLINE HILANG</strong><br />
                                "File project korup atau emang belum dikerjain? Hanya Tuhan dan Admin yang tahu."
                            </p>
                        </div>
                    </div>
                </div>

                {/* GALLERY GRID (BROKEN TABLE) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-[#c0c0c0] p-1 border-t-4 border-l-4 border-white border-b-4 border-r-4 border-black">
                        <div className="bg-blue-800 text-white px-2 font-bold flex justify-between">
                            <span>meme_lucu.jpg</span>
                            <span>X</span>
                        </div>
                        <div className="p-4 flex items-center justify-center h-64 bg-black overflow-hidden relative">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-50"
                                animate={{ opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            />
                            <span className="text-red-500 font-bold text-2xl rotate-12 border-4 border-red-500 p-2">
                                GAMBAR RUSAK
                            </span>
                        </div>
                        <div className="p-2 text-center font-serif italic">
                            "Definisi seni kontemporer (atau internet lemot)."
                        </div>
                    </div>

                    <div className="bg-[#c0c0c0] p-1 border-t-4 border-l-4 border-white border-b-4 border-r-4 border-black">
                        <div className="bg-blue-800 text-white px-2 font-bold flex justify-between">
                            <span>reaksi_tim.gif</span>
                            <span>X</span>
                        </div>
                        <div className="p-4 flex items-center justify-center h-64 bg-white">
                            <div className="text-center">
                                <h4 className="text-4xl font-black mb-2">404</h4>
                                <p>OTAK TIDAK DITEMUKAN</p>
                            </div>
                        </div>
                        <div className="p-2 text-center font-serif italic">
                            "Ekspresi ketika klien minta logo diperbesar tapi spacenya abis."
                        </div>
                    </div>
                </div>

                {/* VISITOR COUNTER */}
                <div className="text-center mb-12">
                    <p className="mb-2 font-mono text-yellow-300">JUMLAH KORBAN YANG MELIHAT HALAMAN INI:</p>
                    <div className="inline-flex bg-black border-4 border-gray-500 p-2 gap-1">
                        {[0, 0, 1, 3, 3, 7].map((num, i) => (
                            <div key={i} className="bg-[#333] text-red-500 font-mono text-2xl w-8 h-10 flex items-center justify-center border border-gray-700">
                                {num}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER */}
                <footer className="text-center font-mono text-xs text-gray-400 pb-8">
                    <p>DIBUAT DENGAN KERINGAT, AIR MATA, DAN MS PAINT.</p>
                    <p>&copy; 1998 - 2025 OURCREATIVITIES. HAK CIPTA DILANGGAR.</p>
                    <div className="mt-4">
                        <a href="mailto:admin@gila.com" className="text-blue-300 underline hover:text-red-500">KIRIM SURAT KALENG</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

