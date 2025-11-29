import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { changelogData } from '../data/changelogData';

export const ChangelogTimeline = () => {
    return (
        <div className="relative max-w-4xl mx-auto px-4">
            {/* Garis Vertikal */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            <div className="space-y-12">
                {changelogData.map((entry, index) => {
                    const isEven = index % 2 === 0;
                    // Ekstrak nama warna (misalnya, 'rose' dari 'rose-500') atau gunakan default
                    const colorClass = entry.color || 'gray-500';

                    return (
                        <motion.div
                            key={entry.version}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Sisi Konten */}
                            <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                                <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-${colorClass} mb-4 w-fit`}>
                                        <Calendar size={12} /> {entry.date}
                                    </span>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {entry.title} <span className={`text-${colorClass} text-lg ml-2`}>{entry.version}</span>
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                                        {entry.description}
                                    </p>

                                    {/* Daftar Perubahan */}
                                    <ul className={`space-y-2 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                                        {entry.changes.map((change, idx) => (
                                            <li key={idx} className={`flex items-start gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors ${isEven ? 'flex-row-reverse text-right' : ''}`}>
                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${colorClass} shrink-0`} />
                                                <span>{change}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Titik Tengah */}
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white/20 z-10 mt-1.5">
                                <div className={`w-full h-full rounded-full bg-${colorClass} opacity-50 animate-pulse`} />
                            </div>

                            {/* Ruang kosong untuk sisi lainnya */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};
