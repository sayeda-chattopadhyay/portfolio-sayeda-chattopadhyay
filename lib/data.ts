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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "la-boutique",
    about:
      "This e-commerce website delivers a user-friendly experience, allowing seamless product exploration, search, and purchase.",
    description:
      "As part of a Noroff assignment, I created la-Boutique, an intuitive, functional, and responsive eCommerce website using React. Users can effortlessly add items to their cart and enjoy flexibility with options to add or remove selected products. The site is styled with Bootstrap and styled components, ensuring a seamless user experience. To enhance data validation, I incorporated a validated contact form utilizing Yup and react-hook-form. This project marked my initiation into React application development, and its implementation presented a valuable learning experience.",
    tags: ["JavaScript", "React", "Bootstrap", "styled-components", "Yup"],
    imageUrl: eCommerceWebsite,
    gitHubUrl: "https://github.com/sayeda-chattopadhyay/la-boutique",
    liveUrl: "https://la-boutique.netlify.app",
  },
  {
    title: "Holidaze",
    about:
      "This dual-purpose vacation website allows users to lease their own venues as well as reserve accommodations for their holidays.",
    description:
      "Holidaze, my final project for Noroff's front-end development course, introduces a new front-end application for an accommodation booking site. It features a user-friendly interface for booking holidays and an admin panel for venue registration and booking management. The project embraces modern front-end workflows, utilizing Gantt charts, Kanban boards, and mid-fidelity prototypes in Figma. Crafted with React.js and styled with Tailwind CSS, the website boasts a seamless user experience. Formik handles state management and form validation, while the integration of React Date Picker adds a sophisticated calendar feature. This comprehensive endeavor reflects not just technical proficiency but also a genuine enjoyment of the creative process, marking a milestone in my front-end development journey.",
    tags: ["javascript", "React", "Taiwind", "Formik"],
    imageUrl: hotelWebsite,
    gitHubUrl: "https://github.com/sayeda-chattopadhyay/holidaze",
    liveUrl: "https://ornate-flan-63ec17.netlify.app/",
  },
  {
    title: "BidAbhi",
    about:
      "This is an Auction website where users can add items for auction and bid on items other users have put up for auction.",
    description:
      "For my inaugural year-end exam project, I developed an auction website that allows users to both list items for bidding and bid on items posted by fellow users. The platform offers a starting balance of 1000 credits to new users, which can be utilized for both selling and purchasing items within the auction environment. While non-registered users can peruse the listings, only those registered have the privilege of placing bids. ",
    tags: ["Html", "Css", "javascript", "Sass", "Bootstrap"],
    imageUrl: auctionWebsite,
    gitHubUrl:
      "https://github.com/sayeda-chattopadhyay/semester-project-auction",
    liveUrl: "https://poetic-faloodeh-2fc2da.netlify.app/",
  },
] as const;

export const skillsFrontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "Styled-components",
  "Framer Motion",
  "Restful API",
  "Debugging & Testing",
  "Version Control",
] as const;

export const skillsUx = [
  "Design Thinking",
  "User research",
  "Information Architecture",
  "Interaction Design",
  "Visual design",
  "Accessibility",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Figma",
  "Adobe-xd",
] as const;

export const skillsSoft = [
  "Communication & Collaboration",
  "Adaptability",
  "Creativity and Design Thinking",
  "Time Management",
  "Problem-Solving Abilities",
  "Critical Thinking",
  "Resilience",
] as const;
