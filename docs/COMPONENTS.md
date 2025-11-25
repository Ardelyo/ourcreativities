# Dokumentasi Komponen

> API Reference dan panduan penggunaan komponen OurCreativities v5.0

## Overview

Dokumentasi ini menjelaskan setiap komponen yang ada di aplikasi OurCreativities, termasuk props, penggunaan, dan contoh implementasi.

## Layout Components

### Navbar

Komponen navigation bar dengan support untuk desktop dan mobile menu.

**Lokasi:** `components/Navbar.tsx`

**Features:**
- Fixed position di top
- Glassmorphism design dengan backdrop blur
- Mobile-responsive dengan hamburger menu
- Active route highlighting
- Smooth animations dengan Framer Motion

**Props:**
Tidak ada props (self-contained component)

**Usage:**
```typescript
import { Navbar } from './components/Navbar';

<Navbar />
```

**Structure:**
```typescript
Navbar
├── Logo (Link to home)
├── Desktop Navigation Links
├── CTA Button "Bergabung"
└── Mobile Menu Toggle
    └── Mobile Menu Overlay
```

**Navigation Links:**
```typescript
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Karya', href: '/karya' },
  { name: 'Tim', href: '/tim' },
  { name: 'Info', href: '/info' },
];
```

**Styling:**
- Background: `bg-[#111]/80` dengan `backdrop-blur-xl`
- Border: `border-white/10`
- Shape: `rounded-full`
- Max width: `max-w-4xl`

**Mobile Menu:**
- Opens di responsive breakpoint `md:hidden`
- Slide-in animation
- Backdrop dengan glassmorphism
- Closes automatically on navigation

---

### Footer

Simple footer component dengan copyright dan links.

**Lokasi:** `components/Footer.tsx`

**Features:**
- Clean minimalist design
- Copyright information
- Social links (optional)
- Responsive layout

**Props:**
Tidak ada props

**Usage:**
```typescript
import { Footer } from './components/Footer';

<Footer />
```

**Styling:**
- Border top subtle
- Muted text colors
- Centered layout
- Responsive padding

---

## Content Components

### Hero

Hero section untuk homepage dengan animated headline dan CTA buttons.

**Lokasi:** `components/Hero.tsx`

**Features:**
- Large typography dengan Playfair Display
- Gradient text effects
- Animated badge "Komunitas Terbuka"
- Two CTA buttons
- Framer Motion entrance animations

**Props:**
Tidak ada props

**Usage:**
```typescript
import { Hero } from './components/Hero';

<Hero />
```

**Structure:**
```typescript
Hero
├── Editorial Badge (dengan live indicator)
├── Main Headline
│   ├── "Merangkai"
│   ├── "Imajinasi" (gradient text)
│   └── "Kita."
├── Subtitle Text
└── CTA Buttons
    ├── Primary: "Mulai Jelajahi"
    └── Secondary: "Tonton Reel"
```

**Typography:**
- H1 size: `text-6xl md:text-8xl lg:text-9xl`
- Font: `font-serif` (Playfair Display)
- Line height: `leading-[0.9]` (tight)
- Tracking: `tracking-tight`

**Animations:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
```

**Button Variants:**
1. Primary: White background, hover shadow glow
2. Secondary: Glass effect dengan border

---

### BentoGrid

Flexible grid layout system untuk menampilkan content cards dengan varying sizes.

**Lokasi:** `components/BentoGrid.tsx`

**Features:**
- Asymmetric grid layout
- Multiple card size variations
- Responsive breakpoints
- Glass morphism effects
- Hover animations

**Props:**
```typescript
interface BentoGridProps {
  // Tidak ada props eksternal
  // Data hard-coded dalam component
}
```

**Usage:**
```typescript
import { BentoGrid } from './components/BentoGrid';

<BentoGrid />
```

**Grid Layout:**
```typescript
// Desktop: 4 columns dengan auto-fit
// Tablet: 2-3 columns
// Mobile: 1-2 columns

className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
```

**Card Types:**

**Standard Card:**
```typescript
<div className="bg-white/5 border border-white/10 rounded-2xl p-6">
  <Icon />
  <h3>{title}</h3>
  <p>{description}</p>
</div>
```

**Featured Card (Large):**
- Spans multiple columns: `lg:col-span-2`
- Larger padding
- More prominent content

**Glass Card:**
```typescript
<div className="bg-white/10 backdrop-blur-xl border border-white/20">
  {/* Content */}
</div>
```

**Internal Structure:**
```typescript
BentoGrid
├── Grid Container
├── Card 1 (Standard)
├── Card 2 (Wide span-2)
├── Card 3 (Standard)
├── Card 4 (Tall)
└── Card 5 (Featured glass)
```

**Customization:**
- Modify card data dalam component
- Adjust grid columns via className
- Change card sizes dengan col-span/row-span
- Update animations per card

---

### BottomCTA

Call-to-action section untuk encourage user engagement.

**Lokasi:** `components/BottomCTA.tsx`

**Features:**
- Full-width section
- Gradient background
- Centered content
- Action button

**Props:**
Tidak ada props (dapat ditambahkan untuk customization)

**Usage:**
```typescript
import { BottomCTA } from './components/BottomCTA';

<BottomCTA />
```

**Structure:**
```typescript
BottomCTA
├── Container
├── Headline
├── Description
└── CTA Button
```

**Styling:**
- Gradient background atau solid color
- Large typography
- Prominent button
- Responsive padding

---

## Utility Components

### ScrollToTop

Utility component untuk scroll ke top saat route change.

**Lokasi:** `App.tsx` (inline)

**Implementation:**
```typescript
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};
```

**Usage:**
```typescript
<Router>
  <ScrollToTop />
  {/* Other components */}
</Router>
```

---

### AnimatedRoutes

Wrapper untuk routes dengan page transitions.

**Lokasi:** `App.tsx`

**Implementation:**
```typescript
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Routes */}
      </Routes>
    </AnimatePresence>
  );
};
```

**Features:**
- Framer Motion page transitions
- Mode: "wait" (wait for exit before enter)
- Location-based key untuk proper animations

---

## Component Best Practices

### Styling Guidelines

**Consistent Patterns:**
```typescript
// Glassmorphism
className="bg-white/10 backdrop-blur-xl border border-white/20"

// Card design
className="bg-white/5 border border-white/10 rounded-2xl p-6"

// Hover states
className="hover:bg-white/20 transition-colors duration-300"
```

### Animation Guidelines

**Entrance Animations:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**Hover Animations:**
```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
```

**Page Transitions:**
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

### Responsive Design

**Breakpoints (Tailwind):**
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

**Mobile-First:**
```typescript
// Base: Mobile
// md: Tablet+
// lg: Desktop+

className="text-sm md:text-base lg:text-lg"
```

### TypeScript Types

**Common Patterns:**
```typescript
// Link items
interface NavLink {
  name: string;
  href: string;
}

// Card data
interface CardData {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

// Component props (example)
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}
```

## Component Extension Guide

### Adding New Components

**Step 1: Create Component File**
```bash
# In components/ folder
touch NewComponent.tsx
```

**Step 2: Basic Structure**
```typescript
import React from 'react';
import { motion } from 'framer-motion';

export const NewComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="..."
    >
      {/* Content */}
    </motion.div>
  );
};
```

**Step 3: Add to Index (optional)**
```typescript
// components/index.ts
export { NewComponent } from './NewComponent';
```

**Step 4: Import and Use**
```typescript
import { NewComponent } from './components/NewComponent';
```

### Modifying Existing Components

**Guidelines:**
1. Maintain existing props interface
2. Don't break backward compatibility
3. Update documentation
4. Test responsive behavior
5. Check animation performance

## Performance Considerations

**Optimization Tips:**

**Lazy Loading:**
```typescript
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
```

**Memoization:**
```typescript
export const Component = React.memo(() => {
  // Component code
});
```

**Callback Optimization:**
```typescript
const handleClick = useCallback(() => {
  // Handler code
}, [dependencies]);
```

**Animation Performance:**
- Use `transform` dan `opacity` untuk animasi
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` dengan hati-hati
- Limit concurrent animations

---

**Last Updated:** November 2025  
**Version:** 5.0  
**Maintainer:** OurCreativities Team
