import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "atella-consulting",
    position: "Actuarial Software Developer (Python & R)",
    company: "Atella Consulting",
    location: "North Carolina, United States",
    startDate: new Date("2026-01-15"),
    endDate: new Date("2026-08-15"),
    description: [
      "Owned end-to-end development of a 50+ script Python/R automation codebase powering 10 recurring daily actuarial reports.",
      "Designed snapshot-based reporting infrastructure with timestamped directories, structured run metadata, reproducible outputs, and automated FTP/SFTP ingestion.",
      "Implemented modular calculation logic for complex insurance product rules including policy-level mapping, rate selection, interest accrual, effective-date allocation, and withdrawal handling.",
      "Built full-stack features for a Django-based internal web application and expanded QA coverage with pytest unit and regression tests.",
    ],
    achievements: [
      "Reduced daily actuarial calculation runtime from 5+ hours of manual Excel-based processing to about 3 seconds of automated execution.",
      "Created traceable daily and month-end reporting workflows across DBF/CSV processing and reference table joins.",
      "Translated ambiguous actuarial requirements into deterministic, well-tested Python calculation logic.",
      "Connected server-rendered Django review pages with backend calculation logic and automated reporting workflows.",
    ],
    skills: [
      "Python",
      "R",
      "Django",
      "pytest",
      "ETL",
      "SQL",
      "Git",
      "Excel",
    ],
  },
  {
    id: "kenna-communications",
    position: "Data Reporting Analyst (SQL & Python)",
    company: "Kenna Communications",
    location: "Mississauga, Canada",
    startDate: new Date("2024-09-15"),
    endDate: new Date("2025-04-15"),
    description: [
      "Developed automated reporting pipelines in Python and SQL that consolidated data from three sources and delivered recurring operational reports.",
      "Built a Python-based forecasting pipeline with automated validation testing on 50K+ records.",
      "Designed optimized SQL queries using CTEs and window functions to power Tableau dashboards for real-time operational monitoring.",
    ],
    achievements: [
      "Eliminated 15 hours of manual reporting work per week through Python and SQL automation.",
      "Achieved a 5% reduction in material waste, representing about $150K in annual savings.",
      "Enabled shift-level performance tracking through optimized SQL and Tableau reporting.",
    ],
    skills: ["Python", "SQL", "Tableau", "Excel", "ETL", "Data Validation"],
  },
  {
    id: "lansi-institute",
    position: "Data Research Analyst (R & Linux)",
    company: "Chinese Academy of Sciences - Lansi Institute of AI in Medicine",
    location: "Remote",
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-04-15"),
    description: [
      "Developed automated QA pipelines for 10TB of genomic sequencing data using R.",
      "Applied machine learning methods to improve a cancer gene-sequencing platform's predictive accuracy.",
    ],
    achievements: [
      "Improved reproducibility and supported 98% downstream analysis accuracy.",
      "Enhanced predictive accuracy for cancer gene-sequencing workflows by 15%.",
    ],
    skills: ["R", "Linux", "Machine Learning", "Data Validation"],
  },
  {
    id: "assetpro",
    position: "Quantitative Analyst Intern (Python)",
    company: "AssetPro",
    location: "Shanghai, China",
    startDate: new Date("2023-09-15"),
    endDate: new Date("2023-12-15"),
    description: [
      "Built a Python backtesting framework for factor-based trading signals on S&P 500 data.",
      "Implemented walk-forward testing and out-of-sample evaluation for trading strategy research.",
      "Parallelized data pipelines with Python multiprocessing to accelerate market-data processing.",
    ],
    achievements: [
      "Reduced daily market-data processing time from 2 hours to under 15 minutes.",
      "Created a repeatable quantitative research workflow for evaluating factor-based trading signals.",
    ],
    skills: ["Python", "Quantitative Trading", "Machine Learning", "Git"],
  },
];
