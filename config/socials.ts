import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@erin-zhang1",
    icon: Icons.gitHub,
    link: "https://github.com/erin-zhang1",
  },
  {
    name: "LinkedIn",
    username: "Erin Zhang",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/erin-zhang-823217252",
  },
  {
    name: "Gmail",
    username: "y3695zha",
    icon: Icons.gmail,
    link: "mailto:y3695zha@uwaterloo.ca",
  },
];
