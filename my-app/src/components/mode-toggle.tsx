"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className="px-2"
        disabled
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 relative"
      onClick={() => {
        console.log("Current theme:", theme);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <SunIcon className={`h-[1.2rem] w-[1.2rem] transition-all duration-200 ${
        theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
      }`} />
      <MoonIcon className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-200 ${
        theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
      }`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
