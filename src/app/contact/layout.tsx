import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${siteConfig.author}. Let's discuss your next project, collaboration opportunities, or just say hello.`,
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: `Get in touch with ${siteConfig.author}. Let's discuss your next project or collaboration opportunities.`,
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
