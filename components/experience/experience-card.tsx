"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";

// Helper function to format dates as short resume-style labels
const getDateLabel = (date: Date): string => {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const endLabel =
    typeof endDate === "string" ? "Present" : getDateLabel(endDate);
  return `${getDateLabel(startDate)} - ${endLabel}`;
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="group relative overflow-hidden rounded-[18px] border border-[#e0e0e0] bg-white p-5 transition-colors duration-300 sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        {experience.logo && (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={48}
              height={48}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-start sm:items-center gap-2">
              <h3 className="line-clamp-2 text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-[#1d1d1f] sm:line-clamp-1">
                {experience.position}
              </h3>
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 flex-shrink-0 text-primary transition-colors hover:text-[#0071e3] sm:mt-0"
                >
                  <Icons.externalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <div className="flex flex-col gap-1 text-sm tracking-[-0.224px] text-[#7a7a7a] sm:flex-row sm:items-center sm:gap-2">
              <span className="font-medium">{experience.company}</span>
              <span className="hidden sm:inline">•</span>
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-primary px-3 py-1 text-xs font-normal text-primary">
                {getDurationText(experience.startDate, experience.endDate)}
              </span>
            </div>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-[1.43] tracking-[-0.224px] text-[#333333] sm:mt-3">
            {experience.description[0]}
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1">
            {experience.skills.slice(0, 2).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full border border-[#e0e0e0] bg-[#fafafc] px-3 py-1 text-xs font-normal text-[#333333]"
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 2 && (
              <span className="inline-flex items-center rounded-full border border-[#e0e0e0] bg-[#fafafc] px-3 py-1 text-xs font-normal text-[#333333]">
                +{experience.skills.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 sm:mt-4 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
          asChild
        >
          <Link href={`/experience/${experience.id}`}>
            View Details
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceCard;
