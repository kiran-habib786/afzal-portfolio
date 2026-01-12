'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { PageHero } from '@/components/layout'
import { Section, SectionHeading, Card, CardContent, Badge, Button } from '@/components/common'
import { getProjectBySlug, projects } from '@/data/projects'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { PROJECT_STATUS_COLORS } from '@/lib/constants'
import type { ProjectStatus } from '@/types/project'

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Get adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.shortDescription || project.description}
        showSocialLinks
      />

      {/* Project Overview */}
      <Section className="bg-muted/30">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/20">{project.title.charAt(0)}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Quick Info Card */}
            <Card variant="elevated">
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge className={PROJECT_STATUS_COLORS[project.status as ProjectStatus]}>
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Category</span>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Role</span>
                  <span className="text-sm font-medium">{project.role}</span>
                </div>
                {project.startDate && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium">
                      {new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`}
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      <LucideIcons.ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 font-medium transition-all hover:bg-muted"
                    >
                      <LucideIcons.Github className="h-4 w-4" />
                      View Source Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Technologies */}
            <Card variant="glass">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Contributions & Challenges */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contributions */}
          {project.contributions && project.contributions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" className="h-full">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                      <LucideIcons.CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Key Contributions</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.contributions.map((contribution, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <LucideIcons.ArrowRight className="h-4 w-4 mt-1 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{contribution}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card variant="elevated" className="h-full">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                      <LucideIcons.Target className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Challenges Overcome</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <LucideIcons.Zap className="h-4 w-4 mt-1 text-orange-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </Section>

      {/* Key Learnings */}
      {project.learnings && project.learnings.length > 0 && (
        <Section className="bg-muted/30">
          <SectionHeading
            title="Key Learnings"
            subtitle="Insights and takeaways from this project"
            align="center"
          />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {project.learnings.map((learning, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card variant="glass" hover="scale" className="h-full">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <LucideIcons.Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{learning}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {/* Project Navigation */}
      <Section>
        <div className="flex items-center justify-between gap-4">
          {prevProject ? (
            <Link href={`/projects/${prevProject.slug}`} className="group flex-1">
              <Card variant="outline" hover="lift" className="h-full border-0">
                <CardContent className="p-4 flex items-center gap-4">
                  <LucideIcons.ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-xs text-muted-foreground">Previous Project</p>
                    <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {prevProject.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          <Link href="/projects">
            <Button variant="outline" size="sm">
              <LucideIcons.Grid3X3 className="h-4 w-4 mr-2" />
              All Projects
            </Button>
          </Link>

          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="group flex-1">
              <Card variant="outline" hover="lift" className="h-full border-0">
                <CardContent className="p-4 flex items-center justify-end gap-4">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Next Project</p>
                    <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                      {nextProject.title}
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
          <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="group">
                <LucideIcons.MessageSquare className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
