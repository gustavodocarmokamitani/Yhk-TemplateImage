"use client";

import { MotionConfig } from "framer-motion";

// "user" defers to the OS-level prefers-reduced-motion setting, so anyone
// with that on gets fades without the sliding/parallax motion — matching
// how .hero-marquee-track already pauses itself in globals.css.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
