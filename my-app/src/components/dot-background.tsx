import { cn } from "@/libs/utils";
import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background">
      {/* Dot pattern background */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none opacity-25 blur-sm mix-blend-overlay",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(rgba(212,212,212,0.2)_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(rgba(64,64,64,0.2)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient overlay for faded look */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
