// General utility functions

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    ...options,
  })
}

/**
 * Format date range (e.g., "Mar 2025 - Jun 2025")
 */
export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
  
  if (!endDate) {
    return `${start} - Present`
  }
  
  const end = new Date(endDate).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
  
  return `${start} - ${end}`
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Generate initials from a name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

/**
 * Sleep utility for async operations
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Check if we're on the client side
 */
export function isClient(): boolean {
  return typeof window !== 'undefined'
}

/**
 * Get scroll position
 */
export function getScrollPosition(): { x: number; y: number } {
  if (!isClient()) return { x: 0, y: 0 }
  return { x: window.scrollX, y: window.scrollY }
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId: string, offset = 80): void {
  if (!isClient()) return
  
  const element = document.getElementById(elementId)
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

/**
 * Get proficiency label from number
 */
export function getProficiencyLabel(proficiency: number): string {
  if (proficiency >= 9) return 'Expert'
  if (proficiency >= 7) return 'Advanced'
  if (proficiency >= 4) return 'Intermediate'
  return 'Beginner'
}

/**
 * Generate breadcrumbs from pathname
 */
export function generateBreadcrumbs(pathname: string): { label: string; href: string }[] {
  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs = [{ label: 'Home', href: '/' }]
  
  let currentPath = ''
  paths.forEach((path) => {
    currentPath += `/${path}`
    const label = path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    breadcrumbs.push({ label, href: currentPath })
  })
  
  return breadcrumbs
}

/**
 * Check if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  if (!isClient()) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
