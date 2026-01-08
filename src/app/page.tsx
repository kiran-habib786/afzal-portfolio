'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/common'
import { SocialLinks } from '@/components/layout'
import { staggerContainer, staggerItem, heroTextReveal, heroCharacter } from '@/lib/animations'
import { aboutContent } from '@/data/about'

// Split text into characters for animation
function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={heroTextReveal}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={heroCharacter}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 hero-gradient-bg">
          {/* Gradient orbs */}
          <motion.div
            className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/15 blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Grid pattern */}
          <div className="absolute inset-0 hero-grid-pattern opacity-30" />
        </div>

        {/* Hero Content */}
        <div className="container-custom flex min-h-screen flex-col items-center justify-center pt-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            {/* Tagline */}
            <motion.p
              variants={staggerItem}
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary md:text-base"
            >
              {aboutContent.tagline}
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              variants={staggerItem}
              className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
            >
              <AnimatedText text={aboutContent.intro} />
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={staggerItem}
              className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              {aboutContent.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
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
        </div>
      </section>

      {/* Placeholder sections - to be implemented in Phase 2 */}
      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground">Coming in Phase 2...</p>
        </div>
      </section>

      <section className="bg-muted/30 py-24">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">Skills & Expertise</h2>
          <p className="text-muted-foreground">Coming in Phase 2...</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">What Clients Say</h2>
          <p className="text-muted-foreground">Coming in Phase 2...</p>
        </div>
      </section>
    </>
  )
}
