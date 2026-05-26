import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChipContainer from "@/components/ui/chip-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { education } from "@/config/education";
import { siteConfig } from "@/config/site";

interface EducationDetailPageProps {
  params: Promise<{
    educationId: string;
  }>;
}

export async function generateMetadata({
  params,
}: EducationDetailPageProps): Promise<Metadata> {
  const { educationId } = await params;
  const educationItem = education.find((item) => item.id === educationId);

  if (!educationItem) {
    return {
      title: "Education Not Found",
    };
  }

  return {
    title: `${educationItem.program} at ${educationItem.institution} | Education`,
    description: `Detailed information about ${educationItem.program} at ${educationItem.institution}.`,
    alternates: {
      canonical: `${siteConfig.url}/education/${educationId}`,
    },
  };
}

export default async function EducationDetailPage({
  params,
}: EducationDetailPageProps) {
  const { educationId } = await params;
  const educationItem = education.find((item) => item.id === educationId);

  if (!educationItem) {
    redirect("/#education");
  }

  const tabItems = [
    {
      value: "summary",
      label: "Summary",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Education Summary
            </h3>
            <p className="text-base leading-relaxed">
              {educationItem.description}
            </p>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "highlights",
      label: "Highlights",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {educationItem.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-base leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "focus",
      label: "Focus",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Academic Focus
            </h3>
            <ChipContainer textArr={educationItem.highlights} />
            <p className="mt-4 text-sm text-muted-foreground">
              These are the primary coursework areas, credentials, and outcomes
              connected to this education entry.
            </p>
          </div>
        </AnimatedSection>
      ),
    },
  ];

  return (
    <ClientPageWrapper>
      <div className="mx-auto max-w-4xl px-5 py-12">
        <AnimatedSection className="mb-6">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/#education">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back to Education
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="overflow-hidden bg-white p-2 transition-colors duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="mb-2 text-[28px] font-semibold leading-[1.14] tracking-[0.196px] text-[#1d1d1f] md:text-[34px]">
                    {educationItem.program}
                  </h1>
                  <p className="text-[17px] font-normal tracking-[-0.374px] text-[#333333]">
                    {educationItem.institution}
                  </p>
                  <p className="mt-1 text-[17px] tracking-[-0.374px] text-[#7a7a7a]">
                    {educationItem.location}
                  </p>
                </div>
                <div className="flex justify-center sm:justify-end">
                  <span className="inline-flex items-center rounded-full border border-primary px-3 py-1 text-sm font-normal text-primary">
                    {educationItem.period}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <ResponsiveTabs items={tabItems} defaultValue="summary" />
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-8 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/#education">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              View All Education
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
