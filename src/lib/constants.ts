// Global constants for the portfolio

// Animation durations (in seconds)
export const ANIMATION_DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.8,
} as const

// Animation delays (in seconds)
export const ANIMATION_DELAY = {
  stagger: 0.1,
  short: 0.2,
  medium: 0.4,
  long: 0.6,
} as const

// Breakpoints (should match Tailwind config)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Site configuration
export const SITE_CONFIG = {
  name: 'Afzal',
  title: 'Afzal | Full-Stack Developer',
  description: 'Professional portfolio of Afzal, a Full-Stack Developer specializing in React, Next.js, and Node.js.',
  url: 'https://afzal.dev',
  author: 'Afzal',
  email: 'hello@afzal.dev',
} as const

// Theme constants
export const THEME = {
  light: 'light',
  dark: 'dark',
  system: 'system',
} as const

// Web3Forms configuration
export const WEB3FORMS_CONFIG = {
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'c8f4da49-42bc-4d83-938e-3f0d19c46eb9',
  endpoint: 'https://api.web3forms.com/submit',
} as const

// CV/Resume file path
export const CV_PATH = '/resume/afzal-resume.pdf'

// Social media platform colors (for custom styling)
export const SOCIAL_COLORS = {
  linkedin: '#0A66C2',
  github: '#333333',
  twitter: '#1DA1F2',
  instagram: '#E4405F',
  facebook: '#1877F2',
  dribbble: '#EA4C89',
  behance: '#1769FF',
  youtube: '#FF0000',
  medium: '#000000',
  dev: '#0A0A0A',
} as const

// Skill categories with colors
export const SKILL_CATEGORY_COLORS = {
  Frontend: 'from-blue-500 to-cyan-500',
  Backend: 'from-green-500 to-emerald-500',
  Database: 'from-purple-500 to-violet-500',
  Tools: 'from-orange-500 to-amber-500',
  DevOps: 'from-red-500 to-rose-500',
  Design: 'from-pink-500 to-fuchsia-500',
  Other: 'from-gray-500 to-slate-500',
} as const

// Project status colors
export const PROJECT_STATUS_COLORS = {
  Completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  'In Progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  Planned: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
} as const
