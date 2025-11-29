-- =====================================================
-- SEED DATA FOR CHANGELOGS (v5.0 - v0.5)
-- =====================================================

-- Clear existing changelogs to avoid duplicates during development
DELETE FROM announcements WHERE type = 'changelog';

INSERT INTO announcements (title, subtitle, version, major_version, date, category, status, color, description, content, highlights, type)
VALUES
-- v5.0: Revolution Edition
(
    'Revolution Edition',
    'The New Standard',
    'v5.0',
    5,
    '2025-11-01',
    'Major Update',
    'Aktif',
    'from-purple-600 to-blue-600',
    'Redesain total dengan filosofi "Luminous Depth". Memperkenalkan Creation Studio dan Bento Grid navigasi.',
    'OurCreativity v5.0 adalah lompatan terbesar kami. Kami meninggalkan desain lama demi sesuatu yang lebih berani, gelap, dan imersif. Fitur utama termasuk Creation Studio yang memungkinkan upload karya langsung, sistem navigasi Bento Grid yang responsif, dan integrasi penuh dengan Supabase untuk konten dinamis.',
    ARRAY['Luminous Design System', 'Creation Studio', 'Bento Grid Navigation', 'Supabase Integration'],
    'changelog'
),

-- v4.0: Glowar Era
(
    'Glowar Update',
    'Neon & Glass',
    'v4.0',
    4,
    '2025-06-15',
    'Major Update',
    'Arsip',
    'from-cyan-500 to-teal-500',
    'Era kejayaan Glassmorphism dan Neon. Fokus pada estetika visual yang memukau mata.',
    'Versi 4.0 membawa tren Glassmorphism ke level ekstrem. Seluruh antarmuka terasa seperti kaca yang melayang di atas latar belakang neon yang bergerak. Ini adalah masa di mana kami bereksperimen gila-gilaan dengan CSS backdrop-filter dan animasi CSS murni.',
    ARRAY['Glassmorphism UI', 'Neon Accents', 'Animated Backgrounds'],
    'changelog'
),

-- v3.0: Constellation Era (Requested)
(
    'Constellation Era',
    'Connecting the Dots',
    'v3.0',
    3,
    '2025-01-20',
    'Major Update',
    'Arsip',
    'from-indigo-500 to-purple-500',
    'Filosofi desain berbasis rasi bintang. Setiap karya adalah bintang, dan komunitas adalah garis yang menghubungkannya.',
    'Di v3.0, kami memperkenalkan konsep "Constellation". UI didominasi oleh partikel interaktif yang saling terhubung. Navigasi utama berbentuk peta bintang. Ini adalah upaya pertama kami untuk memvisualisasikan konektivitas antar anggota komunitas secara harfiah.',
    ARRAY['Constellation UI', 'Interactive Nodes', 'Space Theme', 'Community Graph'],
    'changelog'
),

-- v2.0: Industrial Phase
(
    'Industrial Phase',
    'Raw & Brutal',
    'v2.0',
    2,
    '2024-08-10',
    'Major Update',
    'Arsip',
    'from-orange-500 to-red-500',
    'Pendekatan Brutalisme. Tipografi besar, grid kasar, dan warna monokrom dengan aksen oranye keselamatan.',
    'Meninggalkan kesan "cantik", v2.0 merangkul estetika "work in progress". Kami menggunakan font monospace, garis-garis konstruksi yang terlihat, dan layout yang menabrak aturan grid tradisional. Ini adalah pernyataan bahwa kreativitas adalah proses yang berantakan.',
    ARRAY['Brutalism Style', 'Monospace Typography', 'Raw Grid Layout'],
    'changelog'
),

-- v1.0: The Genesis
(
    'The Genesis',
    'Hello World',
    'v1.0',
    1,
    '2024-03-01',
    'Major Update',
    'Arsip',
    'from-gray-500 to-white',
    'Lahirnya OurCreativity. Sebuah portofolio sederhana untuk memamerkan karya teman-teman dekat.',
    'Versi pertama yang sangat sederhana. Dibangun hanya dengan HTML, CSS, dan sedikit JS. Tujuannya hanya satu: punya tempat untuk menaruh link Google Drive karya kami. Belum ada login, belum ada database, hanya semangat murni.',
    ARRAY['Static HTML', 'Simple Portfolio', 'Manual Updates'],
    'changelog'
),

-- v0.5: Beta / MVP
(
    'Project Zero',
    'Proof of Concept',
    'v0.5',
    0,
    '2024-01-15',
    'Beta',
    'Arsip',
    'from-gray-700 to-gray-900',
    'Prototipe awal. Halaman hitam dengan daftar nama dan link.',
    'Sebelum ada nama "OurCreativity", ini adalah "Project Zero". Hanya sebuah file index.html yang di-hosting di GitHub Pages. Sangat kasar, tapi fungsional. Ini adalah bukti bahwa kami bisa membuat sesuatu bersama.',
    ARRAY['Single Page', 'No CSS Framework', 'Pure Chaos'],
    'changelog'
);
