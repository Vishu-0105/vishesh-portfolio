"use client";
import Link from "next/link";
import { Brain, Microscope, Atom, Eye, Bot, Accessibility, ArrowRight, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { research, projects } from "@/data/portfolio";

const icons = [Brain, Atom, Microscope, Eye, Bot, Accessibility];

export default function ResearchPage() {
  const researchProjects = projects.filter(p => ["alzheimers-mri", "agentsight"].includes(p.id));

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-400 text-xs font-medium mb-6">
            <Microscope className="w-3.5 h-3.5" /> Research Focus
          </div>
          <h1 className="text-4xl font-bold mb-4">Research</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">{research.currentWork}</p>
        </FadeIn>

        {/* Interests */}
        <FadeIn delay={0.1} className="glass-card rounded-2xl p-6 mb-8">
          <h2 className="font-semibold mb-5 flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary" /> Research Interests</h2>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {research.interests.map((interest, i) => {
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem key={interest}>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{interest}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </FadeIn>

        {/* Target venues */}
        <FadeIn delay={0.2} className="glass-card rounded-2xl p-6 mb-8">
          <h2 className="font-semibold mb-4">Target Publication Venues</h2>
          <div className="flex flex-wrap gap-2">
            {research.targetVenues.map(venue => (
              <span key={venue} className="text-xs px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium">{venue}</span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Targeting workshop and conference submissions upon completion of Alzheimer's classification research with quantified benchmarks and ablation studies.
          </p>
        </FadeIn>

        {/* Research projects */}
        <FadeIn delay={0.3}>
          <h2 className="font-semibold mb-5">Active Research Projects</h2>
          <div className="space-y-4">
            {researchProjects.map(project => (
              <div key={project.id} className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${project.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.overview}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 5).map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-primary/5 border border-primary/10 text-primary font-mono">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-400">{project.accuracy}</span>
                  <Link href={`/projects/${project.id}`} className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
