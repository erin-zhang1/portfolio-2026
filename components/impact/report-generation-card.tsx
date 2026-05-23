"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useRef, useState } from "react";

import { SparklineChart } from "@/components/impact/sparkline-chart";
import { reportGenerationImpact } from "@/config/impact";

export function ReportGenerationCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex min-h-[464px] flex-col justify-between rounded-[18px] border border-[#e0e0e0] bg-white p-8 md:p-10"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-[17px] font-semibold leading-[1.24] tracking-[-0.374px] text-[#333333]">
            {reportGenerationImpact.label}
          </p>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 font-heading text-[48px] font-semibold leading-none tracking-[-0.374px] text-[#1d1d1f] md:text-[64px]">
            <span className="sr-only">5 hours to 3 sec</span>
            <span>
              <NumberFlow
                value={isVisible ? reportGenerationImpact.beforeValue : 0}
              />
              <span className="text-[21px] font-normal tracking-[0.231px] text-[#333333] md:text-[24px]">
                {reportGenerationImpact.beforeSuffix}
              </span>
            </span>
            <span className="text-[34px] text-[#0066cc] md:text-[40px]">→</span>
            <span>
              <NumberFlow
                value={isVisible ? reportGenerationImpact.afterValue : 0}
              />
              <span className="text-[21px] font-normal tracking-[0.231px] text-[#333333] md:text-[24px]">
                {reportGenerationImpact.afterSuffix}
              </span>
            </span>
          </div>
          <p className="max-w-[36rem] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] text-[#333333]">
            {reportGenerationImpact.description}
          </p>
        </div>
      </div>
      <div className="pt-10">
        <SparklineChart
          values={reportGenerationImpact.trend}
          className="h-24"
          height={84}
          strokeWidth={4}
          width={240}
        />
      </div>
    </div>
  );
}
