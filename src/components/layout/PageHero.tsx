'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { cn } from '@/lib/cn'
import { breadcrumbContainerPro, breadcrumbItemPro, heroSubtitle, heroCTA, floatingOrb } from '@/lib/animations-pro'
import { SocialLinks } from './SocialLinks'
import type { BreadcrumbItem, PageHeroProps } from '@/types'

// Generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]

  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    const label = path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    breadcrumbs.push({
      label,
      href: currentPath,
      isActive: index === paths.length - 1,
    })
  })

  return breadcrumbs
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs: customBreadcrumbs,
  showSocialLinks = true,
  backgroundVariant = 'default',
  className,
}: PageHeroProps) {
  const pathname = usePathname()
  const breadcrumbs = customBreadcrumbs || generateBreadcrumbs(pathname)
  const containerRef = useRef<HTMLElement>(null)

  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const bgVariants = {
    default: 'hero-gradient-bg',
    subtle: 'bg-muted/30',
    vibrant: 'hero-gradient-bg hero-dot-pattern',
  }

  return (
    <section
      ref={containerRef}
      className={cn(
        'relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20',
        bgVariants[backgroundVariant],
        className
      )}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient orb */}
        <motion.div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"
          variants={floatingOrb(0)}
          initial="initial"
          animate="animate"
        />
        
        {/* Accent gradient orb */}
        <motion.div
          className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-accent/20 to-accent/5 blur-3xl"
          variants={floatingOrb(2)}
          initial="initial"
          animate="animate"
        />
        
        {/* Secondary orb */}
        <motion.div
          className="absolute left-1/3 -bottom-20 h-72 w-72 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
          variants={floatingOrb(4)}
          initial="initial"
          animate="animate"
        />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40" />
        
        {/* Noise texture for depth */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container-custom relative"
      >
        {/* Breadcrumb Navigation */}
        <motion.nav
          variants={breadcrumbContainerPro}
          initial="hidden"
          animate="visible"
          className="mb-6 flex items-center gap-2"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-1 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <motion.li
                key={crumb.href || index}
                variants={breadcrumbItemPro}
                className="flex items-center gap-1"
              >
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
                {crumb.isActive ? (
                  <span className="font-medium text-foreground bg-primary/10 px-2 py-0.5 rounded-md">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href || '#'}
                    className="text-muted-foreground transition-all hover:text-primary hover:bg-primary/5 px-2 py-0.5 rounded-md"
                  >
                    {crumb.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </ol>
        </motion.nav>

        {/* Title and Subtitle */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ 
              duration: 0.7, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1], // easeOutExpo
            }}
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              {title}
            </span>
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={heroSubtitle}
              initial="hidden"
              animate="visible"
              className="mt-4 text-lg text-muted-foreground md:text-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Social Links */}
        {showSocialLinks && (
          <motion.div
            variants={heroCTA}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <SocialLinks variant="muted" iconSize="md" />
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
