'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { ThemeName, themes, ACTIVE_THEME } from '@/lib/themes'

interface ColorThemeContextType {
  colorTheme: ThemeName
  setColorTheme: (theme: ThemeName) => void
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined)

const STORAGE_KEY = 'portfolio-color-theme'

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ThemeName>(ACTIVE_THEME)
  const [mounted, setMounted] = useState(false)

  // Load theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    if (stored && themes[stored]) {
      setColorThemeState(stored)
    }
    setMounted(true)
  }, [])

  // Apply theme CSS variables when theme changes
  useEffect(() => {
    if (!mounted) return

    const theme = themes[colorTheme]
    const root = document.documentElement
    const isDark = root.classList.contains('dark')
    const colors = isDark ? theme.dark : theme.light

    // Apply color variables
    root.style.setProperty('--primary', colors.primary)
    root.style.setProperty('--primary-foreground', colors.primaryForeground)
    root.style.setProperty('--accent', colors.accent)
    root.style.setProperty('--accent-foreground', colors.accentForeground)
    root.style.setProperty('--hero-gradient-accent', colors.heroGradientAccent)
    root.style.setProperty('--ring', colors.primary)

    // Store preference
    localStorage.setItem(STORAGE_KEY, colorTheme)
  }, [colorTheme, mounted])

  // Re-apply theme when dark/light mode changes
  useEffect(() => {
    if (!mounted) return

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const theme = themes[colorTheme]
          const root = document.documentElement
          const isDark = root.classList.contains('dark')
          const colors = isDark ? theme.dark : theme.light

          root.style.setProperty('--primary', colors.primary)
          root.style.setProperty('--primary-foreground', colors.primaryForeground)
          root.style.setProperty('--accent', colors.accent)
          root.style.setProperty('--accent-foreground', colors.accentForeground)
          root.style.setProperty('--hero-gradient-accent', colors.heroGradientAccent)
          root.style.setProperty('--ring', colors.primary)
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [colorTheme, mounted])

  const setColorTheme = (theme: ThemeName) => {
    setColorThemeState(theme)
  }

  // Prevent flash during hydration
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  )
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext)
  if (context === undefined) {
    throw new Error('useColorTheme must be used within a ColorThemeProvider')
  }
  return context
}
