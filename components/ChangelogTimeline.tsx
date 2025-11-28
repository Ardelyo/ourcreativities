
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { changelogData } from '../data/changelogData';
import { Tag, Calendar, ChevronRight } from 'lucide-react';

export const ChangelogTimeline = () => {
    return (
        <div className="relative max-w-4xl mx-auto px-4 py-20">
            {/* Central Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />

            <div className="space-y-24">
                {changelogData.map((entry, index) => (
                    <TimelineItem key={entry.version} entry={entry} index={index} />
                ))}
            </div>

            {/* Start Node */}
            <div className="absolute bottom-0 left-8 md:left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-white/20 border border-white/40 blur-[1px]" />
            </div>
        </div>
    );
};

const TimelineItem = ({ entry, index }: { entry: typeof changelogData[0], index: number }) => {
    const isEven = index % 2 === 0;
    const Icon = entry.icon || Tag;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Timeline Node */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                <div className={`w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] group`}>
                    <div className={`w-3 h-3 rounded-full bg-${entry.color || 'white'} shadow-[0_0_10px_currentColor]`} />
                    {/* Pulse Effect */}
                    <div className={`absolute inset-0 rounded-full border border-${entry.color || 'white'}/20 scale-100 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                </div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <div className="relative group">
                    {/* Card Background & Glow */}
                    <div className={`absolute -inset-4 bg-gradient-to-r from-${entry.color || 'white'}/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                    <div className="relative">
                        {/* Header */}
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <span className={`px-3 py-1 rounded-full bg-${entry.color || 'white'}/10 border border-${entry.color || 'white'}/20 text-${entry.color || 'white'} text-xs font-bold flex items-center gap-1.5`}>
                                {entry.version}
                            </span>
                            <span className="text-gray-500 text-xs font-medium flex items-center gap-1">
                                <Calendar size={10} /> {entry.date}
                            </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                            {entry.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {entry.description}
                        </p>

                        {/* Changes List */}
                        <ul className={`space-y-2 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                            {entry.changes.map((change, idx) => (
                                <li key={idx} className={`flex items-start gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors ${isEven ? 'flex-row-reverse text-right' : ''}`}>
                                    <div className={`mt-1.5 w-1 h-1 rounded-full bg-${entry.color || 'white'} shrink-0`} />
                                    <span>{change}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Empty space for the other side */}
            <div className="w-full md:w-1/2" />
        </motion.div>
    );
};
