import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.shortDescription || project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.shortDescription || project.description,
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
