import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import blogWebsite from "@/public/blog.jpg";
import eCommerceWebsite from "@/public/eCommerce.jpg";
import hotelWebsite from "@/public/holidaze.jpg";
import auctionWebsite from "@/public/auction.jpg";

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
    title: "My Baking Desire",
    about: "Blog website",
    description: "Blog website",
    tags: ["Html", "Css", "javascript"],
    imageUrl: blogWebsite,
    gitHubUrl:
      "https://github.com/Noroff-FEU-Assignments/project-exam-1-sayeda-chattopadhyay.git",
    liveUrl: "https://poetic-dusk-59ba87.netlify.app",
  },

  {
    title: "la-boutique",
    description: "lorem picsum",
    tags: ["Html", "Css", "javascript", "React", "Bootstrap"],
    imageUrl: eCommerceWebsite,
    gitHubUrl: "https://github.com/sayeda-chattopadhyay/la-boutique",
    liveUrl: "https://clinquant-haupia-8edecd.netlify.app/",
  },
  {
    title: "Holidaze",
    description: "lorem picsum",
    tags: ["Html", "Css", "javascript", "React", "Taiwind"],
    imageUrl: hotelWebsite,
    gitHubUrl: "https://github.com/sayeda-chattopadhyay/holidaze",
    liveUrl: "https://ornate-flan-63ec17.netlify.app/",
  },
  {
    title: "BidAbhi",
    description: "Auction Website",
    tags: ["Html", "Css", "javascript", "Sass", "Bootstrap"],
    imageUrl: auctionWebsite,
    gitHubUrl:
      "https://github.com/sayeda-chattopadhyay/semester-project-auction",
    liveUrl: "https://poetic-faloodeh-2fc2da.netlify.app/",
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
