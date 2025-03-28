"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicMouseParticles = dynamic(
  () => import("react-mouse-particles"),
  { ssr: false }
);

export default function MouseParticlesClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <DynamicMouseParticles g={1} color={["#37B8EF", "#2F9ECD", "#39BEF7", "#2783AB", "#1F6989", "#37B8EF", "#2F9ECD", "#39BEF7", "#2783AB", "#1F6989", "#FFFFFF", "#F7EF39"]} />
    </div>
  );
}
