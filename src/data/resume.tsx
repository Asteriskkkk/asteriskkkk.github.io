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
    name: "Amit",
    fullName: "Amit Patil", 
    title: "Software Engineer",
    age: 19,
    location: "Pune 🇮🇳",
    bio: "Learning about scalable backend and system design principles.",
    email: "amit.lpatil282006@gmail.com",
    profileImages: {
      main: "/images/photo2.jpg",
    }
  },
  
  workExperiences: [
    {
      id: "sde-intern",
      company: "MyNextHire",
      position: "SDE Intern",
      duration: "Jul 2025 - Sep 2025",
      startDate: "Jul 2025",
      endDate: "Sep 2025",
      description: [
        "Built scalable WebSocket setup for internal systems to monitor Docker containers and related tasks also implemented Redis flow management for user session handling, reducing latency by 30% and improving overall system reliability.",
        "Developed integration microservices APIs to connect ATS with HRMS, automating employee lifecycle events and ensuring 99% accuracy in the synchronization of employee data between systems."
      ],
      logo: "https://apps.mynexthire.io/media/www/favicon.ico",
      website: "https://www.mynexthire.com"
    },
    {
      id: "webdev-intern",
      company: "BrandUpX",
      position: "Web Developer Intern",
      duration: "Jun 2023 - Aug 2023",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      description: [
        "Developed a full-fledged client website from scratch using HTML, CSS (Tailwind/Bootstrap), and JavaScript. Achieved 100% mobile responsiveness and improved user engagement by 30% through an user-friendly design.",
        "Customized WordPress themes and implemented SEO strategies, resulting in a 50% increase in organic traffic and achieving top 3 search ranking for 5 targeted keywords within 3 months."
      ],
      logo: "data:image/jpeg;base64,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LkqA0VErC0OsNiN/o6u/ivTKWX6aha4U79bnka5CQ427N26Dr+Kx/D6uqoJGV08bnQ1geJA7cTRk2eDfv3Cmaerdg9Wypp3GSiqm6mkfbh90/vM/rqr1iaXp3UVSccv9NpRc9FVMmjbLE4OY9oc1w7groWYxBERAEREAREQBERAEREAREQHlPC2RpY9oc1wsWkXBB7EFU6t4ZUEji5pmjv8AZY8W/wA7SrsvilU14XnJU+MqtLkGgjhfA1jvnW6Xyl15NNwbA2sOnYLsyxlWnw3mCmMnz2nVrcHfRva1gPeKnkUu6a02VdN+mVcY/roP7t36gpvC8oUddQUz5mESclo5rDpda3fax+IXZnXJ7sRfG9swZy2ltizVe5B8Qp/A6A01NFTl2rlMDdVrXt5K7vUrT7Nt519iJl9orFFwxw+N2p/Okt9l7xp/yNF1biYqeK/ssiib0A0tawC/bpsuhVvOuC1NdEKeCVkcZN5L3u63Qbdr7/gqcnT7ZlT50uTM5r6o4zWumlcWUVMCXH3YR/qef62X7wfD3Y3XanN0UlOGgMHRsI2ZEPM9/irJV5Am+Sso6eaNrb653EG8kvbp9lvYK25awSOhp2wR7kbyP7ukPV39dgF2rIkujXeaJn9Hvi/COiuwmnnjEM0LHxstpYW7CwsLeG2y5/8Ahuj5Qp/k8fKa7U2O1wHeI8O/4qWRcNv5MKpnLh9BFTs5UDAxgJIaOgJ3K6kX1QQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//2Q==",
      website: "https://www.brandup.in/"
    }
  ] as WorkExperience[],

  education: [
    {
      id: "dypit-te",
      institution: "",
      degree: "BS in Computer Science in Real-Time Interactive Simulation",
      duration: "Sep 2019 - Apr 2023",
      startDate: "Sep 2019",
      endDate: "Apr 2023",
      description: [
        "Graduated with a Minor in Mathematics",
        "President of Digipen Student Management Committee for freshman year",
        "3-time recipient of the Dean's Honor List"
      ],
      logo: "/images/DYPDPULogo.jpg",
      website: "https://engg.dypvp.edu.in/",
      // achievements: [
      //   "Dean's Honor List (3 times)",
      //   "Student Management Committee President (Freshman Year)"
      // ],
      // projects: [
      //   {
      //     name: "Final Year Project",
      //     url: "https://games.digipen.edu/games/rapid-ride-fight",
      //     description: "Rapid Ride Fight - Final year game project"
      //   }
      // ]
    },
    {
      id: "gpp-diploma",
      institution: "Government Polytechnic Pune",
      degree: "Diploma in Computer Engineering",
      duration: "Apr 2021 - May 2024",
      startDate: "Apr 2021",
      endDate: "May 2024",
      description: [],
      logo: "https://gppune.ac.in/images/gpnewlogo.png",
      website: "https://gppune.ac.in/userindex.php",
      projects: [
        {
          name: "Final Year Project",
          url: "https://github.com/Asteriskkkk/quizifer",
          description: "Phase - Final year project"
        }
      ]
    }
  ] as Education[],

  featuredProjects: [
    {
      id: "tt4d",
      name: "Wipeable",
      description: "A secure, verifiable, and user-friendly data wiping system that ensures data is permanently erased and assets are ready for safe recycling or resale.",
      image: "/images/wipeable.png",
      technologies: ["NextJs", "Shadcn/UI", "Tailwind CSS", "Electron.js", "Node.js", "PostgreSQL"],
      links: {
        // website: "https://www.youtube.com/watch?v=XgQXBnKsUyw",
        github: "https://github.com/Tejas-Santosh-Nalawade/Wipeable-Desktop-App",
        // githubUI: "https://github.com/tedawf/tt4d-web"
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
    },
    {
      id: "ttd",
      name: "Wipeable",
      description: "A secure, verifiable, and user-friendly data wiping system that ensures data is permanently erased and assets are ready for safe recycling or resale.",
      image: "/images/wipeable.png",
      technologies: ["NextJs", "Shadcn/UI", "Tailwind CSS", "Electron.js", "Node.js", "PostgreSQL"],
      links: {
        // website: "https://www.youtube.com/watch?v=XgQXBnKsUyw",
        github: "https://github.com/Tejas-Santosh-Nalawade/Wipeable-Desktop-App",
        // githubUI: "https://github.com/tedawf/tt4d-web"
      }
    },
    {
      id: "tv-telegram-alert",
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
      url: "https://www.linkedin.com/in/amit-lavhaji-patil/",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/Asteriskkkk",
      icon: "github"
    },
    {
      name: "Email",
      url: "mailto:amit.lpatil282006@gmail.com",
      icon: "mail"
    }
  ] as SocialLink[],

  resume: {
    url: "https://drive.google.com/file/d/1SUqHYnOrgzAcE3hEoBFaZrAjtd2y0OLE/view",
    downloadText: "Resume"
  },

  // tedSupport: {
  //   message: "For Q&A, start a chat with Ted Support",
  //   escalation: "For escalations, please find my",
  //   tedLead: {
  //     name: "Ted Lead",
  //     url: "https://www.instagram.com/gomugomu.cat",
  //     title: "meow"
  //   }
  // }
} as const;
