import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Image as ImageIcon, Type, Code, Video, ArrowRight, ArrowLeft, Check, Sparkles, Layers } from 'lucide-react';

interface CreationStudioProps {
    isOpen: boolean;
    onClose: () => void;
    onPublish: (data: any) => void;
}

type Step = 'selection' | 'editor' | 'details';
type Medium = 'visual' | 'narasi' | 'kode' | 'sinema';

const mediums = [
    { id: 'visual', label: 'Visual', icon: ImageIcon, desc: 'Gambar, Ilustrasi, Foto', color: 'from-purple-500 to-indigo-500' },
    { id: 'narasi', label: 'Narasi', icon: Type, desc: 'Cerita, Esai, Puisi', color: 'from-rose-500 to-orange-500' },
    { id: 'kode', label: 'Kode', icon: Code, desc: 'Snippet, Algoritma', color: 'from-emerald-500 to-teal-500' },
    { id: 'sinema', label: 'Sinema', icon: Video, desc: 'Video, Animasi', color: 'from-blue-500 to-cyan-500' },
];

const divisions = [
    { id: 'graphics', name: 'Grafis' },
    { id: 'video', name: 'Video' },
    { id: 'writing', name: 'Tulisan' },
    { id: 'meme', name: 'Meme' },
    { id: 'coding', name: 'Coding' },
];

export const CreationStudio: React.FC<CreationStudioProps> = ({ isOpen, onClose, onPublish }) => {
    const [step, setStep] = useState<Step>('selection');
    const [medium, setMedium] = useState<Medium | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: '',
        division: 'graphics',
        tags: '',
        content: '', // For text/code
        image: ''    // For visual/video thumb
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleMediumSelect = (m: Medium) => {
        setMedium(m);
        setStep('editor');
        // Auto-set division based on medium (can be changed later)
        if (m === 'visual') setFormData(prev => ({ ...prev, division: 'graphics' }));
        if (m === 'narasi') setFormData(prev => ({ ...prev, division: 'writing' }));
        if (m === 'kode') setFormData(prev => ({ ...prev, division: 'coding' }));
        if (m === 'sinema') setFormData(prev => ({ ...prev, division: 'video' }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, image: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        onPublish({
            ...formData,
            id: Date.now(),
            type: medium === 'visual' || medium === 'sinema' ? (medium === 'sinema' ? 'video' : 'image') : (medium === 'narasi' ? 'text' : 'code'),
            tags: formData.tags.split(',').map(t => t.trim()),
            role: "Member"
        });
        onClose();
        // Reset after animation
        setTimeout(() => {
            setStep('selection');
            setMedium(null);
            setFormData({
                title: '', description: '', author: '', division: 'graphics', tags: '', content: '', image: ''
            });
        }, 500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[60]"
                    />

                    {/* Main Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] pointer-events-auto relative">

                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-black/50 backdrop-blur-md z-10">
                                <div className="flex items-center gap-4">
                                    {step !== 'selection' && (
                                        <button onClick={() => setStep(step === 'details' ? 'editor' : 'selection')} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                                            <ArrowLeft size={20} />
                                        </button>
                                    )}
                                    <div>
                                        <h2 className="text-xl font-serif font-bold text-white">
                                            {step === 'selection' && 'Pilih Medium'}
                                            {step === 'editor' && 'Kanvas Kreasi'}
                                            {step === 'details' && 'Sentuhan Akhir'}
                                        </h2>
                                        <p className="text-xs text-gray-500">
                                            {step === 'selection' && 'Apa yang ingin Anda ciptakan hari ini?'}
                                            {step === 'editor' && 'Tuangkan ide Anda ke dalam bentuk nyata.'}
                                            {step === 'details' && 'Berikan konteks pada karya Anda.'}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content Area */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar relative bg-[#050505]">

                                {/* Step 1: Selection */}
                                {step === 'selection' && (
                                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 h-full content-center">
                                        {mediums.map((m) => (
                                            <motion.button
                                                key={m.id}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleMediumSelect(m.id as Medium)}
                                                className="group relative overflow-hidden rounded-2xl p-6 text-left border border-white/5 hover:border-white/20 transition-all bg-[#0a0a0a]"
                                            >
                                                <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                                                <div className="relative z-10 flex items-start justify-between">
                                                    <div>
                                                        <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                                                            <m.icon className="text-white" size={24} />
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-white mb-1">{m.label}</h3>
                                                        <p className="text-gray-400 text-sm">{m.desc}</p>
                                                    </div>
                                                    <ArrowRight className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                )}

                                {/* Step 2: Editor */}
                                {step === 'editor' && (
                                    <div className="p-8 h-full flex flex-col">
                                        {(medium === 'visual' || medium === 'sinema') && (
                                            <div
                                                onClick={() => fileInputRef.current?.click()}
                                                className={`flex-1 rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-white/30 hover:bg-white/5 transition-all group relative overflow-hidden ${formData.image ? 'border-none' : ''}`}
                                            >
                                                {formData.image ? (
                                                    <img src={formData.image} alt="Preview" className="w-full h-full object-contain" />
                                                ) : (
                                                    <div className="text-center">
                                                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                                            <Upload className="text-gray-400 group-hover:text-white" size={32} />
                                                        </div>
                                                        <h3 className="text-xl font-bold text-white mb-2">Upload {medium === 'sinema' ? 'Video / Thumbnail' : 'Gambar'}</h3>
                                                        <p className="text-gray-500 text-sm">Drag & drop atau klik untuk memilih file</p>
                                                    </div>
                                                )}
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleImageUpload}
                                                    accept="image/*"
                                                    className="hidden"
                                                />
                                            </div>
                                        )}

                                        {medium === 'narasi' && (
                                            <textarea
                                                value={formData.content}
                                                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                                                placeholder="Mulai menulis cerita Anda..."
                                                className="w-full h-full bg-transparent text-white text-lg md:text-xl font-serif leading-relaxed focus:outline-none resize-none placeholder:text-gray-700"
                                                autoFocus
                                            />
                                        )}

                                        {medium === 'kode' && (
                                            <div className="w-full h-full bg-[#0d1117] rounded-xl p-6 font-mono text-sm border border-white/10 flex flex-col">
                                                <div className="flex gap-2 mb-4 opacity-50">
                                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                                </div>
                                                <textarea
                                                    value={formData.content}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                                                    placeholder="// Tulis kode Anda di sini..."
                                                    className="flex-1 bg-transparent text-gray-300 focus:outline-none resize-none placeholder:text-gray-700"
                                                    spellCheck={false}
                                                    autoFocus
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Step 3: Details */}
                                {step === 'details' && (
                                    <div className="p-8 max-w-2xl mx-auto space-y-8">
                                        <div className="space-y-4">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Judul Karya</label>
                                            <input
                                                type="text"
                                                value={formData.title}
                                                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                                className="w-full bg-transparent text-4xl font-serif font-bold text-white placeholder:text-gray-800 focus:outline-none border-b border-white/10 focus:border-white/50 pb-2 transition-colors"
                                                placeholder="Judul..."
                                                autoFocus
                                            />
                                        </div>

                                        <div className="space-y-4">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Divisi</label>
                                            <div className="flex flex-wrap gap-2">
                                                {divisions.map(div => (
                                                    <button
                                                        key={div.id}
                                                        onClick={() => setFormData(prev => ({ ...prev, division: div.id }))}
                                                        className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${formData.division === div.id
                                                                ? 'bg-white text-black border-white'
                                                                : 'bg-transparent text-gray-500 border-white/10 hover:border-white/30 hover:text-white'
                                                            }`}
                                                    >
                                                        {div.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Penulis</label>
                                                <input
                                                    type="text"
                                                    value={formData.author}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                                    placeholder="Nama Anda"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Tags</label>
                                                <input
                                                    type="text"
                                                    value={formData.tags}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
                                                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                                    placeholder="Contoh: 3D, Abstrak"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Deskripsi</label>
                                            <textarea
                                                value={formData.description}
                                                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                                className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                                                rows={3}
                                                placeholder="Ceritakan sedikit tentang karya ini..."
                                            />
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* Footer Actions */}
                            {step !== 'selection' && (
                                <div className="p-6 border-t border-white/5 bg-black/50 backdrop-blur-md flex justify-end">
                                    {step === 'editor' ? (
                                        <button
                                            onClick={() => setStep('details')}
                                            disabled={!formData.content && !formData.image}
                                            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            Lanjut <ArrowRight size={18} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                                        >
                                            <Check size={18} /> Publikasikan
                                        </button>
                                    )}
                                </div>
                            )}

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
