// Common type definitions used across the portfolio

export interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

export interface MetaData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

export interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  showSocialLinks?: boolean
  backgroundVariant?: 'default' | 'subtle' | 'vibrant'
  className?: string
}

export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  containerClassName?: string
}

export interface AnimationVariants {
  hidden: Record<string, unknown>
  visible: Record<string, unknown>
}
