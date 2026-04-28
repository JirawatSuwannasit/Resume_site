"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { resumeData } from "@/lib/resume";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="// impact_metrics"
          title="High-Impact Projects"
          subtitle="Real numbers from real systems — energy saved, time cut, costs eliminated."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {resumeData.projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants} className="flex">
              <ProjectCard data={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
