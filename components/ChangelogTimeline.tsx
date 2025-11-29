import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, GitCommit } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ChangelogEntry {
    id: string;
    version: string;
    major_version: number;
    title: string;
    date: string;
    description: string;
    highlights: string[];
    color: string;
}

export const ChangelogTimeline = () => {
    const [changelogs, setChangelogs] = useState<ChangelogEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChangelogs = async () => {
            try {
                const { data, error } = await supabase
                    .from('announcements')
                    .select('*')
                    .eq('type', 'changelog')
                    .order('major_version', { ascending: false })
                    .order('date', { ascending: false });

                if (error) throw error;
                if (data) setChangelogs(data);
            } catch (error) {
                console.error('Error fetching changelogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChangelogs();
    }, []);

    // Group by Major Version
    const groupedChangelogs = changelogs.reduce((acc, entry) => {
        const major = entry.major_version || 0;
        if (!acc[major]) acc[major] = [];
        acc[major].push(entry);
        return acc;
    }, {} as Record<number, ChangelogEntry[]>);

    const sortedMajorVersions = Object.keys(groupedChangelogs)
        .map(Number)
        .sort((a, b) => b - a);

    if (loading) return <div className="text-center text-gray-500 py-20">Memuat riwayat...</div>;

    return (
        <div className="relative max-w-4xl mx-auto px-4">
            {/* Garis Vertikal Utama */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="space-y-20">
                {sortedMajorVersions.map((majorVer) => (
                    <div key={majorVer} className="relative">
                        {/* Header Versi Utama (Sticky) */}
                        <div className="sticky top-24 z-30 flex justify-center mb-12">
                            <div className="bg-[#0a0a0a] border border-white/20 px-6 py-2 rounded-full shadow-xl backdrop-blur-md">
                                <span className="font-mono text-xl font-bold text-white">v{majorVer}.x Series</span>
                            </div>
                        </div>

                        <div className="space-y-16">
                            {groupedChangelogs[majorVer].map((entry, index) => {
                                const isEven = index % 2 === 0;
                                // Extract color from Tailwind class string (simplified) or default
                                const colorClass = entry.color ? entry.color.split(' ')[1]?.replace('to-', 'text-') : 'text-gray-500';

                                return (
                                    <motion.div
                                        key={entry.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5 }}
                                        className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        {/* Sisi Konten */}
                                        <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                                            <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400`}>
                                                        <Calendar size={12} className="inline mr-2" />
                                                        {new Date(entry.date).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
                                                    </span>
                                                    <span className={`font-black text-lg ${entry.color ? 'text-transparent bg-clip-text bg-gradient-to-r ' + entry.color : 'text-white'}`}>
                                                        {entry.version}
                                                    </span>
                                                </div>

                                                <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                                                    {entry.title}
                                                </h3>
                                                <p className="text-gray-500 font-mono text-sm mb-4">{entry.subtitle}</p>

                                                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                                                    {entry.description}
                                                </p>

                                                {/* Highlights */}
                                                <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
                                                    {entry.highlights?.map((highlight, idx) => (
                                                        <span key={idx} className="text-xs px-3 py-1 bg-white/5 rounded border border-white/5 text-gray-300">
                                                            + {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Titik Tengah (Node) */}
                                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                                            <div className={`w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-white/50 ring-4 ring-[#0a0a0a] ${entry.color ? 'shadow-[0_0_20px_rgba(255,255,255,0.3)]' : ''}`}></div>
                                        </div>

                                        {/* Ruang Kosong Penyeimbang */}
                                        <div className="flex-1 hidden md:block" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
