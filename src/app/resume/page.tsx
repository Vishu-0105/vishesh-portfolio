"use client";
import Link from "next/link";
import { Download, ExternalLink, FileText, Eye } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { personal, experience, projects, skills, achievements, education } from "@/data/portfolio";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-bold mb-2">Resume</h1>
            <p className="text-muted-foreground">Download or preview my full resume.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/vishesh_jain_resume.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </FadeIn>

        {/* Resume preview card */}
        <FadeIn delay={0.1} className="glass-card rounded-3xl overflow-hidden mb-8">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary/10 via-violet-500/10 to-cyan-500/10 p-8 border-b border-border/50">
            <h2 className="text-2xl font-bold mb-1">{personal.name}</h2>
            <p className="text-primary font-medium mb-3">{personal.title}</p>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
              <span>{personal.location}</span>
              <span>·</span>
              <a href={`mailto:${personal.email}`} className="hover:text-primary transition-colors">{personal.email}</a>
              <span>·</span>
              <a href={personal.github} target="_blank" className="hover:text-primary transition-colors">github.com/Vishu-0105</a>
              <span>·</span>
              <a href={personal.linkedin} target="_blank" className="hover:text-primary transition-colors">linkedin.com/in/vishesh-jain0105</a>
              <span>·</span>
              <a href={personal.leetcode} target="_blank" className="hover:text-primary transition-colors">leetcode.com/u/Vishu_0105</a>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Summary */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-1 border-b border-border">Summary</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Computer Science undergraduate (VIT, CGPA {education.cgpa}) specializing in Deep Learning, Computer Vision, and AI Systems.
                Achieved <strong className="text-foreground">91.14% accuracy</strong> on a 10K+ image medical classification task; built a 3D MRI
                Alzheimer's classifier (<strong className="text-foreground">76% test accuracy</strong>, 3,192 scans) and a Braille CNN reaching{" "}
                <strong className="text-foreground">93% test accuracy</strong>. Experienced in LLM-integrated agentic systems, ROS2 perception
                pipelines, REST APIs, and Docker. Oracle Certified AI Foundations Associate. Targeting Software Engineering, AI/ML, and Data Science roles.
              </p>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-1 border-b border-border">Technical Skills</h3>
              <div className="space-y-1.5">
                {Object.entries(skills).map(([cat, items]) => (
                  <div key={cat} className="flex gap-2 text-sm">
                    <span className="font-medium text-foreground shrink-0 w-36">{cat}:</span>
                    <span className="text-muted-foreground">{items.join(", ")}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-1 border-b border-border">Experience</h3>
              <div className="space-y-5">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex flex-wrap items-start justify-between gap-1 mb-2">
                      <div>
                        <span className="font-medium text-sm">{exp.role}</span>
                        <span className="text-muted-foreground text-sm"> · {exp.company}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{exp.duration}</span>
                    </div>
                    <ul className="space-y-1">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pb-1 border-b border-border">Projects</h3>
              <div className="space-y-4">
                {projects.filter(p => p.featured).map(p => (
                  <div key={p.id}>
                    <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                      <span className="font-medium text-sm">{p.title}</span>
                      <span className="text-xs text-emerald-400 font-medium">{p.accuracy}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{p.tech.slice(0,5).join(" · ")}</p>
                    <p className="text-sm text-muted-foreground">{p.overview.split(".")[0]}.</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-1 border-b border-border">Education</h3>
              <div className="flex flex-wrap items-start justify-between gap-1">
                <div>
                  <p className="font-medium text-sm">{education.degree}</p>
                  <p className="text-sm text-muted-foreground">{education.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">Coursework: {education.coursework.join(", ")}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{education.duration}</p>
                  <p className="text-xs font-medium text-primary">CGPA: {education.cgpa}</p>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 pb-1 border-b border-border">Achievements & Certifications</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                {achievements.map((a, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-primary shrink-0">•</span>
                    <span><strong className="text-foreground">{a.type === "patent" ? "Patent Filed:" : "Certification:"}</strong> {a.title}
                      {a.issuer && ` — ${a.issuer}`}
                      {a.date && ` (${a.date})`}
                      {a.credentialId && ` · ID: ${a.credentialId}`}
                    </span>
                  </div>
                ))}
                <div className="flex gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span><strong className="text-foreground">LeetCode:</strong> 74 problems solved (Arrays, Trees, Dynamic Programming)</span>
                </div>
              </div>
            </section>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="text-center">
          <p className="text-xs text-muted-foreground mb-4">
            Place your actual resume PDF at <code className="px-1.5 py-0.5 rounded bg-secondary font-mono">/public/vishesh_jain_resume.pdf</code> to enable the download button.
          </p>
          <a
            href="/vishesh_jain_resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <Download className="w-4 h-4" /> Download Full Resume PDF
          </a>
        </FadeIn>
      </div>
    </div>
  );
}
