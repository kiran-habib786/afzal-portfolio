'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { PageHero } from '@/components/layout'
import { Section, SectionHeading, Card, CardContent, Badge, Button } from '@/components/common'
import { getSkillBySlug, skills } from '@/data/skills'
import { projects } from '@/data/projects'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { SKILL_CATEGORY_COLORS } from '@/lib/constants'
import type { SkillCategory } from '@/types/skill'

export default function SkillDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const skill = getSkillBySlug(slug)

  if (!skill) {
    notFound()
  }

  // Get adjacent skills for navigation
  const currentIndex = skills.findIndex((s) => s.slug === slug)
  const prevSkill = currentIndex > 0 ? skills[currentIndex - 1] : null
  const nextSkill = currentIndex < skills.length - 1 ? skills[currentIndex + 1] : null

  // Get related projects that use this skill
  const relatedProjects = projects.filter((project) =>
    project.technologies.some((tech) => 
      tech.toLowerCase().includes(skill.name.toLowerCase()) ||
      skill.name.toLowerCase().includes(tech.toLowerCase())
    )
  )

  // Get related skills (same category)
  const relatedSkills = skills.filter(
    (s) => s.category === skill.category && s.id !== skill.id
  ).slice(0, 4)

  const categoryGradient = SKILL_CATEGORY_COLORS[skill.category as keyof typeof SKILL_CATEGORY_COLORS] || SKILL_CATEGORY_COLORS.Other

  const proficiencyLabels = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
  const proficiencyIndex = proficiencyLabels.indexOf(skill.proficiencyLabel)

  return (
    <>
      <PageHero
        title={skill.name}
        subtitle={skill.description}
        showSocialLinks
      />

      {/* Skill Overview */}
      <Section className="bg-muted/30">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skill Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-6"
            >
              <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${categoryGradient} flex items-center justify-center`}>
                <span className="text-3xl font-bold text-white">{skill.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl font-bold">{skill.name}</h2>
                  <Badge variant="secondary">{skill.category}</Badge>
                  <Badge variant="gradient">{skill.proficiencyLabel}</Badge>
                </div>
                <p className="mt-2 text-muted-foreground">{skill.description}</p>
              </div>
            </motion.div>

            {/* Detailed Description */}
            {skill.detailedDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">About {skill.name}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {skill.detailedDescription}
                </p>
              </motion.div>
            )}

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6">Projects Using {skill.name}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedProjects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`}>
                      <Card variant="outline" hover="lift" className="h-full">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-lg font-bold text-primary">
                                {project.title.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold">{project.title}</h4>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {project.shortDescription}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Stats Card */}
            <Card variant="elevated">
              <CardContent className="p-4 space-y-4">
                {/* Proficiency */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="font-semibold">{skill.proficiency}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${categoryGradient}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  {/* Proficiency Level Indicator */}
                  <div className="flex justify-between mt-2">
                    {proficiencyLabels.map((label, index) => (
                      <span
                        key={label}
                        className={`text-xs ${
                          index <= proficiencyIndex
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <span className="font-semibold">{skill.yearsOfExperience} years</span>
                </div>

                {/* Category */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <Badge className={`bg-gradient-to-r ${categoryGradient} text-white border-0`}>
                    {skill.category}
                  </Badge>
                </div>

                {/* Projects Count */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Projects</span>
                  <span className="font-semibold">{relatedProjects.length}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Skills */}
            {relatedSkills.length > 0 && (
              <Card variant="glass">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Related Skills</h3>
                  <div className="space-y-3">
                    {relatedSkills.map((relatedSkill) => (
                      <Link
                        key={relatedSkill.id}
                        href={`/skills/${relatedSkill.slug}`}
                        className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${categoryGradient} flex items-center justify-center`}>
                          <span className="text-sm font-bold text-white">
                            {relatedSkill.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{relatedSkill.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {relatedSkill.proficiency}% • {relatedSkill.yearsOfExperience}y
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </Section>

      {/* Skill Navigation */}
      <Section>
        <div className="flex items-center justify-between gap-4">
          {prevSkill ? (
            <Link href={`/skills/${prevSkill.slug}`} className="group flex-1">
              <Card variant="outline" hover="lift" className="h-full">
                <CardContent className="p-4 flex items-center gap-4">
                  <LucideIcons.ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-xs text-muted-foreground">Previous Skill</p>
                    <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {prevSkill.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <Link href="/skills">
            <Button variant="outline" size="sm">
              <LucideIcons.Grid3X3 className="h-4 w-4 mr-2" />
              All Skills
            </Button>
          </Link>

          {nextSkill ? (
            <Link href={`/skills/${nextSkill.slug}`} className="group flex-1">
              <Card variant="outline" hover="lift" className="h-full">
                <CardContent className="p-4 flex items-center justify-end gap-4">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Next Skill</p>
                    <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {nextSkill.name}
                    </p>
                  </div>
                  <LucideIcons.ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold">Want to See More?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore my projects to see how I apply these skills to solve real-world problems.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/projects">
              <Button size="lg" className="group">
                <LucideIcons.FolderOpen className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                <LucideIcons.MessageSquare className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
