"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="text-8xl font-black gradient-text mb-4 select-none"
        >
          404
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Looks like this page doesn't exist. Even my SE-ResNet3D couldn't find it
            in the feature space. Let's get you back on track.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Home className="w-4 h-4" /> Go Home
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border hover:bg-accent font-medium text-sm transition-colors"
            >
              <Search className="w-4 h-4" /> View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
