"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onMove = (e: MouseEvent) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true); };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => { window.removeEventListener("mousemove", onMove); document.removeEventListener("mouseleave", onLeave); };
  }, []);
  return (
    <motion.div
      className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-0 dark:opacity-100"
      style={{
        background: "radial-gradient(circle, hsl(217 91% 60% / 0.06) 0%, transparent 70%)",
        left: pos.x - 192,
        top: pos.y - 192,
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
