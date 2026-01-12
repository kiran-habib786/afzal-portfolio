'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { PageHero } from '@/components/layout'
import { Section, SectionHeading, Card, CardContent, Badge } from '@/components/common'
import { skills, getSkillsByCategory, getAllSkillCategories } from '@/data/skills'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { SKILL_CATEGORY_COLORS } from '@/lib/constants'
import type { SkillCategory, ProficiencyLabel } from '@/types/skill'

const proficiencyColors: Record<ProficiencyLabel, string> = {
  Beginner: 'bg-slate-500',
  Intermediate: 'bg-blue-500',
  Advanced: 'bg-purple-500',
  Expert: 'bg-gradient-to-r from-primary to-accent',
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All')
  const categories = getAllSkillCategories()
  
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : getSkillsByCategory(activeCategory)

  return (
    <>
      <PageHero
        title="Skills & Expertise"
        subtitle="A comprehensive overview of my technical abilities and professional skills honed over years of experience."
        showSocialLinks
      />

      {/* Skills Filter */}
      <Section noPadding className="py-8">
        <div className="flex flex-wrap justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory('All')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === 'All'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            All Skills
          </motion.button>
          {categories.map((category: SkillCategory) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </Section>

      {/* Skills Grid */}
      <Section className="bg-muted/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredSkills.map((skill, index) => {
              const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[skill.icon]
              const categoryGradient = SKILL_CATEGORY_COLORS[skill.category as keyof typeof SKILL_CATEGORY_COLORS] || SKILL_CATEGORY_COLORS.Other
              
              return (
                <motion.div
                  key={skill.id}
                  variants={staggerItem}
                  layout
                  layoutId={skill.id}
                >
                  <Link href={`/skills/${skill.slug}`} className="block h-full group">
                    <Card variant="elevated" hover="lift" className="h-full overflow-hidden transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/50">
                      <CardContent className="p-0">
                        {/* Gradient Header */}
                        <div className={`bg-gradient-to-r ${categoryGradient} p-4`}>
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                              {Icon && <Icon className="h-6 w-6 text-white" />}
                            </div>
                            <div>
                              <h3 className="font-semibold text-white group-hover:underline">{skill.name}</h3>
                              <Badge variant="secondary" className="mt-1 bg-white/20 text-white text-xs">
                                {skill.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-4 space-y-4">
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {skill.description}
                          </p>
                          
                          {/* Proficiency Bar */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Proficiency</span>
                              <span className="font-medium">{skill.proficiency}%</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-muted">
                              <motion.div
                                className={`h-full rounded-full ${proficiencyColors[skill.proficiencyLabel]}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                              />
                            </div>
                            <div className="flex justify-end">
                              <Badge 
                                variant={skill.proficiencyLabel === 'Expert' ? 'gradient' : 'secondary'}
                                className="text-xs"
                              >
                                {skill.proficiencyLabel}
                              </Badge>
                            </div>
                          </div>
                          
                          {/* Experience & View More */}
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <LucideIcons.Clock className="h-4 w-4" />
                              <span>{skill.yearsOfExperience} years experience</span>
                            </div>
                            <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                              View <LucideIcons.ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* Skills Overview by Category */}
      <Section>
        <SectionHeading
          title="Skills by Category"
          subtitle="Organized breakdown of my expertise"
          align="center"
        />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category: SkillCategory) => {
            const categorySkills = getSkillsByCategory(category)
            const avgProficiency = Math.round(
              categorySkills.reduce((acc, s) => acc + s.proficiency, 0) / categorySkills.length
            )
            const categoryGradient = SKILL_CATEGORY_COLORS[category as keyof typeof SKILL_CATEGORY_COLORS] || SKILL_CATEGORY_COLORS.Other
            
            return (
              <motion.div key={category} variants={staggerItem}>
                <Card variant="glass" className="h-full">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-lg font-semibold bg-gradient-to-r ${categoryGradient} bg-clip-text text-transparent`}>
                        {category}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {categorySkills.length} skills
                      </span>
                    </div>
                    
                    {/* Average proficiency */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Avg. Proficiency</span>
                        <span className="font-medium">{avgProficiency}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${categoryGradient}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${avgProficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                    
                    {/* Skills list */}
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <Badge key={skill.id} variant="outline" className="text-xs">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold">Want to See These Skills in Action?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Check out my projects to see how I apply these technologies to solve real-world problems.
          </p>
          <div className="mt-8">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              <LucideIcons.FolderOpen className="h-5 w-5" />
              View My Projects
            </a>
          </div>
        </motion.div>
      </Section>
    </>
  )
}
