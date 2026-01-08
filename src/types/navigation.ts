// Navigation type definitions

export interface NavItem {
  id: string
  label: string
  href: string
  isExternal?: boolean
  icon?: string // Lucide icon name
  description?: string // For mega menus or tooltips
  children?: NavItem[] // For dropdown menus
}

export interface NavigationConfig {
  mainNav: NavItem[]
  footerNav: {
    main: NavItem[]
    legal: NavItem[]
  }
}
