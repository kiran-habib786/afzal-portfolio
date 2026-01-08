// Social media link type definitions

export type SocialPlatform = 
  | 'linkedin' 
  | 'github' 
  | 'twitter' 
  | 'instagram' 
  | 'facebook' 
  | 'dribbble' 
  | 'behance' 
  | 'youtube' 
  | 'pinterest'
  | 'medium'
  | 'dev'
  | 'codepen'
  | 'stackoverflow'

export interface SocialLink {
  id: string
  platform: SocialPlatform
  url: string
  label: string
  icon: string // Lucide icon name
  username?: string
  isActive: boolean
}
