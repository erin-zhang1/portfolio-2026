import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-[18px] border border-[#e0e0e0] bg-white p-2"
        >
          <div className="flex h-[160px] flex-col justify-between p-4 sm:h-[172px]">
            <skill.icon size={34} className="text-primary" />
            <div className="space-y-1.5">
              <h3 className="text-[17px] font-semibold tracking-[-0.374px] text-[#1d1d1f]">
                {skill.name}
              </h3>
              <p className="text-[13px] leading-[1.35] tracking-[-0.224px] text-[#333333]">
                {skill.description}
              </p>
              <Rating stars={skill.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
