import { Skeleton } from '@/components/common/Skeleton'

export default function HomeLoading() {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background" />
        <div className="container-custom flex min-h-screen flex-col items-center justify-center pt-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* Tagline */}
            <Skeleton className="mx-auto mb-4 h-5 w-48" />
            
            {/* Title */}
            <Skeleton className="mx-auto mb-6 h-16 w-3/4" />
            
            {/* Description */}
            <Skeleton className="mx-auto mb-8 h-20 w-2/3" />
            
            {/* Buttons */}
            <div className="flex items-center justify-center gap-4">
              <Skeleton className="h-12 w-36 rounded-lg" />
              <Skeleton className="h-12 w-36 rounded-lg" />
            </div>
            
            {/* Social */}
            <div className="mt-12 flex justify-center gap-3">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-10 rounded-full" />
              ))}
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="mx-auto h-10 w-16" />
                  <Skeleton className="mx-auto mt-2 h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section Skeleton */}
      <section className="py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <Skeleton className="mx-auto h-4 w-20" />
            <Skeleton className="mx-auto mt-2 h-10 w-64" />
            <Skeleton className="mx-auto mt-4 h-5 w-96 max-w-full" />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
                <Skeleton className="aspect-video w-full" />
                <div className="p-4">
                  <Skeleton className="mb-2 h-5 w-20" />
                  <Skeleton className="mb-2 h-7 w-3/4" />
                  <Skeleton className="mb-4 h-12 w-full" />
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, j) => (
                      <Skeleton key={j} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
