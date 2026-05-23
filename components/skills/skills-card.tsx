import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-[18px] border border-[#e0e0e0] bg-white p-2"
        >
          <div className="flex h-[230px] flex-col justify-between p-6 sm:h-[230px]">
            <skill.icon size={44} className="text-primary" />
            <div className="space-y-2">
              <h3 className="text-[17px] font-semibold tracking-[-0.374px] text-[#1d1d1f]">
                {skill.name}
              </h3>
              <p className="text-sm leading-[1.43] tracking-[-0.224px] text-[#333333]">
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
