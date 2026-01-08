'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { getAllThemes, ThemeName, ACTIVE_THEME } from '@/lib/themes'

const themeColorPreviews: Record<ThemeName, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  rose: 'bg-rose-500',
  cyan: 'bg-cyan-500',
}

const STORAGE_KEY = 'portfolio-color-theme'

export function ColorThemeSwitcher() {
  const [colorTheme, setColorTheme] = useState<ThemeName>(ACTIVE_THEME)
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const themes = getAllThemes()

  // Initialize from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    if (stored && themes.find(t => t.name === stored)) {
      setColorTheme(stored)
    }
    setMounted(true)
  }, [themes])

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
    const theme = themes.find(t => t.name === themeName)
    if (theme) {
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
            className="absolute right-0 top-full mt-2 z-50 w-48 rounded-lg border bg-popover p-2 shadow-lg"
          >
            <div className="mb-2 px-2 py-1.5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Color Theme
              </p>
            </div>
            <div className="space-y-1">
              {themes.map((theme) => (
                <motion.button
                  key={theme.name}
                  whileHover={{ x: 4 }}
                  onClick={() => handleThemeChange(theme.name)}
                  className={`w-full flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors ${
                    colorTheme === theme.name
                      ? 'bg-muted text-foreground'
                      : 'hover:bg-muted/50 text-foreground/80'
                  }`}
                >
                  <span className={`h-4 w-4 rounded-full ${themeColorPreviews[theme.name]}`} />
                  <span className="flex-1 text-left">{theme.label}</span>
                  {colorTheme === theme.name && (
                    <Check className="h-4 w-4 text-primary" />
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
