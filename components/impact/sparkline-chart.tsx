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
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = values
    .map((value, index) => {
      const x = (index / Math.max(values.length - 1, 1)) * width;
      const y = height - ((value - min) / range) * (height - 6) - 3;

      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      className={cn("h-9 w-full overflow-visible", className)}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      <polyline
        points={points}
        fill="none"
        stroke="#0066cc"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
