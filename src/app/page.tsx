"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Brain, Eye, Bot, Cpu } from "lucide-react";
import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { personal, stats, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-5 h-5" />,
  eye: <Eye className="w-5 h-5" />,
  bot: <Bot className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
};

const domains = [
  { icon: "brain", label: "Medical AI", desc: "3D MRI · Alzheimer's · GradCAM", color: "text-violet-400" },
  { icon: "eye", label: "Computer Vision", desc: "YOLOv5/v8 · OpenCV · Object Detection", color: "text-blue-400" },
  { icon: "bot", label: "AI Agents", desc: "LLM Systems · Playwright · FastAPI", color: "text-cyan-400" },
  { icon: "cpu", label: "Quantum ML", desc: "PennyLane · Hybrid CNN · NISQ", color: "text-emerald-400" },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for Full-Time Roles · Class of 2027
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block text-foreground">{personal.name}</span>
            <span className="block mt-2">
              <TypeAnimation
                sequence={[
                  "Deep Learning Engineer", 2000,
                  "Computer Vision Engineer", 2000,
                  "AI Systems Builder", 2000,
                  "Quantum ML Researcher", 2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personal.tagline} VIT Chennai · 8.33 CGPA · 2 Patents Filed · Oracle AI Certified.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <Link href="/projects" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-background/50 hover:bg-accent font-medium text-sm transition-all">
              Contact Me <Mail className="w-4 h-4" />
            </Link>
            <Link href={personal.github} target="_blank" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-background/50 hover:bg-accent font-medium text-sm transition-all">
              <Github className="w-4 h-4" /> GitHub
            </Link>
            <Link href="/resume" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-background/50 hover:bg-accent font-medium text-sm transition-all">
              <Download className="w-4 h-4" /> Resume
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-3 text-center">
                <div className="text-xl font-bold gradient-text">{stat.value}</div>
                <div className="text-[10px] font-medium text-foreground mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Domains */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">What I Build</h2>
            <p className="text-muted-foreground">Four domains, one mission — intelligent systems that matter.</p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domains.map((d, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-default">
                  <div className={cn("mb-4 transition-transform duration-300 group-hover:scale-110", d.color)}>
                    {iconMap[d.icon]}
                  </div>
                  <h3 className="font-semibold mb-1">{d.label}</h3>
                  <p className="text-xs text-muted-foreground">{d.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-muted-foreground">Research-grade work with measurable outcomes.</p>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-2 text-sm text-primary hover:underline">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.featured).map((project) => (
              <StaggerItem key={project.id}>
                <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
                  <div className="h-40 bg-gradient-to-br from-primary/10 via-violet-500/10 to-cyan-500/10 flex items-center justify-center relative overflow-hidden">
                    <div className="text-4xl font-black gradient-text opacity-20 select-none">{project.title.split(" ")[0]}</div>
                    <div className={cn(
                      "absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-medium",
                      project.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    )}>
                      {project.status}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.category.slice(0, 2).map(c => (
                        <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{c}</span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-sm mb-1 line-clamp-2">{project.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{project.subtitle}</p>
                    <div className="text-xs font-medium text-emerald-400 mb-4">{project.accuracy}</div>
                    <div className="mt-auto flex gap-2">
                      <Link href={`/projects/${project.id}`} className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-xs font-medium transition-colors">
                        Details <ExternalLink className="w-3 h-3" />
                      </Link>
                      <Link href={project.github} target="_blank" className="flex items-center justify-center w-9 h-9 rounded-lg border border-border hover:bg-accent transition-colors">
                        <Github className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="gradient-border rounded-3xl p-10 text-center glass-card">
              <h2 className="text-3xl font-bold mb-4">Open to Full-Time Roles</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Targeting AI/ML Engineer, Computer Vision Engineer, and Deep Learning Engineer positions.
                Available from {personal.availableFrom}. Based in Chennai, open to relocation.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={personal.linkedin} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-accent font-medium transition-all">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
