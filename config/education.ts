export interface EducationInterface {
  id: string;
  program: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export const education: EducationInterface[] = [
  {
    id: "university-of-waterloo",
    program:
      "Double Major in Mathematical Finance and Statistics, Computing Science Minor",
    institution: "University of Waterloo",
    location: "Waterloo, Canada",
    period: "Expected Dec 2026",
    description:
      "Studying mathematical finance, statistics, and computing science with coursework spanning software engineering, machine learning, databases, and data-intensive analytics.",
    highlights: [
      "President's Scholarship",
      "Algorithms & Data Structures",
      "Machine Learning",
      "Database Systems",
      "Applications Software Engineering",
      "Data-Intensive Distributed Analytics",
      "Computational Mathematics",
    ],
  },
  {
    id: "harvardx-cs50p",
    program: "CS50P: Programming with Python",
    institution: "HarvardX",
    location: "Online",
    period: "Completed",
    description:
      "Completed HarvardX's Python programming course with a 100% grade, strengthening practical Python fundamentals for automation and software development.",
    highlights: ["Python", "Programming Fundamentals", "100% Grade"],
  },
];
