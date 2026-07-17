import { notFound } from "next/navigation";
import Link from "next/link";
import { Github, ExternalLink, ArrowLeft, CheckCircle2, Lightbulb, Zap, Target } from "lucide-react";
import { projects } from "@/data/portfolio";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map(p => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = projects.find(p => p.id === params.id);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.overview };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Hero */}
        <div className="glass-card rounded-3xl overflow-hidden mb-8">
          <div className="h-48 sm:h-64 bg-gradient-to-br from-primary/15 via-violet-500/15 to-cyan-500/15 flex items-center justify-center relative">
            <span className="text-6xl sm:text-8xl font-black gradient-text opacity-10 select-none">{project.title.split(" ")[0]}</span>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="flex flex-wrap gap-2 justify-center px-4">
                {project.category.map(c => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-medium">{c}</span>
                ))}
              </div>
              <div className={`text-xs px-3 py-1 rounded-full font-medium ${project.status === "Completed" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/20 text-amber-400 border border-amber-500/30"}`}>
                {project.status}
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-muted-foreground mb-4">{project.subtitle}</p>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-sm font-semibold text-emerald-400">{project.accuracy}</span>
              <span className="text-sm text-muted-foreground">·</span>
              <span className="text-sm text-muted-foreground">{project.dataset}</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link href={project.github} target="_blank" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
            <Github className="w-4 h-4" /> View on GitHub
          </Link>
          {project.demo && (
            <Link href={project.demo} target="_blank" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:bg-accent font-medium text-sm transition-colors">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Link>
          )}
        </div>

        {/* Tech Stack */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-lg bg-primary/5 border border-primary/15 text-primary font-mono">{t}</span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <h2 className="font-semibold mb-3">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
        </div>

        {/* Problem */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <h2 className="font-semibold mb-3 flex items-center gap-2"><Target className="w-4 h-4 text-red-400" /> Problem Statement</h2>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>

        {/* Features */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <h2 className="font-semibold mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <h2 className="font-semibold mb-3">Architecture</h2>
          <p className="text-muted-foreground leading-relaxed text-sm font-mono bg-secondary/50 rounded-xl p-4">{project.architecture}</p>
        </div>

        {/* Challenges & Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-semibold mb-4">Challenges</h2>
            <ul className="space-y-2">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-yellow-400" /> Learnings</h2>
            <ul className="space-y-2">
              {project.learnings.map((l, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" /> {l}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Impact */}
        <div className="glass-card rounded-2xl p-6 mb-6">
          <h2 className="font-semibold mb-3">Impact</h2>
          <p className="text-muted-foreground">{project.impact}</p>
        </div>

        {/* Future */}
        <div className="glass-card rounded-2xl p-6">
          <h2 className="font-semibold mb-4">Future Scope</h2>
          <ul className="space-y-2">
            {project.future.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <ArrowLeft className="w-3 h-3 rotate-180 text-primary mt-1 shrink-0" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
