"use client";

import NumberFlow from "@number-flow/react";
import { useEffect, useMemo, useState } from "react";

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionChartProps = {
  username: string;
};

type ContributionPayload = {
  username: string;
  total: number;
  contributions: ContributionDay[];
};

const levelColors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

export function ContributionChart({ username }: ContributionChartProps) {
  const [data, setData] = useState<ContributionPayload | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let isMounted = true;

    async function loadContributions() {
      try {
        const response = await fetch(
          `/api/github-contributions?username=${encodeURIComponent(username)}`
        );

        if (!response.ok) {
          throw new Error("Unable to load contributions");
        }

        const payload = (await response.json()) as ContributionPayload;

        if (isMounted) {
          setData(payload);
          setStatus("ready");
        }
      } catch {
        if (isMounted) {
          setStatus("error");
        }
      }
    }

    loadContributions();

    return () => {
      isMounted = false;
    };
  }, [username]);

  const activeDays = useMemo(() => {
    if (!data) {
      return 0;
    }

    return data.contributions.filter((day) => day.count > 0).length;
  }, [data]);

  return (
    <div className="rounded-[18px] border border-[#e0e0e0] bg-white p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[14px] font-semibold leading-[1.29] tracking-[-0.224px] text-[#333333]">
            GitHub Contributions
          </p>
          <p className="mt-2 text-[14px] font-normal leading-[1.43] tracking-[-0.224px] text-[#7a7a7a]">
            Live last-year activity for @{username}
          </p>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="font-heading text-[34px] font-semibold leading-none tracking-[-0.374px] text-[#1d1d1f]">
              <NumberFlow value={data?.total ?? 0} />
            </p>
            <p className="mt-1 text-[12px] font-normal leading-none tracking-[-0.12px] text-[#7a7a7a]">
              contributions
            </p>
          </div>
          <div>
            <p className="font-heading text-[34px] font-semibold leading-none tracking-[-0.374px] text-[#1d1d1f]">
              <NumberFlow value={activeDays} />
            </p>
            <p className="mt-1 text-[12px] font-normal leading-none tracking-[-0.12px] text-[#7a7a7a]">
              active days
            </p>
          </div>
        </div>
      </div>

      {status === "ready" && data ? (
        <div className="overflow-x-auto pb-2">
          <div
            className="grid min-w-[780px] grid-flow-col gap-1"
            style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
            aria-label={`GitHub contribution chart for ${username}`}
          >
            {data.contributions.map((day) => (
              <span
                key={day.date}
                className="h-3 w-3 rounded-[3px]"
                style={{
                  backgroundColor: levelColors[day.level],
                }}
                title={`${day.count} contributions on ${day.date}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex min-h-[92px] items-center rounded-[11px] bg-[#f5f5f7] px-4 text-[14px] leading-[1.43] tracking-[-0.224px] text-[#7a7a7a]">
          {status === "loading"
            ? "Loading live contribution activity..."
            : "GitHub contribution data is temporarily unavailable."}
        </div>
      )}
    </div>
  );
}
