"use client";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-8 py-6">
        <nav className="flex items-center justify-between">
          <ul className="flex gap-4 sm:gap-8">
            <li className="link">
              <Link href="/">home</Link>
            </li>
            <li className="link">
              <Link href="/projects">projects</Link>
            </li>
            <li className="link">
              <Link href="/blog">blog</Link>
            </li>
            <li className="link">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
          <div className="flex gap-2 sm:gap-4">
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
