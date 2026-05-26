"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { EducationInterface } from "@/config/education";

type EducationTimelineSectionProps = {
  education: EducationInterface[];
};

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.1, ease: "easeInOut" as const, delay: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: 0.18 + index * 0.12,
      staggerChildren: 0.08,
    },
  }),
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0.35 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 360,
      damping: 22,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
      staggerChildren: 0.07,
    },
  },
};

export function EducationTimelineSection({
  education,
}: EducationTimelineSectionProps) {
  return (
    <motion.section
      id="education"
      className="bg-white px-5 pb-28 pt-28 md:px-8 md:pb-32 md:pt-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-96px" }}
    >
      <motion.div
        className="mx-auto max-w-[980px] text-center"
        variants={titleVariants}
      >
        <h2 className="font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.374px] text-[#1d1d1f] md:text-[36px]">
          Education
        </h2>
      </motion.div>
      <div className="mx-auto mt-7 w-full md:mt-8">
        <div className="relative mx-auto w-full max-w-[940px]">
          <motion.div
            className="absolute left-[11px] top-1 h-[calc(100%-0.75rem)] w-px origin-top bg-[#1d1d1f] md:left-[15px]"
            variants={lineVariants}
          />

          <div className="space-y-8 md:space-y-10">
            {education.map((item, index) => (
              <motion.article
                key={item.id}
                className="group grid grid-cols-[24px_minmax(0,1fr)] gap-5 md:grid-cols-[32px_minmax(0,1fr)] md:gap-8"
                custom={index}
                variants={itemVariants}
              >
                <motion.div
                  className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#1d1d1f] bg-white transition-transform duration-300 group-hover:scale-110 md:h-8 md:w-8"
                  variants={dotVariants}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0066cc] transition-colors duration-300 group-hover:bg-[#0071e3] md:h-3 md:w-3" />
                </motion.div>

                <motion.div className="pb-1" variants={contentVariants}>
                  <motion.h3
                    className="font-heading text-[19px] font-semibold leading-[1.18] tracking-[-0.224px] text-[#1d1d1f] md:text-[20px] lg:text-[21px]"
                    variants={textVariants}
                  >
                    {item.program}{" "}
                    <span className="text-[#0066cc] transition-colors duration-300 group-hover:text-[#0071e3]">
                      @ {item.institution}
                    </span>
                  </motion.h3>
                  <motion.p
                    className="mt-1.5 text-[14px] font-normal leading-[1.43] tracking-[-0.224px] text-[#7a7a7a]"
                    variants={textVariants}
                  >
                    {item.period} <span aria-hidden="true">&middot;</span>{" "}
                    {item.location}
                  </motion.p>
                  <motion.p
                    className="mt-2 max-w-[760px] text-[16px] font-normal leading-[1.43] tracking-[-0.224px] text-[#333333] md:text-[17px] md:leading-[1.47] md:tracking-[-0.374px]"
                    variants={textVariants}
                  >
                    {item.description}
                  </motion.p>
                  <motion.div
                    className="mt-3 flex flex-wrap gap-1.5"
                    variants={textVariants}
                  >
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center rounded-full border border-[#e0e0e0] bg-[#fafafc] px-3 py-1 text-xs font-normal text-[#333333]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div className="mt-2.5" variants={textVariants}>
                    <Link
                      href={`/education/${item.id}`}
                      className="inline-flex min-h-8 items-center rounded-full border border-[#e0e0e0] bg-white px-3.5 text-[14px] font-normal leading-[1.29] tracking-[-0.224px] text-[#0066cc] transition-colors duration-300 hover:border-[#0066cc] hover:bg-[#0066cc] hover:text-white"
                      aria-label={`View details for ${item.program} at ${item.institution}`}
                    >
                      View Details
                      <Icons.chevronRight className="ml-1.5 h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
