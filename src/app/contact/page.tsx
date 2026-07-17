"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { personal } from "@/data/portfolio";
import { toast } from "sonner";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setState("loading");
    try {
      // Replace YOUR_FORM_ID with your Formspree form ID after signing up at formspree.io
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        toast.success("Message sent! I'll get back to you within 24 hours.");
      } else {
        setState("error");
        toast.error("Something went wrong. Please email me directly.");
      }
    } catch {
      setState("error");
      toast.error("Network error. Please email me directly.");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { icon: MapPin, label: "Location", value: personal.location, href: null },
    { icon: Clock, label: "Available", value: "Full-time from 2027", href: null },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open to full-time opportunities in AI/ML, Computer Vision, and Deep Learning.
            Also happy to discuss research collaborations and interesting technical problems.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — Info */}
          <FadeIn delay={0.1} className="lg:col-span-2 space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass-card rounded-2xl p-5">
              <p className="text-xs text-muted-foreground mb-3">Connect on</p>
              <div className="space-y-2">
                <Link href={personal.github} target="_blank" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-accent transition-colors group">
                  <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground">github.com/Vishu-0105</span>
                </Link>
                <Link href={personal.linkedin} target="_blank" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-accent transition-colors group">
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground">linkedin.com/in/vishesh-jain0105</span>
                </Link>
              </div>
            </div>

            {/* Status */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium">Open to Opportunities</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Actively looking for full-time roles in AI/ML Engineering, Computer Vision, Deep Learning, and Software Engineering. Available from 2027.
              </p>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={0.2} className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="font-semibold mb-6">Send a Message</h2>

              {state === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm mb-6">I'll get back to you within 24 hours.</p>
                  <button onClick={() => setState("idle")} className="px-4 py-2 rounded-xl border border-border hover:bg-accent text-sm transition-colors">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-3 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-3 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Internship">Internship</option>
                      <option value="Project Discussion">Project Discussion</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or just say hello..."
                      required
                      rows={5}
                      className="w-full px-3 py-2.5 rounded-xl bg-secondary/50 border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>

                  {state === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Form submission failed. Please email me directly at{" "}
                      <a href={`mailto:${personal.email}`} className="underline">{personal.email}</a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                  >
                    {state === "loading" ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Prefer email? Reach me at{" "}
                    <a href={`mailto:${personal.email}`} className="text-primary hover:underline">{personal.email}</a>
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
