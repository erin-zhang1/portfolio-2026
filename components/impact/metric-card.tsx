"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useRef, useState } from "react";

import { SparklineChart } from "@/components/impact/sparkline-chart";
import { ImpactMetric } from "@/config/impact";

type MetricCardProps = {
  metric: ImpactMetric;
};

export function MetricCard({ metric }: MetricCardProps) {
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
      className="flex min-h-[196px] flex-col justify-between rounded-[18px] border border-[#e0e0e0] bg-white p-6"
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <p className="text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-[#333333]">
            {metric.label}
          </p>
          <div className="min-w-[88px] text-right font-heading text-[34px] font-semibold leading-none tracking-[-0.374px] text-[#1d1d1f]">
            <NumberFlow
              value={isVisible ? metric.value : 0}
              format={{
                maximumFractionDigits: metric.value % 1 === 0 ? 0 : 1,
              }}
            />
            {metric.suffix ? (
              <span className="text-[17px] font-normal tracking-[-0.374px] text-[#333333]">
                {metric.suffix}
              </span>
            ) : null}
          </div>
        </div>
        <p className="text-[14px] font-normal leading-[1.43] tracking-[-0.224px] text-[#7a7a7a]">
          {metric.description}
        </p>
      </div>
      <div className="pt-5">
        <SparklineChart values={metric.trend} />
      </div>
    </div>
  );
}
