import SectionHeader from "@/components/ui/SectionHeader";
import SkillPanel from "@/components/ui/SkillPanel";
import { resumeData } from "@/lib/resume";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="// expertise"
          title="Skills & Stack"
          subtitle="Where hardware automation meets environmental intelligence."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <SkillPanel data={resumeData.techSkills}  variant="green"   direction="left"  />
          <SkillPanel data={resumeData.greenSkills} variant="emerald" direction="right" />
        </div>
      </div>
    </section>
  );
}
