import { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechStartup Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    content: 'Working with Afzal was an absolute pleasure. His attention to detail and commitment to delivering high-quality code exceeded our expectations. The e-commerce platform he built for us has significantly improved our conversion rates.',
    rating: 5,
    date: '2025-06-20',
    projectId: '1',
    link: 'https://linkedin.com/in/sarahjohnson',
    featured: true,
    order: 1,
  },
  {
    id: '2',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateTech Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    content: 'Afzal delivered our task management application on time and within budget. His expertise in real-time technologies and clean code practices made collaboration smooth. Highly recommend for any complex web project.',
    rating: 5,
    date: '2025-04-25',
    projectId: '2',
    link: 'https://linkedin.com/in/michaelchen',
    featured: true,
    order: 2,
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'ContentFirst Agency',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    content: 'The AI content generator Afzal built has transformed how our team creates content. The interface is intuitive, and the AI integration is seamless. A truly exceptional developer who understands both tech and business needs.',
    rating: 5,
    date: '2025-09-10',
    projectId: '3',
    featured: true,
    order: 3,
  },
  {
    id: '4',
    author: 'David Kim',
    role: 'Founder',
    company: 'StartupLaunch',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    content: 'Afzal helped us launch our MVP in record time. His full-stack expertise and problem-solving skills are remarkable. He communicates clearly and delivers what he promises. Will definitely work with him again.',
    rating: 5,
    date: '2025-08-05',
    featured: false,
    order: 4,
  },
  {
    id: '5',
    author: 'Lisa Thompson',
    role: 'UX Lead',
    company: 'DesignStudio Pro',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
    content: 'As a designer, I appreciate developers who can translate designs pixel-perfectly. Afzal not only matched my designs but also suggested UX improvements that made the final product even better. A rare find!',
    rating: 5,
    date: '2025-07-15',
    featured: false,
    order: 5,
  },
]

// Helper functions
export const getFeaturedTestimonials = () =>
  testimonials.filter((t) => t.featured).sort((a, b) => a.order - b.order)

export const getTestimonialById = (id: string) =>
  testimonials.find((t) => t.id === id)

export const getTestimonialsByProject = (projectId: string) =>
  testimonials.filter((t) => t.projectId === projectId)
