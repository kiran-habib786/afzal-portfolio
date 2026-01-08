# 🎯 Professional Portfolio Development - Comprehensive Planning Guide

**Project:** Professional Developer Portfolio (Next.js 16+)  
**Status:** Planning Phase  
**Date:** January 2026  
**Framework:** Next.js 16 (App Router), TypeScript, Tailwind CSS  
**Design System:** shadcn/ui + Radix UI  

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Design System & Color Schemes](#design-system--color-schemes)
5. [Animation & Motion Strategy](#animation--motion-strategy)
6. [Data Architecture & Mock Data](#data-architecture--mock-data)
7. [Pages & Components Breakdown](#pages--components-breakdown)
8. [Development Phases](#development-phases)
9. [Best Practices & Guidelines](#best-practices--guidelines)
10. [Performance & Optimization](#performance--optimization)

---

## 1. Project Overview

### Vision
Create an **enterprise-level professional portfolio** that showcases expertise through:
- ✨ Modern, smooth, and professional UI/UX
- 🎨 Sophisticated color schemes with seamless dark/light mode
- 🎬 Pro-level animations (smooth, not overdone)
- 📱 Fully responsive and accessible
- ⚡ High performance (Core Web Vitals optimized)
- 🔧 Static site (no API routes) with structured mock data

### Key Features
- **5 Main Pages:** Home, About, Skills, Projects, Contact
- **Dark/Light Mode:** Globally managed via localStorage
- **Dynamic Content:** All data from organized mock data files
- **Email Integration:** Web3Forms for contact submissions
- **CV Download:** PDF download from contact page
- **Breadcrumb Navigation:** Professional navigation on all pages except home
- **Reusable Components:** Generic, configurable, and maintainable

---

## 2. Technology Stack

### Core Dependencies
```json
{
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "eslint": "^8.54.0",
    "@typescript-eslint/eslint-plugin": "^6.13.0"
  }
}
```

### Animation & Motion Libraries
```json
{
  "framer-motion": "^11.0.0",
  "gsap": "^3.12.2",
  "lenis": "^1.0.29"
}
```

### UI & Component Libraries
```json
{
  "radix-ui/react-*": "latest",
  "lucide-react": "^latest",
  "next-themes": "^0.2.1"
}
```

### Utilities & Helpers
```json
{
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.2.0",
  "web3forms": "^1.0.0"
}
```

---

## 3. Project Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with theme provider
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   └── page.tsx                  # About page
│   ├── skills/
│   │   ├── page.tsx                  # Skills overview page
│   │   └── [slug]/
│   │       └── page.tsx              # Skill detail page
│   ├── projects/
│   │   ├── page.tsx                  # Projects overview page
│   │   └── [slug]/
│   │       └── page.tsx              # Project detail page
│   ├── contact/
│   │   └── page.tsx                  # Contact page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts              # Contact form submission (serverless)
│   └── globals.css                   # Global styles + animations
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Navigation header (all pages)
│   │   ├── Footer.tsx                # Footer (all pages)
│   │   ├── PageHero.tsx              # Generic hero for all pages except home (with breadcrumb + bg animation)
│   │   ├── SocialLinks.tsx           # Social media links component
│   │   └── ThemeToggle.tsx           # Dark/light mode toggle
│   │
│   ├── home/
│   │   ├── HeroSection.tsx           # Hero with parallax & animations
│   │   ├── AboutSection.tsx          # Home about teaser
│   │   ├── FeaturedProjects.tsx      # Featured projects showcase
│   │   ├── SkillsShowcase.tsx        # Skills preview
│   │   ├── Testimonials.tsx          # Client testimonials/reviews
│   │   └── CTASection.tsx            # Call-to-action (get in touch)
│   │
│   ├── common/
│   │   ├── Card.tsx                  # Reusable card component
│   │   ├── Badge.tsx                 # Tag/badge component
│   │   ├── Button.tsx                # Custom button variants
│   │   ├── Section.tsx               # Section wrapper
│   │   ├── SectionHeading.tsx        # Section title + subtitle
│   │   └── LoadingState.tsx          # Skeleton loaders
│   │
│   ├── skills/
│   │   ├── SkillCard.tsx             # Skill card with proficiency
│   │   ├── SkillFilter.tsx           # Category filter
│   │   └── SkillDetail.tsx           # Detailed skill view
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx           # Project card (grid)
│   │   ├── ProjectFilter.tsx         # Filter by category/tech
│   │   └── ProjectDetail.tsx         # Detailed project view
│   │
│   └── contact/
│       ├── ContactForm.tsx           # Contact form with validation
│       └── CVDownload.tsx            # CV download button
│
├── lib/
│   ├── cn.ts                         # Utility for merging classNames
│   ├── constants.ts                  # Global constants
│   └── utils.ts                      # Helper functions
│
├── hooks/
│   ├── useTheme.ts                   # Theme hook
│   ├── useScrollPosition.ts          # Scroll position hook
│   ├── useMediaQuery.ts              # Responsive queries but noramally use the use tailwind for responsive overall
│   └── useAnimation.ts               # Animation helpers
│
├── data/
│   ├── projects.ts                   # Projects mock data
│   ├── skills.ts                     # Skills mock data
│   ├── testimonials.ts               # Testimonials mock data
│   ├── social.ts                     # Social media links data
│   ├── about.ts                      # About page content
│   ├── contact.ts                    # Contact page info
│   └── navigation.ts                 # Navigation items
│
├── styles/
│   ├── animations.css                # Custom animations
│   ├── themes.css                    # Color schemes
│   └── typography.css                # Font configurations
│
└── types/
    ├── project.ts                    # Project type definitions
    ├── skill.ts                      # Skill type definitions
    ├── testimonial.ts                # Testimonial types
    ├── social.ts                     # Social link types
    └── common.ts                     # Common types
```

---

## 4.5 PageHero Component (Generic Hero for Inner Pages)

### Purpose
A reusable, professional hero section for all pages except the home page, featuring:
- **Professional Breadcrumb Navigation** - Clean, animated path indicator
- **Page Title & Subtitle** - Dynamic content per page
- **Animated Background** - Subtle, professional gradient animation
- **Social Media Links** - Optional floating social icons

### PageHero Design Specifications

#### Visual Structure
```
┌─────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░ ANIMATED GRADIENT BG ░░░░░░░░░░░░░░░░░░░░  │
│                                                             │
│     Home > Projects > E-Commerce Platform   (Breadcrumb)    │
│                                                             │
│              ████ PAGE TITLE ████                          │
│           Subtitle or description text                      │
│                                                             │
│     [in] [f] [ig] [gh] [be]               (Social Icons)    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Animation Details
```typescript
// Background Animation
- Gradient mesh with 3-4 color stops
- Subtle position shift (translateX/Y: ±5%)
- Duration: 8-12 seconds infinite loop
- CSS-only for performance (no JS)

// Breadcrumb Animation
- Fade-in from left with stagger (0.1s per item)
- Chevron separator pulse on hover
- Active item subtle glow effect

// Title Animation
- Fade-in + slide up (y: 20px → 0)
- Duration: 0.6s with spring easing
- Subtitle delays by 0.2s

// Social Icons Animation
- Staggered entrance from bottom
- Hover: scale(1.1) + color shift
- Tooltip on hover (optional)
```

#### Props Interface
```typescript
interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs: BreadcrumbItem[]
  showSocialLinks?: boolean
  backgroundVariant?: 'default' | 'subtle' | 'vibrant'
  className?: string
}

interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}
```

#### Color Variants (Dark/Light Mode)
```css
/* Light Mode */
--hero-bg-start: hsl(220 60% 98%)
--hero-bg-mid: hsl(240 50% 96%)
--hero-bg-end: hsl(260 40% 97%)
--hero-gradient-accent: hsl(var(--primary) / 0.1)

/* Dark Mode */
--hero-bg-start: hsl(220 30% 8%)
--hero-bg-mid: hsl(240 25% 10%)
--hero-bg-end: hsl(260 20% 12%)
--hero-gradient-accent: hsl(var(--primary) / 0.15)
```

### Social Links Configuration
```typescript
// types/social.ts
interface SocialLink {
  id: string
  platform: 'linkedin' | 'github' | 'twitter' | 'instagram' | 'facebook' | 'dribbble' | 'behance' | 'youtube' | 'pinterest'
  url: string
  label: string
  icon: string // Lucide icon name or custom
}

// data/social.ts
export const socialLinks: SocialLink[] = [
  { id: '1', platform: 'linkedin', url: 'https://linkedin.com/in/username', label: 'LinkedIn', icon: 'Linkedin' },
  { id: '2', platform: 'github', url: 'https://github.com/username', label: 'GitHub', icon: 'Github' },
  { id: '3', platform: 'twitter', url: 'https://twitter.com/username', label: 'Twitter/X', icon: 'Twitter' },
  { id: '4', platform: 'instagram', url: 'https://instagram.com/username', label: 'Instagram', icon: 'Instagram' },
  { id: '5', platform: 'dribbble', url: 'https://dribbble.com/username', label: 'Dribbble', icon: 'Dribbble' },
  { id: '6', platform: 'behance', url: 'https://behance.net/username', label: 'Behance', icon: 'Behance' },
]
```

---

## 4. Design System & Color Schemes

### Color Philosophy
- **Professional & Elegant:** Not flashy, clean, sophisticated
- **Dual Theme:** Light and Dark mode with smooth transitions
- **Accessibility:** WCAG AA compliant contrast ratios
- **Enterprise Touch:** Corporate but modern and pro level feel

### Primary Color Schemes (3 Options)

#### Option 1: Modern Blue (Default - Recommended)
```css
/* Light Mode */
--background: 0 0% 100%
--foreground: 222.2 84% 4.9%
--primary: 221.2 83.2% 53.3%
--secondary: 212 95% 68%
--accent: 262 80% 50%
--muted: 210 40% 96%

/* Dark Mode */
--background: 222.2 84% 4.9%
--foreground: 0 0% 100%
--primary: 217.2 91.2% 59.8%
--secondary: 212 95% 68%
--accent: 262 80% 50%
--muted: 217.2 32.6% 17.5%
```

#### Option 2: Professional Slate (Alternative)
```css
/* Light Mode */
--background: 0 0% 100%
--foreground: 15 23% 21%
--primary: 15 86% 48%
--secondary: 15 74% 60%
--accent: 250 76% 52%
--muted: 220 13% 91%

/* Dark Mode */
--background: 15 23% 21%
--foreground: 0 0% 97%
--primary: 15 86% 48%
--secondary: 15 74% 60%
--accent: 250 76% 52%
--muted: 15 30% 23%
```

#### Option 3: Neutral Minimalist
```css
/* Light Mode */
--background: 0 0% 100%
--foreground: 0 0% 8%
--primary: 0 0% 8%
--secondary: 0 0% 30%
--accent: 213 100% 50%
--muted: 0 0% 94%

/* Dark Mode */
--background: 0 0% 8%
--foreground: 0 0% 98%
--primary: 0 0% 98%
--secondary: 0 0% 75%
--accent: 213 100% 50%
--muted: 0 0% 14%
```

### Implementation with shadcn/ui
```typescript
// lib/themes.ts
export const colorSchemes = {
  modern: { light: { /* ... */ }, dark: { /* ... */ } },
  slate: { light: { /* ... */ }, dark: { /* ... */ } },
  minimalist: { light: { /* ... */ }, dark: { /* ... */ } }
}

// components/layout/ThemeToggle.tsx
// Use next-themes for seamless switching + localStorage persistence
```

---

## 5. Animation & Motion Strategy

### Animation Philosophy
- **Subtle & Professional:** No flashy, distracting animations
- **Purpose-Driven:** Every animation serves UX function
- **Performance:** 60fps, GPU-accelerated
- **Accessibility:** Respects `prefers-reduced-motion`

### Core Animation Types

#### 1. Hero Section Animations (Framer Motion)
```typescript
// Entrance animations
- Fade-in + scale from 0.95
- Text character-by-character reveal
- Background gradient subtle shift
- Parallax effect on scroll

// Interactive hover effects
- CTA button: subtle scale + glow
- Image: gentle zoom + filter effect
```

#### 2. Scroll-Triggered Animations (Intersection Observer)
```typescript
// Elements animate in on scroll
- Cards fade-in + slide from bottom (staggered)
- Numbers count-up effect (for metrics)
- Progress bars fill on scroll
- Skill cards reveal from sides

// Libraries: framer-motion useInView, react-intersection-observer
```

#### 3. Smooth Scrolling (Lenis)
```typescript
// Global smooth scroll behavior
- Buttery-smooth page scrolling
- Velocity-based easing
- Momentum scrolling on mobile
// Note: Replace default scroll behavior across site
```

#### 4. Page Transitions (Framer Motion)
```typescript
// Between pages
- Fade + scale transition (300ms)
- Consistent entrance/exit
- No layout shift
```

#### 5. Micro-interactions
```typescript
// Small, delightful moments
- Button hover: color shift + underline grow
- Link hover: text glow effect
- Input focus: border color + shadow
- Form submission: success checkmark animation
```

### Animation Library Usage

#### Framer Motion (Primary)
```typescript
// Hero parallax
<motion.div
  animate={{ y: scrollY * 0.5 }}
  transition={{ type: "spring", damping: 20 }}
>

// Stagger children
<motion.div variants={containerVariants}>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants} />
  ))}
</motion.div>
```

#### GSAP (Advanced Timelines)
```typescript
// Complex, coordinated animations
// Use for hero parallax, timeline sequences
// Consider for performance-critical animations
```

#### Lenis (Global Smooth Scroll)
```typescript
// Initialize in root layout
// Override default browser scroll
// Mobile-friendly momentum scrolling
```

### Animation Configuration Examples
```typescript
// Standard transitions
const standardTransition = {
  duration: 0.3,
  ease: "easeInOut"
}

// Smooth spring
const springTransition = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

// Check prefers-reduced-motion
const prefersReducedMotion = 
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

const transition = prefersReducedMotion 
  ? { duration: 0 } 
  : standardTransition
```

---

## 6. Data Architecture & Mock Data

### Data Structure Philosophy
- **Type-Safe:** Full TypeScript definitions
- **Modular:** Organized by entity type
- **Scalable:** Easy to switch to real API later
- **Rich:** Includes all necessary fields for UI

### Type Definitions

#### Project Type
```typescript
// types/project.ts
export interface Project {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string
  longDescription?: string
  
  // Technologies
  technologies: string[]
  featuredTechnologies: string[]
  
  // Metadata
  role: string
  status: "Completed" | "In Progress" | "Planned"
  
  // Dates
  startDate: Date
  endDate: Date
  
  // Links
  liveUrl?: string
  repoUrl?: string
  figmaUrl?: string
  caseStudyUrl?: string
  
  // Media
  images: ProjectImage[]
  videoDemoUrl?: string
  
  // Content
  contributions: string[]
  challenges: string[]
  learnings: string[]
  
  // Metrics
  metrics?: {
    users?: number
    performance?: string
    conversion?: string
    engagement?: string
  }
  
  // Organization
  featured: boolean
  order: number
  tags: string[]
  category: string
  isOpenSource: boolean
  license?: string
  
  // SEO
  metaDescription?: string
  metaKeywords?: string[]
}

export interface ProjectImage {
  url: string
  alt: string
  caption?: string
  isFeatured: boolean
}
```

#### Skill Type
```typescript
// types/skill.ts
export interface Skill {
  id: string
  name: string
  slug: string
  
  // Categorization
  category: "Frontend" | "Backend" | "Tools" | "Design"
  subcategory?: string
  
  // Proficiency
  proficiency: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  proficiencyLabel: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  yearsOfExperience: number
  
  // Description
  description: string
  detailedDescription?: string
  
  // Visual
  icon: string // lucide icon name or custom SVG
  color?: string
  
  // Relations
  relatedProjects: string[] // Project IDs
  relatedSkills?: string[] // Skill IDs
  
  // Organization
  featured: boolean
  order: number
}
```

#### Testimonial Type
```typescript
// types/testimonial.ts
export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  image: string
  content: string
  rating: 1 | 2 | 3 | 4 | 5
  date: Date
  link?: string
  featured: boolean
  order: number
}
```

### Mock Data Files

#### Projects Data
```typescript
// data/projects.ts
export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "ecommerce-nextjs-2025",
    shortDescription: "Full-stack online store with payment integration",
    description: "Built a complete e-commerce solution...",
    longDescription: "Comprehensive description...",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
    featuredTechnologies: ["Next.js", "Stripe", "MongoDB"],
    role: "Full-Stack Developer & Designer",
    status: "Completed",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-06-15"),
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/user/repo",
    images: [
      {
        url: "https://images.unsplash.com/...",
        alt: "Homepage",
        isFeatured: true,
        caption: "Clean product grid"
      }
    ],
    contributions: [
      "Designed responsive UI",
      "Integrated Stripe checkout",
      "Built admin dashboard"
    ],
    challenges: ["Concurrent cart updates", "Secure webhooks"],
    learnings: ["Optimistic UI updates", "Error handling"],
    metrics: {
      users: 1200,
      performance: "PageSpeed: 98/100",
      conversion: "4.2%"
    },
    featured: true,
    order: 1,
    tags: ["E-commerce", "Full-Stack"],
    category: "Full-Stack",
    isOpenSource: true,
    license: "MIT",
    metaDescription: "Full-stack e-commerce platform",
    metaKeywords: ["Next.js", "E-commerce", "Stripe"]
  }
  // More projects...
]
```

#### Skills Data
```typescript
// data/skills.ts
export const skills: Skill[] = [
  {
    id: "1",
    name: "Next.js",
    slug: "nextjs",
    category: "Frontend",
    subcategory: "Framework",
    proficiency: 9,
    proficiencyLabel: "Expert",
    yearsOfExperience: 3,
    description: "App Router, Server Components, SSR/SSG/ISR",
    detailedDescription: "Comprehensive Next.js expertise...",
    icon: "nextjs",
    color: "from-blue-600 to-blue-400",
    relatedProjects: ["1", "2"],
    featured: true,
    order: 1
  }
  // More skills...
]
```

#### Testimonials Data
```typescript
// data/testimonials.ts
export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "John Smith",
    role: "Product Manager",
    company: "Tech Startup",
    image: "https://images.unsplash.com/...",
    content: "Exceptional developer with great attention to detail...",
    rating: 5,
    date: new Date("2025-12-15"),
    featured: true,
    order: 1
  }
  // More testimonials...
]
```

#### About Content
```typescript
// data/about.ts
export const aboutContent = {
  intro: "Hi, I'm Afzal...",
  summary: "Full-stack developer specializing in...",
  vision: "I'm passionate about building...",
  approach: "My approach combines...",
  highlights: [
    "10+ years experience",
    "50+ successful projects",
    "Team lead experience"
  ],
  certifications: [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon",
      date: "2023"
    }
  ],
  education: [
    {
      degree: "Bachelor in Computer Science",
      school: "University Name",
      year: "2015"
    }
  ]
}
```

---

## 7. Pages & Components Breakdown

### 7.1 Home Page (`/`)

#### Layout Structure
```
┌─────────────────────────────────┐
│         Header (Fixed)          │
├─────────────────────────────────┤
│                                 │
│       Hero Section              │
│   (Parallax + Animations)       │
│                                 │
├─────────────────────────────────┤
│                                 │
│     Featured Projects (3-4)     │
│     (Scrollable cards)          │
│                                 │
├─────────────────────────────────┤
│                                 │
│    Skills Preview (6-8)         │
│    (Grid + Categories)          │
│                                 │
├─────────────────────────────────┤
│                                 │
│    Testimonials Section         │
│    (Carousel/Slider)            │
│                                 │
├─────────────────────────────────┤
│   About Teaser + CTA Button     │
├─────────────────────────────────┤
│          Footer                 │
└─────────────────────────────────┘
```

#### Components
- **Header:** Navigation, logo, theme toggle
- **HeroSection:** Main headline, subheadline, CTA, background animation
- **FeaturedProjects:** Card grid (3-4 featured projects)
- **SkillsShowcase:** Category tabs + skill badges
- **Testimonials:** Carousel with auto-scroll + navigation
- **CTASection:** About teaser + "Let's Work Together" button
- **Footer:** Links, social, copyright

#### Animation Details
```typescript
// Hero Section
- Background gradient subtle animation
- Title: staggered character reveal
- Subtitle: fade-in delay
- CTA button: pulse effect on mount
- Parallax effect on scroll

// Featured Projects
- Each card: staggered entrance from bottom
- Hover: subtle lift + shadow expand

// Skills
- Each skill: reveal animation on scroll
- Progress bar: fill animation

// Testimonials
- Auto-scroll with pause on hover
- Smooth transition between slides
```

### 7.2 About Page (`/about`)

#### Sections
1. **Breadcrumb** - With smooth animation
2. **Hero Section** - About title + intro
3. **About Content** - Multi-column text + highlights
4. **Stats Section** - Key metrics with count-up animation
5. **Values/Approach** - Visual cards explaining philosophy
6. **Timeline** - Visual timeline of career progression
7. **CTA Section** - Call to action to projects/contact
8. **Footer**

#### Components
- **BreadcrumbNav:** Professional breadcrumb with animation
- **SectionHeading:** Reusable section titles
- **ContentCard:** Text + icon cards
- **Timeline:** Career milestones
- **Stats:** Metric counters

### 7.3 Skills Page (`/skills`)

#### Features
- **Grid Display:** All skills in filterable grid
- **Category Filters:** Filter by Frontend/Backend/Tools/Design
- **Sorting Options:** By proficiency, experience, alphabetical
- **Search:** Quick skill search
- **Detail Navigation:** Click skill to see related projects

#### Layout
```
Breadcrumb
Header + Filters + Search
┌──────────────────────────────────┐
│ Skill Card  │ Skill Card │ Skill │
├──────────────────────────────────┤
│ Skill Card  │ Skill Card │ Skill │
└──────────────────────────────────┘
CTA to Projects
Footer
```

#### Components
- **SkillCard:** Name, proficiency (visual bar), years, icon, category
- **SkillFilter:** Category filter buttons
- **SkillSearch:** Search input with live filtering
- **SkillDetail:** Modal/page showing related projects

### 7.4 Skills Detail Page (`/skills/[slug]`)

#### Content
- **Header:** Skill name, proficiency level, years of experience
- **Description:** Detailed explanation
- **Related Projects:** Grid of projects using this skill
- **Technologies:** Related/complementary skills
- **Resources:** Links to courses, docs, tutorials (optional)
- **Navigation:** Previous/Next skill navigation

### 7.5 Projects Page (`/projects`)

#### Features
- **Grid Display:** All projects in filterable grid (2-3 columns)
- **Filters:** By category, technology, status
- **Search:** Project title/description search
- **Sorting:** By date, featured, popularity
- **Featured Badge:** Highlight featured projects

#### Layout
```
Breadcrumb
Header + Filters + Search + Sort
┌─────────────────────────────────┐
│  Project Card   │  Project Card │
├─────────────────────────────────┤
│  Project Card   │  Project Card │
└─────────────────────────────────┘
Footer
```

#### Components
- **ProjectCard:** Title, image, tech tags, short description, CTA
- **ProjectFilter:** Filter by category/tech
- **ProjectSearch:** Search input
- **ProjectSort:** Sort options

### 7.6 Project Detail Page (`/projects/[slug]`)

#### Sections
1. **Breadcrumb & Navigation** - Prev/Next project
2. **Hero Section** - Project title, featured image, metadata
3. **Overview** - Role, status, dates, links (live, repo, case study)
4. **Technologies** - Grid of technology badges with details
5. **Challenge Section** - Problem statement + challenges
6. **Solution Section** - Approach and solution details
7. **Gallery** - Full project image gallery
8. **Video Demo** - Embedded video if available
9. **Metrics** - Performance, users, conversions, etc.
10. **Key Learnings** - Takeaways and lessons
11. **Related Projects** - Similar projects carousel
12. **CTA** - "Check other projects" or "Contact me"

#### Components
- **ProjectHeader:** Title, featured image, metadata
- **TechGrid:** Technology badges with descriptions
- **ImageGallery:** Lightbox gallery
- **VideoEmbed:** Responsive video player
- **MetricsDisplay:** Metrics cards
- **RelatedProjects:** Related projects carousel

### 7.7 Contact Page (`/contact`)

#### Sections
1. **Breadcrumb**
2. **Hero Section** - "Get in Touch" headline
3. **Contact Info Cards** - Email, phone, location (3 cards)
4. **Contact Form:**
   - Name, Email, Subject, Message (required)
   - Category dropdown (Project Inquiry, Question, Collaboration)
   - File upload (optional)
   - Submit button with loading state
   - Success/Error messages
5. **Calendar Integration** (optional) - Available times
6. **CV Download** - Prominent download button
7. **Social Links** - Connect on other platforms
8. **Footer**

#### Components
- **ContactForm:** Form with validation (Web3Forms integration)
- **FormField:** Reusable form input components
- **FormStatus:** Success/error message display
- **CVDownload:** PDF download button with analytics
- **SocialLinks:** Icon links to social profiles

#### Web3Forms Integration
```typescript
// Configuration
const WEB3FORMS_API_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

// Form submission
async function submitForm(data: FormData) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: new FormData({
      ...data,
      access_key: WEB3FORMS_API_KEY,
      from_name: "Portfolio Contact",
      subject: `New message from ${data.name}`
    })
  })
}
```

---

## 8. Development Phases

### Phase 1: Foundation (Weeks 1-2)

#### Objectives
- Set up project structure and tooling
- Establish design system and component library
- Configure theme system (dark/light mode)
- Create mock data structure
- Build reusable component system

#### Deliverables

1. **Project Setup & Configuration**
   - Install all dependencies
   - Configure TypeScript (`tsconfig.json`)
   - Set up ESLint + Prettier
   - Configure Tailwind CSS with custom themes
   - Set up Path aliases (@/components, etc.)

2. **Design System Implementation**
   ```
   - tailwind.config.ts with custom color variables
   - CSS custom properties for themes
   - Component library foundation (Button, Card, Input, etc.)
   - Typography scales and font configurations
   - Spacing/sizing system
   ```

3. **Theme System Setup**
   ```typescript
   // lib/theme.ts
   - Define all color schemes (3 options)
   - Create theme provider component
   - Implement localStorage persistence
   - Export useTheme hook
   - Configure next-themes integration
   ```

4. **Mock Data Structure**
   - Create TypeScript interfaces (types/\*)
   - Populate data files (data/\*)
   - Set up data export utilities
   - Create sample data for all entities

5. **Core Components Library**
   ```
   - Layout components (Header, Footer, Breadcrumb)
   - Common UI (Button, Card, Badge, Input)
   - Section wrappers (Section, SectionHeading)
   - Loading states (Skeleton, LoadingSpinner)
   - Form components (FormField, FormError)
   ```

6. **Global Styles & Animations**
   ```css
   - Global CSS variables for tokens
   - Animation definitions (fade, slide, etc.)
   - Utility classes for common patterns
   - Accessibility configurations
   ```

#### Best Practices Applied
- ✅ Modular component structure
- ✅ Type-safe data architecture
- ✅ Semantic HTML
- ✅ Accessibility-first approach
- ✅ Performance optimization (CSS class reuse)
- ✅ Dark mode planning from start

#### Files to Create
```
src/types/project.ts
src/types/skill.ts
src/types/testimonial.ts
src/types/common.ts

src/data/projects.ts
src/data/skills.ts
src/data/testimonials.ts
src/data/about.ts
src/data/navigation.ts

src/lib/cn.ts
src/lib/constants.ts
src/lib/theme.ts

src/hooks/useTheme.ts
src/hooks/useMediaQuery.ts
src/hooks/useScrollPosition.ts

src/components/layout/Header.tsx
src/components/layout/Footer.tsx
src/components/layout/Breadcrumb.tsx
src/components/layout/ThemeToggle.tsx

src/components/common/Button.tsx
src/components/common/Card.tsx
src/components/common/Badge.tsx
src/components/common/Section.tsx
src/components/common/SectionHeading.tsx

src/styles/themes.css
src/styles/animations.css

tailwind.config.ts (update)
tsconfig.json (update)
```

---

### Phase 2: Page Development (Weeks 3-4)

#### Objectives
- Build all page structures
- Implement core content sections
- Add page-specific components
- Integrate routing and navigation
- Implement basic animations

#### Deliverables

1. **Layout Implementation**
   - Update root layout with theme provider
   - Fix header/footer across all pages
   - Implement responsive navigation

2. **Home Page**
   - Hero section with basic animations
   - Featured projects section
   - Skills showcase
   - Testimonials carousel (basic)
   - CTA section
   - All connected to mock data

3. **About Page**
   - Page header and intro
   - About content sections
   - Timeline (if included)
   - Statistics section

4. **Skills Page**
   - Skills grid layout
   - Category filters
   - Search functionality
   - Card components

5. **Projects Page**
   - Projects grid layout
   - Category/tech filters
   - Search functionality
   - Card components

6. **Contact Page**
   - Contact form structure
   - Form validation setup
   - Web3Forms integration (basic)
   - CV download setup

7. **Detail Pages**
   - Skill detail page template
   - Project detail page template
   - Navigation between details

#### Animation Implementation
- ✅ Page entrance animations
- ✅ Section reveal on scroll (Intersection Observer)
- ✅ Basic hover effects
- ✅ Breadcrumb animations
- ✅ Form input animations

#### Best Practices
- ✅ Reuse components from Phase 1
- ✅ Data-driven content (from mock data)
- ✅ Responsive design mobile-first
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support

---

### Phase 3: Advanced Animations (Weeks 5-6)

#### Objectives
- Implement sophisticated animations using Framer Motion, GSAP
- Add smooth scrolling with Lenis
- Create parallax effects
- Add micro-interactions
- Optimize animation performance

#### Deliverables

1. **Framer Motion Setup**
   ```typescript
   - Hero section parallax animation
   - Staggered item animations
   - Page transition animations
   - Scroll-triggered reveals
   - Spring physics animations
   ```

2. **GSAP Integration** (Optional - for complex timelines)
   ```typescript
   - Advanced hero animations
   - Timeline-based sequences
   - Performance-critical animations
   ```

3. **Lenis Smooth Scroll**
   - Global smooth scroll behavior
   - Velocity-based easing
   - Mobile optimization

4. **Micro-interactions**
   - Button hover/click animations
   - Link underline effects
   - Form field interactions
   - Success/error animations

5. **Accessibility Considerations**
   ```typescript
   - Respect prefers-reduced-motion
   - Keyboard navigation smooth transitions
   - Focus indicators animated
   ```

#### Animation Details by Component

**Hero Section**
```typescript
- Background gradient animation (subtle, 8-10s loop)
- Title: character-by-character reveal (stagger 0.05s)
- Subtitle: fade-in with delay
- CTA button: pulse effect on mount, scale on hover
- Parallax on scroll (damping: 20, stiffness: 100)
```

**Cards (Skills, Projects, Testimonials)**
```typescript
- Entrance: fade-in + slideUp from y:20
- Staggered: each card delays by 0.1s
- Hover: lift effect (y: -4px), shadow expand
- No animation if prefers-reduced-motion
```

**Testimonial Carousel**
```typescript
- Auto-scroll every 5s
- Pause on hover
- Smooth slide transition (300ms)
- Navigation arrows with hover effects
```

**Form Inputs**
```typescript
- Border color transition on focus
- Label animation (float up on focus/filled)
- Error message: slide in from above
- Success checkmark: scale + rotate animation
```

#### Files to Update/Create
```
src/components/home/HeroSection.tsx (with animations)
src/components/home/FeaturedProjects.tsx (with animations)
src/components/home/Testimonials.tsx (carousel)
src/components/common/Card.tsx (hover effects)
src/components/contact/ContactForm.tsx (form animations)

src/hooks/useAnimation.ts (animation utilities)
src/lib/animations.ts (animation variants)

src/app/layout.tsx (Lenis setup)
src/styles/animations.css (keyframes)
```

---

### Phase 4: Polish & Optimization (Weeks 7-8)

#### Objectives
- Performance optimization
- SEO implementation
- Accessibility audit
- Testing and bug fixes
- Documentation

#### Deliverables

1. **Performance Optimization**
   - Image optimization (next/image)
   - Code splitting and lazy loading
   - Bundle analysis
   - Core Web Vitals optimization (LCP < 2.5s, FID < 100ms, CLS < 0.1)
   - CSS optimization (purge unused)
   - Font optimization (system fonts or optimized web fonts)

2. **SEO Implementation**
   - Metadata for all pages
   - Open Graph tags
   - Structured data (JSON-LD)
   - Sitemap generation
   - robots.txt
   - Meta descriptions

3. **Accessibility Audit**
   - WCAG 2.1 AA compliance
   - Color contrast verification
   - Keyboard navigation testing
   - Screen reader testing
   - Form accessibility
   - ARIA labels

4. **Testing**
   - Manual testing on multiple devices
   - Cross-browser testing
   - Form submission testing
   - Dark/light mode testing
   - Animation performance testing

5. **Documentation**
   - Component storybook (optional)
   - Component prop documentation
   - Setup instructions
   - Deployment guide
   - Customization guide

6. **Final Refinements**
   - Color scheme validation
   - Animation timing adjustments
   - Responsive breakpoints verification
   - Mobile touch optimizations
   - Error boundary implementations

#### Performance Metrics Target
- ✅ Lighthouse Score: 95+
- ✅ LCP: < 2.5s
- ✅ FID: < 100ms
- ✅ CLS: < 0.1
- ✅ Bundle Size: < 150KB (main)

---

## 9. Best Practices & Guidelines

### Next.js Best Practices

#### 1. App Router Usage
```typescript
// ✅ Use App Router (Next.js 13+)
// ✅ Leverage Server Components by default
// ✅ Use Client Components only when necessary
// ❌ Avoid unnecessary Client components at top level

// layout.tsx - Server Component
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

// page.tsx - Server Component
export default function Page() {
  // Can access database directly
  const data = getDataSync()
  return <div>{data}</div>
}

// components/Interactive.tsx - Client Component
'use client'
export function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

#### 2. Image Optimization
```typescript
// ✅ Use next/image for optimization
import Image from "next/image"

export function ProjectCard({ image }) {
  return (
    <Image
      src={image.url}
      alt={image.alt}
      width={400}
      height={300}
      priority={isFeatured}
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
    />
  )
}

// ❌ Avoid regular <img> tags for website images
```

#### 3. Dynamic Imports
```typescript
// ✅ Lazy load heavy components
import dynamic from "next/dynamic"

const HeavyChart = dynamic(() => import("@/components/Chart"), {
  loading: () => <div>Loading...</div>
})

// ❌ Don't import all components at top level
```

#### 4. Metadata Management
```typescript
// app/layout.tsx
export const metadata = {
  title: "Afzal - Full-Stack Developer",
  description: "Professional portfolio showcasing...",
  openGraph: {
    title: "Afzal - Full-Stack Developer",
    description: "...",
    url: "https://afzal.dev",
    type: "website"
  }
}

// app/projects/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      image: project.images[0].url
    }
  }
}
```

#### 5. Route Organization
```
// Good structure
app/
├── (marketing)/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── projects/
│   └── contact/
└── api/
    └── contact/

// Groups related routes for shared layouts
```

### Component Best Practices

#### 1. Component Composition
```typescript
// ✅ Prefer composition over complex props
<Section>
  <SectionHeading title="Projects" />
  <ProjectGrid projects={featured} />
  <CTAButton />
</Section>

// ❌ Avoid mega-components with many props
<ProjectsSection
  title="Projects"
  featured={projects}
  showCTA={true}
  ctaText="View All"
  ctaLink="/projects"
  // ...50 more props
/>
```

#### 2. Props and TypeScript
```typescript
// ✅ Export prop types, use const assertions
export type CardProps = {
  title: string
  description?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
} & React.HTMLAttributes<HTMLDivElement>

export const Card = ({
  title,
  description,
  variant = "primary",
  ...props
}: CardProps) => {
  return <div {...props}>{title}</div>
}

// ❌ Don't use any, be specific with types
```

#### 3. Error Boundaries
```typescript
// 'use client'
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  fallback?: ReactNode
}

export class ErrorBoundary extends React.Component<Props> {
  // ...implementation
}
```

### Animation Best Practices

#### 1. Performance First
```typescript
// ✅ Use transform and opacity for animations
// These are GPU-accelerated
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// ❌ Avoid animating layout properties
// These cause layout recalculation
// Don't animate: width, height, left, top, etc.
```

#### 2. Respect User Preferences
```typescript
// ✅ Always check prefers-reduced-motion
export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false)
  
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(media.matches)
    
    const handler = (e) => setPrefersReduced(e.matches)
    media.addEventListener("change", handler)
    return () => media.removeEventListener("change", handler)
  }, [])
  
  return prefersReduced
}

// Usage
const transition = prefersReduced ? { duration: 0 } : defaultTransition
```

#### 3. Animation Timing
```typescript
// ✅ Use consistent timing across app
export const ANIMATION_TIMINGS = {
  fast: 0.15,      // UI feedback
  normal: 0.3,     // Standard transitions
  slow: 0.5,       // Purposeful animations
  verySlow: 0.8    // Hero animations
}

// ✅ Spring physics for natural motion
const springVariant = {
  type: "spring",
  damping: 20,
  stiffness: 100
}

// ❌ Don't use arbitrary timing values
```

### Accessibility Best Practices

#### 1. Semantic HTML
```typescript
// ✅ Use semantic elements
<section>
  <h1>Main Title</h1>
  <article>Content</article>
</section>

<button onClick={handleClick}>Action</button>
<a href="/about">Link</a>

// ❌ Avoid
<div onClick={handleClick}>Action</div>
<div role="link">Link</div>
```

#### 2. ARIA Labels
```typescript
// ✅ Add context with ARIA
<button
  aria-label="Close menu"
  onClick={onClose}
>
  ✕
</button>

<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  Form submitted successfully
</div>

// ❌ Icon-only buttons without labels
<button onClick={onClose}>✕</button>
```

#### 3. Focus Management
```typescript
// ✅ Visible focus indicators
// In globals.css
button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

// ✅ Focus trap in modals
// Use libraries like focus-trap-react
```

### TypeScript Best Practices

#### 1. Strict Mode
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```

#### 2. Utility Types
```typescript
// ✅ Use utility types for DRY code
type ReadonlyProject = Readonly<Project>
type ProjectWithoutId = Omit<Project, 'id'>
type ProjectPreview = Pick<Project, 'id' | 'title' | 'slug'>
type OptionalProject = Partial<Project>

// ✅ Create reusable utility types
export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
}
```

### State Management Best Practices

#### 1. Use Built-in Solutions
```typescript
// ✅ Context API for theme, global settings
'use client'
import { createContext, useContext } from 'react'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

// ✅ localStorage for persistence
useEffect(() => {
  localStorage.setItem('theme', theme)
}, [theme])

// ❌ Don't use Redux for simple state
// ❌ Don't over-complicate state management
```

---

## 10. Performance & Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms (or INP < 200ms)
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Strategies

#### 1. Image Optimization
```typescript
// Use Next.js Image component
// Benefits: lazy loading, responsive, WebP
import Image from 'next/image'

// Set sizes for responsive images
<Image
  src={url}
  alt={alt}
  width={400}
  height={300}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={isAboveFold}
/>

// Use placeholders for better UX
<Image
  src={url}
  alt={alt}
  placeholder="blur"
  blurDataURL={blurDataUrl}
/>
```

#### 2. Bundle Size Reduction
```typescript
// Analyze bundle
// npm run build -- --analyze

// Use dynamic imports for heavy components
import dynamic from 'next/dynamic'
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <SkeletonLoader />
})

// Tree-shake unused code
// Remove unused CSS classes
// Use CSS-in-JS carefully (can increase bundle)
```

#### 3. Font Optimization
```typescript
// Use system fonts (fastest)
export const metadata = {
  fonts: {
    system: ['ui-sans-serif', 'system-ui', 'sans-serif']
  }
}

// Or use next/font
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent FOUT
  weight: ['400', '600', '700']
})
```

#### 4. Script Optimization
```typescript
// Non-critical scripts: defer loading
<script
  src="analytics.js"
  strategy="lazyOnload"
/>

// Third-party scripts: use Script component
import Script from 'next/script'

<Script
  src="external-library.js"
  strategy="afterInteractive"
/>
```

#### 5. Caching Strategy
```typescript
// Cache static content
// Configure in next.config.ts
export const config = {
  staticPageGenerationTimeout: 60,
  headers: {
    "Cache-Control": "public, max-age=3600"
  }
}

// ISR for semi-dynamic content
export const revalidate = 60 // Revalidate every 60 seconds
```

### Optimization Checklist

#### Before Launch
- [ ] Lighthouse score 95+
- [ ] LCP < 2.5s (measured on 4G)
- [ ] Bundle size analyzed and optimized
- [ ] Images optimized (WebP, responsive)
- [ ] CSS purged (no unused classes)
- [ ] Fonts optimized (system or optimized web fonts)
- [ ] All pages tested on mobile
- [ ] No console errors or warnings
- [ ] WCAG AA compliance verified
- [ ] SEO metadata complete
- [ ] Performance monitored (Vercel Analytics)

---

## 11. Deployment & Hosting

### Recommended Hosting: Vercel
```bash
# Deploy from GitHub
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push to main
4. Built-in performance monitoring
5. Environment variables configured
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=https://afzal.dev
```

### Pre-deployment Checklist
- [ ] All environment variables set
- [ ] Build succeeds locally and in CI
- [ ] No console errors or warnings
- [ ] Performance metrics acceptable
- [ ] SEO metadata complete
- [ ] Accessibility audit passed
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] Error tracking configured (Sentry)

---

## 12. Maintenance & Updates

### Regular Tasks
- [ ] Monitor Core Web Vitals (monthly)
- [ ] Update dependencies (quarterly)
- [ ] Backup content/data (monthly)
- [ ] Test contact form (weekly)
- [ ] Check broken links (monthly)
- [ ] Update testimonials (as received)
- [ ] Add new projects (as completed)
- [ ] Update skills proficiency (as improved)

### Version Control Best Practices
```bash
# Branch naming
feature/component-name
fix/issue-description
refactor/module-name
chore/task-description

# Commit messages
"feat: add hero section animation"
"fix: resolve layout shift on mobile"
"refactor: extract animation utilities"
"chore: update dependencies"
```

---

## 13. File Templates

### Component Template
```typescript
// components/ComponentName.tsx
'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type ComponentNameProps = {
  children: ReactNode
  className?: string
  // ...specific props
} & React.HTMLAttributes<HTMLDivElement>

export function ComponentName({
  children,
  className,
  ...props
}: ComponentNameProps) {
  return (
    <div
      className={cn(
        // base styles
        'p-4 rounded-lg',
        // conditional styles
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

### Page Template
```typescript
// app/page-name/page.tsx
import { Metadata } from 'next'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { Section } from '@/components/common/Section'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for SEO'
}

export default function PageName() {
  return (
    <>
      <Breadcrumb />
      <Section>
        {/* Page content */}
      </Section>
    </>
  )
}
```

### Hook Template
```typescript
// hooks/useHookName.ts
'use client'

import { useEffect, useState } from 'react'

export function useHookName() {
  const [state, setState] = useState(null)

  useEffect(() => {
    // Hook logic
  }, [])

  return { state }
}
```

---

## 14. Summary & Key Takeaways

### Core Principles
1. **Professional First:** Every design decision prioritizes professionalism
2. **Performance-Focused:** Optimize from the start, not after
3. **Accessibility Always:** Build for all users from day one
4. **Animation Purposeful:** Every animation serves UX, not decoration
5. **Modular & Scalable:** Plan for growth and maintenance
6. **Best Practices:** Follow Next.js and React conventions
7. **Type-Safe:** Leverage TypeScript throughout
8. **Dark/Light First:** Theme system from foundation
9. **Data-Driven:** Mock data structure is production-ready
10. **Enterprise Ready:** Enterprise-level code quality

### Success Criteria
✅ Professional look rivaling top developers  
✅ Enterprise-level touch and quality  
✅ Smooth, performant animations  
✅ Excellent Core Web Vitals  
✅ Full accessibility compliance  
✅ Easy to update and customize  
✅ Modern tech stack best practices  
✅ Portfolio-quality code  

---

## 15. Quick Reference: File Checklist

### Phase 1 - Foundation
- [ ] `tsconfig.json` - TypeScript configuration
- [ ] `tailwind.config.ts` - Tailwind + custom themes
- [ ] `next.config.ts` - Next.js configuration
- [ ] `src/types/*.ts` - All type definitions
- [ ] `src/data/*.ts` - Mock data files
- [ ] `src/lib/*.ts` - Utility functions
- [ ] `src/hooks/*.ts` - Custom hooks
- [ ] `src/components/layout/*.tsx` - Layout components
- [ ] `src/components/common/*.tsx` - Reusable UI components
- [ ] `src/styles/*.css` - Global styles and animations

### Phase 2 - Pages & Content
- [ ] `src/app/layout.tsx` - Root layout updated
- [ ] `src/app/page.tsx` - Home page
- [ ] `src/app/about/page.tsx` - About page
- [ ] `src/app/skills/page.tsx` - Skills page
- [ ] `src/app/skills/[slug]/page.tsx` - Skill detail
- [ ] `src/app/projects/page.tsx` - Projects page
- [ ] `src/app/projects/[slug]/page.tsx` - Project detail
- [ ] `src/app/contact/page.tsx` - Contact page

### Phase 3 - Advanced Features
- [ ] Update component files with animations
- [ ] Add Framer Motion setup
- [ ] Add Lenis smooth scroll
- [ ] Implement micro-interactions

### Phase 4 - Polish
- [ ] Metadata for all pages
- [ ] Lighthouse audit
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Testing documentation

---

**This comprehensive plan is ready for implementation. Follow the phases sequentially, ensuring each phase is complete before moving to the next. This ensures a professional, optimized, enterprise-level portfolio.**

