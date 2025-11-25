# Dokumentasi Halaman

> Panduan lengkap untuk setiap halaman di OurCreativities v5.0

## Overview

Aplikasi OurCreativities terdiri dari 5 halaman utama, masing-masing dengan tujuan dan fitur unik. Semua halaman menggunakan React Router untuk navigation dan Framer Motion untuk transitions.

## Halaman-Halaman

### Home

**Lokasi:** `pages/Home.tsx`  
**Route:** `/`  
**Purpose:** Landing page utama, first impression untuk visitors

**Sections:**
1. **Hero Section**
   - Headline besar "Merangkai Imajinasi Kita"
   - Subtitle deskriptif
   - Two CTA buttons
   - Live status badge

2. **BentoGrid Section**
   - Showcase highlights dalam grid layout
   - Multiple content cards
   - Interactive hover states

3. **Bottom CTA**
   - Final call-to-action
   - Encourage engagement

**Features:**
- Animated entrance untuk all sections
- Smooth scroll behavior
- Responsive layout 
- Premium typography

**Data Requirements:**
- Tidak ada external data (static content)

**Performance:**
- Load time: ~0.9s
- Lighthouse: 96/100

---

### Karya

**Lokasi:** `pages/Karya.tsx`  
**Route:** `/karya`  
**Purpose:** Portfolio showcase untuk karya kreatif komunitas

**Layout:**
Masonry grid layout untuk display works dalam grid asymmetric yang visual menarik.

**Features:**

**Grid System:**
- Masonry/Pinterest-style layout
- Responsive columns (1-4 depending on screen)
- Lazy loading untuk images
- Infinite scroll (optional)

**Work Cards:**
- Image/video preview
- Title dan description
- Author information
- Like dan share buttons
- Spotlight badge untuk featured works

**Interactions:**
- Click card untuk detail view
- Like functionality
- Share functionality
- Filter by category/tag
- Search (basic)

**Media Support:**
- Images: JPG, PNG, WebP
- Videos: MP4, WebM
- Lazy loading untuk performance
- Thumbnail generation

**Data Structure:**
```typescript
interface Karya {
  id: string;
  title: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  author: string;
  authorAvatar?: string;
  createdAt: Date;
  likes: number;
  shares: number;
  isSpotlight: boolean;
  tags: string[];
  category: string;
}
```

**Performance Considerations:**
- Progressive image loading
- Virtual scrolling untuk large lists
- Optimized media delivery
- Caching strategy

---

### Tim

**Lokasi:** `pages/Tim.tsx`  
**Route:** `/tim`  
**Purpose:** Showcase team members dan contributors

**Layout:**
Grid card layout dengan team member profiles.

**Card Content:**
- Profile photo/avatar
- Name
- Role/position
- Short bio
- Social media links
- Email (optional)

**Features:**

**Team Grid:**
- Responsive grid (1-3 columns)
- Equal height cards
- Hover effects
- Smooth animations

**Member Card:**
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
  email?: string;
}
```

**Interactions:**
- Hover untuk reveal details
- Click social icons untuk open links
- Smooth entrance animations

**Design:**
- Glass morphism cards
- Consistent spacing
- Professional presentation
- Mobile-optimized

---

### Story (Cerita Kami)

**Lokasi:** `pages/Story.tsx`  
**Route:** `/story`  
**Purpose:** Brand storytelling, visi misi, perjalanan komunitas

**Layout:**
Magazine-style long-form content dengan rich typography.

**Sections:**

**1. Introduction**
- Opening statement
- Community values
- Mission statement

**2. Journey Timeline**
- Milestones dalam visual timeline
- Key moments
- Growth story

**3. Vision & Mission**
- Future goals
- Community impact
- Values dan principles

**4. Community Impact**
- Achievements
- Statistics
- Testimonials (optional)

**Design Elements:**
- Premium typography (Playfair Display)
- Large headlines
- Pull quotes
- Timeline visualization
- Scroll animations (subtle)

**Content Blocks:**
```typescript
interface StorySection {
  id: string;
  type: 'text' | 'quote' | 'timeline' | 'stats';
  title?: string;
  content: string;
  image?: string;
  data?: any;
}
```

**Reading Experience:**
- Optimal line length
- Clear hierarchy
- Breathing room (whitespace)
- Smooth scroll
- Progressive disclosure

---

### Info

**Lokasi:** `pages/Info.tsx`  
**Route:** `/info`  
**Purpose:** Contact information, FAQ, general information

**Sections:**

**1. Contact Information**
- Email address
- Social media links
- Location (if applicable)
- Operating hours

**2. FAQ Section**
- Common questions
- Accordion-style answers
- Searchable (future)

**3. Contact Form** (Optional/Future)
- Name field
- Email field
- Message textarea
- Submit button

**4. Social Media Grid**
- Icon links ke social platforms
- Follow counts (optional)
- Latest posts (future integration)

**Layout:**
```typescript
Info
├── Hero Section (Info Page)
├── Contact Cards
│   ├── Email Card
│   ├── Social Media Card
│   └── Location Card
├── FAQ Accordion
└── CTA Section
```

**Data Structure:**
```typescript
interface ContactInfo {
  email: string;
  social: {
    instagram: string;
    twitter: string;
    linkedin: string;
    github: string;
  };
  location?: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
```

---

## Common Features

### Page Transitions

Semua halaman menggunakan Framer Motion untuk smooth transitions:

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* Page content */}
</motion.div>
```

### Scroll to Top

Automatic scroll to top saat route change via `ScrollToTop` component.

### Responsive Design

Semua halaman responsive dengan breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### SEO Optimization

**Per-page Meta Tags:**
```html
<title>Page Title | Our Creativity</title>
<meta name="description" content="Page description" />
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
```

### Loading States

**Skeleton Screens:**
Placeholder content saat data loading (future implementation).

**Progress Indicators:**
Loading spinners untuk async operations.

---

## Page Development Guide

### Creating New Page

**Step 1: Create Page File**
```bash
# In pages/ folder
touch NewPage.tsx
```

**Step 2: Basic Structure**
```typescript
import React from 'react';
import { motion } from 'framer-motion';

export const NewPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20"
    >
      <h1>New Page</h1>
      {/* Content */}
    </motion.div>
  );
};
```

**Step 3: Add Route**
```typescript
// In App.tsx
import { NewPage } from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

**Step 4: Add to Navigation**
```typescript
// In Navbar.tsx
const navLinks = [
  // existing links
  { name: 'New Page', href: '/new-page' },
];
```

### Page Layout Pattern

**Recommended Structure:**
```typescript
<motion.div className="py-20">
  {/* Hero/Header */}
  <section className="mb-16">
    <h1>Page Title</h1>
    <p>Description</p>
  </section>

  {/* Main Content */}
  <section className="mb-16">
    {/* Content blocks */}
  </section>

  {/* CTA or Footer */}
  <section>
    <BottomCTA />
  </section>
</motion.div>
```

### Best Practices

**Performance:**
- Lazy load images
- Code split heavy components
- Optimize animations
- Minimize re-renders

**Accessibility:**
- Semantic HTML
- Proper heading hierarchy
- Alt text untuk images
- Keyboard navigation

**SEO:**
- Unique page titles
- Meta descriptions
- Structured data
- Canonical URLs

**User Experience:**
- Clear navigation
- Consistent design
- Fast interactions
- Mobile-friendly

---

## Data Management

### Current Approach

**Static Data:**
- Hard-coded dalam components
- No external API calls
- No database

### Future Approach

**CMS Integration:**
```typescript
// Example with Strapi
const Page = () => {
  const { data } = useQuery('pageContent', fetchPageContent);
  
  return <Content data={data} />;
};
```

**API Calls:**
```typescript
// Example API structure
GET /api/pages/home
GET /api/karya
GET /api/team
GET /api/story
```

---

## Testing Pages

### Manual Testing Checklist

**Per Page:**
- [ ] Renders without errors
- [ ] Responsive on all breakpoints
- [ ] Animations work smoothly
- [ ] Links navigate correctly
- [ ] Images load properly
- [ ] Text readable
- [ ] Accessibility compliant
- [ ] Performance acceptable

### Automated Testing (Future)

**Unit Tests:**
```typescript
describe('Home Page', () => {
  it('renders hero section', () => {
    render(<Home />);
    expect(screen.getByText(/Merangkai/i)).toBeInTheDocument();
  });
});
```

**E2E Tests:**
```typescript
test('navigate to karya page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Karya');
  await expect(page).toHaveURL('/karya');
});
```

---

**Last Updated:** November 2025  
**Version:** 5.0  
**Maintainer:** OurCreativities Team
