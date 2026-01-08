'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeInUp } from '@/lib/animations'

export interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  animated?: boolean
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = 'center',
  animated = true,
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  const content = (
    <div
      className={cn(
        'max-w-3xl space-y-4',
        alignmentClasses[align],
        className
      )}
    >
      {subtitle && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-wider text-primary',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg text-muted-foreground',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {content}
      </motion.div>
    )
  }

  return content
}
