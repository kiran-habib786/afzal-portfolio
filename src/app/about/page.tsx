'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { PageHero } from '@/components/layout'
import { Section, SectionHeading, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common'
import { aboutContent, contactInfo } from '@/data/about'
import { testimonials } from '@/data/testimonials'
import { staggerContainer, staggerItem } from '@/lib/animations'

// Experience timeline item component
export function ExperienceTimelineItem({
  exp,
  index,
  testimonial,
}: {
  exp: typeof aboutContent.experience[0]
  index: number
  testimonial?: typeof testimonials[0]
}) {
  return (
    <div className="relative">
      {/* Main Grid Layout - Experience LEFT, Icon CENTER, Testimonial RIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        // className="grid grid-cols-1 lg:grid-cols-[1.5fr,60px,1fr] gap-4 lg:gap-0 items-start"
        className='grid
  grid-cols-1
  md:grid-cols-[35%_10%_55%] '
        // style={{ display: "grid", gridTemplateColumns: "35% 10% 55%", gap: "0px", rowGap: "16px" }}
      >
        {/* RIGHT Side - Testimonial (smaller, with border) */}
        <div className="hidden lg:flex lg:pb-12">
          {testimonial ? (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
              className="w-full"
            >
              <div className="rounded-lg border border-border/30 bg-card/50 p-5 hover:border-primary/30 transition-all duration-300">
                {/* Star Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <LucideIcons.Star key={i} className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {testimonial.content}
                </p>

                {/* Company Logo/Name */}
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <LucideIcons.Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-primary">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="w-full max-w-xs" />
          )}
        </div>


        {/* CENTER - Timeline Icon */}
        <div className="hidden lg:flex justify-center pt-1 relative">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              delay: index * 0.1
            }}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/30"
          >
            <LucideIcons.Briefcase className="h-4 w-4 text-primary-foreground" />
          </motion.div>

            {/* Continuous Timeline Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-0 -translate-x-1/2 w-[2px]">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full w-full bg-gradient-to-b from-primary via-primary/60 to-primary/20 origin-top"
            />
          </div>
        </div>

        {/* LEFT Side - Experience (wider, no border) */}
        <div className="flex lg:pb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
            className="w-full max-w-md"
          >
            {/* Mobile: Show timeline icon */}
            <div className="flex lg:hidden items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70">
                <LucideIcons.Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
            </div>

            {/* Role Title */}
            <h3 className="text-xl font-bold text-primary mb-2">
              {exp.role}
            </h3>

            {/* Company & Period */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <LucideIcons.Building2 className="h-4 w-4" />
                {exp.company}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                <LucideIcons.Calendar className="h-3 w-3" />
                {exp.period}
              </span>
            </div>

            {/* Responsibilities */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium italic">
                Responsibilities
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 + i * 0.05 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile: Show testimonial below experience */}
      {testimonial && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:hidden mt-6 ml-12"
        >
          <div className="rounded-lg border border-border/30 bg-card/50 p-4">
            <div className="flex gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <LucideIcons.Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground line-clamp-3 mb-2">{testimonial.content}</p>
            <p className="text-xs font-semibold text-primary">{testimonial.company}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

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
            className="space-y-4"
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
      <Section className="bg-muted/30 overflow-hidden">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
          description="A timeline of my career growth and the impact I've made along the way."
          align="center"
        />

        <div className="mt-10 relative">
          {/* Background glow effects */}
          <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10" />
          <div className="absolute bottom-1/4 right-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[80px] -z-10" />

        

          {/* Timeline container */}
          <div className="relative">
            {aboutContent.experience.map((exp, index) => (
              <ExperienceTimelineItem
                key={index}
                exp={exp}
                index={index}
                testimonial={testimonials[index]}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Education Section */}
      {/* <Section>
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
                <CardContent className="p-4">
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
      </Section> */}

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
