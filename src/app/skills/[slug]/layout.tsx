import type { Metadata } from 'next'
import { siteConfig } from '@/data/about'
import { getSkillBySlug, getAllSkillSlugs } from '@/data/skills'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const skill = getSkillBySlug(slug)

  if (!skill) {
    return {
      title: 'Skill Not Found',
    }
  }

  return {
    title: skill.name,
    description: skill.description,
    openGraph: {
      title: `${skill.name} | ${siteConfig.name}`,
      description: skill.description,
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllSkillSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function SkillDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
