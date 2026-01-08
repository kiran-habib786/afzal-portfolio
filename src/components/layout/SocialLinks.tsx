'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/lib/cn'
import { socialIconHover, staggerContainer, staggerItem } from '@/lib/animations'
import { getActiveSocialLinks } from '@/data/social'
import { SocialLink as SocialLinkType } from '@/types'

interface SocialLinksProps {
  className?: string
  iconSize?: 'sm' | 'md' | 'lg'
  showLabels?: boolean
  variant?: 'default' | 'muted' | 'primary'
  animated?: boolean
}

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}

const variants = {
  default: 'text-foreground hover:text-primary',
  muted: 'text-muted-foreground hover:text-foreground',
  primary: 'text-primary hover:text-primary/80',
}

// Helper to get Lucide icon component by name
function getIconComponent(iconName: string) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName]
  return Icon || LucideIcons.Link
}

interface SocialIconProps {
  link: SocialLinkType
  iconSize: 'sm' | 'md' | 'lg'
  variant: 'default' | 'muted' | 'primary'
  showLabels: boolean
  animated: boolean
}

function SocialIcon({ link, iconSize, variant, showLabels, animated }: SocialIconProps) {
  const Icon = getIconComponent(link.icon)
  
  const content = (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md p-2',
        'transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        variants[variant]
      )}
      aria-label={`Visit ${link.label}`}
    >
      <Icon className={iconSizes[iconSize]} />
      {showLabels && <span className="text-sm">{link.label}</span>}
    </Link>
  )

  if (animated) {
    return (
      <motion.div
        variants={staggerItem}
        whileHover={socialIconHover.hover}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}

export function SocialLinks({
  className,
  iconSize = 'md',
  showLabels = false,
  variant = 'default',
  animated = true,
}: SocialLinksProps) {
  const socialLinks = getActiveSocialLinks()

  if (animated) {
    return (
      <motion.div
        className={cn('flex items-center gap-1', className)}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {socialLinks.map((link) => (
          <SocialIcon
            key={link.id}
            link={link}
            iconSize={iconSize}
            variant={variant}
            showLabels={showLabels}
            animated={animated}
          />
        ))}
      </motion.div>
    )
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      {socialLinks.map((link) => (
        <SocialIcon
          key={link.id}
          link={link}
          iconSize={iconSize}
          variant={variant}
          showLabels={showLabels}
          animated={animated}
        />
      ))}
    </div>
  )
}
