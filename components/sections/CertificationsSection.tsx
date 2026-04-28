"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import CertBadge from "@/components/ui/CertBadge";
import { resumeData } from "@/lib/resume";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants: Variants = {
  hidden:   { opacity: 0, scale: 0.92 },
  visible:  { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="// certifications"
          title="Certifications"
          subtitle="Validated expertise across data analytics, sustainability standards, and automation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {resumeData.certifications.map((cert) => (
            <motion.div key={cert.title} variants={itemVariants}>
              <CertBadge data={cert} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
