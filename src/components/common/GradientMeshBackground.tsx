'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface GradientMeshBackgroundProps {
  className?: string
  variant?: 'default' | 'subtle' | 'vibrant'
  animated?: boolean
}

// Floating geometric shape component
function FloatingShape({
  delay = 0,
  duration = 20,
  className,
  children,
}: {
  delay?: number
  duration?: number
  className?: string
  children?: React.ReactNode
}) {
  return (
    <motion.div
      className={cn('absolute', className)}
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: [0.5, 0.9, 0.5],
        y: [0, -15, 0],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

// Animated gradient orb
function GradientOrb({
  className,
  delay = 0,
  scale = 1,
}: {
  className?: string
  delay?: number
  scale?: number
}) {
  return (
    <motion.div
      className={cn(
        'absolute rounded-full blur-[80px]',
        className
      )}
      style={{ scale }}
      initial={{ opacity: 0.4 }}
      animate={{
        scale: [scale, scale * 1.15, scale],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export function GradientMeshBackground({
  className = '',
  variant = 'default',
  animated = true,
}: GradientMeshBackgroundProps) {
  const isSubtle = variant === 'subtle'
  const isVibrant = variant === 'vibrant'

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      {/* Animated gradient mesh orbs - theme aware */}
      <GradientOrb
        className="w-[600px] h-[600px] -top-40 -left-40 bg-gradient-to-br from-primary/40 via-primary/30 to-primary/10 dark:from-primary/30 dark:via-primary/20 dark:to-primary/5"
        delay={0}
        scale={isSubtle ? 0.8 : 1}
      />
      
      <GradientOrb
        className="w-[500px] h-[500px] top-1/4 -right-20 bg-gradient-to-bl from-primary/35 via-accent/25 to-accent/10 dark:from-primary/25 dark:via-accent/15 dark:to-accent/5"
        delay={2}
        scale={isSubtle ? 0.7 : 0.9}
      />
      
      <GradientOrb
        className="w-[400px] h-[400px] -bottom-20 left-1/4 bg-gradient-to-tr from-primary/30 via-primary/20 to-transparent dark:from-primary/20 dark:via-primary/10 dark:to-transparent"
        delay={4}
        scale={isSubtle ? 0.6 : 0.85}
      />

      {/* Flowing mesh lines - horizontal */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="mesh-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground"
            />
          </pattern>
          <linearGradient id="mesh-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="mesh-mask">
            <rect width="100%" height="100%" fill="url(#mesh-fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#mesh-pattern)"
          mask="url(#mesh-mask)"
        />
      </svg>

      {/* Animated flowing lines */}
      {animated && (
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Flowing curve 1 */}
          <motion.path
            d="M 0 60 Q 25 40, 50 60 T 100 60"
            fill="none"
            stroke="url(#line-gradient-1)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{ 
              transform: 'translateY(20%)',
            }}
          />
          
          {/* Flowing curve 2 */}
          <motion.path
            d="M 0 40 Q 30 60, 60 40 T 100 45"
            fill="none"
            stroke="url(#line-gradient-2)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.3, ease: 'easeOut' }}
            style={{ 
              transform: 'translateY(40%)',
            }}
          />
        </svg>
      )}

      {/* Floating geometric shapes */}
      {animated && (
        <>
          {/* Diamond shape */}
          <FloatingShape
            delay={0}
            duration={15}
            className="top-[15%] right-[15%]"
          >
            <div className="w-10 h-10 rotate-45 border-2 border-primary/60 bg-primary/20 dark:border-primary/40 dark:bg-primary/10 backdrop-blur-sm shadow-lg shadow-primary/30 dark:shadow-primary/20" />
          </FloatingShape>

          {/* Circle ring */}
          <FloatingShape
            delay={2}
            duration={18}
            className="top-[60%] right-[25%]"
          >
            <div className="w-14 h-14 rounded-full border-2 border-primary/50 bg-primary/10 dark:border-primary/30 dark:bg-primary/5" />
          </FloatingShape>

          {/* Small square */}
          <FloatingShape
            delay={1}
            duration={20}
            className="top-[35%] left-[10%]"
          >
            <div className="w-8 h-8 border-2 border-primary/55 bg-primary/15 dark:border-primary/35 dark:bg-primary/10 backdrop-blur-sm rounded-sm shadow-lg shadow-primary/20 dark:shadow-primary/10" />
          </FloatingShape>

          {/* Dot cluster */}
          <FloatingShape
            delay={3}
            duration={16}
            className="bottom-[25%] left-[20%]"
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/70 dark:bg-primary/50" />
              <div className="w-3 h-3 rounded-full bg-primary/50 dark:bg-primary/35" />
              <div className="w-3 h-3 rounded-full bg-primary/30 dark:bg-primary/20" />
            </div>
          </FloatingShape>

          {/* Hexagon outline */}
          <FloatingShape
            delay={1.5}
            duration={22}
            className="top-[20%] left-[30%]"
          >
            <svg width="32" height="36" viewBox="0 0 24 28" className="text-primary/60 dark:text-primary/40">
              <polygon
                points="12,1 23,7 23,21 12,27 1,21 1,7"
                className="fill-primary/15 dark:fill-primary/10"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </FloatingShape>

          {/* Plus sign */}
          <FloatingShape
            delay={4}
            duration={17}
            className="bottom-[35%] right-[10%]"
          >
            <div className="relative w-8 h-8">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-primary/60 dark:bg-primary/40 -translate-y-1/2 rounded-full" />
              <div className="absolute top-0 left-1/2 w-[2px] h-full bg-primary/60 dark:bg-primary/40 -translate-x-1/2 rounded-full" />
            </div>
          </FloatingShape>
        </>
      )}

      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_100%)]" />
      
      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
