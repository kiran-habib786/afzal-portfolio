'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const cardVariants = cva(
  // Base styles with enhanced transitions
  'rounded-xl border bg-card text-card-foreground transition-all duration-300 ease-out',
  {
    variants: {
      variant: {
        default: 'border-border shadow-sm',
        elevated: 'border-transparent shadow-lg hover:shadow-xl',
        outline: 'border-border bg-transparent hover:border-primary/50',
        ghost: 'border-transparent bg-transparent',
        glass: 'border-border/30 bg-card/70 backdrop-blur-md shadow-lg',
        gradient: 'border-transparent bg-gradient-to-br from-card via-card to-card/80 shadow-lg',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-2 hover:shadow-2xl',
        scale: 'hover:scale-[1.03] hover:shadow-xl',
        glow: 'hover:ring-2 hover:ring-primary/30 hover:shadow-lg hover:shadow-primary/10',
        border: 'hover:border-primary/50 hover:shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      hover: 'none',
    },
  }
)

export interface CardProps extends VariantProps<typeof cardVariants> {
  animated?: boolean
  className?: string
  children?: ReactNode
  id?: string
  onClick?: () => void
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover, animated = false, children, id, onClick }, ref) => {
    if (animated) {
      return (
        <motion.div
          ref={ref}
          id={id}
          className={cn(cardVariants({ variant, padding, hover, className }))}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={onClick}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div
        ref={ref}
        id={id}
        className={cn(cardVariants({ variant, padding, hover, className }))}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card sub-components
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants }
