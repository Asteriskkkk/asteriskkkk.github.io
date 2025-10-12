import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo: string;
  website: string;
  projects?: {
    name: string;
    url: string;
    description: string;
  }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  logo: string;
  website: string;
  achievements?: string[];
  projects?: {
    name: string;
    url: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    website?: string;
    github?: string;
    githubUI?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const DATA = {
  personal: {
    name: "Ted",
    fullName: "Ted AWF",
    title: "Software Engineer",
    age: 28,
    location: "Singapore 🇸🇬",
    bio: "Backend by trade, full-stack by passion. I build and self-host the lot.",
    email: "hello@tedawf.com",
    profileImages: {
      main: "/img/ted.jpg",
      secondary: "/img/ted-2024.jpg",
      tertiary: "/img/ted-2019.jpg"
    }
  },
  
  workExperiences: [
    {
      id: "dbs-graduate",
      company: "DBS Bank",
      position: "Graduate Associate (SEED Programme)",
      duration: "Jul 2023 - Present",
      startDate: "Jul 2023",
      endDate: "Present",
      description: [
        "Developed the Java backend for a bank account servicing process with multiple channel integrations using Activiti workflow",
        "Built a custom database migration tool using Python and MariaDB and facilitated the migration of 1000+ processes from a vendor platform"
      ],
      logo: "/img/dbs.png",
      website: "https://www.dbs.com.sg"
    },
    {
      id: "sit-contract",
      company: "Singapore Institute of Technology",
      position: "Software Developer (Contract)",
      duration: "Apr 2023 - Jun 2023",
      startDate: "Apr 2023",
      endDate: "Jun 2023",
      description: [
        "Built NFTVue, a NFT gallery website that allows students to connect their crypto wallets to view and verify their school event-issued NFTs",
        "Worked on DemoConstruct, a full-stack web application (React + Python) that uses Meshroom to reconstruct 3D models from captured images"
      ],
      logo: "/img/sit.png",
      website: "https://www.singaporetech.edu.sg",
      projects: [
        {
          name: "NFTVue",
          url: "https://nftvue.vercel.app",
          description: "NFT gallery website for students"
        }
      ]
    },
    {
      id: "dbs-intern",
      company: "DBS Bank",
      position: "Software Developer (Intern)",
      duration: "May 2022 - Dec 2022",
      startDate: "May 2022",
      endDate: "Dec 2022",
      description: [
        "Worked on the backend for the digital exchange and asset custody application using Spring Boot and Java",
        "Built an admin dashboard web application for a DBS Metaverse event using Spring Security and Angular"
      ],
      logo: "/img/dbs.png",
      website: "https://www.dbs.com.sg"
    },
    {
      id: "activate-intern",
      company: "Activate Interactive Pte Ltd",
      position: "Software Developer (Intern)",
      duration: "May 2019 - Aug 2019",
      startDate: "May 2019",
      endDate: "Aug 2019",
      description: [
        "Developed RP Connect, the iOS and Android mobile app for Republic Polytechnic using React Native"
      ],
      logo: "/img/activate.png",
      website: "https://www.activate.sg"
    }
  ] as WorkExperience[],

  education: [
    {
      id: "digipen-bs",
      institution: "Digipen Institute of Technology Singapore",
      degree: "BS in Computer Science in Real-Time Interactive Simulation",
      duration: "Sep 2019 - Apr 2023",
      startDate: "Sep 2019",
      endDate: "Apr 2023",
      description: [
        "Graduated with a Minor in Mathematics",
        "President of Digipen Student Management Committee for freshman year",
        "3-time recipient of the Dean's Honor List"
      ],
      logo: "/img/digipen.png",
      website: "https://www.digipen.edu.sg",
      achievements: [
        "Dean's Honor List (3 times)",
        "Student Management Committee President (Freshman Year)"
      ],
      projects: [
        {
          name: "Final Year Project",
          url: "https://games.digipen.edu/games/rapid-ride-fight",
          description: "Rapid Ride Fight - Final year game project"
        },
        {
          name: "2nd Year Project",
          url: "https://games.digipen.edu/games/glowing-under",
          description: "Glowing Under - 2nd year game project"
        }
      ]
    },
    {
      id: "sp-diploma",
      institution: "Singapore Polytechnic",
      degree: "Diploma in Games Design and Development",
      duration: "Apr 2014 - May 2017",
      startDate: "Apr 2014",
      endDate: "May 2017",
      description: [],
      logo: "/img/sp.png",
      website: "https://www.sp.edu.sg",
      projects: [
        {
          name: "Final Year Project",
          url: "https://tedawf.github.io/portfolio-2019/phase.html",
          description: "Phase - Final year game project"
        }
      ]
    }
  ] as Education[],

  featuredProjects: [
    {
      id: "tt4d",
      name: "TT4D",
      description: "Generate winning combinations, view past results, and analyze lottery trends all in one place",
      image: "/img/tt4d.png",
      technologies: ["BS4", "Docker", "FastAPI", "Fly.io", "NextJS", "PostgreSQL", "Python", "TailwindCSS"],
      links: {
        website: "https://huatnumbers.com",
        github: "https://github.com/tedawf/tt4d",
        githubUI: "https://github.com/tedawf/tt4d-web"
      }
    },
    {
      id: "tv-telegram-alerts",
      name: "Tradingview Telegram Alerts",
      description: "Real-time trading alerts with chart snapshots sent to Telegram, designed to keep traders informed and responsive to market changes",
      image: "/img/tv-tele-alerts.png",
      technologies: ["Docker", "FastAPI", "Fly.io", "Python", "Selenium", "Telegram Bot API"],
      links: {
        github: "https://github.com/tedawf/tradingview-telegram-alerts"
      }
    }
  ] as Project[],

  recentPosts: [
    {
      id: "obsidian-sync",
      title: "This blog post was written with Obsidian",
      description: "I migrated my blog posts from being committed in GitHub to a fully self-hosted Obsidian LiveSync + CouchDB setup, and built a FastAPI app to serve them directly.",
      date: "September 14, 2025",
      readTime: "3 min read",
      tags: ["FastAPI", "Obsidian", "CouchDB"],
      url: "/blog/obsidian-sync"
    },
    {
      id: "upgrading-tvta",
      title: "I Built My First Self-Hosted App",
      description: "From Selenium to Playwright, here's how I rebuilt and upgraded my TradingView Alerts bot into a self-hosted app.",
      date: "August 25, 2025",
      readTime: "4 min read",
      tags: ["Telegram API", "FastAPI", "Self-Hosted"],
      url: "/blog/upgrading-tvta"
    }
  ] as BlogPost[],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tedawf",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/tedawf",
      icon: "github"
    },
    {
      name: "Email",
      url: "mailto:hello@tedawf.com",
      icon: "mail"
    }
  ] as SocialLink[],

  resume: {
    url: "/resume.pdf",
    downloadText: "Resume"
  },

  tedSupport: {
    message: "For Q&A, start a chat with Ted Support",
    escalation: "For escalations, please find my",
    tedLead: {
      name: "Ted Lead",
      url: "https://www.instagram.com/gomugomu.cat",
      title: "meow"
    }
  }
} as const;
