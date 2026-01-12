'use client'

import { forwardRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeInUp, viewportSettings } from '@/lib/animations'

export interface SectionProps {
  className?: string
  containerClassName?: string
  animated?: boolean
  fullWidth?: boolean
  noPadding?: boolean
  children?: ReactNode
  id?: string
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      containerClassName,
      animated = true,
      fullWidth = false,
      noPadding = false,
      children,
      id,
    },
    ref
  ) => {
    const content = fullWidth ? (
      children
    ) : (
      <div className={cn('container-custom', containerClassName)}>
        {children}
      </div>
    )

    if (animated) {
      return (
        <motion.section
          ref={ref as React.Ref<HTMLElement>}
          id={id}
          className={cn(
            !noPadding && 'py-12 md:py-16',
            className
          )}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          {content}
        </motion.section>
      )
    }

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          !noPadding && 'py-16 md:py-24',
          className
        )}
      >
        {content}
      </section>
    )
  }
)

Section.displayName = 'Section'

export { Section }
