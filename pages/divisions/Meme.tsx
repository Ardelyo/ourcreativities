import React from 'react';
import { Link } from 'react-router-dom';

export const Meme = () => {
    return (
        <div className="min-h-screen bg-white text-black font-serif p-4 md:p-8">
            {/* RAW HTML NAVIGATION */}
            <div className="mb-8">
                <Link to="/" className="text-blue-600 underline hover:text-red-600">
                    &lt;-- balik ke rumah
                </Link>
                <hr className="my-4 border-black" />
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-3xl mx-auto">
                
                {/* HEADER */}
                <h1 className="text-5xl font-bold mb-2">divisi meme.</h1>
                <p className="text-gray-500 italic mb-8">website ini belum jadi, budget abis buat beli gorengan.</p>

                {/* WHO ARE WE */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 bg-yellow-200 inline-block">siapa kita?</h2>
                    <p className="mb-4 text-lg leading-relaxed">
                        kita adalah sekumpulan orang yang kerjaannya bikin ketawa (kadang garing sih). 
                        tugas utama kita sebenernya simpel: bikin konten yang relate sama kehidupan kalian yang penuh drama itu.
                    </p>
                    <p className="text-lg leading-relaxed">
                        kalo kalian liat ada meme atau video lucu di sosmed ourcreativities, ya itu kerjaan kita. 
                        kalo ga lucu? ya maap, namanya juga usaha.
                    </p>
                </div>

                {/* WHAT WE DO */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 bg-yellow-200 inline-block">ngapain aja?</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        <li>bikin meme (jelas lah).</li>
                        <li>ngedit video biar estetik (padahal aslinya burik).</li>
                        <li>nyari ide konten pas lagi bengong di wc.</li>
                        <li>nge-roasting divisi lain (hobi sampingan).</li>
                    </ul>
                </div>

                {/* TODO LIST (UNFINISHED VIBE) */}
                <div className="mb-12 border-2 border-dashed border-gray-400 p-6 bg-gray-50">
                    <h3 className="font-mono font-bold mb-4">TO-DO LIST (JANGAN DIBACA)</h3>
                    <ul className="space-y-2 font-mono text-sm">
                        <li className="flex items-center gap-2">
                            <input type="checkbox" checked readOnly /> 
                            <span>bikin halaman ini</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <input type="checkbox" /> 
                            <span>benerin css biar ga jelek (males)</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <input type="checkbox" /> 
                            <span>tambahin animasi keren (nanti aja)</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <input type="checkbox" /> 
                            <span>beli kopi</span>
                        </li>
                    </ul>
                </div>

                {/* GALLERY (SIMPLE) */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 bg-yellow-200 inline-block">karya (seadanya)</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-black p-2">
                            <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">
                                [gambar meme 1]
                            </div>
                            <p className="mt-2 text-sm">meme_lucu_final_revisi_99.jpg</p>
                        </div>
                        <div className="border border-black p-2">
                            <div className="w-full h-32 bg-gray-200 flex items-center justify-center text-gray-500">
                                [gambar meme 2]
                            </div>
                            <p className="mt-2 text-sm">konten_viral_bismillah.png</p>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <hr className="my-8 border-black" />
                <footer className="text-center text-sm text-gray-600">
                    <p>dibuat pake notepad pas lagi gabut.</p>
                    <p>(c) 2025 ourcreativities.</p>
                </footer>
            </div>
        </div>
    );
};
