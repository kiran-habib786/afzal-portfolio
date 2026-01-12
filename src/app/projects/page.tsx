'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { PageHero } from '@/components/layout'
import { Section, SectionHeading, Card, CardContent, Badge } from '@/components/common'
import { projects, getProjectsByCategory, getProjectCategories, getFeaturedProjects } from '@/data/projects'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { PROJECT_STATUS_COLORS } from '@/lib/constants'
import type { ProjectCategory, ProjectStatus } from '@/types/project'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All')
  const categories = getProjectCategories()
  const featuredProjects = getFeaturedProjects()
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : getProjectsByCategory(activeCategory)

  return (
    <>
      <PageHero
        title="My Projects"
        subtitle="A curated collection of projects showcasing my skills in web development, design, and problem-solving."
        showSocialLinks
      />

      {/* Featured Projects */}
      <Section className="bg-muted/30">
        <SectionHeading
          title="Featured Work"
          subtitle="Highlighted projects that showcase my best work"
          align="center"
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {featuredProjects.slice(0, 2).map((project, index) => (
            <motion.div key={project.id} variants={staggerItem}>
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <Card variant="elevated" hover="lift" className="h-full overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Project Image/Preview */}
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <LucideIcons.Image className="h-16 w-16 text-muted-foreground/30" />
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <span
                              onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}
                              className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 cursor-pointer"
                            >
                              <LucideIcons.ExternalLink className="h-4 w-4" />
                              Live Demo
                            </span>
                          )}
                          {project.repoUrl && (
                            <span
                              onClick={(e) => { e.preventDefault(); window.open(project.repoUrl, '_blank'); }}
                              className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium hover:bg-muted/80 cursor-pointer"
                            >
                              <LucideIcons.Github className="h-4 w-4" />
                              Code
                            </span>
                          )}
                        </div>
                      </div>
                      {/* Status Badge */}
                      <div className="absolute right-4 top-4">
                        <Badge className={PROJECT_STATUS_COLORS[project.status as ProjectStatus]}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 space-y-4">
                      <div>
                        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 5).map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 5 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 5}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Metrics & View More */}
                      <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground">
                        {project.metrics && project.metrics.users !== undefined ? (
                          <span className="flex items-center gap-1">
                            <LucideIcons.Users className="h-4 w-4" />
                            {project.metrics.users} users
                          </span>
                        ) : (
                          <span></span>
                        )}
                        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                          View Details <LucideIcons.ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* All Projects */}
      <Section>
        <SectionHeading
          title="All Projects"
          subtitle="Explore my complete portfolio"
          align="center"
        />

        {/* Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('All')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === 'All'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            All
          </motion.button>
          {categories.map((category: ProjectCategory) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                layout
                layoutId={project.id}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <Card variant="default" hover="lift" className="h-full overflow-hidden group">
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <LucideIcons.Image className="h-12 w-12 text-muted-foreground/20" />
                        </div>
                        {/* Quick Actions Overlay */}
                        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          {project.liveUrl && (
                            <span
                              onClick={(e) => { e.preventDefault(); window.open(project.liveUrl, '_blank'); }}
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform cursor-pointer"
                              title="Live Demo"
                            >
                              <LucideIcons.ExternalLink className="h-5 w-5" />
                            </span>
                          )}
                          {project.repoUrl && (
                            <span
                              onClick={(e) => { e.preventDefault(); window.open(project.repoUrl, '_blank'); }}
                              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:scale-110 transition-transform cursor-pointer"
                              title="View Code"
                            >
                              <LucideIcons.Github className="h-5 w-5" />
                            </span>
                          )}
                        </div>
                        {/* Status */}
                        <div className="absolute right-2 top-2">
                          <Badge className={`text-xs ${PROJECT_STATUS_COLORS[project.status as ProjectStatus]}`}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 space-y-3">
                        <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                        <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.shortDescription || project.description}
                        </p>
                        
                        {/* Tech Stack & View More */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 2).map((tech, i) => (
                              <span key={i} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="text-xs text-muted-foreground">
                                +{project.technologies.length - 2}
                              </span>
                            )}
                          </div>
                          <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <LucideIcons.ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center py-12"
          >
            <LucideIcons.FolderOpen className="mx-auto h-16 w-16 text-muted-foreground/30" />
            <p className="mt-4 text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold">Have a Project in Mind?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s create something amazing together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              <LucideIcons.MessageSquare className="h-5 w-5" />
              Start a Conversation
            </Link>
            <a
              href="https://github.com/afzalhabibi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-all hover:bg-muted hover:scale-105"
            >
              <LucideIcons.Github className="h-5 w-5" />
              View GitHub
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
