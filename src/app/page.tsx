'use client'

import { lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, Download, Star, Quote } from 'lucide-react'
import { Button, Card, CardContent, Badge, Skeleton } from '@/components/common'
import { SocialLinks } from '@/components/layout'
import { staggerContainer, staggerItem, heroTextReveal, heroCharacter } from '@/lib/animations'
import { floatingOrb, heroWordReveal, heroWord, heroSubtitle, heroCTA, springs } from '@/lib/animations-pro'
import { aboutContent } from '@/data/about'
import { getFeaturedProjects } from '@/data/projects'
import { skills } from '@/data/skills'
import { testimonials } from '@/data/testimonials'
import { SKILL_CATEGORY_COLORS } from '@/lib/constants'
import type { SkillCategory } from '@/types/skill'

// Split text into words for animation
function AnimatedWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(' ')
  return (
    <motion.span
      variants={heroWordReveal}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={heroWord}
          className="inline-block mr-[0.25em]"
          style={{ perspective: 1000 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  
  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Animated Background - Professional & Subtle */}
        <div className="absolute inset-0 -z-10 hero-gradient-bg">
          {/* Primary gradient orb - very subtle */}
          <motion.div
            className="absolute -left-20 -top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/[0.07] via-primary/[0.03] to-transparent blur-[100px]"
            variants={floatingOrb(0)}
            initial="initial"
            animate="animate"
          />
          {/* Accent gradient orb - subtle */}
          <motion.div
            className="absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-accent/[0.05] via-accent/[0.02] to-transparent blur-[100px]"
            variants={floatingOrb(2)}
            initial="initial"
            animate="animate"
          />
          {/* Bottom ambient light */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-primary/[0.02] to-transparent" />
          {/* Grid pattern - subtle */}
          <div className="absolute inset-0 hero-grid-pattern" />
          {/* Vignette overlay for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_70%,hsl(var(--background))_100%)]" />
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="container-custom flex min-h-screen flex-col items-center justify-center pt-20"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/80 opacity-60"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                {aboutContent.tagline}
              </span>
            </motion.div>

            {/* Main Heading with word reveal */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <AnimatedWords text={aboutContent.intro} />
            </h1>

            {/* Description */}
            <motion.p
              variants={heroSubtitle}
              initial="hidden"
              animate="visible"
              className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed"
            >
              {aboutContent.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroCTA}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/projects">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/resume/afzal-resume.pdf" download>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={staggerItem}
              className="mt-12 flex justify-center"
            >
              <SocialLinks iconSize="lg" variant="muted" />
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerItem}
              className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            >
              {aboutContent.highlights.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <p className="text-3xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground">Scroll</span>
              <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30">
                <motion.div
                  className="mx-auto mt-1 h-2 w-1 rounded-full bg-muted-foreground/50"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Portfolio</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A selection of my recent work showcasing my skills in web development and design.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2"
          >
            {getFeaturedProjects().slice(0, 2).map((project, index) => (
              <motion.div key={project.id} variants={staggerItem}>
                <Link href={`/projects/${project.slug}`} className="block h-full">
                  <Card variant="elevated" hover="lift" className="h-full overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-primary/20">{project.title.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground line-clamp-2 mb-4">
                          {project.shortDescription || project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                            ))}
                          </div>
                          <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm">
                            View <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-muted/30 py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Expertise</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Skills & Technologies</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {skills.slice(0, 8).map((skill, index) => {
              const categoryGradient = SKILL_CATEGORY_COLORS[skill.category as keyof typeof SKILL_CATEGORY_COLORS] || SKILL_CATEGORY_COLORS.Other
              return (
                <motion.div key={skill.id} variants={staggerItem}>
                  <Link href={`/skills/${skill.slug}`} className="block h-full group">
                    <Card variant="glass" hover="scale" className="h-full transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${categoryGradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                            <span className="text-lg font-bold text-white">{skill.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{skill.name}</h3>
                            <p className="text-xs text-muted-foreground">{skill.category}</p>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Proficiency</span>
                            <span>{skill.proficiency}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${categoryGradient}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.05 }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/skills">
              <Button variant="outline" size="lg" className="group">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Clients Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Feedback from clients and collaborators I&apos;ve had the pleasure to work with.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div key={testimonial.id} variants={staggerItem}>
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 line-clamp-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Start a Project?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let&apos;s collaborate and turn your ideas into reality. I&apos;m always open to discussing new projects and opportunities.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
