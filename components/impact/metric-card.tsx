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

  const hasSparkline = metric.trend && metric.trend.length > 1;

  return (
    <div
      ref={cardRef}
      className="flex min-h-[326px] flex-col justify-between rounded-[18px] border border-[#e0e0e0] bg-white p-5 md:p-6"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-[15px] font-semibold leading-[1.35] tracking-[-0.224px] text-[#333333]">
            {metric.label}
          </p>
          <div className="font-heading text-[40px] font-semibold leading-none tracking-[-0.374px] text-[#1d1d1f] md:text-[52px]">
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
        <p className="text-[15px] font-normal leading-[1.35] tracking-[-0.224px] text-[#7a7a7a]">
          {metric.description}
        </p>
      </div>
      <div className="pt-3">
        {hasSparkline ? (
          <SparklineChart
            values={metric.trend as number[]}
            className="h-28 w-full"
            height={150}
            width={420}
            strokeWidth={3}
          />
        ) : (
          <div className="flex h-28 items-end justify-end text-[#0066cc]">
            <svg
              className="h-16 w-20"
              viewBox="0 0 64 56"
              aria-hidden="true"
              focusable="false"
            >
              <rect
                x="12"
                y="6"
                width="34"
                height="44"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M22 20l-5 5 5 5M36 20l5 5-5 5M31 18l-5 14"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M46 14h6v36H22"
                fill="none"
                opacity="0.35"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
