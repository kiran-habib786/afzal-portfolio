'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import { breadcrumbContainer, breadcrumbItem } from '@/lib/animations'
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

  const bgVariants = {
    default: 'hero-gradient-bg',
    subtle: 'bg-muted/30',
    vibrant: 'hero-gradient-bg hero-dot-pattern',
  }

  return (
    <section
      className={cn(
        'relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20',
        bgVariants[backgroundVariant],
        className
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 hero-grid-pattern opacity-50" />
      </div>

      <div className="container-custom relative">
        {/* Breadcrumb Navigation */}
        <motion.nav
          variants={breadcrumbContainer}
          initial="hidden"
          animate="visible"
          className="mb-6 flex items-center gap-2"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-1 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <motion.li
                key={crumb.href || index}
                variants={breadcrumbItem}
                className="flex items-center gap-1"
              >
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
                {crumb.isActive ? (
                  <span className="font-medium text-foreground">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href || '#'}
                    className="text-muted-foreground transition-colors hover:text-primary"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-lg text-muted-foreground md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Social Links */}
        {showSocialLinks && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <SocialLinks variant="muted" iconSize="md" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
