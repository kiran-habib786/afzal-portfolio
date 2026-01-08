import { SocialLink } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'linkedin',
    url: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
    icon: 'Linkedin',
    username: 'yourusername',
    isActive: true,
  },
  {
    id: '2',
    platform: 'github',
    url: 'https://github.com/yourusername',
    label: 'GitHub',
    icon: 'Github',
    username: 'yourusername',
    isActive: true,
  },
  {
    id: '3',
    platform: 'twitter',
    url: 'https://twitter.com/yourusername',
    label: 'Twitter / X',
    icon: 'Twitter',
    username: 'yourusername',
    isActive: true,
  },
  {
    id: '4',
    platform: 'instagram',
    url: 'https://instagram.com/yourusername',
    label: 'Instagram',
    icon: 'Instagram',
    username: 'yourusername',
    isActive: true,
  },
  {
    id: '5',
    platform: 'dribbble',
    url: 'https://dribbble.com/yourusername',
    label: 'Dribbble',
    icon: 'Dribbble',
    username: 'yourusername',
    isActive: true,
  },
  {
    id: '6',
    platform: 'behance',
    url: 'https://behance.net/yourusername',
    label: 'Behance',
    icon: 'Figma', // Using Figma as placeholder since Behance isn't in lucide
    username: 'yourusername',
    isActive: true,
  },
]

// Helper to get active social links
export const getActiveSocialLinks = () => socialLinks.filter((link) => link.isActive)
