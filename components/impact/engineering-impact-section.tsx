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
      className="scroll-mt-16 space-y-10 bg-[#f5f5f7] px-5 py-20 md:px-8"
      id="impact"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-5 text-center">
        <AnimatedText
          as="h2"
          className="font-heading text-[40px] font-semibold leading-[1.07] tracking-[-0.28px] text-[#1d1d1f] md:text-[56px]"
        >
          Engineering Impact
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="max-w-[780px] text-[21px] font-normal leading-[1.35] tracking-[0.196px] text-[#333333] md:text-[24px]"
        >
          Reliable automation, tested workflows, and measurable engineering
          outcomes.
        </AnimatedText>
      </div>

      <div className="mx-auto grid w-full max-w-[1440px] gap-5 lg:grid-cols-[1.12fr_1fr]">
        <ReportGenerationCard />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {impactMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px]">
        <ContributionChart username={siteConfig.username} />
      </div>
    </AnimatedSection>
  );
}
