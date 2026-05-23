import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative flex h-full w-full flex-col rounded-[18px] border border-[#e0e0e0] bg-white p-4">
      <div className="relative h-[132px] w-full flex-shrink-0 overflow-hidden rounded-lg bg-[#f5f5f7] md:h-[148px]">
        <Image
          className="object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="flex flex-grow flex-col space-y-2 pt-4">
        <h5 className="text-[18px] font-semibold leading-[1.19] tracking-[0.231px] text-[#1d1d1f]">
          {project.companyName}
        </h5>
        <p className="flex-grow text-[13px] font-normal leading-[1.35] tracking-[-0.224px] text-[#333333]">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button
            variant={"outline"}
            size="sm"
            className="mt-1 w-full sm:w-auto"
          >
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-3 right-3 hidden rounded-full border border-[#e0e0e0] bg-white p-2.5 text-[#1d1d1f] md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
