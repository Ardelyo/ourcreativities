import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp, Clock, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ChangelogEntry {
    id: string;
    version: string;
    major_version: number;
    title: string;
    subtitle?: string; // Added optional subtitle support if data exists
    date: string;
    description: string;
    content?: string; // Full story content
    changes?: string[]; // Assuming this field exists based on previous file content or intention
    highlights?: string[];
    color: string;
}

export const ChangelogTimeline = () => {
    const [changelogs, setChangelogs] = useState<ChangelogEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<string | null>(null);

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

    const toggleExpand = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

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

    if (loading) return (
        <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
    );

    return (
        <div className="relative max-w-3xl mx-auto px-4 pb-20">
            {/* Main Timeline Line - Designed to look like a "Story Path" */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-full" />

            <div className="space-y-16">
                {sortedMajorVersions.map((majorVer) => (
                    <div key={majorVer} className="relative">
                        {/* Major Version Marker - Sticky Header */}
                        <div className="sticky top-24 z-30 flex items-center gap-4 mb-8 pl-2">
                            <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0a0a0a] border-4 border-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10 flex items-center justify-center backdrop-blur-md">
                                    <span className="font-bold text-white text-sm md:text-lg">v{majorVer}</span>
                                </div>
                            </div>
                            <div className="bg-[#0a0a0a]/80 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
                                <span className="font-serif text-lg md:text-xl font-bold text-white tracking-wide">Era {majorVer}.0</span>
                            </div>
                        </div>

                        <div className="space-y-8 pl-12 md:pl-20">
                            {groupedChangelogs[majorVer].map((entry, index) => {
                                const isExpanded = expandedId === entry.id;
                                const colorClass = entry.color ? entry.color.split(' ')[1]?.replace('to-', 'text-') : 'text-gray-400';
                                const bgGradient = entry.color ? entry.color.replace('text-', 'from-').replace('500', '500/20').replace('400', '400/20') : 'from-white/10';

                                return (
                                    <motion.div
                                        key={entry.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="relative group"
                                    >
                                        {/* Connector Node */}
                                        <div className="absolute -left-[3rem] md:-left-[4rem] top-6 w-6 h-6 rounded-full bg-[#0a0a0a] border-2 border-white/20 ring-4 ring-[#0a0a0a] flex items-center justify-center z-10 transition-colors duration-300 group-hover:border-white/60">
                                            <div className={`w-2 h-2 rounded-full ${isExpanded ? 'bg-white scale-125' : 'bg-white/40'} transition-all duration-300`} />
                                        </div>

                                        {/* Content Card */}
                                        <motion.div
                                            layout
                                            onClick={() => toggleExpand(entry.id)}
                                            className={`
                                                relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer
                                                ${isExpanded
                                                    ? 'bg-[#111] border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]'
                                                    : 'bg-[#0a0a0a] border-white/5 hover:border-white/10 hover:bg-[#0f0f0f]'
                                                }
                                            `}
                                        >
                                            {/* Glow Effect Background */}
                                            {isExpanded && (
                                                <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} to-transparent opacity-10 pointer-events-none`} />
                                            )}

                                            <div className="p-5 md:p-6">
                                                {/* Card Header Section */}
                                                <div className="flex justify-between items-start gap-4">
                                                    <div className="space-y-2 flex-1">
                                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                                            <span className={`px-2 py-0.5 rounded text-[10px] mobile:text-xs font-bold uppercase tracking-wider border border-white/10 ${entry.color ? entry.color.replace('text-', 'bg-').replace('400', '500/20').replace('500', '500/20') + ' ' + entry.color : 'bg-gray-800 text-gray-400'}`}>
                                                                {entry.version}
                                                            </span>
                                                            <span className="flex items-center gap-1 text-xs text-gray-500">
                                                                <Calendar size={10} />
                                                                {new Date(entry.date).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })}
                                                            </span>
                                                        </div>
                                                        <h3 className={`font-serif text-lg md:text-2xl font-bold leading-tight ${isExpanded ? 'text-white' : 'text-gray-200'}`}>
                                                            {entry.title}
                                                        </h3>
                                                        {!isExpanded && (
                                                            <p className="text-sm text-gray-500 line-clamp-2 md:line-clamp-1">
                                                                {entry.description}
                                                            </p>
                                                        )}
                                                    </div>

                                                    <button
                                                        className={`
                                                            p-2 rounded-full transition-colors shrink-0
                                                            ${isExpanded ? 'bg-white text-black' : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:text-white'}
                                                        `}
                                                    >
                                                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                    </button>
                                                </div>

                                                {/* Expanded Content Section */}
                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-6 space-y-6">
                                                                {/* Main Story Content */}
                                                                <div className="text-gray-300 leading-relaxed text-sm md:text-base prose prose-invert prose-sm max-w-none">
                                                                    {entry.content ? (
                                                                        <p>{entry.content}</p>
                                                                    ) : (
                                                                        <p>{entry.description}</p>
                                                                    )}
                                                                </div>

                                                                {/* Changes List (if available) */}
                                                                {entry.changes && entry.changes.length > 0 && (
                                                                    <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                                            <Tag size={12} /> Log Perubahan
                                                                        </h4>
                                                                        <ul className="space-y-2">
                                                                            {entry.changes.map((change, idx) => (
                                                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${entry.color ? entry.color.replace('text-', 'bg-') : 'bg-gray-500'}`} />
                                                                                    <span className="flex-1">{change}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )}

                                                                {/* Highlights Tags */}
                                                                {entry.highlights && entry.highlights.length > 0 && (
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {entry.highlights.map((h, idx) => (
                                                                            <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                                                                                # {h}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                )}

                                                                {/* Added Footer/Meta if meaningful */}
                                                                <div className="pt-2 border-t border-white/5 flex justify-between items-center text-xs text-gray-600 font-mono">
                                                                    <span>ID: {entry.id.slice(0, 8)}</span>
                                                                    <div className="flex items-center gap-1">
                                                                        <Clock size={12} />
                                                                        <span>Released</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* End of Timeline Indicator */}
            <div className="absolute left-8 md:left-12 bottom-0 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-white to-gray-500 blur-[2px]" />
            </div>
        </div>
    );
};

