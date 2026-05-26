import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description:
      "Build automation, ETL workflows, calculation engines, and data pipelines.",
    rating: 5,
    icon: Icons.pythonSkill,
  },
  {
    name: "SQL",
    description:
      "Write optimized queries with CTEs, window functions, and reporting logic.",
    rating: 5,
    icon: Icons.sqlSkill,
  },
  {
    name: "Django",
    description:
      "Create internal web tools that connect review pages with backend workflows.",
    rating: 4,
    icon: Icons.djangoSkill,
  },
  {
    name: "R",
    description:
      "Develop reproducible analytics and QA pipelines for scientific datasets.",
    rating: 4,
    icon: Icons.rSkill,
  },
  {
    name: "pandas",
    description:
      "Clean, join, validate, and transform operational and financial datasets.",
    rating: 4,
    icon: Icons.pandasSkill,
  },
  {
    name: "pytest",
    description:
      "Protect calculation systems with unit, regression, and validation tests.",
    rating: 4,
    icon: Icons.pytestSkill,
  },
  {
    name: "Tableau",
    description:
      "Power dashboards for operational monitoring and performance tracking.",
    rating: 4,
    icon: Icons.tableauSkill,
  },
  {
    name: "React",
    description:
      "Build interactive user interfaces and connect frontend flows to backend data.",
    rating: 3,
    icon: Icons.react,
  },
  {
    name: "JavaScript",
    description:
      "Create browser-based interactions and support full-stack application work.",
    rating: 3,
    icon: Icons.javascript,
  },
  {
    name: "Git/GitHub",
    description:
      "Manage codebases, collaborate through version control, and track changes.",
    rating: 4,
    icon: Icons.gitHub,
  },
  {
    name: "Excel",
    description:
      "Model, validate, and replace manual spreadsheet workflows with automation.",
    rating: 4,
    icon: Icons.excelSkill,
  },
  {
    name: "Linux",
    description:
      "Work with shell environments, file workflows, and data-processing systems.",
    rating: 3,
    icon: Icons.linuxSkill,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
