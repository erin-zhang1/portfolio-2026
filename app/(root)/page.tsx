import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { MoreAboutMeSection } from "@/components/about/more-about-me-section";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import { EducationTimelineSection } from "@/components/education/education-timeline-section";
import { ExperienceTimelineSection } from "@/components/experience/experience-timeline-section";
import { EngineeringImpactSection } from "@/components/impact/engineering-impact-section";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { education } from "@/config/education";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description:
    "Erin Zhang - Software Developer building Python, R, SQL, and Django automation systems for actuarial reporting, financial data processing, and analytics.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Software Developer",
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="mb-0 flex min-h-[calc(100svh-44px)] items-center bg-white px-5 py-8 md:py-10 lg:h-[calc(100svh-44px)] lg:py-6">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2.5 text-center">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="mb-1 h-auto w-[44%] max-w-[10.5rem] rounded-full border border-[#e0e0e0] bg-[#f5f5f7]"
            alt="Erin Zhang - Software Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-[36px] font-semibold leading-[1.07] tracking-[-0.28px] text-[#1d1d1f] sm:text-[48px]"
          >
            Erin Zhang
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-[19px] font-semibold leading-[1.19] tracking-[0.231px] text-[#1d1d1f]"
          >
            Software Developer
          </AnimatedText>
          <div className="mt-2 max-w-[42rem] text-center">
            <p className="text-[20px] font-light leading-[1.36] tracking-normal text-[#333333] md:text-[21px]">
              Software developer building Python, R, SQL, and Django automation
              systems for actuarial reporting, financial data processing, and
              analytics.
            </p>
          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-2">
            <AnimatedText delay={0.6}>
              <Link
                href={"/resume"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View resume"
              >
                <Icons.post className="w-4 h-4 mr-2" /> Resume
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Contact Erin Zhang"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="mt-4 h-6 w-6 text-[#7a7a7a]" />
          </AnimatedText>
        </div>
      </section>
      <EngineeringImpactSection />
      <AnimatedSection
        direction="up"
        className="flex min-h-[calc(100svh-44px)] flex-col justify-center space-y-5 bg-black px-5 py-10 text-white md:px-8 lg:h-[calc(100svh-44px)] lg:py-8"
        id="projects"
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-3 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.374px] text-white md:text-[36px]"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[760px] text-[18px] font-normal leading-[1.32] tracking-[0.196px] text-[#cccccc] md:text-[20px]"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button
              variant={"outline"}
              className="border-[#2997ff] text-[#2997ff] hover:bg-[#2997ff] hover:text-white"
            >
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <ExperienceTimelineSection experiences={experiences.slice(0, 4)} />
      <EducationTimelineSection education={education} />
      <AnimatedSection
        direction="up"
        className="flex min-h-[calc(100svh-44px)] flex-col justify-center space-y-5 bg-white px-5 py-10 md:px-8 lg:h-[calc(100svh-44px)] lg:py-8"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-3 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.374px] text-[#1d1d1f] md:text-[36px]"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[760px] text-[18px] font-normal leading-[1.32] tracking-[0.196px] text-[#333333] md:text-[20px]"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <ContributionCard contributions={featuredContributions} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"}>
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="flex min-h-[calc(100svh-44px)] flex-col justify-center space-y-5 bg-black px-5 py-10 text-white md:px-8 lg:h-[calc(100svh-44px)] lg:py-8"
        id="skills"
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-3 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.374px] text-white md:text-[36px]"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[760px] text-[18px] font-normal leading-[1.32] tracking-[0.196px] text-[#cccccc] md:text-[20px]"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button
              variant={"outline"}
              className="border-[#2997ff] text-[#2997ff] hover:bg-[#2997ff] hover:text-white"
            >
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <MoreAboutMeSection />
    </ClientPageWrapper>
  );
}
