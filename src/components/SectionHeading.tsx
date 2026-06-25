"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function SectionHeading({ label, title, description, children }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.span
        className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {label}
      </motion.span>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        className="mt-4 mx-auto w-20 h-1 rounded-full gradient-bg"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      />
      {children}
    </motion.div>
  );
}
