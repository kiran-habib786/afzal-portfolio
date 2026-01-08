import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    slug: 'ecommerce-platform',
    shortDescription: 'Full-stack online store with payment integration and admin dashboard',
    description: 'Built a complete e-commerce solution using Next.js App Router, supporting product catalog, cart, Stripe payments, and real-time order tracking.',
    longDescription: `A comprehensive e-commerce platform built from the ground up using modern web technologies. 
    
    This project showcases advanced Next.js features including App Router, Server Components, and API Routes. The platform supports a complete shopping experience with product browsing, cart management, secure checkout via Stripe, and real-time order tracking.
    
    The admin dashboard provides full CRUD operations for products, orders, and user management, with analytics and reporting features.`,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Stripe', 'NextAuth.js', 'Prisma'],
    featuredTechnologies: ['Next.js', 'Stripe', 'MongoDB'],
    role: 'Full-Stack Developer & Designer',
    status: 'Completed',
    category: 'Full-Stack',
    startDate: '2025-03-01',
    endDate: '2025-06-15',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    repoUrl: 'https://github.com/yourusername/ecommerce-nextjs',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200',
        alt: 'E-commerce homepage screenshot',
        isFeatured: true,
        caption: 'Clean product grid & hero section',
      },
      {
        url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200',
        alt: 'Shopping cart view',
        isFeatured: false,
        caption: 'Cart with real-time updates',
      },
    ],
    videoDemoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    contributions: [
      'Designed and implemented responsive UI with Tailwind CSS',
      'Integrated Stripe checkout and webhooks for secure payments',
      'Built admin dashboard with CRUD operations',
      'Optimized images and performance (LCP < 1.5s)',
      'Implemented authentication with NextAuth.js',
    ],
    challenges: [
      'Handling concurrent cart updates with optimistic UI',
      'Implementing secure webhook verification for payments',
      'Managing complex state across server and client components',
    ],
    learnings: [
      'Importance of optimistic UI updates for better UX',
      'Effective error handling in payment flows',
      'Server Components best practices for data fetching',
    ],
    metrics: {
      users: 1200,
      performance: 'PageSpeed Insights: 98 mobile / 100 desktop',
      conversion: '4.2% average',
    },
    featured: true,
    order: 1,
    tags: ['E-commerce', 'Full-Stack', 'Payments'],
    isOpenSource: true,
    license: 'MIT',
    metaDescription: 'Full-stack e-commerce platform built with Next.js, Stripe, and MongoDB',
    metaKeywords: ['Next.js', 'E-commerce', 'Stripe', 'MongoDB'],
  },
  {
    id: '2',
    title: 'Task Management App',
    slug: 'task-management-app',
    shortDescription: 'Collaborative project management tool with real-time updates',
    description: 'A Trello-inspired task management application with drag-and-drop functionality, real-time collaboration, and team workspace features.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    featuredTechnologies: ['React', 'Socket.io', 'PostgreSQL'],
    role: 'Lead Frontend Developer',
    status: 'Completed',
    category: 'Full-Stack',
    startDate: '2025-01-15',
    endDate: '2025-04-20',
    liveUrl: 'https://taskflow-demo.vercel.app',
    repoUrl: 'https://github.com/yourusername/taskflow',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200',
        alt: 'Task board view',
        isFeatured: true,
        caption: 'Kanban-style task board',
      },
    ],
    contributions: [
      'Led frontend architecture and component design',
      'Implemented drag-and-drop with smooth animations',
      'Built real-time sync with Socket.io',
      'Created responsive design for all devices',
    ],
    challenges: [
      'Optimizing drag-and-drop performance with many items',
      'Handling real-time conflicts in collaborative editing',
    ],
    learnings: [
      'WebSocket connection management best practices',
      'Optimistic updates with conflict resolution',
    ],
    metrics: {
      users: 500,
      performance: 'Lighthouse: 95+',
    },
    featured: true,
    order: 2,
    tags: ['Productivity', 'Real-time', 'Collaboration'],
    isOpenSource: true,
    license: 'MIT',
  },
  {
    id: '3',
    title: 'AI Content Generator',
    slug: 'ai-content-generator',
    shortDescription: 'AI-powered content creation tool using GPT-4 and custom models',
    description: 'An intelligent content generation platform that helps marketers and writers create high-quality content using advanced AI models.',
    technologies: ['Next.js', 'Python', 'FastAPI', 'OpenAI API', 'Vercel AI SDK', 'Supabase'],
    featuredTechnologies: ['Next.js', 'OpenAI', 'Python'],
    role: 'Full-Stack Developer',
    status: 'Completed',
    category: 'Full-Stack',
    startDate: '2025-05-01',
    endDate: '2025-08-30',
    liveUrl: 'https://ai-writer-demo.vercel.app',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
        alt: 'AI Content Generator interface',
        isFeatured: true,
        caption: 'Clean AI writing interface',
      },
    ],
    contributions: [
      'Designed and built the entire application architecture',
      'Integrated OpenAI API with streaming responses',
      'Created Python backend for custom model training',
      'Implemented user authentication and subscription system',
    ],
    challenges: [
      'Handling streaming responses from AI models',
      'Optimizing API costs while maintaining quality',
    ],
    learnings: [
      'Prompt engineering best practices',
      'AI API rate limiting and error handling',
    ],
    metrics: {
      users: 2500,
      performance: '99.9% uptime',
    },
    featured: true,
    order: 3,
    tags: ['AI', 'SaaS', 'Content'],
    isOpenSource: false,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    slug: 'portfolio-website',
    shortDescription: 'Modern developer portfolio with animations and dark mode',
    description: 'A professional portfolio website built with Next.js, featuring smooth animations, dark mode, and a clean, modern design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    featuredTechnologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
    role: 'Designer & Developer',
    status: 'In Progress',
    category: 'Frontend',
    startDate: '2025-12-01',
    liveUrl: 'https://afzal.dev',
    repoUrl: 'https://github.com/yourusername/portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200',
        alt: 'Portfolio homepage',
        isFeatured: true,
        caption: 'Modern portfolio design',
      },
    ],
    contributions: [
      'Designed and developed complete UI/UX',
      'Implemented smooth animations with Framer Motion',
      'Created dark/light mode with next-themes',
      'Optimized for Core Web Vitals',
    ],
    challenges: [
      'Balancing animations with performance',
      'Creating a cohesive design system',
    ],
    learnings: [
      'Animation performance optimization',
      'Design system implementation',
    ],
    featured: false,
    order: 4,
    tags: ['Portfolio', 'Animation', 'Design'],
    isOpenSource: true,
    license: 'MIT',
  },
]

// Helper functions
export const getFeaturedProjects = () => 
  projects.filter((project) => project.featured).sort((a, b) => a.order - b.order)

export const getProjectBySlug = (slug: string) => 
  projects.find((project) => project.slug === slug)

export const getProjectsByCategory = (category: string) => 
  projects.filter((project) => project.category === category)

export const getProjectCategories = () =>
  [...new Set(projects.map((project) => project.category))]

export const getAllProjectSlugs = () => 
  projects.map((project) => project.slug)
