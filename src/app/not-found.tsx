'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/common'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <span className="text-[150px] font-bold leading-none text-gradient md:text-[200px]">
              404
            </span>
          </motion.div>

          {/* Message */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            Page Not Found
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8 text-lg text-muted-foreground"
          >
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/">
              <Button size="lg" className="group">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 rounded-lg border border-border bg-muted/30 p-4"
          >
            <h2 className="mb-4 text-lg font-semibold">Maybe try one of these?</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/about"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-muted/80"
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-muted/80"
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-muted/80"
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-muted/80"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
