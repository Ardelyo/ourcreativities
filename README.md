# OurCreativities

> Platform komunitas kreatif untuk berbagi karya, ide, dan inspirasi

**Versi Saat Ini:** v5.0 - Revolution Edition  
**Status:** Active Development  
**Bahasa:** TypeScript + React

---

## Tentang Proyek

OurCreativities adalah platform berbasis web yang dirancang sebagai wadah bagi komunitas kreatif untuk berbagi karya, berkolaborasi, dan saling menginspirasi. Website ini dibangun dengan teknologi modern dan desain yang elegan, mengutamakan pengalaman pengguna yang intuitif dan visual yang memukau.

Proyek ini merupakan portfolio personal yang dikembangkan sejak 2024 dan terus diperbarui dengan desain dan fitur baru setiap tahunnya.

## Fitur Utama

### Halaman Home
- Hero section dengan animasi dan gradien modern
- Grid Bento untuk menampilkan highlight konten
- Navigasi yang responsif dan smooth
- Background ambience yang dinamis

### Karya
- Grid masonry layout untuk menampilkan karya kreatif
- Support untuk gambar dan video
- System like, share, dan spotlight
- Optimasi untuk perangkat mobile
- Filter dan pencarian karya

### Tim Kami
- Profil anggota tim dengan foto dan bio
- Card design yang modern dengan hover effect
- Informasi role dan kontak
- Responsive layout

### Cerita Kami (Story)
- Storytelling tentang perjalanan brand
- Timeline perkembangan
- Visi dan misi komunitas
- Typography yang premium

### Info
- Informasi kontak dan media sosial
- FAQ section
- Form kontak (coming soon)
- Lokasi dan jam operasional

## Tech Stack

### Core
- **React** v19.2.0 - Library UI modern
- **TypeScript** v5.8.2 - Type safety dan developer experience
- **Vite** v6.2.0 - Build tool yang cepat

### Styling & UI
- **Tailwind CSS** (via CDN) - Utility-first CSS framework
- **Framer Motion** v12.23.24 - Animasi smooth dan interaktif
- **Lucide React** v0.554.0 - Icon library modern

### Routing
- **React Router DOM** v6.22.3 - Client-side routing

### Fonts
- **Inter** - Font sans-serif modern
- **Playfair Display** - Font serif elegant

## Instalasi dan Penggunaan

### Prasyarat
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Langkah-langkah

1. Clone repository:
```bash
git clone <repository-url>
cd ourcreativities
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser di `http://localhost:5173`

### Build Production

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## Struktur Proyek

```
ourcreativities/
├── components/          # Komponen reusable
│   ├── BentoGrid.tsx   # Grid layout komponen
│   ├── BottomCTA.tsx   # Call-to-action section
│   ├── Footer.tsx      # Footer website
│   ├── Hero.tsx        # Hero section
│   └── Navbar.tsx      # Navigation bar
├── pages/              # Halaman-halaman utama
│   ├── Home.tsx        # Homepage
│   ├── Karya.tsx       # Halaman karya
│   ├── Tim.tsx         # Halaman tim
│   ├── Story.tsx       # Halaman cerita
│   └── Info.tsx        # Halaman info
├── docs/               # Dokumentasi lengkap
│   ├── versions/       # Dokumentasi per versi
│   ├── ARCHITECTURE.md # Arsitektur sistem
│   ├── COMPONENTS.md   # Dokumentasi komponen
│   ├── PAGES.md        # Dokumentasi halaman
│   ├── DEPLOYMENT.md   # Panduan deployment
│   └── CONTRIBUTING.md # Panduan kontribusi
├── App.tsx             # Root component
├── index.tsx           # Entry point
├── index.html          # HTML template
└── package.json        # Dependencies
```

## Dokumentasi Lengkap

Dokumentasi detail tentang proyek ini tersedia di folder `docs/`:

- **Riwayat Versi:** Lihat folder [docs/versions/](./docs/versions/) untuk changelog detail setiap versi
- **Arsitektur:** [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) - Penjelasan struktur dan arsitektur sistem
- **Komponen:** [docs/COMPONENTS.md](./docs/COMPONENTS.md) - API dan penggunaan komponen
- **Halaman:** [docs/PAGES.md](./docs/PAGES.md) - Detail setiap halaman
- **Deployment:** [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) - Cara deploy ke production
- **Kontribusi:** [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) - Panduan untuk kontributor

## Riwayat Versi Singkat

- **v5.0** (Current) - Revolution Edition dengan redesign total
- **v4.0** - Homepage revolution & file-based storage
- **v3.0** - Admin dashboard & announcement system
- **v2.0** - Implementasi halaman Karya dengan masonry layout
- **v1.0** - Stabilisasi UI/UX dan routing
- **v0.5** - Inisialisasi proyek dan fondasi awal

Lihat [changelog.md](./changelog.md) atau [docs/versions/](./docs/versions/) untuk detail lengkap.

## Roadmap

### v5.1 (Planning)
- Performance optimization
- SEO improvement
- Accessibility enhancement
- PWA support

### v5.2 (Future)
- Dark/Light mode toggle
- Multi-language support
- Advanced search & filter
- User authentication

### v6.0 (Vision)
- Real-time collaboration
- AI-powered recommendations
- Advanced analytics dashboard
- Mobile app companion

## Kontributor

### Core Team
- **Ardelyo** - Lead Developer & Designer
- **DoctorThink** - Code Refactoring & Documentation

### Acknowledgments
Terima kasih kepada semua yang telah berkontribusi dalam pengembangan platform ini melalui feedback, testing, dan dukungan.

## Lisensi

Proyek ini dikembangkan untuk portfolio personal. Silakan hubungi developer untuk informasi lebih lanjut tentang penggunaan kode.

## Kontak

- **Website:** [Coming Soon]
- **Email:** [Coming Soon]
- **GitHub:** [Repository Link]

---

**Dibuat dengan dedikasi oleh OurCreativities Team**

*Versi terakhir diperbarui: November 2025*
