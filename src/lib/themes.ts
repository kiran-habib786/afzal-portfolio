/**
 * Color Theme Configuration
 * 
 * This file defines multiple color schemes that can be easily switched.
 * Each theme has both light and dark mode variants.
 * 
 * To switch themes:
 * 1. Change the ACTIVE_THEME constant below
 * 2. Or use the ThemeContext to switch dynamically
 */

export type ThemeName = 'blue' | 'purple' | 'green' | 'orange' | 'rose' | 'cyan'

export interface ThemeColors {
  // Primary colors
  primary: string
  primaryForeground: string
  
  // Accent colors
  accent: string
  accentForeground: string
  
  // Hero gradient colors
  heroGradientAccent: string
  
  // Skill category gradients (for visual variety)
  gradients: {
    frontend: string
    backend: string
    database: string
    devops: string
    design: string
    other: string
  }
}

export interface Theme {
  name: ThemeName
  label: string
  light: ThemeColors
  dark: ThemeColors
}

// ===========================================
// THEME DEFINITIONS
// ===========================================

export const themes: Record<ThemeName, Theme> = {
  // Blue Theme (Default - Professional & Modern)
  blue: {
    name: 'blue',
    label: 'Ocean Blue',
    light: {
      primary: '221.2 83.2% 53.3%',
      primaryForeground: '210 40% 98%',
      accent: '262 83.3% 57.8%',
      accentForeground: '210 40% 98%',
      heroGradientAccent: '221.2 83.2% 53.3%',
      gradients: {
        frontend: 'from-blue-500 to-cyan-500',
        backend: 'from-green-500 to-emerald-500',
        database: 'from-orange-500 to-amber-500',
        devops: 'from-purple-500 to-violet-500',
        design: 'from-pink-500 to-rose-500',
        other: 'from-slate-500 to-gray-500',
      },
    },
    dark: {
      primary: '217.2 91.2% 59.8%',
      primaryForeground: '222.2 47.4% 11.2%',
      accent: '262 83.3% 57.8%',
      accentForeground: '210 40% 98%',
      heroGradientAccent: '217.2 91.2% 59.8%',
      gradients: {
        frontend: 'from-blue-400 to-cyan-400',
        backend: 'from-green-400 to-emerald-400',
        database: 'from-orange-400 to-amber-400',
        devops: 'from-purple-400 to-violet-400',
        design: 'from-pink-400 to-rose-400',
        other: 'from-slate-400 to-gray-400',
      },
    },
  },

  // Purple Theme (Creative & Bold)
  purple: {
    name: 'purple',
    label: 'Royal Purple',
    light: {
      primary: '262 83.3% 57.8%',
      primaryForeground: '210 40% 98%',
      accent: '330 81% 60%',
      accentForeground: '210 40% 98%',
      heroGradientAccent: '262 83.3% 57.8%',
      gradients: {
        frontend: 'from-purple-500 to-violet-500',
        backend: 'from-indigo-500 to-blue-500',
        database: 'from-fuchsia-500 to-pink-500',
        devops: 'from-violet-500 to-purple-500',
        design: 'from-pink-500 to-rose-500',
        other: 'from-slate-500 to-gray-500',
      },
    },
    dark: {
      primary: '263 70% 50.4%',
      primaryForeground: '210 40% 98%',
      accent: '330 81% 60%',
      accentForeground: '210 40% 98%',
      heroGradientAccent: '263 70% 50.4%',
      gradients: {
        frontend: 'from-purple-400 to-violet-400',
        backend: 'from-indigo-400 to-blue-400',
        database: 'from-fuchsia-400 to-pink-400',
        devops: 'from-violet-400 to-purple-400',
        design: 'from-pink-400 to-rose-400',
        other: 'from-slate-400 to-gray-400',
      },
    },
  },

  // Green Theme (Nature & Growth)
  green: {
    name: 'green',
    label: 'Forest Green',
    light: {
      primary: '142.1 76.2% 36.3%',
      primaryForeground: '355.7 100% 97.3%',
      accent: '172 66% 50.4%',
      accentForeground: '210 40% 98%',
      heroGradientAccent: '142.1 76.2% 36.3%',
      gradients: {
        frontend: 'from-green-500 to-emerald-500',
        backend: 'from-teal-500 to-cyan-500',
        database: 'from-lime-500 to-green-500',
        devops: 'from-emerald-500 to-teal-500',
        design: 'from-cyan-500 to-sky-500',
        other: 'from-slate-500 to-gray-500',
      },
    },
    dark: {
      primary: '142.1 70.6% 45.3%',
      primaryForeground: '144.9 80.4% 10%',
      accent: '172 66% 50.4%',
      accentForeground: '210 40% 98%',
      heroGradientAccent: '142.1 70.6% 45.3%',
      gradients: {
        frontend: 'from-green-400 to-emerald-400',
        backend: 'from-teal-400 to-cyan-400',
        database: 'from-lime-400 to-green-400',
        devops: 'from-emerald-400 to-teal-400',
        design: 'from-cyan-400 to-sky-400',
        other: 'from-slate-400 to-gray-400',
      },
    },
  },

  // Orange Theme (Warm & Energetic)
  orange: {
    name: 'orange',
    label: 'Sunset Orange',
    light: {
      primary: '24.6 95% 53.1%',
      primaryForeground: '60 9.1% 97.8%',
      accent: '20 14.3% 4.1%',
      accentForeground: '60 9.1% 97.8%',
      heroGradientAccent: '24.6 95% 53.1%',
      gradients: {
        frontend: 'from-orange-500 to-amber-500',
        backend: 'from-red-500 to-orange-500',
        database: 'from-yellow-500 to-amber-500',
        devops: 'from-rose-500 to-red-500',
        design: 'from-pink-500 to-rose-500',
        other: 'from-slate-500 to-gray-500',
      },
    },
    dark: {
      primary: '20.5 90.2% 48.2%',
      primaryForeground: '60 9.1% 97.8%',
      accent: '60 4.8% 95.9%',
      accentForeground: '24 9.8% 10%',
      heroGradientAccent: '20.5 90.2% 48.2%',
      gradients: {
        frontend: 'from-orange-400 to-amber-400',
        backend: 'from-red-400 to-orange-400',
        database: 'from-yellow-400 to-amber-400',
        devops: 'from-rose-400 to-red-400',
        design: 'from-pink-400 to-rose-400',
        other: 'from-slate-400 to-gray-400',
      },
    },
  },

  // Rose Theme (Elegant & Sophisticated)
  rose: {
    name: 'rose',
    label: 'Rose Gold',
    light: {
      primary: '346.8 77.2% 49.8%',
      primaryForeground: '355.7 100% 97.3%',
      accent: '240 4.8% 95.9%',
      accentForeground: '240 5.9% 10%',
      heroGradientAccent: '346.8 77.2% 49.8%',
      gradients: {
        frontend: 'from-rose-500 to-pink-500',
        backend: 'from-fuchsia-500 to-purple-500',
        database: 'from-pink-500 to-rose-500',
        devops: 'from-purple-500 to-violet-500',
        design: 'from-pink-500 to-fuchsia-500',
        other: 'from-slate-500 to-gray-500',
      },
    },
    dark: {
      primary: '346.8 77.2% 49.8%',
      primaryForeground: '355.7 100% 97.3%',
      accent: '240 3.7% 15.9%',
      accentForeground: '0 0% 98%',
      heroGradientAccent: '346.8 77.2% 49.8%',
      gradients: {
        frontend: 'from-rose-400 to-pink-400',
        backend: 'from-fuchsia-400 to-purple-400',
        database: 'from-pink-400 to-rose-400',
        devops: 'from-purple-400 to-violet-400',
        design: 'from-pink-400 to-fuchsia-400',
        other: 'from-slate-400 to-gray-400',
      },
    },
  },

  // Cyan Theme (Tech & Modern)
  cyan: {
    name: 'cyan',
    label: 'Cyber Cyan',
    light: {
      primary: '189 94% 43%',
      primaryForeground: '210 40% 98%',
      accent: '199 89% 48%',
      accentForeground: '210 40% 98%',
      heroGradientAccent: '189 94% 43%',
      gradients: {
        frontend: 'from-cyan-500 to-teal-500',
        backend: 'from-blue-500 to-indigo-500',
        database: 'from-sky-500 to-blue-500',
        devops: 'from-teal-500 to-emerald-500',
        design: 'from-violet-500 to-purple-500',
        other: 'from-slate-500 to-gray-500',
      },
    },
    dark: {
      primary: '189 94% 43%',
      primaryForeground: '210 40% 98%',
      accent: '199 89% 48%',
      accentForeground: '210 40% 98%',
      heroGradientAccent: '189 94% 43%',
      gradients: {
        frontend: 'from-cyan-400 to-teal-400',
        backend: 'from-blue-400 to-indigo-400',
        database: 'from-sky-400 to-blue-400',
        devops: 'from-teal-400 to-emerald-400',
        design: 'from-violet-400 to-purple-400',
        other: 'from-slate-400 to-gray-400',
      },
    },
  },
}

// ===========================================
// ACTIVE THEME CONFIGURATION
// Change this to switch the default theme
// ===========================================
export const ACTIVE_THEME: ThemeName = 'blue'

// Get the current active theme
export const getActiveTheme = (): Theme => themes[ACTIVE_THEME]

// Get theme by name
export const getTheme = (name: ThemeName): Theme => themes[name]

// Get all available themes
export const getAllThemes = (): Theme[] => Object.values(themes)

// Generate CSS variables for a theme
export const generateThemeCSS = (theme: Theme, mode: 'light' | 'dark'): string => {
  const colors = mode === 'light' ? theme.light : theme.dark
  return `
    --primary: ${colors.primary};
    --primary-foreground: ${colors.primaryForeground};
    --accent: ${colors.accent};
    --accent-foreground: ${colors.accentForeground};
    --hero-gradient-accent: ${colors.heroGradientAccent};
  `
}
