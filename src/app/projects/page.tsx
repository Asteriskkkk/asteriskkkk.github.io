// app/layout.tsx
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Modern web app built with Next.js",
};

export default function Projects({
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto flex max-w-3xl flex-col px-8">  
    <article className="mt-8 flex flex-col gap-16 pb-16">
      {/* Featured Projects */}
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">my projects.</h2>
          <Link className="link flex items-center gap-2 font-light" href="/projects">
            <span>view more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-5">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.featuredProjects.map((project) => (
            <div key={project.id} className="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
              <div className="flex flex-col space-y-1.5 relative p-6">
                <Link href={project.image}>
                  <Image 
                    alt={project.name} 
                    loading="lazy" width="500" height="300" decoding="async" 
                    className="h-40 w-full object-cover object-top bg-white" src={project.image} />
                </Link>
              </div>
              <div className="p-6 pt-0 flex flex-col gap-2">
                <h3 className="font-semibold leading-none tracking-tight">{project.name}</h3>
                <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4 ">
                <div className="mt-2 flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row flex-wrap items-start gap-1">
                  {project.links.website && (
                    <Link target="_blank" href={project.links.website}>
                      <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe size-3">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Website
                      </div>
                    </Link>
                  )}
                  {project.links.github && (
                    <Link target="_blank" href={project.links.github}>
                      <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github size-3">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        Source
                      </div>
                    </Link>
                  )}
                  {project.links.githubUI && (
                    <Link target="_blank" href={project.links.githubUI}>
                      <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github size-3">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        Source (UI)
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
      </article>
          </div>
      {/* Footer */}
      <footer className="w-full pt-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-8 pb-32 sm:flex-row-reverse sm:justify-between">
          <section className="flex gap-6">
            {DATA.socialLinks.map((link) => (
              <Link key={link.name} href={link.url} target="_blank" className="text-muted-foreground hover:text-foreground" rel="noopener noreferrer" title={link.name}>
                <span className="sr-only">{link.name}</span>
                {link.icon === "linkedin" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin size-5" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                )}
                {link.icon === "github" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github size-5" aria-hidden="true">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                )}
                {link.icon === "mail" && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail size-5" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                )}
              </Link>
            ))}
          </section>
          <section className="mt-8 text-center sm:mt-0 sm:text-left">
            <p className="text-xs text-muted-foreground">© 2025 <Link className="link" href="/">{DATA.personal.fullName.toLowerCase()}.com</Link></p>
          </section>
        </div>
      </footer>
    </div>
  );
}
