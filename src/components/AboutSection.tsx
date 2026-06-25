"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Coding" },
  { value: "10+", label: "Projects" },
  { value: "20+", label: "CTFs Solved" },
  { value: "3", label: "Languages" },
];

const skills = [
  "C/C++", "Python", "JavaScript", "React", "Vue.js",
  "Node.js", "SQL", "Linux", "Git", "QGIS",
  "Reverse Engineering", "Bash",
];

const AboutSection: FC = () => {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-accent">01. About Me</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-5 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-4 text-sm leading-relaxed text-muted"
          >
            <p>
              I&apos;m a first-year engineering student at EHTP (École Hassania des
              Travaux Publics) specializing in Geomatics and GIS. I&apos;m passionate
              about low-level programming, reverse engineering, and building
              full-stack applications that solve real problems.
            </p>
            <p>
              My journey started with a DEUG in Computer Science at Faculté des
              Sciences Aïn Chock, where I built a strong foundation in algorithms,
              system programming, and mathematics. Since then, I&apos;ve led automation
              projects, participated in CTF competitions, and explored the depths
              of binary exploitation and shellcode development.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me playing chess, solving security
              challenges, or exploring new technologies at the intersection of
              geomatics and software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="surface rounded-xl p-3 hover-lift">
              <img
                src="/profile.png"
                alt="Mohammed BOULOUD"
                className="w-full rounded-lg object-cover aspect-square"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="surface rounded-lg p-4 text-center hover-lift"
                >
                  <div className="text-2xl font-bold text-accent font-mono">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="mb-4 font-mono text-xs text-muted uppercase tracking-widest">
            Technologies I work with
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border px-3 py-1.5 text-xs font-mono text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
