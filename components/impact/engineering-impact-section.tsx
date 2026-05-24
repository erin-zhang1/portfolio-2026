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
      className="scroll-mt-0 bg-[#f5f5f7] px-5 pb-28 pt-28 md:px-8 md:pb-32 md:pt-32"
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

      <div className="mx-auto mt-7 grid w-full max-w-[1180px] gap-4 lg:grid-cols-3">
        <ReportGenerationCard />
        {impactMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      <div className="mx-auto mt-5 w-full max-w-[1080px]">
        <ContributionChart username={siteConfig.username} />
      </div>
    </AnimatedSection>
  );
}
