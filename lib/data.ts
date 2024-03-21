import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CryptoWebsiteImg from "@/public/Crypto-website.png";
import DataWebsite from "@/public/Data-web site.png";
import NetflixImg from "@/public/NeflixClone-landing.png";
import modernWebsite from "@/public/modern-website.png";
import cssImg from "@/public/skills/css.png";
import githubImg from "@/public/skills/github1.png";
import htmlImg from "@/public/skills/html.png";
import javascriptImg from "@/public/skills/javascript.png";
import nextImg from "@/public/skills/nextjs.png";
import reactImg from "@/public/skills/react.png";
import tailwingImg from "@/public/skills/tailwind.png";

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
    title: "Crypto Currency Wesite",
    description:
      "I built a dynamic Cryptocurrency website utilizing modern web development technologies, including React Hooks, Context API, React Router Dom, useParams, and Tailwind CSS.",
    tags: ["React", "Firebase", "Tailwind"],
    imageUrl: CryptoWebsiteImg,
  },
  {
    title: "Data website",
    description: `Developed a data centric website using React JS and Tailwind CSS, ensuring 100% mobile responsive from scratch Implemented engaging text animations in the Hero component utilizing the "React-Typed" package.`,
    tags: ["React", "Tailwind"],
    imageUrl: DataWebsite,
  },
  {
    title: "Netflix Clone Landing page",
    description: `Developed a responsive and visually appealing clone of the Netflix landing page using HTML and CSS.  Ensured a mobile-friendly design for a seamless user experience on mobile devices. `,
    tags: ["Html", "CSS"],
    imageUrl: NetflixImg,
  },
  {
    title: "Fintech Website",
    description: `I created a modern Fintech Responsive landing page with React JS, featuring a captivating hero section, high-quality assets, dynamic gradients, business statistics, and impactful testimonials.`,
    tags: ["React", "Tailwind"],
    imageUrl: modernWebsite,
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    imageSkill: htmlImg,
  },
  {
    title: "CSS",
    imageSkill: cssImg,
  },
  {
    title: "JavaScript",
    imageSkill: javascriptImg,
  },
  {
    title: "React",
    imageSkill: reactImg,
  },
  {
    title: "Next.js",
    imageSkill: nextImg,
  },
  {
    title: "Git",
    imageSkill: githubImg,
  },
  {
    title: "Tailwind",
    imageSkill: tailwingImg,
  },
] as const;
