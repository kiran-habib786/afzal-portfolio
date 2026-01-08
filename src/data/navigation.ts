import { NavigationConfig } from '@/types'

export const navigation: NavigationConfig = {
  mainNav: [
    {
      id: 'home',
      label: 'Home',
      href: '/',
    },
    {
      id: 'about',
      label: 'About',
      href: '/about',
    },
    {
      id: 'skills',
      label: 'Skills',
      href: '/skills',
    },
    {
      id: 'projects',
      label: 'Projects',
      href: '/projects',
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact',
    },
  ],
  footerNav: {
    main: [
      {
        id: 'home',
        label: 'Home',
        href: '/',
      },
      {
        id: 'about',
        label: 'About',
        href: '/about',
      },
      {
        id: 'skills',
        label: 'Skills',
        href: '/skills',
      },
      {
        id: 'projects',
        label: 'Projects',
        href: '/projects',
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact',
      },
    ],
    legal: [
      {
        id: 'privacy',
        label: 'Privacy Policy',
        href: '/privacy',
      },
      {
        id: 'terms',
        label: 'Terms of Service',
        href: '/terms',
      },
    ],
  },
}

// Helper to get main navigation items
export const getMainNav = () => navigation.mainNav

// Helper to get footer navigation
export const getFooterNav = () => navigation.footerNav
