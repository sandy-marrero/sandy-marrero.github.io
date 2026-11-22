/**
 * Sandy Marrero Hernández — Profile & Resume Data Source
 * ------------------------------------------------------
 * Single source of truth for https://sandy-marrero.github.io
 * Edit this file to update roles, skills, projects, education, or links.
 */

export const PROFILE = {
  person: {
    name: "Sandy Marrero Hernández",
    handle: "sandy.marrero",
    headline: "Software Engineer",
    avatar: "assets/img/m.png",
    company: "Google",
    employmentStatus: "Full-Time (FTE)",
    graduationStatus: "Graduated · May 2025",
    focus: "Mobile App Development",
    email: "sandy.marrero@upr.edu",
    links: {
      linkedin: "https://www.linkedin.com/in/sandy-marrero/",
      github: "https://github.com/sandy-marrero",
      website: "https://sandy-marrero.github.io",
    },
  },

  about: [
    "I'm a full-time Software Engineer at Google and a Computer Software Engineering graduate from the University of Puerto Rico, Mayagüez.",
    "My main focus and interests are mobile app development for iOS and Android, as well as full-stack development. I have previous work experience in Java and Kotlin, and previously completed software engineering internships at Google and BlackRock.",
  ],

  experience: [
    {
      company: "Google",
      type: "Full-time (FTE)",
      totalDuration: "Jul 2025 – Present",
      accent: "google",
      monogram: "G",
      roles: [
        {
          title: "Software Engineer III",
          period: "Nov 2026 – Present",
          current: true,
          summary: "Full-time Software Engineer at Google.",
          bullets: [],
          skills: [],
        },
        {
          title: "Software Engineer II",
          period: "Jul 2025 – Nov 2026 · 1 yr 5 mos",
          current: false,
          summary: "Joined Google full-time following university graduation.",
          bullets: [],
          skills: [],
        },
      ],
    },
    {
      company: "Google",
      type: "Internship",
      totalDuration: "May 2024 – Aug 2024 · 4 mos",
      accent: "google",
      monogram: "G",
      roles: [
        {
          title: "Software Engineer Intern",
          period: "May 2024 – Aug 2024",
          current: false,
          summary:
            "Android Google App — built and experimented on a Chrome Incognito Keyboard Toolbar entry point.",
          bullets: [
            "Surfaced an entry point to Chrome Incognito via a Keyboard Toolbar in the Android Google App, allowing users to seamlessly continue their search journey in private mode.",
            "Ran a live experiment targeting 5% of Google App users, averaging 150K daily clicks and 2.5M total clicks over two weeks — a 2× increase in daily clicks and a 2.5× boost in cumulative clicks over the previous entry point.",
          ],
          skills: ["Kotlin", "Java", "Android"],
        },
      ],
    },
    {
      company: "BlackRock",
      type: "Internship",
      totalDuration: "Jun 2023 – Aug 2023 · 3 mos",
      accent: "blackrock",
      monogram: "BR",
      roles: [
        {
          title: "Software Engineering Intern",
          period: "Jun 2023 – Aug 2023",
          current: false,
          summary:
            "Aladdin LEO — event-driven notification microservice and middleware.",
          bullets: [
            "Implemented a Notification Microservice for Aladdin LEO using Java and Spring Boot, generating real-time notifications from Apache Kafka events consumed off the event bus.",
            "Built a middleware service leveraging an internal notification library to transform Kafka events into structured records, persist them to the database, and surface them in the notification UI.",
          ],
          skills: ["Java", "Spring Boot", "Apache Kafka"],
        },
      ],
    },
  ],

  skillCategories: [
    { id: "all", label: "All" },
    { id: "languages", label: "Languages" },
    { id: "platforms", label: "Mobile & Full-Stack" },
  ],

  skills: [
    {
      name: "Java",
      category: "languages",
      level: "Core",
      context: "Android & Backend Services",
    },
    {
      name: "Kotlin",
      category: "languages",
      level: "Core",
      context: "Android App Development",
    },
    {
      name: "Swift",
      category: "languages",
      level: "Core",
      context: "iOS & Apple Platform Development",
    },
    {
      name: "Objective-C",
      category: "languages",
      level: "Core",
      context: "iOS & Native Interoperability",
    },
    {
      name: "C",
      category: "languages",
      level: "Core",
      context: "Systems & Low-Level Development",
    },
    {
      name: "Android",
      category: "platforms",
      level: "Core",
      context: "Native Mobile Engineering",
    },
    {
      name: "iOS",
      category: "platforms",
      level: "Core",
      context: "Native Mobile Engineering",
    },
    {
      name: "React Native",
      category: "platforms",
      level: "Proficient",
      context: "Cross-Platform Mobile Apps",
    },
    {
      name: "React & TypeScript",
      category: "platforms",
      level: "Proficient",
      context: "Full-Stack Web Interfaces",
    },
    {
      name: "Spring Boot & Kafka",
      category: "platforms",
      level: "Proficient",
      context: "Event-Driven Java Microservices",
    },
  ],

  featuredProjects: [
    {
      id: "ranktify",
      title: "Ranktify — Swiping-Based Music Ranking Platform",
      tag: "Mobile · Capstone Project",
      period: "Jan 2025 – May 2025",
      summary:
        "Mobile music discovery and rating app with a gesture-driven ranking interaction where swipe intensity dynamically assigns a 1–5 star score to each track.",
      highlights: [
        "Developed the login and signup flows, search interface, profile screen, and full ranking experience.",
        "Implemented custom swipe-intensity rating mechanics for fast, tactile track scoring.",
      ],
      tech: ["React Native", "TypeScript"],
      visualType: "ranktify",
    },
    {
      id: "domino",
      title: "Online Domino Web Application",
      tag: "Full-Stack Web",
      period: "Aug 2024 – Dec 2024",
      summary:
        "Full-stack multiplayer web application with seamless client-server user authentication and session flows.",
      highlights: [
        "Built the responsive React authentication interface and integrated frontend login/signup workflows with backend APIs.",
      ],
      tech: ["React", "JavaScript"],
      visualType: "domino",
    },
  ],

  education: [
    {
      school: "University of Puerto Rico, Mayagüez (UPRM)",
      degree: "Bachelor of Science in Computer Software Engineering",
      period: "Aug 2019 – May 2025",
      status: "Graduated",
      gpa: "3.65 / 4.00",
    },
  ],
};
