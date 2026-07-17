"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Filter } from "lucide-react";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const allCategories = ["All", ...Array.from(new Set(projects.flatMap(p => p.category)))];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category.includes(active));

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Research-grade AI/ML projects spanning medical imaging, autonomous agents, computer vision, and assistive technology.
          </p>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter className="w-4 h-4 text-muted-foreground self-center" />
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border border-border hover:border-primary/30 hover:bg-accent text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group flex flex-col"
              >
                {/* Header */}
                <div className="h-36 bg-gradient-to-br from-primary/10 via-violet-500/10 to-cyan-500/10 relative flex items-center justify-center overflow-hidden">
                  <span className="text-5xl font-black gradient-text opacity-10 select-none">{project.title.split(" ")[0]}</span>
                  <div className={cn(
                    "absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-medium",
                    project.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  )}>
                    {project.status}
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.category.map(c => (
                      <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{c}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{project.subtitle}</p>
                  <div className="text-xs font-semibold text-emerald-400 mb-2">{project.accuracy}</div>
                  <div className="text-xs text-muted-foreground mb-4">{project.dataset}</div>

                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-primary/5 border border-primary/10 text-primary font-mono">{t}</span>
                    ))}
                    {project.tech.length > 4 && <span className="text-[10px] text-muted-foreground self-center">+{project.tech.length - 4}</span>}
                  </div>

                  <div className="mt-auto flex gap-2">
                    <Link href={`/projects/${project.id}`} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium transition-colors">
                      View Details <ExternalLink className="w-3 h-3" />
                    </Link>
                    <Link href={project.github} target="_blank" className="flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-accent transition-colors" aria-label="GitHub">
                      <Github className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
