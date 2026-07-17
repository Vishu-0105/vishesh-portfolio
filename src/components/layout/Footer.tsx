"use client";
import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm">{personal.name}</p>
              <p className="text-xs text-muted-foreground">{personal.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href={personal.github} target="_blank" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-all">
              <Github className="w-4 h-4" />
            </Link>
            <Link href={personal.linkedin} target="_blank" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-all">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href={`mailto:${personal.email}`} aria-label="Email" className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-all">
              <Mail className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} {personal.name}. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
