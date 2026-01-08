'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { PageHero } from '@/components/layout'
import { Section, SectionHeading, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common'
import { aboutContent, contactInfo } from '@/data/about'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Me"
        subtitle="Discover my journey, values, and what drives me to create exceptional digital experiences."
        showSocialLinks
      />

      {/* Intro Section */}
      <Section className="bg-muted/30">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-primary/20 flex items-center justify-center">
                  <LucideIcons.User className="h-16 w-16 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Your Photo Here</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold md:text-4xl">{aboutContent.intro}</h2>
            <p className="text-lg text-muted-foreground">{aboutContent.summary}</p>
            <p className="text-muted-foreground">{aboutContent.vision}</p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {aboutContent.highlights.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg border border-border bg-card p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <SectionHeading
          title="My Core Values"
          subtitle="The principles that guide my work"
          description="These values shape every project I undertake and every line of code I write."
          align="center"
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {aboutContent.values.map((value, index) => {
            const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[value.icon]
            return (
              <motion.div key={index} variants={staggerItem}>
                <Card variant="elevated" hover="lift" className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      {Icon && <Icon className="h-7 w-7 text-primary" />}
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section className="bg-muted/30">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
          align="center"
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 space-y-6"
        >
          {aboutContent.experience.map((exp, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card variant="default" hover="glow" className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                      <ul className="mt-3 space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <LucideIcons.CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
                      <LucideIcons.Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Education Section */}
      <Section>
        <SectionHeading
          title="Education"
          subtitle="Academic background"
          align="center"
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {aboutContent.education.map((edu, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card variant="glass" hover="lift" className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <LucideIcons.GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-primary">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                      <p className="text-xs text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-muted/30">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials"
          align="center"
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aboutContent.certifications.map((cert, index) => (
            <motion.div key={index} variants={staggerItem}>
              <Card variant="outline" hover="scale" className="h-full">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                    <LucideIcons.Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Contact CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Interested in collaborating or have a project in mind? I&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              <LucideIcons.Mail className="h-5 w-5" />
              Get In Touch
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium transition-all hover:bg-muted hover:scale-105"
            >
              <LucideIcons.MessageSquare className="h-5 w-5" />
              Contact Form
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
