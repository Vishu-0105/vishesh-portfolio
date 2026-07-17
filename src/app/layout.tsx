import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Vishesh Jain — Deep Learning & CV Engineer", template: "%s | Vishesh Jain" },
  description: "Computer Vision and Deep Learning engineer building 3D medical imaging AI, LLM agent systems, and autonomous robotics. VIT Chennai, Class of 2027.",
  keywords: ["Deep Learning", "Computer Vision", "AI Engineer", "PyTorch", "OpenCV", "ROS2", "Medical Imaging", "Machine Learning", "Vishesh Jain", "VIT Chennai"],
  authors: [{ name: "Vishesh Jain", url: "https://github.com/Vishu-0105" }],
  creator: "Vishesh Jain",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://visheshjain.dev",
    title: "Vishesh Jain — Deep Learning & Computer Vision Engineer",
    description: "Building intelligent systems at the intersection of AI, medical imaging, and autonomous robotics.",
    siteName: "Vishesh Jain Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vishesh Jain Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishesh Jain — Deep Learning & CV Engineer",
    description: "AI/ML Engineer | 3D Medical Imaging | LLM Systems | ROS2 | VIT Chennai",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <MouseGlow />
          <ScrollProgress />
          <Navigation />
          <main className="relative">{children}</main>
          <Footer />
          <Toaster position="bottom-right" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
