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
    <div className="relative flex h-full w-full flex-col rounded-[18px] border border-[#e0e0e0] bg-white p-6">
      <div className="relative h-[200px] w-full flex-shrink-0 overflow-hidden rounded-lg bg-[#f5f5f7]">
        <Image
          className="object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-[21px] font-semibold leading-[1.19] tracking-[0.231px] text-[#1d1d1f]">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 flex-grow text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[#333333]">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant={"outline"} size="sm" className="mt-2 w-full sm:w-auto">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 hidden rounded-full border border-[#e0e0e0] bg-white p-3 text-[#1d1d1f] md:block">
        {project.type === "Personal" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
