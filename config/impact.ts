export type ImpactMetric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  trend: number[];
};

export const impactMetrics: ImpactMetric[] = [
  {
    label: "Test Coverage",
    value: 91,
    suffix: "%",
    description: "Focused regression coverage for core data workflows",
    trend: [72, 76, 81, 84, 88, 91],
  },
  {
    label: "Throughput Gain",
    value: 4.6,
    suffix: "x",
    description: "Automation throughput compared with manual processing",
    trend: [1.1, 1.7, 2.4, 3.1, 3.9, 4.6],
  },
  {
    label: "Report Generation Speed",
    value: 3,
    suffix: " sec",
    description: "Reduced manual report generation from hours to seconds",
    trend: [55, 34, 21, 13, 8, 3],
  },
  {
    label: "Automation Output",
    value: 128,
    suffix: " runs",
    description: "Repeatable automated runs delivered across reporting cycles",
    trend: [22, 38, 51, 73, 96, 128],
  },
  {
    label: "Commit Activity",
    value: 312,
    suffix: "+",
    description: "Public GitHub activity supported by live contribution data",
    trend: [112, 148, 176, 221, 268, 312],
  },
  {
    label: "Validation / QA Checks",
    value: 840,
    suffix: "+",
    description: "Automated checks across files, datasets, and outputs",
    trend: [180, 260, 390, 520, 680, 840],
  },
];
