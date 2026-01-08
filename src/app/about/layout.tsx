import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'

export const metadata: Metadata = {
  title: 'About Me',
  description: `Learn about ${siteConfig.author}, a ${siteConfig.name}. Discover my journey, skills, experience, and what drives me to create exceptional digital experiences.`,
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: `Learn about ${siteConfig.author}, a ${siteConfig.name}. Discover my journey, skills, experience, and what drives me to create exceptional digital experiences.`,
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
