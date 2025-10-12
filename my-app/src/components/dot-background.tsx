import { cn } from "@/libs/utils";
import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background">
      {/* Dot pattern background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient overlay for faded look */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
