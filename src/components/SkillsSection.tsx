"use client";

import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  icon: ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: "C/C++", level: 88 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Bash", level: 78 },
    ],
  },
  {
    name: "Web & Backend",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    skills: [
      { name: "React", level: 75 },
      { name: "Vue.js", level: 70 },
      { name: "Node.js", level: 72 },
      { name: "REST APIs", level: 76 },
    ],
  },
  {
    name: "Security & Low-Level",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    skills: [
      { name: "Reverse Engineering", level: 80 },
      { name: "Binary Exploitation", level: 75 },
      { name: "GDB/IDA Pro", level: 78 },
      { name: "Linux (Fedora)", level: 85 },
    ],
  },
  {
    name: "Geomatics & GIS",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    skills: [
      { name: "QGIS", level: 82 },
      { name: "Spatial Analysis", level: 74 },
      { name: "Photogrammetry", level: 70 },
      { name: "Geodesy", level: 68 },
    ],
  },
];

const SkillsSection: FC = () => {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent">02. Skills</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Expertise
          </h2>
          <p className="mt-3 max-w-lg text-sm text-muted">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="surface rounded-xl p-5 hover-lift"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {category.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground font-mono">
                  {category.name}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-muted">{skill.name}</span>
                      <span className="text-xs font-mono text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                      <motion.div
                        className="h-full rounded-full bg-accent/80"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
