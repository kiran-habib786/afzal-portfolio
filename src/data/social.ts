import { SocialLink } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/afzal-habib-5298a0272/',
    label: 'LinkedIn',
    icon: 'Linkedin',
    username: 'afzal-habib-5298a0272',
    isActive: true,
  },
  {
    id: '2',
    platform: 'github',
    url: 'https://github.com/afzalhabibi',
    label: 'GitHub',
    icon: 'Github',
    username: 'afzalhabibi',
    isActive: true,
  },
  {
    id: '3',
    platform: 'twitter',
    url: 'https://twitter.com/afzalhaabib786',
    label: 'Twitter / X',
    icon: 'Twitter',
    username: 'afzalhaabib786',
    isActive: true,
  },
  {
    id: '4',
    platform: 'instagram',
    url: 'https://www.instagram.com/afzalhabib786/',
    label: 'Instagram',
    icon: 'Instagram',
    username: 'afzalhabib786',
    isActive: true,
  },
  {
    id: '5',
    platform: 'facebook',
    url: 'https://www.facebook.com/afzal.habib.108151/',
    label: 'Facebook',
    icon: 'Facebook',
    username: 'afzal.habib.108151',
    isActive: true,
  },
  {
    id: '6',
    platform: 'dribbble',
    url: 'https://dribbble.com/Afzalhabib786',
    label: 'Dribbble',
    icon: 'Dribbble',
    username: 'afzalhabib786',
    isActive: true,
  },
  {
    id: '7',
    platform: 'behance',
    url: 'https://www.behance.net/afzalhabib',
    label: 'Behance',
    icon: 'Figma', // Using Figma as placeholder since Behance isn't in lucide
    username: 'afzalhabib',
    isActive: true,
  },
]

// Helper to get active social links
export const getActiveSocialLinks = () => socialLinks.filter((link) => link.isActive)
