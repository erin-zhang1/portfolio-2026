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
      className="flex min-h-[286px] flex-col justify-between rounded-[18px] border border-[#e0e0e0] bg-white p-5 md:p-6"
    >
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-[15px] font-semibold leading-[1.35] tracking-[-0.224px] text-[#333333]">
            {reportGenerationImpact.label}
          </p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 font-heading text-[38px] font-semibold leading-none tracking-[-0.374px] text-[#1d1d1f] md:text-[48px]">
            <span className="sr-only">5 hours to 3 sec</span>
            <span>
              <NumberFlow
                value={isVisible ? reportGenerationImpact.beforeValue : 0}
              />
              <span className="text-[18px] font-normal tracking-[0.231px] text-[#333333] md:text-[20px]">
                {reportGenerationImpact.beforeSuffix}
              </span>
            </span>
            <span className="text-[27px] text-[#0066cc] md:text-[32px]">
              {"->"}
            </span>
            <span>
              <NumberFlow
                value={isVisible ? reportGenerationImpact.afterValue : 0}
              />
              <span className="text-[18px] font-normal tracking-[0.231px] text-[#333333] md:text-[20px]">
                {reportGenerationImpact.afterSuffix}
              </span>
            </span>
          </div>
          <p className="max-w-[36rem] text-[15px] font-normal leading-[1.43] tracking-[-0.224px] text-[#333333]">
            {reportGenerationImpact.description}
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <SparklineChart
          values={reportGenerationImpact.trend}
          className="h-24 w-full max-w-[540px]"
          height={150}
          strokeWidth={3.5}
          width={620}
        />
      </div>
    </div>
  );
}
