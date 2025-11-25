import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Download, Heart, Share2 } from 'lucide-react';

const artworks = [
  { 
    id: 1, 
    title: "Neon Dreams", 
    author: "Rizky A.", 
    role: "3D Artist",
    desc: "Eksplorasi pencahayaan neon dalam ruang liminal cyberpunk. Dibuat menggunakan Blender dan post-processing di Photoshop.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-8 md:row-span-2",
    tags: ["3D", "Cyberpunk", "Neon"]
  },
  { 
    id: 2, 
    title: "Flow State", 
    author: "Sarah M.", 
    role: "Illustrator",
    desc: "Visualisasi mental saat berada dalam zona kreatif. Menggunakan teknik fluid art digital.",
    img: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-4",
    tags: ["Abstract", "Fluid"]
  },
  { 
    id: 3, 
    title: "Urban Decay", 
    author: "Dimas P.", 
    role: "Photographer",
    desc: "Potret sudut kota Jakarta yang sering terlupakan. Keindahan dalam ketidaksempurnaan.",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-4",
    tags: ["Photography", "Urban"]
  },
  { 
    id: 4, 
    title: "Cyber Punk", 
    author: "Eko W.", 
    role: "Concept Artist",
    desc: "Konsep karakter untuk game RPG lokal masa depan.",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-6",
    tags: ["Character", "Concept"]
  },
  { 
    id: 5, 
    title: "Nature's Call", 
    author: "Linda K.", 
    role: "Digital Painter",
    desc: "Perpaduan antara fotografi makro dan digital painting.",
    img: "https://images.unsplash.com/photo-1515405295579-ba7b454989ab?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-6",
    tags: ["Nature", "Manip"]
  },
];

const Noise = () => (
  <div 
    className="absolute inset-0 opacity-[0.05] pointer-events-none z-0 mix-blend-overlay"
    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
  ></div>
);

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeInOut" } }
};

export const Karya = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedArtwork = artworks.find(a => a.id === selectedId);

  return (
    <motion.div 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-36 pb-20 px-4 max-w-7xl mx-auto relative min-h-screen"
    >
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16 text-center"
      >
        <span className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4 block">Eksplorasi Visual</span>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Galeri Karya</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Kumpulan karya terpilih dari anggota komunitas kami. Klik gambar untuk melihat detail.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
        {artworks.map((art, index) => (
          <motion.div
            key={art.id}
            layoutId={`card-${art.id}`}
            onClick={() => setSelectedId(art.id)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`group relative rounded-[2rem] overflow-hidden border border-white/10 ${art.span} cursor-pointer hover:border-white/30 transition-colors z-0 hover:z-10`}
          >
            <motion.img 
              layoutId={`img-${art.id}`}
              src={art.img} 
              alt={art.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
            <Noise />

            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="flex justify-between items-end">
                <div>
                  <motion.h3 layoutId={`title-${art.id}`} className="text-xl font-serif text-white mb-1">{art.title}</motion.h3>
                  <p className="text-xs text-gray-300">Oleh <span className="text-white font-bold">{art.author}</span></p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedId && selectedArtwork && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 pt-20 pb-10">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Expanded Card */}
            <motion.div 
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[85vh] origin-center"
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 300, damping: 30 }} // Premium heavy spring feel
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>

              {/* Image Section (Half) */}
              <div className="w-full md:w-3/5 h-[40vh] md:h-full relative overflow-hidden bg-black">
                 <motion.img 
                   layoutId={`img-${selectedId}`}
                   src={selectedArtwork.img}
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a] opacity-50"></div>
              </div>

              {/* Details Section (Half) */}
              <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between overflow-y-auto custom-scrollbar">
                <div>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3 mb-6"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 overflow-hidden">
                        <img src={`https://ui-avatars.com/api/?name=${selectedArtwork.author}&background=random`} alt="Avatar" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold text-sm">{selectedArtwork.author}</h4>
                         <p className="text-gray-500 text-xs">{selectedArtwork.role}</p>
                      </div>
                    </motion.div>

                    <motion.h2 
                      layoutId={`title-${selectedId}`}
                      className="text-4xl font-serif text-white mb-6"
                    >
                      {selectedArtwork.title}
                    </motion.h2>

                    <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.4 }}
                       className="flex flex-wrap gap-2 mb-6"
                    >
                      {selectedArtwork.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </motion.div>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-400 leading-relaxed mb-8 text-sm"
                    >
                      {selectedArtwork.desc}
                    </motion.p>
                </div>

                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.6 }}
                   className="flex gap-4 border-t border-white/10 pt-8 mt-auto"
                >
                   <button className="flex-1 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                      <Heart size={16} /> Apresiasi
                   </button>
                   <button className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-white">
                      <Share2 size={18} />
                   </button>
                   <button className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-white">
                      <Download size={18} />
                   </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-16 text-center">
        <button className="group relative px-8 py-3 rounded-full border border-white/10 text-white font-bold text-sm overflow-hidden hover:border-white transition-colors">
            <span className="relative z-10 group-hover:text-black transition-colors">Muat Lebih Banyak</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </button>
      </div>
    </motion.div>
  );
};