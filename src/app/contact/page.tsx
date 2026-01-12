'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { PageHero, SocialLinks } from '@/components/layout'
import { Section, SectionHeading, Card, CardContent, Button } from '@/components/common'
import { contactInfo } from '@/data/about'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { WEB3FORMS_CONFIG } from '@/lib/constants'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading' })

    try {
      const response = await fetch(WEB3FORMS_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_CONFIG.accessKey,
          ...formData,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      })
    }
  }

  const contactMethods = [
    {
      icon: 'Mail',
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: contactInfo.location,
      href: null,
    },
    // {
    //   icon: 'Clock',
    //   label: 'Timezone',
    //   value: contactInfo.timezone,
    //   href: null,
    // },
  ]

  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together."
        showSocialLinks
      />

      {/* Contact Methods */}
      <Section className="bg-muted/30">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-1 lg:grid-cols-3 h-full"
        >
          {contactMethods.map((method, index) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[method.icon]
            const content = (
              <Card variant="glass" hover={method.href ? 'lift' : 'none'} className='h-full'>
                <CardContent className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium">{method.value}</p>
                  </div>
                </CardContent>
              </Card>
            )

            return (
              <motion.div key={index} variants={staggerItem}>
                {method.href ? (
                  <a href={method.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated" className="h-full">
              <CardContent className="p-4 md:p-4">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  {/* Status Message */}
                  {status.type !== 'idle' && status.type !== 'loading' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 rounded-lg p-4 ${status.type === 'success'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                        }`}
                    >
                      {status.type === 'success' ? (
                        <LucideIcons.CheckCircle2 className="h-5 w-5" />
                      ) : (
                        <LucideIcons.AlertCircle className="h-5 w-5" />
                      )}
                      <p className="text-sm">{status.message}</p>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status.type === 'loading'}
                  >
                    {status.type === 'loading' ? (
                      <>
                        <LucideIcons.Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <LucideIcons.Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Availability */}
            <Card variant="glass">
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <LucideIcons.CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{contactInfo.availability}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {contactInfo.responseTime}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What to Expect</h3>
              <div className="space-y-3">
                {[
                  { icon: 'MessageSquare', text: 'Quick response within 24 hours' },
                  { icon: 'Video', text: 'Free consultation call to discuss your project' },
                  { icon: 'FileText', text: 'Detailed proposal with timeline and pricing' },
                  { icon: 'Handshake', text: 'Transparent communication throughout' },
                ].map((item, index) => {
                  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[item.icon]
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        {Icon && <Icon className="h-4 w-4 text-primary" />}
                      </div>
                      <p className="text-sm">{item.text}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect With Me</h3>
              <p className="text-muted-foreground">
                Follow me on social media for updates, tips, and behind-the-scenes content.
              </p>
              <SocialLinks iconSize="lg" variant="default" />
            </div>

            {/* Download CV */}
            <Card variant="elevated" className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <LucideIcons.FileText className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold">Download My Resume</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get a detailed overview of my experience and skills
                    </p>
                  </div>
                  <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
                    <a href="/cv/resume.pdf" download="Afzal-Resume.pdf">
                      <LucideIcons.Download className="mr-2 h-5 w-5" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

          </motion.div>
        </div>

      </Section>
      <Section>
        <SectionHeading
          title="Frequently Asked"
          subtitle="Professional credentials"
          align="center"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-8'
        >
          {/* FAQ */}
          <div className="space-y-4">
            <div className="space-y-3">
              {[
                {
                  q: 'What services do you offer?',
                  a: 'Full-stack web development, UI/UX design, and consulting.',
                },
                {
                  q: 'What is your typical project timeline?',
                  a: 'Depends on scope, but typically 2-8 weeks for most projects.',
                },
                {
                  q: 'Do you work with international clients?',
                  a: 'Yes! I work with clients globally and adapt to different timezones.',
                },
              ].map((faq, index) => (
                <Card key={index} variant="outline" className="overflow-hidden">
                  <CardContent className="p-4">
                    <p className="font-medium text-sm">{faq.q}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Map Section (Placeholder) */}
      <Section className="bg-muted/30" noPadding>
        <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27192.03801511163!2d74.3979740000095!3d31.57891755862111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391910214448d9ff%3A0xd3698040d7b0dcf4!2sQalandar%20Pura%20Harbanspura%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2spl!4v1768186022327!5m2!1sen!2spl" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
               
        </div>
      </Section>
    </>
  )
}
