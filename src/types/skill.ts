// Skill type definitions

export type SkillCategory = 'Frontend' | 'Backend' | 'Tools' | 'Design' | 'Database' | 'DevOps' | 'Other'
export type ProficiencyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type ProficiencyLabel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

export interface Skill {
  id: string
  name: string
  slug: string
  
  // Categorization
  category: SkillCategory
  subcategory?: string
  
  // Proficiency
  proficiency: ProficiencyLevel
  proficiencyLabel: ProficiencyLabel
  yearsOfExperience: number
  
  // Description
  description: string
  detailedDescription?: string
  
  // Visual
  icon: string // Lucide icon name or 'custom'
  customIcon?: string // SVG string for custom icons
  color?: string // Gradient or solid color class
  
  // Relations
  relatedProjects?: string[] // Project IDs
  relatedSkills?: string[] // Skill IDs
  
  // Organization
  featured: boolean
  order: number
}
