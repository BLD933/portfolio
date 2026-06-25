"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  liveUrl: string;
  sourceUrl: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "ATS",
    description:
      "Full-stack Applicant Tracking System. Parses PDF resumes via Apache PDFBox, extracts candidate data through Groq LLM (Llama), and generates detailed gap analyses with weighted scoring.",
    tags: ["Java", "Spring Boot", "Groq AI", "PDFBox", "Docker"],
    year: "2025",
    icon: (
      <svg className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    liveUrl: "#",
    sourceUrl: "https://github.com/BLD933/ATS",
  },
  {
    title: "AI Job Scraper",
    description:
      "Scrapes listings from LinkedIn, Indeed, and Remote-OK via Apify. Scores each posting against your resume using OpenRouter GPT models, ranks results, and outputs HTML reports.",
    tags: ["Python", "Apify", "OpenRouter", "SQLite"],
    year: "2025",
    icon: (
      <svg className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h9m-3 9l4.5-4.5m0 0L18 21m-4.5-4.5H21" />
      </svg>
    ),
    liveUrl: "#",
    sourceUrl: "https://github.com/BLD933/job-scraper",
  },
  {
    title: "Kōnane (C++)",
    description:
      "Fully functional Kōnane board game built from scratch in C++. Features ncurses terminal UI and SDL graphical interface with optimized game mechanics and multiplayer support.",
    tags: ["C++", "ncurses", "SDL"],
    year: "2024",
    icon: (
      <svg className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354" />
      </svg>
    ),
    liveUrl: "#",
    sourceUrl: "https://github.com/BLD933/konane-game",
  },
  {
    title: "CTF Challenges",
    description:
      "Active CTF competitor with focus on binary analysis, exploitation, shellcode development, and vulnerability research using IDA Pro, GDB, pwntools, and angr.",
    tags: ["CTF", "Binary Exploit", "IDA Pro", "GDB"],
    year: "2024",
    icon: (
      <svg className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    liveUrl: "#",
    sourceUrl: "https://github.com/BLD933/pico-CTF",
  },
  {
    title: "QGIS Analysis",
    description:
      "Mini-project applying physical and mathematical geodesy concepts with photogrammetry using QGIS. Includes spatial analysis and map production.",
    tags: ["QGIS", "Photogrammetry", "Geodesy"],
    year: "2025",
    icon: (
      <svg className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    liveUrl: "#",
    sourceUrl: "https://github.com/BLD933/qgis_mcp_server",
  },
  {
    title: "Android RE",
    description:
      "Reverse engineering project analyzing Android games using Frida for runtime manipulation. Includes APK decompilation, hook scripts, and memory analysis.",
    tags: ["Frida", "Android", "APK"],
    year: "2025",
    icon: (
      <svg className="h-8 w-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    liveUrl: "#",
    sourceUrl: "https://github.com/BLD933/match-score-android",
  },
];

const ProjectsSection: FC = () => {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent">04. Projects</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Selected Work
          </h2>
          <p className="mt-3 text-sm text-muted">A selection of things I&apos;ve built</p>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="surface group rounded-xl p-5 hover-lift"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                {/* Icon */}
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-surface border border-border group-hover:border-accent/30 transition-colors">
                  {project.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-muted">{project.year}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded px-2 py-0.5 font-mono text-[11px] text-muted bg-accent/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:gap-2.5 transition-all"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Source
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
