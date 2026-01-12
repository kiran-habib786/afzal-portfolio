import { Skeleton } from '@/components/common/Skeleton'

export default function SkillDetailLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="container-custom">
          <div className="mb-6 flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-4 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="mx-auto h-12 w-1/2 max-w-md md:h-16" />
          <Skeleton className="mx-auto mt-4 h-6 w-2/3 max-w-lg" />
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-6">
                <Skeleton className="h-20 w-20 rounded-2xl" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
              <div className="space-y-4">
                <Skeleton className="h-8 w-40" />
                <Skeleton className="h-32 w-full" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full rounded-lg" />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-72 w-full rounded-lg" />
              <Skeleton className="h-48 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
