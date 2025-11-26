import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Image as ImageIcon, Download, Save, Plus, FileJson, Check } from 'lucide-react';

interface CreationStudioProps {
    isOpen: boolean;
    onClose: () => void;
    onPublish: (data: any) => void;
}

const divisions = [
    { id: 'graphics', name: 'Grafis', color: 'bg-purple-500' },
    { id: 'video', name: 'Video', color: 'bg-orange-500' },
    { id: 'writing', name: 'Tulisan', color: 'bg-white text-black' },
    { id: 'meme', name: 'Meme', color: 'bg-yellow-400 text-black' },
    { id: 'coding', name: 'Coding', color: 'bg-green-500' },
];

export const CreationStudio: React.FC<CreationStudioProps> = ({ isOpen, onClose, onPublish }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: '',
        division: 'graphics',
        tags: '',
        image: ''
    });
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
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

    const handleExport = () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `karya-${formData.title || 'untitled'}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target?.result as string);
                    setFormData(importedData);
                } catch (error) {
                    alert("Format file tidak valid!");
                }
            };
            reader.readAsText(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onPublish({
            ...formData,
            id: Date.now(),
            tags: formData.tags.split(',').map(t => t.trim()),
            role: "Member" // Default role
        });
        onClose();
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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
                    />

                    {/* Modal / Bottom Sheet */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-0 left-0 right-0 md:top-10 md:bottom-10 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[600px] bg-[#111] border-t md:border border-white/10 rounded-t-3xl md:rounded-3xl z-[70] flex flex-col shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <h2 className="text-xl font-serif font-bold text-white">Buat Karya Baru</h2>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Image Upload Area */}
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`aspect-video rounded-2xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 hover:bg-white/5 transition-all group relative overflow-hidden ${formData.image ? 'border-none' : ''}`}
                                >
                                    {formData.image ? (
                                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <>
                                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <Upload className="text-gray-400 group-hover:text-purple-400" size={24} />
                                            </div>
                                            <p className="text-gray-400 text-sm font-medium">Klik untuk upload gambar</p>
                                            <p className="text-gray-600 text-xs mt-1">JPG, PNG, GIF (Max 5MB)</p>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageUpload}
                                        accept="image/*"
                                        className="hidden"
                                    />
                                </div>

                                {/* Division Selector */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Divisi</label>
                                    <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                                        {divisions.map(div => (
                                            <button
                                                key={div.id}
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, division: div.id }))}
                                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${formData.division === div.id
                                                        ? `${div.color} scale-105 shadow-lg`
                                                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                                    }`}
                                            >
                                                {div.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Inputs */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Judul Karya</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleInputChange}
                                            placeholder="Berikan judul yang menarik..."
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Deskripsi</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            placeholder="Ceritakan tentang karya ini..."
                                            rows={4}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Penulis</label>
                                            <input
                                                type="text"
                                                name="author"
                                                value={formData.author}
                                                onChange={handleInputChange}
                                                placeholder="Nama Anda"
                                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tags</label>
                                            <input
                                                type="text"
                                                name="tags"
                                                value={formData.tags}
                                                onChange={handleInputChange}
                                                placeholder="3D, Abstrak, dll"
                                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Import/Export Actions */}
                                <div className="flex gap-3 pt-4 border-t border-white/10">
                                    <button
                                        type="button"
                                        onClick={handleExport}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 transition-colors text-sm font-bold"
                                    >
                                        <Download size={16} /> Export JSON
                                    </button>
                                    <label className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 transition-colors text-sm font-bold cursor-pointer">
                                        <FileJson size={16} /> Import JSON
                                        <input type="file" onChange={handleImport} accept=".json" className="hidden" />
                                    </label>
                                </div>

                            </form>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 border-t border-white/10 bg-[#111]">
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-white text-black font-bold text-lg py-4 rounded-2xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <Check size={20} /> Publikasikan Karya
                            </button>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
