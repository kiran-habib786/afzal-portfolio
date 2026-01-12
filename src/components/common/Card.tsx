'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const cardVariants = cva(
  // Base styles with refined transitions
  'rounded-xl border bg-card text-card-foreground transition-all duration-200 ease-out',
  {
    variants: {
      variant: {
        default: 'border-border/50 shadow-sm',
        elevated: 'border-border/30 shadow-md hover:shadow-lg',
        outline: 'border-border bg-transparent hover:border-foreground/20',
        ghost: 'border-transparent bg-transparent',
        glass: 'border-border/20 bg-card/60 backdrop-blur-sm',
        gradient: 'border-border/30 bg-card shadow-sm',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-4',
        lg: 'p-8',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1 hover:shadow-lg',
        scale: 'hover:scale-[1.02] hover:shadow-md',
        glow: 'hover:border-foreground/20 hover:shadow-md',
        border: 'hover:border-foreground/20',
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
