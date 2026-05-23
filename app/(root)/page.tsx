import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import BlogCard from "@/components/blogs/blog-card";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import { EngineeringImpactSection } from "@/components/impact/engineering-impact-section";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { getFeaturedBlogs } from "@/lib/blogs";
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
  const featuredBlogs = getFeaturedBlogs();
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

      <section className="mb-0 flex min-h-[calc(100vh-44px)] items-center bg-white px-5 py-20">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="mb-2 h-auto w-[52%] max-w-[14rem] rounded-full border border-[#e0e0e0] bg-[#f5f5f7]"
            alt="Erin Zhang - Software Developer Portfolio"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-[40px] font-semibold leading-[1.07] tracking-[-0.28px] text-[#1d1d1f] sm:text-[56px]"
          >
            Erin Zhang
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-[21px] font-semibold leading-[1.19] tracking-[0.231px] text-[#1d1d1f]"
          >
            Software Developer
          </AnimatedText>
          <div className="mt-4 max-w-[42rem] text-center">
            <p className="text-[24px] font-light leading-[1.5] tracking-normal text-[#333333]">
              Software developer building Python, R, SQL, and Django automation
              systems for actuarial reporting, financial data processing, and
              analytics.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-2">
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
            <Icons.chevronDown className="mt-10 h-6 w-6 text-[#7a7a7a]" />
          </AnimatedText>
        </div>
      </section>
      <EngineeringImpactSection />
      <AnimatedSection
        direction="up"
        className="space-y-10 bg-[#f5f5f7] px-5 py-20 md:px-8"
        id="projects"
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-[#1d1d1f] md:text-[40px]"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[780px] text-[21px] font-normal leading-[1.35] tracking-[0.196px] text-[#333333]"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <Button variant={"outline"}>
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="space-y-10 bg-[#272729] px-5 py-20 text-white md:px-8"
        id="experience"
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-white md:text-[40px]"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[780px] text-[21px] font-normal leading-[1.35] tracking-[0.196px] text-[#cccccc]"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid max-w-[1440px] justify-center gap-5 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button
              variant={"outline"}
              className="border-[#2997ff] text-[#2997ff] hover:bg-[#2997ff] hover:text-white"
            >
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="space-y-10 bg-[#f5f5f7] px-5 py-20 md:px-8"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-[#1d1d1f] md:text-[40px]"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[780px] text-[21px] font-normal leading-[1.35] tracking-[0.196px] text-[#333333]"
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
        className="space-y-10 bg-white px-5 py-20 md:px-8"
        id="blogs"
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-[#1d1d1f] md:text-[40px]"
          >
            {pagesConfig.blogs.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[780px] text-[21px] font-normal leading-[1.35] tracking-[0.196px] text-[#333333]"
          >
            {pagesConfig.blogs.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <AnimatedSection
              key={blog.slug}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full w-full min-w-0"
            >
              <BlogCard blog={blog} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/blogs">
            <Button variant={"outline"}>
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="space-y-10 bg-[#2a2a2c] px-5 py-20 text-white md:px-8"
        id="skills"
      >
        <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-[34px] font-semibold leading-[1.1] tracking-[-0.374px] text-white md:text-[40px]"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[780px] text-[21px] font-normal leading-[1.35] tracking-[0.196px] text-[#cccccc]"
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
    </ClientPageWrapper>
  );
}
