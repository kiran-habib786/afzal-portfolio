/**
 * Pro-Level Animation Variants
 * 
 * This file contains advanced Framer Motion animation variants
 * for creating smooth, professional animations throughout the portfolio.
 */

import { Variants, Transition } from 'framer-motion'

// ===========================================
// EASING CURVES (Pro-level, smooth easing)
// ===========================================

export const easings = {
  // Custom cubic-bezier curves for ultra-smooth animations
  smooth: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  smoothOut: [0, 0, 0.2, 1] as [number, number, number, number],
  smoothIn: [0.4, 0, 1, 1] as [number, number, number, number],
  bounce: [0.68, -0.55, 0.265, 1.55] as [number, number, number, number],
  elastic: [0.68, -0.6, 0.32, 1.6] as [number, number, number, number],
  
  // Named easing presets
  easeOutExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeOutCirc: [0.075, 0.82, 0.165, 1] as [number, number, number, number],
  easeInOutCubic: [0.645, 0.045, 0.355, 1] as [number, number, number, number],
} as const

// ===========================================
// SPRING PRESETS (Natural, physics-based)
// ===========================================

export const springs = {
  // Snappy - for buttons, toggles
  snappy: { type: 'spring' as const, stiffness: 400, damping: 30 },
  
  // Smooth - for page transitions
  smooth: { type: 'spring' as const, stiffness: 100, damping: 20 },
  
  // Bouncy - for attention-grabbing elements
  bouncy: { type: 'spring' as const, stiffness: 300, damping: 10 },
  
  // Gentle - for subtle movements
  gentle: { type: 'spring' as const, stiffness: 50, damping: 20 },
  
  // Fast - for micro-interactions
  fast: { type: 'spring' as const, stiffness: 500, damping: 35 },
}

// ===========================================
// HERO SECTION ANIMATIONS
// ===========================================

// Text reveal animation (word by word)
export const heroWordReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

export const heroWord: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

// Hero subtitle fade
export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: easings.easeOutExpo,
      delay: 0.6,
    },
  },
}

// Hero CTA buttons
export const heroCTA: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.easeOutExpo,
      delay: 0.8,
    },
  },
}

// Floating orb animation for hero background
export const floatingOrb = (delay: number = 0): Variants => ({
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: [0.3, 0.5, 0.3],
    scale: [1, 1.2, 1],
    x: [0, 30, 0],
    y: [0, -20, 0],
    transition: {
      opacity: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
      scale: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
      x: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
      y: {
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
    },
  },
})

// ===========================================
// PAGE TRANSITIONS
// ===========================================

export const pageEnter: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: easings.easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: 'blur(2px)',
    transition: {
      duration: 0.3,
      ease: easings.smoothIn,
    },
  },
}

// Slide from right
export const slideFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.3,
    },
  },
}

// ===========================================
// STAGGER ANIMATIONS (Enhanced)
// ===========================================

export const staggerContainerPro: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
      when: 'beforeChildren',
    },
  },
}

export const staggerItemPro: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.smooth,
  },
}

// Fade scale for cards
export const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOutExpo,
    },
  },
}

// ===========================================
// CARD ANIMATIONS
// ===========================================

export const cardHoverPro = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    transition: springs.snappy,
  },
}

// Glow effect on hover
export const glowHover = {
  rest: {
    boxShadow: '0 0 0 0 hsl(var(--primary) / 0)',
  },
  hover: {
    boxShadow: '0 0 30px 5px hsl(var(--primary) / 0.3)',
    transition: { duration: 0.3 },
  },
}

// ===========================================
// BUTTON ANIMATIONS
// ===========================================

export const buttonHoverPro = {
  rest: { 
    scale: 1,
    y: 0,
  },
  hover: { 
    scale: 1.03,
    y: -2,
    transition: springs.fast,
  },
  tap: { 
    scale: 0.97,
    y: 0,
    transition: { duration: 0.1 },
  },
}

// Shimmer effect for buttons
export const shimmer: Variants = {
  initial: {
    backgroundPosition: '-200% 0',
  },
  animate: {
    backgroundPosition: '200% 0',
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'linear',
    },
  },
}

// ===========================================
// SCROLL-TRIGGERED ANIMATIONS
// ===========================================

export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOutExpo,
    },
  },
}

export const scrollRevealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOutExpo,
    },
  },
}

export const scrollRevealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOutExpo,
    },
  },
}

// ===========================================
// PARALLAX EFFECTS
// ===========================================

export const parallaxY = (offset: number) => ({
  y: offset,
  transition: springs.gentle,
})

// ===========================================
// LOADING ANIMATIONS
// ===========================================

export const skeletonPulse: Variants = {
  initial: {
    opacity: 0.5,
  },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Spinner rotation
export const spinnerRotate: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

// ===========================================
// SOCIAL ICONS ANIMATIONS
// ===========================================

export const socialIconPro = {
  rest: { 
    scale: 1, 
    y: 0,
    rotate: 0,
  },
  hover: { 
    scale: 1.2, 
    y: -4,
    rotate: 5,
    transition: springs.snappy,
  },
  tap: {
    scale: 0.9,
    rotate: -5,
  },
}

// ===========================================
// BREADCRUMB ANIMATIONS
// ===========================================

export const breadcrumbContainerPro: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export const breadcrumbItemPro: Variants = {
  hidden: {
    opacity: 0,
    x: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: springs.snappy,
  },
}

// ===========================================
// SKILL BAR ANIMATIONS
// ===========================================

export const skillBarPro = (proficiency: number, delay: number = 0): Variants => ({
  hidden: { 
    width: 0,
    opacity: 0,
  },
  visible: {
    width: `${proficiency}%`,
    opacity: 1,
    transition: {
      width: {
        duration: 1,
        ease: easings.easeOutExpo,
        delay: delay + 0.3,
      },
      opacity: {
        duration: 0.3,
        delay,
      },
    },
  },
})

// ===========================================
// VIEWPORT SETTINGS
// ===========================================

export const viewportPro = {
  once: true,
  amount: 0.2,
  margin: '-100px 0px',
}

export const viewportFull = {
  once: true,
  amount: 0.5,
}

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

// Generate staggered delay
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
  return index * baseDelay
}

// Create custom spring transition
export const createSpring = (
  stiffness: number = 100,
  damping: number = 20,
  mass: number = 1
): Transition => ({
  type: 'spring',
  stiffness,
  damping,
  mass,
})
