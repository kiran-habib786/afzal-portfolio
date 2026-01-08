// Project type definitions

export interface ProjectImage {
  url: string
  alt: string
  caption?: string
  isFeatured: boolean
}

export interface ProjectMetrics {
  users?: number
  performance?: string
  conversion?: string
  engagement?: string
}

export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned'
export type ProjectCategory = 'Full-Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'Design' | 'Other'

export interface Project {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string
  longDescription?: string
  
  // Technologies
  technologies: string[]
  featuredTechnologies: string[]
  
  // Metadata
  role: string
  status: ProjectStatus
  category: ProjectCategory
  
  // Dates
  startDate: string
  endDate?: string
  
  // Links
  liveUrl?: string
  repoUrl?: string
  figmaUrl?: string
  caseStudyUrl?: string
  
  // Media
  images: ProjectImage[]
  videoDemoUrl?: string
  
  // Content
  contributions: string[]
  challenges: string[]
  learnings: string[]
  
  // Metrics
  metrics?: ProjectMetrics
  
  // Organization
  featured: boolean
  order: number
  tags: string[]
  isOpenSource: boolean
  license?: string
  
  // SEO
  metaDescription?: string
  metaKeywords?: string[]
}
