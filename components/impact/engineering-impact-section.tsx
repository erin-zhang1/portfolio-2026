import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ContributionChart } from "@/components/impact/contribution-chart";
import { MetricCard } from "@/components/impact/metric-card";
import { ReportGenerationCard } from "@/components/impact/report-generation-card";
import { impactMetrics } from "@/config/impact";
import { siteConfig } from "@/config/site";

export function EngineeringImpactSection() {
  return (
    <AnimatedSection
      direction="up"
      className="flex min-h-[calc(100svh-44px)] scroll-mt-0 flex-col justify-center bg-[#f5f5f7] px-5 py-8 md:px-8 lg:h-[calc(100svh-44px)] lg:py-5"
      id="impact"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-3 text-center">
        <AnimatedText
          as="h2"
          className="font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.374px] text-[#1d1d1f] md:text-[36px]"
        >
          Engineering Impact
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="max-w-[760px] text-[18px] font-normal leading-[1.32] tracking-[0.196px] text-[#333333] md:text-[20px]"
        >
          Reliable automation, tested workflows, and measurable engineering
          outcomes.
        </AnimatedText>
      </div>

      <div className="mx-auto mt-5 grid w-full max-w-[1240px] gap-4 lg:grid-cols-3">
        <ReportGenerationCard />
        {impactMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mx-auto mt-4 w-full max-w-[1120px]">
        <ContributionChart username={siteConfig.username} />
      </div>
    </AnimatedSection>
  );
}
