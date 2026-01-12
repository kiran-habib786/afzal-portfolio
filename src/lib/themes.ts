/**
 * Professional Color Theme Configuration
 * 
 * Inspired by top-tier portfolio designs with refined, sophisticated color palettes.
 * Each theme is carefully crafted for both light and dark modes.
 */

export type ThemeName =
  | 'gold'
  | 'crimson'
  | 'midnight'
  | 'aurora'
  | 'neon'
  | 'ember'
  | 'arctic'
  | 'lavender'
  | 'forest'
  | 'coral'
  | 'slate'

export interface ThemeColors {
  // Primary colors
  primary: string
  primaryForeground: string

  // Accent colors  
  accent: string
  accentForeground: string

  // Background shades
  background: string
  foreground: string

  // Muted colors
  muted: string
  mutedForeground: string

  // Card colors
  card: string
  cardForeground: string

  // Border
  border: string

  // Ring (focus)
  ring: string
}

export interface Theme {
  name: ThemeName
  label: string
  description: string
  preview: string // Preview dot color
  light: ThemeColors
  dark: ThemeColors
}

// ===========================================
// PROFESSIONAL THEME DEFINITIONS
// ===========================================

export const themes: Record<ThemeName, Theme> = {
  // Gold - Luxury & Premium
  gold: {
    name: 'gold',
    label: 'Gold',
    description: 'Elegant gold, luxury & premium',
    preview: '#EAB308',
    light: {
      primary: '45 93% 47%',
      primaryForeground: '45 40% 10%',
      accent: '45 93% 47%',
      accentForeground: '45 40% 10%',
      background: '45 20% 99%',
      foreground: '45 30% 10%',
      muted: '45 20% 95%',
      mutedForeground: '45 15% 40%',
      card: '0 0% 100%',
      cardForeground: '45 30% 10%',
      border: '45 20% 88%',
      ring: '45 93% 47%',
    },
    dark: {
      primary: '48 96% 53%',
      primaryForeground: '45 40% 10%',
      accent: '48 96% 53%',
      accentForeground: '45 40% 10%',
      background: '45 20% 4%',
      foreground: '45 10% 98%',
      muted: '45 20% 9%',
      mutedForeground: '45 15% 55%',
      card: '45 20% 6%',
      cardForeground: '45 10% 98%',
      border: '45 15% 12%',
      ring: '48 96% 53%',
    },
  },

  // Slate - Neutral & Professional
  slate: {
    name: 'slate',
    label: 'Slate',
    description: 'Neutral gray, timeless & versatile',
    preview: '#64748B',
    light: {
      primary: '215 16% 47%',
      primaryForeground: '0 0% 100%',
      accent: '215 16% 47%',
      accentForeground: '0 0% 100%',
      background: '0 0% 100%',
      foreground: '215 28% 17%',
      muted: '210 20% 96%',
      mutedForeground: '215 16% 47%',
      card: '0 0% 100%',
      cardForeground: '215 28% 17%',
      border: '214 20% 90%',
      ring: '215 16% 47%',
    },
    dark: {
      primary: '215 20% 65%',
      primaryForeground: '215 28% 10%',
      accent: '215 20% 65%',
      accentForeground: '215 28% 10%',
      background: '215 28% 6%',
      foreground: '210 20% 98%',
      muted: '215 25% 11%',
      mutedForeground: '215 15% 55%',
      card: '215 28% 8%',
      cardForeground: '210 20% 98%',
      border: '215 20% 14%',
      ring: '215 20% 65%',
    },
  },


  // Midnight Blue - Professional & Corporate
  midnight: {
    name: 'midnight',
    label: 'Midnight',
    description: 'Deep blue, professional & modern',
    preview: '#3B82F6',
    light: {
      primary: '221 83% 53%',
      primaryForeground: '0 0% 100%',
      accent: '221 83% 53%',
      accentForeground: '0 0% 100%',
      background: '0 0% 100%',
      foreground: '222 47% 11%',
      muted: '210 40% 96%',
      mutedForeground: '215 16% 47%',
      card: '0 0% 100%',
      cardForeground: '222 47% 11%',
      border: '214 32% 91%',
      ring: '221 83% 53%',
    },
    dark: {
      primary: '217 91% 60%',
      primaryForeground: '222 47% 11%',
      accent: '217 91% 60%',
      accentForeground: '222 47% 11%',
      background: '222 47% 6%',
      foreground: '210 40% 98%',
      muted: '217 33% 12%',
      mutedForeground: '215 20% 55%',
      card: '222 47% 8%',
      cardForeground: '210 40% 98%',
      border: '217 33% 15%',
      ring: '217 91% 60%',
    },
  },
  // Crimson Red - Bold & Modern (Default)
  crimson: {
    name: 'crimson',
    label: 'Crimson',
    description: 'Bold red, modern & striking',
    preview: '#EF4444',
    light: {
      primary: '0 84% 60%',
      primaryForeground: '0 0% 100%',
      accent: '0 84% 60%',
      accentForeground: '0 0% 100%',
      background: '0 0% 100%',
      foreground: '222 47% 11%',
      muted: '0 20% 96%',
      mutedForeground: '0 10% 45%',
      card: '0 0% 100%',
      cardForeground: '222 47% 11%',
      border: '0 15% 90%',
      ring: '0 84% 60%',
    },
    dark: {
      primary: '0 72% 51%',
      primaryForeground: '0 0% 100%',
      accent: '0 72% 51%',
      accentForeground: '0 0% 100%',
      background: '222 47% 6%',
      foreground: '210 40% 98%',
      muted: '217 33% 12%',
      mutedForeground: '215 20% 55%',
      card: '222 47% 8%',
      cardForeground: '210 40% 98%',
      border: '217 33% 15%',
      ring: '0 72% 51%',
    },
  },
  // Aurora Purple - Creative & Bold
  aurora: {
    name: 'aurora',
    label: 'Aurora',
    description: 'Vibrant purple, creative & bold',
    preview: '#A855F7',
    light: {
      primary: '270 76% 60%',
      primaryForeground: '0 0% 100%',
      accent: '280 70% 55%',
      accentForeground: '0 0% 100%',
      background: '0 0% 100%',
      foreground: '224 71% 4%',
      muted: '270 20% 96%',
      mutedForeground: '270 10% 45%',
      card: '0 0% 100%',
      cardForeground: '224 71% 4%',
      border: '270 15% 90%',
      ring: '270 76% 60%',
    },
    dark: {
      primary: '270 76% 65%',
      primaryForeground: '0 0% 100%',
      accent: '280 70% 60%',
      accentForeground: '0 0% 100%',
      background: '270 50% 5%',
      foreground: '0 0% 98%',
      muted: '270 30% 10%',
      mutedForeground: '270 15% 55%',
      card: '270 40% 7%',
      cardForeground: '0 0% 98%',
      border: '270 25% 13%',
      ring: '270 76% 65%',
    },
  },

  // Neon Lime - Tech & Modern
  neon: {
    name: 'neon',
    label: 'Neon',
    description: 'Electric lime, tech-forward',
    preview: '#84CC16',
    light: {
      primary: '84 81% 44%',
      primaryForeground: '0 0% 0%',
      accent: '84 81% 44%',
      accentForeground: '0 0% 0%',
      background: '0 0% 100%',
      foreground: '0 0% 9%',
      muted: '84 20% 95%',
      mutedForeground: '0 0% 40%',
      card: '0 0% 100%',
      cardForeground: '0 0% 9%',
      border: '0 0% 90%',
      ring: '84 81% 44%',
    },
    dark: {
      primary: '82 85% 55%',
      primaryForeground: '0 0% 0%',
      accent: '82 85% 55%',
      accentForeground: '0 0% 0%',
      background: '0 0% 4%',
      foreground: '0 0% 98%',
      muted: '0 0% 10%',
      mutedForeground: '0 0% 55%',
      card: '0 0% 6%',
      cardForeground: '0 0% 98%',
      border: '0 0% 12%',
      ring: '82 85% 55%',
    },
  },

  // Ember Orange - Warm & Energetic
  ember: {
    name: 'ember',
    label: 'Ember',
    description: 'Warm coral, energetic & inviting',
    preview: '#F97316',
    light: {
      primary: '24 95% 53%',
      primaryForeground: '0 0% 100%',
      accent: '24 95% 53%',
      accentForeground: '0 0% 100%',
      background: '30 30% 98%',
      foreground: '20 14% 10%',
      muted: '30 20% 94%',
      mutedForeground: '20 10% 45%',
      card: '0 0% 100%',
      cardForeground: '20 14% 10%',
      border: '30 20% 88%',
      ring: '24 95% 53%',
    },
    dark: {
      primary: '21 90% 55%',
      primaryForeground: '0 0% 100%',
      accent: '21 90% 55%',
      accentForeground: '0 0% 100%',
      background: '20 14% 5%',
      foreground: '30 20% 98%',
      muted: '20 14% 10%',
      mutedForeground: '20 10% 55%',
      card: '20 14% 7%',
      cardForeground: '30 20% 98%',
      border: '20 14% 13%',
      ring: '21 90% 55%',
    },
  },

  // Arctic Cyan - Clean & Minimal
  arctic: {
    name: 'arctic',
    label: 'Arctic',
    description: 'Cool cyan, clean & minimal',
    preview: '#06B6D4',
    light: {
      primary: '187 92% 43%',
      primaryForeground: '0 0% 100%',
      accent: '187 92% 43%',
      accentForeground: '0 0% 100%',
      background: '0 0% 100%',
      foreground: '200 50% 10%',
      muted: '190 30% 96%',
      mutedForeground: '200 20% 45%',
      card: '0 0% 100%',
      cardForeground: '200 50% 10%',
      border: '200 25% 90%',
      ring: '187 92% 43%',
    },
    dark: {
      primary: '186 94% 50%',
      primaryForeground: '200 50% 10%',
      accent: '186 94% 50%',
      accentForeground: '200 50% 10%',
      background: '200 50% 4%',
      foreground: '0 0% 98%',
      muted: '200 40% 9%',
      mutedForeground: '200 20% 55%',
      card: '200 50% 6%',
      cardForeground: '0 0% 98%',
      border: '200 35% 12%',
      ring: '186 94% 50%',
    },
  },

  // Lavender - Soft & Elegant
  lavender: {
    name: 'lavender',
    label: 'Lavender',
    description: 'Soft purple, elegant & calm',
    preview: '#C084FC',
    light: {
      primary: '280 67% 75%',
      primaryForeground: '280 50% 15%',
      accent: '280 67% 75%',
      accentForeground: '280 50% 15%',
      background: '280 20% 99%',
      foreground: '280 40% 15%',
      muted: '280 20% 96%',
      mutedForeground: '280 15% 45%',
      card: '0 0% 100%',
      cardForeground: '280 40% 15%',
      border: '280 15% 90%',
      ring: '280 67% 75%',
    },
    dark: {
      primary: '280 67% 70%',
      primaryForeground: '0 0% 100%',
      accent: '280 67% 70%',
      accentForeground: '0 0% 100%',
      background: '280 30% 6%',
      foreground: '280 10% 98%',
      muted: '280 25% 11%',
      mutedForeground: '280 15% 55%',
      card: '280 30% 8%',
      cardForeground: '280 10% 98%',
      border: '280 20% 14%',
      ring: '280 67% 70%',
    },
  },

  // Forest - Natural & Grounded
  forest: {
    name: 'forest',
    label: 'Forest',
    description: 'Deep green, natural & grounded',
    preview: '#22C55E',
    light: {
      primary: '142 71% 45%',
      primaryForeground: '0 0% 100%',
      accent: '142 71% 45%',
      accentForeground: '0 0% 100%',
      background: '140 15% 99%',
      foreground: '140 40% 10%',
      muted: '140 20% 95%',
      mutedForeground: '140 15% 45%',
      card: '0 0% 100%',
      cardForeground: '140 40% 10%',
      border: '140 15% 88%',
      ring: '142 71% 45%',
    },
    dark: {
      primary: '142 70% 50%',
      primaryForeground: '142 40% 10%',
      accent: '142 70% 50%',
      accentForeground: '142 40% 10%',
      background: '140 30% 5%',
      foreground: '140 10% 98%',
      muted: '140 25% 10%',
      mutedForeground: '140 15% 55%',
      card: '140 30% 7%',
      cardForeground: '140 10% 98%',
      border: '140 20% 13%',
      ring: '142 70% 50%',
    },
  },

  // Coral - Trendy & Warm
  coral: {
    name: 'coral',
    label: 'Coral',
    description: 'Living coral, trendy & warm',
    preview: '#FB7185',
    light: {
      primary: '350 89% 60%',
      primaryForeground: '0 0% 100%',
      accent: '350 89% 60%',
      accentForeground: '0 0% 100%',
      background: '0 0% 100%',
      foreground: '350 30% 12%',
      muted: '350 20% 96%',
      mutedForeground: '350 15% 45%',
      card: '0 0% 100%',
      cardForeground: '350 30% 12%',
      border: '350 15% 90%',
      ring: '350 89% 60%',
    },
    dark: {
      primary: '350 89% 65%',
      primaryForeground: '0 0% 100%',
      accent: '350 89% 65%',
      accentForeground: '0 0% 100%',
      background: '350 20% 5%',
      foreground: '350 10% 98%',
      muted: '350 20% 10%',
      mutedForeground: '350 15% 55%',
      card: '350 20% 7%',
      cardForeground: '350 10% 98%',
      border: '350 15% 13%',
      ring: '350 89% 65%',
    },
  },


}

// ===========================================
// ACTIVE THEME CONFIGURATION
// ===========================================

export const ACTIVE_THEME: ThemeName = 'gold'

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
    --background: ${colors.background};
    --foreground: ${colors.foreground};
    --muted: ${colors.muted};
    --muted-foreground: ${colors.mutedForeground};
    --card: ${colors.card};
    --card-foreground: ${colors.cardForeground};
    --border: ${colors.border};
    --ring: ${colors.ring};
  `
}
