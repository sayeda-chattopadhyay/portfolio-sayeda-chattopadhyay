import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import blogWebsite from "@/public/blog.jpg";
import eCommerceWebsite from "@/public/eCommerce.jpg";
import hotelWebsite from "@/public/holidaze.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Blog website",
    description: "lorem picsum",
    tags: ["Html", "Css", "javascript"],
    imageUrl: blogWebsite,
  },
  {
    title: "E-commerce website",
    description: "lorem picsum",
    tags: ["Html", "Css", "javascript"],
    imageUrl: eCommerceWebsite,
  },
  {
    title: "Venue Booking Website",
    description: "lorem picsum",
    tags: ["Html", "Css", "javascript", "React", "Taiwind"],
    imageUrl: hotelWebsite,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
] as const;
