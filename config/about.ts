export type AboutCard = {
  title: string;
  description: string;
  image?: string;
  video?: string;
  imageAlt: string;
  icon: "robot" | "reef" | "travel";
};

export const aboutCards: AboutCard[] = [
  {
    title: "Gundam Building",
    description:
      "Building Gundam models is one of my favorite hands-on hobbies. I enjoy the focus, precision, and patience it takes to turn small pieces into a finished build.",
    image: "/about/gundam-building.png",
    imageAlt:
      "A warm hobby desk with a robot model kit, tools, plastic runners, and a desk lamp.",
    icon: "robot",
  },
  {
    title: "Travel",
    description:
      "Travel helps me step outside of my routine and see familiar things from a new perspective. I enjoy noticing small differences in places, people, and everyday life.",
    video: "/about/IMG_6588.mp4",
    imageAlt: "A personal travel video from IMG_6588.",
    icon: "travel",
  },
    {
    title: "Reef Tank Keeping",
    description:
      "Keeping a reef tank has taught me to observe carefully and stay consistent. It is a long-term project where small details matter, and I enjoy learning from the system over time.",
    image: "/about/reef-tank-keeping.png",
    imageAlt:
      "A small reef tank with colorful coral and fish in a cozy home setting.",
    icon: "reef",
  },
];
