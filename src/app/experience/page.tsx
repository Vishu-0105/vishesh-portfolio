"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { experience } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeIn className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Experience</h1>
          <p className="text-muted-foreground">Hands-on internship experience in AI/ML research and robotics engineering.</p>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-violet-500 to-transparent hidden sm:block" />

          <StaggerContainer className="space-y-8">
            {experience.map((exp, i) => (
              <StaggerItem key={exp.id}>
                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0 z-10 bg-background">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-card rounded-2xl p-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h2 className="font-semibold text-lg">{exp.role}</h2>
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" /> {exp.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground mb-4">
                      {exp.type === "Research Internship" ? <Award className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                      {exp.type}
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                    <ul className="space-y-2 mb-5">
                      {exp.bullets.map((bullet, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.08 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-primary/5 border border-primary/15 text-primary font-mono">{t}</span>
                      ))}
                    </div>

                    {exp.certificate && (
                      <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                        <Award className="w-3.5 h-3.5" /> Certificate of Completion issued
                      </div>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
}
