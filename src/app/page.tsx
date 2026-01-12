'use client'

import { lazy, Suspense, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { ArrowRight, Download, Star, Quote, User } from 'lucide-react'
import { Button, Card, CardContent, Badge, Skeleton, ConstellationBackground, Section, SectionHeading } from '@/components/common'
import { SocialLinks } from '@/components/layout'
import { staggerContainer, staggerItem, heroTextReveal, heroCharacter } from '@/lib/animations'
import { floatingOrb, heroWordReveal, heroWord, heroSubtitle, heroCTA, springs } from '@/lib/animations-pro'
import { aboutContent } from '@/data/about'
import { getFeaturedProjects } from '@/data/projects'
import { skills } from '@/data/skills'
import { testimonials } from '@/data/testimonials'
import { SKILL_CATEGORY_COLORS } from '@/lib/constants'
import type { SkillCategory } from '@/types/skill'
import { ExperienceTimelineItem } from '@/app/about/page'

// Rotating titles for hero section
const HERO_TITLES = ['Software Engineer','Developer', 'Coder', 'Programmer', 'Tech Enthusiast', 'Full Stack Developer']

// Pro-level animated rotating text with smooth animation
function RotatingText({ texts, interval = 2500 }: { texts: string[]; interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts.length, interval])

  const currentText = texts[currentIndex]

  return (
    <span className="relative inline-block align-baseline">
      {/* Glow effect behind text */}
      <motion.span
        className="absolute -inset-x-4 -inset-y-2 blur-2xl bg-primary/40 -z-10 rounded-lg"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Text container with smooth vertical slide */}
      <span className="relative inline-block overflow-hidden h-[1.2em] align-bottom">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={currentIndex}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ 
              duration: 0.5,
              ease: [0.32, 0.72, 0, 1],
            }}
            className="inline-block text-primary whitespace-nowrap"
          >
            {currentText}
          </motion.span>
        </AnimatePresence>
      </span>
      
      {/* Progressive underline */}
      <motion.span
        key={currentIndex}
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary to-primary/60 rounded-full"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{
          duration: (interval - 500) / 1000,
          ease: 'linear',
        }}
      />
    </span>
  )
}

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

// Profile Image with fallback
function ProfileImage() {
  const [imageError, setImageError] = useState(false)
  
  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
        <User className="w-32 h-32 text-primary/40" />
      </div>
    )
  }
  
  return (
    <Image
      src="/images/profile2.jpeg"
      alt="Afzal - Full Stack Developer"
      fill
      className="object-cover object-top rounded-[2rem]"
      priority
      sizes="(max-width: 1024px) 0vw, 380px"
      onError={() => setImageError(true)}
      style={{ aspectRatio: '380/500',width: '100%', height: '100%' }}
    />
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
        {/* Pro-Level Background with Ambient Glow */}
        <div className="absolute inset-0 -z-10">
          {/* Base dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
          
          {/* Main hero glow - positioned to left where content is */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[150px]" />
          
          {/* Secondary ambient glow - top right */}
          <motion.div
            className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Accent glow - bottom left */}
          <motion.div
            className="absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          
          {/* Pro-level constellation network animation */}
          <ConstellationBackground 
            nodeCount={60}
            connectionDistance={140}
            interactive={true}
            className="opacity-70"
          />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 hero-grid-pattern opacity-20" />
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="container-custom flex min-h-screen items-center pt-20 pb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-left"
            >
              {/* Welcome Tag */}
              {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/80 text-sm md:text-base font-medium mb-6 tracking-wide"
              >
                Welcome to my portfolio!
              </motion.p> */}

              {/* Main Heading */}
              <h1 className="mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="block text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground"
                >
                 I'm Afzal Habib, 
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="block text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground"
                >
                  {/* <span className='text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>The </span> */}
                  <RotatingText texts={HERO_TITLES} interval={3000} />
                  <span className="text-primary">.</span>
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                {aboutContent.summary}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4"
              >
                {/* Primary CTA with Glow */}
                <Link href="/cv/resume.pdf" download>
                  <Button 
                    size="lg" 
                    className="relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.7)] transition-all duration-300"
                  >
                    Download cv
                  </Button>
                </Link>
                
                {/* Secondary CTA */}
                <Link href="/projects">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="group border-border hover:border-foreground/30 hover:bg-muted/50 font-semibold px-8 transition-all duration-300"
                  >
                    See my work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10"
              >
                <SocialLinks iconSize="md" variant="muted" />
              </motion.div>

              {/* Mobile Stats - shown only on mobile/tablet */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 grid grid-cols-2 gap-3 lg:hidden"
              >
                {aboutContent.highlights.slice(0, 4).map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image with Stylized Frame */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex justify-center items-center relative"
            >
              {/* Main container for profile image */}
              <div className="relative">
                {/* Animated glow behind the frame */}
                <motion.div
                  className="absolute inset-0 -m-4 rounded-[3rem] bg-gradient-to-br from-primary/40 via-primary/20 to-transparent blur-3xl"
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                
                {/* Stylized frame - outer ring */}
                <div className="relative w-[380px] h-[460px]">
                  {/* Gradient border frame */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/50 to-primary/20 p-[3px]">
                    <div className="w-full h-full rounded-[2.4rem] bg-background" />
                  </div>
                  
                  {/* Inner frame with image */}
                  <div className="absolute inset-3 rounded-[2rem] overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    {/* Profile Image */}
                    <ProfileImage />
                    
                    {/* Subtle gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                  
                  {/* Decorative glow accent on frame */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-20 h-20 bg-primary/60 rounded-full blur-2xl"
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Bottom glow accent */}
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  />
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-16 h-16"
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary/50 rotate-45 transform rounded-lg shadow-lg shadow-primary/30" />
                </motion.div>
                
                {/* Floating ring decoration */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-24 h-24"
                  animate={{
                    y: [5, -5, 5],
                    rotate: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                >
                  <div className="w-full h-full rounded-full border-4 border-primary/40 bg-primary/5 backdrop-blur-sm" />
                </motion.div>

                {/* Stats overlay cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -right-16 top-1/4 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl"
                >
                  <p className="text-2xl font-bold text-primary">{aboutContent.highlights[0]?.value || '5+'}</p>
                  <p className="text-xs text-muted-foreground">{aboutContent.highlights[0]?.label || 'Years Exp'}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -left-12 bottom-1/4 bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl"
                >
                  <p className="text-2xl font-bold text-primary">{aboutContent.highlights[1]?.value || '50+'}</p>
                  <p className="text-xs text-muted-foreground">{aboutContent.highlights[1]?.label || 'Projects'}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

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
                      <div className="p-4">
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

      {/* Experience Section */}
      <Section className="bg-muted/30 overflow-hidden">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
          description="A timeline of my career growth and the impact I've made along the way."
          align="center"
        />

        <div className="mt-10 relative">
          {/* Background glow effects */}
          <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10" />
          <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[80px] -z-10" />

          {/* Timeline container */}
          <div className="relative">
            {aboutContent.experience.map((exp, index) => (
              <ExperienceTimelineItem
                key={index}
                exp={exp}
                index={index}
                testimonial={testimonials[index]}
              />
            ))}
          </div>
        </div>
      </Section>

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
                  <CardContent className="p-4">
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
