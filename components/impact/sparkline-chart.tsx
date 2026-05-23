import { useId } from "react";

import { cn } from "@/lib/utils";

type SparklineChartProps = {
  values: number[];
  className?: string;
  height?: number;
  strokeWidth?: number;
  width?: number;
};

export function SparklineChart({
  values,
  className,
  height = 36,
  strokeWidth = 3,
  width = 120,
}: SparklineChartProps) {
  const gradientId = useId();
  const chartPadding = Math.max(strokeWidth + 2, 6);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = values.map((value, index) => {
    const x =
      chartPadding +
      (index / Math.max(values.length - 1, 1)) * (width - chartPadding * 2);
    const y =
      height -
      chartPadding -
      ((value - min) / range) * (height - chartPadding * 2);

    return { x, y };
  });

  const path = points
    .map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const previousPoint = points[index - 1];
      const controlDistance = (point.x - previousPoint.x) / 2;

      return `C ${previousPoint.x + controlDistance} ${previousPoint.y}, ${
        point.x - controlDistance
      } ${point.y}, ${point.x} ${point.y}`;
    })
    .join(" ");

  const fillPath = `${path} L ${points[points.length - 1].x} ${
    height - chartPadding
  } L ${points[0].x} ${height - chartPadding} Z`;

  return (
    <svg
      className={cn("h-9 w-full overflow-visible", className)}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#0066cc" stopOpacity="0.18" />
          <stop offset="48%" stopColor="#0066cc" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillPath} fill={`url(#${gradientId})`} />
      <path
        d={path}
        fill="transparent"
        stroke="#0066cc"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      {points.map((point, index) => (
        <circle
          key={`${point.x}-${point.y}-${index}`}
          cx={point.x}
          cy={point.y}
          r={strokeWidth + 1}
          fill="#ffffff"
          stroke="#0066cc"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}
