'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { getAllThemes, ThemeName, ACTIVE_THEME, Theme, ThemeColors } from '@/lib/themes'

const STORAGE_KEY = 'portfolio-color-theme'

// Apply theme CSS variables
const applyThemeColors = (colors: ThemeColors) => {
  const root = document.documentElement
  root.style.setProperty('--primary', colors.primary)
  root.style.setProperty('--primary-foreground', colors.primaryForeground)
  root.style.setProperty('--accent', colors.accent)
  root.style.setProperty('--accent-foreground', colors.accentForeground)
  root.style.setProperty('--background', colors.background)
  root.style.setProperty('--foreground', colors.foreground)
  root.style.setProperty('--muted', colors.muted)
  root.style.setProperty('--muted-foreground', colors.mutedForeground)
  root.style.setProperty('--card', colors.card)
  root.style.setProperty('--card-foreground', colors.cardForeground)
  root.style.setProperty('--border', colors.border)
  root.style.setProperty('--ring', colors.ring)
}

export function ColorThemeSwitcher() {
  const [colorTheme, setColorTheme] = useState<ThemeName>(ACTIVE_THEME)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const themes = getAllThemes()

  // Apply theme helper
  const applyTheme = (theme: Theme) => {
    const root = document.documentElement
    const isDark = root.classList.contains('dark')
    const colors = isDark ? theme.dark : theme.light
    applyThemeColors(colors)
  }

  // Initialize from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    if (stored) {
      const foundTheme = themes.find((t: Theme) => t.name === stored)
      if (foundTheme) {
        setColorTheme(stored)
        applyTheme(foundTheme)
      }
    }
    setMounted(true)
  }, [])

  // Listen for dark/light mode changes and reapply theme
  useEffect(() => {
    if (!mounted) return
    
    const observer = new MutationObserver(() => {
      const foundTheme = themes.find((t: Theme) => t.name === colorTheme)
      if (foundTheme) applyTheme(foundTheme)
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [colorTheme, mounted])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleThemeChange = (themeName: ThemeName) => {
    setColorTheme(themeName)
    localStorage.setItem(STORAGE_KEY, themeName)
    
    // Apply theme colors
    const foundTheme = themes.find((t: Theme) => t.name === themeName)
    if (foundTheme) {
      applyTheme(foundTheme)
    }
    
    setIsOpen(false)
  }

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
        <Palette className="h-4 w-4" />
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
        aria-label="Change color theme"
      >
        <Palette className="h-4 w-4" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 z-50 w-56 max-h-80 overflow-y-auto rounded-xl border bg-popover p-2 shadow-xl"
          >
            <div className="mb-2 px-2 py-1.5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Color Theme
              </p>
            </div>
            <div className="space-y-0.5">
              {themes.map((theme: Theme) => (
                <motion.button
                  key={theme.name}
                  whileHover={{ x: 2 }}
                  onClick={() => handleThemeChange(theme.name)}
                  className={`w-full flex items-center gap-3 rounded-lg px-2.5 py-2.5 text-sm transition-colors ${
                    colorTheme === theme.name
                      ? 'bg-primary/10 text-foreground'
                      : 'hover:bg-muted/50 text-foreground/80'
                  }`}
                >
                  <span 
                    className="h-4 w-4 rounded-full ring-1 ring-border" 
                    style={{ backgroundColor: theme.preview }}
                  />
                  <div className="flex-1 text-left">
                    <span className="block font-medium">{theme.label}</span>
                    {/* <span className="block text-xs text-muted-foreground">{theme.description}</span> */}
                  </div>
                  {colorTheme === theme.name && (
                    <Check className="h-4 w-4 text-primary shrink-0" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
