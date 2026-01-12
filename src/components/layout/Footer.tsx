import Link from 'next/link'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/cn'
import { SocialLinks } from './SocialLinks'
import { getFooterNav } from '@/data/navigation'
import { siteConfig } from '@/data/about'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const footerNav = getFooterNav()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'border-t border-border bg-card/50',
        className
      )}
    >
      <div className="container-custom py-6 md:py-8 pb-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-gradient">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <SocialLinks iconSize="sm" variant="muted" animated={false} />
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {footerNav.main.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.phone}
              </a>
              <p>Qalanderpura main bazar, Harbanspura,Lahore, Pakistan</p>
              {/* <p>Available for freelance</p> */}
            </div>
          </div>

          {/* Legal Links */}
          {/* <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h3>
            <nav className="flex flex-col gap-2">
              {footerNav.legal.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4 border-t border-border pt-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          {/* <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-destructive" /> using Next.js
          </p> */}
        </div>
      </div>
    </footer>
  )
}
