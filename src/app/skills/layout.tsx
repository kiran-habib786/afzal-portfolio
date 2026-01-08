import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'

export const metadata: Metadata = {
  title: 'Skills & Expertise',
  description: `Explore the technical skills and expertise of ${siteConfig.author}. From frontend frameworks to backend technologies, discover the tools I use to build exceptional web experiences.`,
  openGraph: {
    title: `Skills & Expertise | ${siteConfig.name}`,
    description: `Explore the technical skills and expertise of ${siteConfig.author}. From frontend frameworks to backend technologies.`,
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
