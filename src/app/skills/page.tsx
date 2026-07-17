"use client";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { skills } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  "Languages": "from-blue-500/20 to-blue-600/10 border-blue-500/20 text-blue-400",
  "CS Fundamentals": "from-slate-500/20 to-slate-600/10 border-slate-500/20 text-slate-400",
  "AI / ML / DL": "from-violet-500/20 to-violet-600/10 border-violet-500/20 text-violet-400",
  "Computer Vision": "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 text-cyan-400",
  "AI Agents & LLMs": "from-emerald-500/20 to-emerald-600/10 border-emerald-500/20 text-emerald-400",
  "Robotics": "from-orange-500/20 to-orange-600/10 border-orange-500/20 text-orange-400",
  "Tools": "from-pink-500/20 to-pink-600/10 border-pink-500/20 text-pink-400",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive stack spanning deep learning, computer vision, AI systems, robotics, and software engineering fundamentals.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([category, items]) => {
            const colorClass = categoryColors[category] || "from-primary/20 to-primary/10 border-primary/20 text-primary";
            return (
              <StaggerItem key={category}>
                <div className={`glass-card rounded-2xl p-5 bg-gradient-to-br ${colorClass.split(" ").slice(0, 2).join(" ")} border`}>
                  <h3 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${colorClass.split(" ").slice(-1)[0]}`}>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.04 }}
                        viewport={{ once: true }}
                        className="text-xs px-2.5 py-1 rounded-lg bg-background/60 border border-white/10 text-foreground font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* DSA highlight */}
        <FadeIn delay={0.4} className="mt-8">
          <div className="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
              <span className="text-yellow-400 font-bold text-lg">74</span>
            </div>
            <div>
              <h3 className="font-semibold">LeetCode Problem Solving</h3>
              <p className="text-sm text-muted-foreground">74 problems solved across Arrays, Trees, Dynamic Programming, and Graph algorithms.</p>
            </div>
            <a href="https://leetcode.com/u/Vishu_0105" target="_blank" className="sm:ml-auto text-xs px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20 transition-colors">
              View Profile →
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
