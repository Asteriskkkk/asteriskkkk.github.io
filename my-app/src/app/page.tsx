"use client";

import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar } from "@/components/navbar";
import { useState } from "react";
import { DATA } from "@/data/resume";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/libs/utils";

export default function Home() {
  const [activeTab, setActiveTab] = useState("work");
  return (
    <div className="min-h-screen bg-background">
      <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray="4 2"
          className={cn(
            "fixed inset-0 fill-gray-300/20 stroke-gray-400/20",
            "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
          )}
        />
      <Navbar />
      <div className="mx-auto flex max-w-3xl flex-col px-8">
        <main className="grow">
          <article className="mt-8 flex flex-col gap-16 pb-16">
            {/* Hero Section */}
            <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
              {/* Profile Images */}
              <div className="relative grid h-[233px] w-[175px] place-items-center md:mr-8">
                <img 
                  src={DATA.personal.profileImages.tertiary} 
                  alt="Ted 2019" 
                  className="absolute h-[233px] w-[175px] origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing" 
                  style={{gridArea: "1 / 1", opacity: 1, transform: "scale(0.98) rotate(6deg)"}}
                />
                <img 
                  src={DATA.personal.profileImages.secondary} 
                  alt="Ted 2024" 
                  className="absolute h-[233px] w-[175px] origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing" 
                  style={{gridArea: "1 / 1", opacity: 1, transform: "scale(0.98) rotate(-6deg)"}}
                />
                <img 
                  src={DATA.personal.profileImages.main} 
                  alt="Ted" 
                  className="absolute h-[233px] w-[175px] origin-bottom rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing" 
                  draggable={false}
                  style={{
                    gridRow: 1,
                    gridColumn: 1,
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)",
                    opacity: 1,
                    transform: "none",
                    WebkitTouchCallout: "none",
                    WebkitUserSelect: "none",
                    userSelect: "none",
                    touchAction: "pan-y"
                  }}
                />
              </div>
              
              {/* Hero Content */}
              <div className="flex max-w-[320px] flex-col sm:max-w-full">
                <h1 className="title text-balance text-4xl sm:text-5xl">hi {DATA.personal.name} here. 👋</h1>
                <p className="mt-2 whitespace-nowrap text-sm font-medium sm:text-base">{DATA.personal.age}yo {DATA.personal.title.toLowerCase()} from {DATA.personal.location}</p>
                <p className="mt-4 max-w-sm text-balance text-sm sm:text-base">{DATA.personal.bio}</p>
                
                <div className="mt-6 flex items-center gap-1">
                  <p className="text-balance text-sm font-semibold sm:text-base">{DATA.tedSupport.message}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-right hidden size-5 animate-bounce sm:block">
                    <path d="m7 7 10 10"></path>
                    <path d="M17 7v10H7"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down block size-5 animate-bounce sm:hidden">
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                </div>
                
                <p className="mt-1 text-xs font-light">{DATA.tedSupport.escalation}<a target="_blank" className="link font-semibold" title={DATA.tedSupport.tedLead.title} href={DATA.tedSupport.tedLead.url}>&nbsp;{DATA.tedSupport.tedLead.name}&nbsp;</a>instead.</p>
                
                {/* Action Buttons */}
                <section className="mt-6 flex flex-wrap items-center gap-4">
                  <a target="_blank" href={DATA.resume.url}>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                      <span className="font-semibold">{DATA.resume.downloadText}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-down ml-2 size-5">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M12 18v-6"></path>
                        <path d="m9 15 3 3 3-3"></path>
                      </svg>
                    </button>
                  </a>
                  
                  <section className="flex gap-6">
                    {DATA.socialLinks.map((link) => (
                      <a key={link.name} href={link.url} target="_blank" className="text-muted-foreground hover:text-foreground" rel="noopener noreferrer" title={link.name}>
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
                      </a>
                    ))}
                  </section>
                </section>
              </div>
            </section>

            {/* Work/Education Tabs */}
            <div className="space-y-4">
              <div className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-2 grid w-full grid-cols-2">
                <button 
                  onClick={() => setActiveTab("work")}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                    activeTab === "work" 
                      ? "bg-background text-foreground shadow" 
                      : "hover:bg-muted/50"
                  }`}
                >
                  Work
                </button>
                <button 
                  onClick={() => setActiveTab("education")}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                    activeTab === "education" 
                      ? "bg-background text-foreground shadow" 
                      : "hover:bg-muted/50"
                  }`}
                >
                  Education
                </button>
              </div>
              
              {/* Tab Content */}
              {activeTab === "work" && (
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                  <div className="p-0">
                    <ul className="ml-10 border-l">
                      {DATA.workExperiences.map((work) => (
                        <li key={work.id} className="relative ml-10 py-4">
                          <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white" href={work.website}>
                            <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                              <img className="aspect-square h-full w-full bg-background object-contain" alt={work.company} src={work.logo} />
                            </span>
                          </a>
                          <div className="flex flex-1 flex-col justify-start gap-1">
                            <time className="text-xs text-muted-foreground">
                              <span>{work.startDate}</span><span> - </span><span>{work.endDate}</span>
                            </time>
                            <h2 className="font-semibold leading-none">{work.company}</h2>
                            <p className="text-sm text-muted-foreground">{work.position}</p>
                            <ul className="ml-4 list-outside list-disc">
                              {work.description.map((desc, index) => (
                                <li key={index} className="prose pr-8 text-sm dark:prose-invert">{desc}</li>
                              ))}
                            </ul>
                          </div>
                          {work.projects && work.projects.length > 0 && (
                            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                              {work.projects.map((project) => (
                                <a key={project.name} href={project.url}>
                                  <div className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2" title={project.name}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe size-3" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                      <path d="M2 12h20"></path>
                                    </svg>
                                    {project.name}
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "education" && (
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                  <div className="p-0">
                    <ul className="ml-10 border-l">
                      {DATA.education.map((edu) => (
                        <li key={edu.id} className="relative ml-10 py-4">
                          <a target="_blank" className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-white" href={edu.website}>
                            <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border">
                              <img className="aspect-square h-full w-full bg-background object-contain" alt={edu.institution} src={edu.logo} />
                            </span>
                          </a>
                          <div className="flex flex-1 flex-col justify-start gap-1">
                            <time className="text-xs text-muted-foreground">
                              <span>{edu.startDate}</span><span> - </span><span>{edu.endDate}</span>
                            </time>
                            <h2 className="font-semibold leading-none">{edu.institution}</h2>
                            <p className="text-sm text-muted-foreground">{edu.degree}</p>
                            {edu.description.length > 0 && (
                              <ul className="ml-4 list-outside list-disc">
                                {edu.description.map((desc, index) => (
                                  <li key={index} className="prose pr-8 text-sm dark:prose-invert">{desc}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                          {edu.projects && edu.projects.length > 0 && (
                            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                              {edu.projects.map((project) => (
                                <a key={project.name} href={project.url}>
                                  <div className="items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2" title={project.name}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe size-3" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                      <path d="M2 12h20"></path>
                                    </svg>
                                    {project.name}
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Featured Projects */}
            <section className="flex flex-col gap-8">
              <div className="flex justify-between">
                <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
                <a className="link flex items-center gap-2 font-light" href="/projects">
                  <span>view more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {DATA.featuredProjects.map((project) => (
                  <div key={project.id} className="rounded-xl border bg-card text-card-foreground shadow flex flex-col">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <a href={project.image}>
                        <img alt={project.name} loading="lazy" width="500" height="300" decoding="async" className="h-40 w-full object-cover object-top" src={project.image} />
                      </a>
                    </div>
                    <div className="p-6 pt-0 flex flex-col gap-2">
                      <h3 className="font-semibold leading-none tracking-tight">{project.name}</h3>
                      <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        <p>{project.description}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0 flex h-full flex-col items-start justify-between gap-4">
                      <div className="mt-2 flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <div key={tech} className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
                            {tech}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-row flex-wrap items-start gap-1">
                        {project.links.website && (
                          <a target="_blank" href={project.links.website}>
                            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe size-3">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                              </svg>
                              Website
                            </div>
                          </a>
                        )}
                        {project.links.github && (
                          <a target="_blank" href={project.links.github}>
                            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github size-3">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                              </svg>
                              Source
                            </div>
                          </a>
                        )}
                        {project.links.githubUI && (
                          <a target="_blank" href={project.links.githubUI}>
                            <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github size-3">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                              </svg>
                              Source (UI)
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>

            {/* Recent Posts */}
            <section className="flex flex-col gap-8">
              <div className="flex justify-between">
                <h2 className="title text-3xl">recent posts</h2>
                <a className="link flex items-center gap-2 font-light" href="/blog">
                  <span>view more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              
              <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
                <ul className="divide-y divide-border">
                  {DATA.recentPosts.map((post) => (
                    <li key={post.id} className="group">
                      <a className="block" href={post.url}>
                        <article className="p-6 transition-colors hover:bg-muted/30">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0 flex-1">
                              <div className="mb-2 flex items-center gap-2">
                                <h3 className="line-clamp-2 text-lg font-semibold leading-tight transition-colors group-hover:text-primary">{post.title}</h3>
                              </div>
                              <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {post.tags.map((tag) => (
                                  <div key={tag} className="inline-flex items-center rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-xs font-medium">
                                    {tag}
                                  </div>
                                ))}
                                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-2 py-1 text-xs">
                                  +{post.tags.length - 3}
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-shrink-0 flex-col items-start gap-2 text-sm text-muted-foreground sm:items-end">
                              <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar h-3.5 w-3.5">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3.5 w-3.5">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </article>
        </main>
      </div>
      
      {/* Footer */}
      <footer className="w-full pt-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-8 pb-32 sm:flex-row-reverse sm:justify-between">
          <section className="flex gap-6">
            {DATA.socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" className="text-muted-foreground hover:text-foreground" rel="noopener noreferrer" title={link.name}>
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
              </a>
            ))}
          </section>
          <section className="mt-8 text-center sm:mt-0 sm:text-left">
            <p className="text-xs text-muted-foreground">© 2025 <a className="link" href="/">{DATA.personal.fullName.toLowerCase()}.com</a> | <a className="link font-bold" href="/privacy">privacy?</a></p>
          </section>
        </div>
      </footer>
    </div>
  );
}