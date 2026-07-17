"use client";
import { motion } from "framer-motion";
import { Award, Shield, BookOpen, ExternalLink } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { achievements } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  graduation: <BookOpen className="w-5 h-5" />,
};

const colorMap: Record<string, string> = {
  certification: "from-blue-500/20 to-blue-600/10 border-blue-500/20 text-blue-400",
  patent: "from-violet-500/20 to-violet-600/10 border-violet-500/20 text-violet-400",
};

export default function AchievementsPage() {
  const certifications = achievements.filter(a => a.type === "certification");
  const patents = achievements.filter(a => a.type === "patent");

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Achievements</h1>
          <p className="text-muted-foreground">
            Certifications, patents, and recognition earned through research and engineering work.
          </p>
        </FadeIn>

        {/* Certifications */}
        <FadeIn delay={0.1} className="mb-10">
          <h2 className="font-semibold text-lg mb-5 flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-400" /> Certifications
          </h2>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((item, i) => (
              <StaggerItem key={i}>
                <div className={`glass-card rounded-2xl p-5 bg-gradient-to-br ${colorMap[item.type].split(" ").slice(0,2).join(" ")} border ${colorMap[item.type].split(" ")[3]} hover:scale-[1.01] transition-all duration-300`}>
                  <div className={`w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center mb-4 ${colorMap[item.type].split(" ")[4]}`}>
                    {iconMap[item.icon]}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{item.issuer}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-md bg-background/50">Issued: {item.date}</span>
                    {item.valid && <span className="px-2 py-0.5 rounded-md bg-background/50">Valid until: {item.valid}</span>}
                  </div>
                  {item.credentialId && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <ExternalLink className="w-3 h-3" />
                      <span className="font-mono">{item.credentialId}</span>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        {/* Patents */}
        <FadeIn delay={0.3} className="mb-10">
          <h2 className="font-semibold text-lg mb-5 flex items-center gap-2">
            <Shield className="w-5 h-5 text-violet-400" /> Patents Filed
          </h2>
          <StaggerContainer className="space-y-4">
            {patents.map((item, i) => (
              <StaggerItem key={i}>
                <div className="glass-card rounded-2xl p-5 hover:border-violet-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{item.issuer} · {item.date}</p>
                      {item.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                      )}
                      <div className="mt-3">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-medium">
                          Patent Filed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        {/* LeetCode */}
        <FadeIn delay={0.5}>
          <div className="glass-card rounded-2xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
              <span className="text-yellow-400 font-bold text-xl">74</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">LeetCode Problem Solving</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                74+ problems solved across Arrays, Trees, Dynamic Programming, and Graph algorithms.
              </p>
            </div>
            <a
              href="https://leetcode.com/u/Vishu_0105"
              target="_blank"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm hover:bg-yellow-500/20 transition-colors"
            >
              Profile <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
