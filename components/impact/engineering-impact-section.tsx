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
      className="flex min-h-[calc(100vh-44px)] scroll-mt-16 flex-col bg-[#f5f5f7] px-5 pb-8 pt-8 md:px-8 lg:h-[calc(100vh-44px)] lg:pb-4 lg:pt-6"
      id="impact"
    >
      <div className="mx-auto flex max-w-[980px] flex-col items-center space-y-2.5 text-center">
        <AnimatedText
          as="h2"
          className="font-heading text-[34px] font-semibold leading-[1.07] tracking-[-0.28px] text-[#1d1d1f] md:text-[40px]"
        >
          Engineering Impact
        </AnimatedText>
        <AnimatedText
          as="p"
          delay={0.2}
          className="max-w-[780px] text-[17px] font-normal leading-[1.3] tracking-[0.196px] text-[#333333] md:text-[18px]"
        >
          Reliable automation, tested workflows, and measurable engineering
          outcomes.
        </AnimatedText>
      </div>

      <div className="mx-auto mt-6 grid w-full max-w-[1440px] gap-4 lg:grid-cols-[1.12fr_1fr]">
        <ReportGenerationCard />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {impactMetrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-4 w-full max-w-[1180px]">
        <ContributionChart username={siteConfig.username} />
      </div>
    </AnimatedSection>
  );
}