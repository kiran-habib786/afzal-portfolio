import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Explore the portfolio of ${siteConfig.author}. A curated collection of web development projects showcasing skills in React, Next.js, TypeScript, and modern web technologies.`,
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: `Explore the portfolio of ${siteConfig.author}. A curated collection of web development projects.`,
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
