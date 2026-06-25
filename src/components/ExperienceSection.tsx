"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: "Engineering Student - Geomatics & GIS",
    company: "EHTP (École Hassania des Travaux Publics)",
    period: "2025 - Present",
    description: [
      "Specializing in Geomatics and Information Systems engineering",
      "Studying advanced algorithms, system programming, and spatial analysis",
      "Working on QGIS-based projects applying photogrammetry and geodesy concepts",
    ],
  },
  {
    role: "Computer Science (DEUG)",
    company: "Faculté des Sciences Aïn Chock",
    period: "2023 - 2025",
    description: [
      "Intensive program in Mathematics, Computer Science, and Physics",
      "Built strong foundations in algorithms, data structures, and software engineering",
      "Developed full-stack applications and automation tools",
    ],
  },
  {
    role: "ATS - Full-Stack Developer",
    company: "Personal Project",
    period: "2025",
    description: [
      "Built a full-stack Applicant Tracking System with Java/Spring Boot",
      "Integrated Groq LLM for semantic resume parsing and candidate gap analysis",
      "Implemented Docker deployment with PostgreSQL for production readiness",
    ],
  },
  {
    role: "CTF Competitor & Security Researcher",
    company: "Self-Project",
    period: "2024 - Present",
    description: [
      "Participate in Capture The Flag competitions with focus on binary exploitation",
      "Reverse engineer binaries using IDA Pro, GDB, pwntools, and angr",
      "Develop shellcode and exploit techniques for vulnerability analysis",
    ],
  },
];

const ExperienceSection: FC = () => {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent">03. Experience</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            My Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative md:grid md:grid-cols-2 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 z-10 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-accent md:left-1/2 md:block" />

                {/* Content */}
                <div className={`pl-10 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                  <span className="inline-block rounded-md bg-accent/10 px-2 py-0.5 font-mono text-xs text-accent">
                    {exp.period}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{exp.company}</p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted flex items-start gap-2 md:gap-2">
                        <svg className="mt-1 h-3 w-3 flex-shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                        <span className={index % 2 === 0 ? "md:text-left" : ""}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
