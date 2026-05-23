import { cn } from "@/lib/utils";

type SparklineChartProps = {
  values: number[];
  className?: string;
};

export function SparklineChart({ values, className }: SparklineChartProps) {
  const width = 120;
  const height = 36;
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
        strokeWidth="3"
      />
    </svg>
  );
}
