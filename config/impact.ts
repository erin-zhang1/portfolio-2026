export type ImpactMetric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  trend?: number[];
  illustration?: "code";
};

export const reportGenerationImpact = {
  label: "Report Generation Speed",
  beforeValue: 5,
  beforeSuffix: " hours",
  afterValue: 3,
  afterSuffix: " sec",
  description:
    "Replaced a manual Excel-heavy process with a reproducible Python reporting workflow.",
  trend: [300, 180, 72, 18, 5, 3, 3],
};

export const impactMetrics: ImpactMetric[] = [
  {
    label: "Test Coverage",
    value: 91,
    suffix: "%",
    description:
      "Regression coverage for core reporting and transformation logic",
    trend: [72, 76, 81, 84, 88, 91],
  },
  {
    label: "Validation / QA Checks",
    value: 840,
    suffix: "+",
    description:
      "Cross-file checks for mappings, balances, missing data, and outputs",
    trend: [180, 260, 390, 520, 680, 840],
  },
  {
    label: "Throughput Gain",
    value: 4.6,
    suffix: "x",
    description:
      "Increased reporting capacity by reducing manual processing and reruns",
    trend: [1.1, 1.7, 2.4, 3.1, 3.9, 4.6],
  },
  {
    label: "Automation Scripts",
    value: 50,
    suffix: "+",
    description:
      "Python workflows for reporting, validation, and data processing",
    illustration: "code",
  },
];
