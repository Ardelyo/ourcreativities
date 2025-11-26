import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Download, Heart, Share2, Plus, Filter, Search } from 'lucide-react';
import { CreationStudio } from '../components/CreationStudio';

// Initial dummy data
const initialArtworks = [
  {
    id: 1,
    title: "Neon Dreams",
    author: "Rizky A.",
    role: "3D Artist",
    desc: "Eksplorasi pencahayaan neon dalam ruang liminal cyberpunk.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    height: "h-[400px]",
    tags: ["3D", "Cyberpunk"],
    division: "graphics"
  },
  {
    id: 2,
    title: "Flow State",
    author: "Sarah M.",
    role: "Illustrator",
    desc: "Visualisasi mental saat berada dalam zona kreatif.",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop",
    height: "h-[300px]",
    tags: ["Abstract", "Fluid"],
    division: "graphics"
  },
  {
    id: 3,
    title: "Urban Decay",
    author: "Dimas P.",
    role: "Photographer",
    desc: "Potret sudut kota Jakarta yang sering terlupakan.",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    height: "h-[500px]",
    tags: ["Photography", "Urban"],
    division: "video"
  },
  {
    id: 4,
    title: "Cyber Punk",
    author: "Eko W.",
    role: "Concept Artist",
    desc: "Konsep karakter untuk game RPG lokal masa depan.",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    height: "h-[350px]",
    tags: ["Character", "Concept"],
    division: "graphics"
  },
  {
    id: 5,
    title: "Nature's Call",
    author: "Linda K.",
    role: "Digital Painter",
    desc: "Perpaduan antara fotografi makro dan digital painting.",
    img: "https://images.unsplash.com/photo-1515405295579-ba7b454989ab?q=80&w=800&auto=format&fit=crop",
    height: "h-[450px]",
    tags: ["Nature", "Manip"],
    division: "graphics"
  },
  {
    id: 6,
    title: "Meme of the Week",
    author: "Joko S.",
    role: "Meme Lord",
    desc: "Ketika deadline sudah dekat tapi internet mati.",
    img: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=800&auto=format&fit=crop",
    height: "h-[300px]",
    tags: ["Humor", "Relatable"],
    division: "meme"
  }
];

export const Karya = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [artworks, setArtworks] = useState(initialArtworks);
  const [filter, setFilter] = useState('all');

  const selectedArtwork = artworks.find(a => a.id === selectedId);

  const handlePublish = (newWork: any) => {
    setArtworks(prev => [newWork, ...prev]);
  };

  const filteredArtworks = filter === 'all'
    ? artworks
    : artworks.filter(a => a.division === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-[1600px] mx-auto relative">

      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Galeri Karya</h1>
          <p className="text-gray-400 text-lg">Kurasi visual terbaik dari komunitas.</p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          <div className="flex bg-[#111] p-1 rounded-full border border-white/10">
            {['all', 'graphics', 'video', 'meme'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-bold capitalize transition-all ${filter === f ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsStudioOpen(true)}
            className="hidden md:flex bg-white text-black px-6 py-3 rounded-full font-bold items-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <Plus size={20} /> Buat Karya
          </button>
        </div>
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {filteredArtworks.map((art, index) => (
          <motion.div
            key={art.id}
            layoutId={`card-${art.id}`}
            onClick={() => setSelectedId(art.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="break-inside-avoid group relative rounded-3xl overflow-hidden cursor-pointer bg-[#111] mb-6"
          >
            <div className="relative">
              <motion.img
                layoutId={`img-${art.id}`}
                src={art.img}
                alt={art.title}
                className="w-full h-auto object-cover"
              />

              {/* Overlay Actions (Pinterest style) */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
                <div className="flex justify-end">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-red-600 transition-colors shadow-lg transform translate-y-[-10px] group-hover:translate-y-0 duration-300">
                    Simpan
                  </button>
                </div>
                <div className="flex gap-2 justify-end transform translate-y-[10px] group-hover:translate-y-0 duration-300">
                  <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                    <Share2 size={16} />
                  </button>
                  <button className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Minimal Info Below Card */}
            <div className="pt-3 pb-1 px-1">
              <motion.h3 className="text-white font-bold text-sm truncate">{art.title}</motion.h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-4 h-4 rounded-full bg-gray-700 overflow-hidden">
                  <img src={`https://ui-avatars.com/api/?name=${art.author}&background=random`} alt="Avatar" />
                </div>
                <p className="text-xs text-gray-400">{art.author}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Button (Mobile) */}
      <button
        onClick={() => setIsStudioOpen(true)}
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-white text-black rounded-full shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-transform active:scale-95"
      >
        <Plus size={28} />
      </button>

      {/* Creation Studio Modal */}
      <CreationStudio
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        onPublish={handlePublish}
      />

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedId && selectedArtwork && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 pt-20 pb-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl pointer-events-auto"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl bg-[#111] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh] pointer-events-auto"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
                <motion.img
                  layoutId={`img-${selectedId}`}
                  src={selectedArtwork.img}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-[#111]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                    <span className={`w-2 h-2 rounded-full ${selectedArtwork.division === 'video' ? 'bg-orange-500' : selectedArtwork.division === 'meme' ? 'bg-yellow-400' : 'bg-purple-500'}`}></span>
                    {selectedArtwork.division || 'Graphics'}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"><Share2 size={20} /></button>
                    <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"><Download size={20} /></button>
                  </div>
                </div>

                <h2 className="text-4xl font-serif text-white mb-4">{selectedArtwork.title}</h2>
                <p className="text-gray-400 leading-relaxed mb-8">{selectedArtwork.desc}</p>

                <div className="flex items-center gap-4 mb-8 p-4 bg-white/5 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
                    <img src={`https://ui-avatars.com/api/?name=${selectedArtwork.author}&background=random`} alt="Avatar" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{selectedArtwork.author}</h4>
                    <p className="text-gray-500 text-xs">{selectedArtwork.role}</p>
                  </div>
                  <button className="ml-auto bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                    Follow
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedArtwork.tags?.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};