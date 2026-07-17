"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, GraduationCap, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { personal, education, research } from "@/data/portfolio";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-muted-foreground text-lg">
            Building intelligent systems at the intersection of AI, medical imaging, and autonomous robotics.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Profile card */}
          <FadeIn delay={0.1}>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-violet-500/20 border border-primary/20 flex items-center justify-center mx-auto mb-4 text-3xl font-bold gradient-text">
                VJ
              </div>
              <h2 className="font-semibold text-lg">{personal.name}</h2>
              <p className="text-sm text-muted-foreground mb-4">{personal.title}</p>
              <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mb-6">
                <MapPin className="w-3 h-3" /> {personal.location}
              </div>
              <div className="flex justify-center gap-3">
                <Link href={personal.github} target="_blank" className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors">
                  <Github className="w-4 h-4" />
                </Link>
                <Link href={personal.linkedin} target="_blank" className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link href={`mailto:${personal.email}`} className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors">
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6 h-full">
              <h3 className="font-semibold mb-4">Background</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Science undergraduate at VIT Chennai (Class of {personal.graduationYear}), specialising in AI & Robotics. My work spans three technically distinct areas: 3D medical imaging AI, LLM-integrated agentic systems, and autonomous robotic perception.
                </p>
                <p>
                  At NIT Patna, I built a ResNet-based plant disease classifier achieving 91.14% top-1 accuracy on 10,000+ images. At Mafkin Robotics, I developed YOLOv5 object detection pipelines in ROS2 with SLAM-based sensor fusion for autonomous navigation.
                </p>
                <p>
                  My current research investigates hybrid quantum-classical deep learning for Alzheimer's disease classification from 3D MRI scans, combining SE-ResNet3D feature extraction with variational quantum circuits and GradCAM explainability — currently at 76% test accuracy on 3,192 OASIS-3 scans.
                </p>
                <p>
                  I have filed two patents in computer vision and assistive technology, earned Oracle Cloud Infrastructure AI certification, and solved 74+ LeetCode problems across DSA domains.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Education */}
        <FadeIn delay={0.3} className="glass-card rounded-2xl p-6 mb-8">
          <h3 className="font-semibold mb-5 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" /> Education
          </h3>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">{education.degree}</h4>
              <p className="text-sm text-muted-foreground">{education.institution}</p>
              <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                <span className="font-medium text-primary">CGPA: {education.cgpa}</span>
                <span>{education.duration}</span>
              </div>
              <div className="mt-3">
                <p className="text-xs text-muted-foreground mb-2">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-1.5">
                  {education.coursework.map(c => (
                    <span key={c} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Research Interests */}
        <FadeIn delay={0.4} className="glass-card rounded-2xl p-6 mb-8">
          <h3 className="font-semibold mb-4">Research Interests</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {research.interests.map(interest => (
              <span key={interest} className="text-xs px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary">{interest}</span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{research.currentWork}</p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.5}>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:bg-accent text-sm font-medium transition-colors">
              Contact Me <Mail className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
