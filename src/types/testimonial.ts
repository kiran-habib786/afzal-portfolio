// Testimonial type definitions

export type TestimonialRating = 1 | 2 | 3 | 4 | 5

export interface Testimonial {
  id: string
  author: string
  role: string
  company: string
  image: string
  content: string
  rating: TestimonialRating
  date: string
  projectId?: string // Related project
  link?: string // LinkedIn profile or company website
  featured: boolean
  order: number
}
