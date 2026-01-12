import { cn } from '@/lib/cn'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-muted',
        className
      )}
    />
  )
}

// Page Hero Skeleton
export function PageHeroSkeleton() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container-custom">
        {/* Breadcrumb skeleton */}
        <div className="mb-6 flex items-center gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
        
        {/* Title skeleton */}
        <Skeleton className="mx-auto h-12 w-3/4 max-w-xl md:h-16" />
        
        {/* Subtitle skeleton */}
        <Skeleton className="mx-auto mt-4 h-6 w-2/3 max-w-lg" />
        
        {/* Social links skeleton */}
        <div className="mt-8 flex justify-center gap-3">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-10 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  )
}

// Card Grid Skeleton
export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="rounded-lg border border-border bg-card p-4">
          <Skeleton className="mb-4 h-32 w-full rounded-lg" />
          <Skeleton className="mb-2 h-6 w-3/4" />
          <Skeleton className="mb-4 h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  )
}

// Section Skeleton
export function SectionSkeleton({ children }: { children?: React.ReactNode }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-custom">
        {/* Section heading skeleton */}
        <div className="mb-12 text-center">
          <Skeleton className="mx-auto h-4 w-24" />
          <Skeleton className="mx-auto mt-2 h-8 w-64" />
          <Skeleton className="mx-auto mt-4 h-4 w-96 max-w-full" />
        </div>
        {children}
      </div>
    </section>
  )
}

// Skills Page Skeleton
export function SkillsPageSkeleton() {
  return (
    <>
      <PageHeroSkeleton />
      <div className="py-8">
        <div className="container-custom flex flex-wrap justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-full" />
          ))}
        </div>
      </div>
      <SectionSkeleton>
        <CardGridSkeleton count={6} />
      </SectionSkeleton>
    </>
  )
}

// Projects Page Skeleton
export function ProjectsPageSkeleton() {
  return (
    <>
      <PageHeroSkeleton />
      <SectionSkeleton>
        <div className="grid gap-8 lg:grid-cols-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <div className="p-4">
                <Skeleton className="mb-2 h-5 w-20" />
                <Skeleton className="mb-2 h-7 w-3/4" />
                <Skeleton className="mb-4 h-4 w-full" />
                <div className="flex gap-2">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-6 w-16 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionSkeleton>
      <SectionSkeleton>
        <CardGridSkeleton count={6} />
      </SectionSkeleton>
    </>
  )
}

// About Page Skeleton
export function AboutPageSkeleton() {
  return (
    <>
      <PageHeroSkeleton />
      <SectionSkeleton>
        <div className="grid gap-12 lg:grid-cols-2">
          <Skeleton className="aspect-square rounded-2xl" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-24 w-full" />
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-20 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </SectionSkeleton>
    </>
  )
}

// Contact Page Skeleton
export function ContactPageSkeleton() {
  return (
    <>
      <PageHeroSkeleton />
      <SectionSkeleton>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-20 rounded-lg" />
          ))}
        </div>
      </SectionSkeleton>
      <SectionSkeleton>
        <div className="grid gap-12 lg:grid-cols-2">
          <Skeleton className="h-[500px] rounded-lg" />
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-lg" />
            ))}
          </div>
        </div>
      </SectionSkeleton>
    </>
  )
}
