import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import modernWebsite from "@/public/modern-website.png";
import cssImg from "@/public/skills/css.png";
import githubImg from "@/public/skills/github1.png";
import htmlImg from "@/public/skills/html.png";
import javascriptImg from "@/public/skills/javascript.png";
import nextImg from "@/public/skills/nextjs.png";
import reactImg from "@/public/skills/react.png";
import tailwingImg from "@/public/skills/tailwind.png";
import ecommerWebsite from "@/public/ecommerce-website.png";
import calculatorTwo from "@/public/calculatorTwo.png";
import weatherApp from "@/public/weatherApp.png";
import sushiWebsite from "@/public/sushi-website.png"

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
    title: "Ecommerce Website",
    description:
      "I built a dynamic Ecommerce website utilizing modern web development technologies, including React Hooks, Context API, React Router Dom, useParams, and Tailwind CSS.",
    tags: ["React", "Toastifyg", "Tailwind"],
    imageUrl: ecommerWebsite,
  },

  {
    title: "Calculator App",
    description: `Built a simple functional calculator using HTML, CSS, and JavaScript. Implemented basic arithmetic operations like addition, subtraction, multiplication, and division. Used JavaScript DOM manipulation to handle user inputs and display results dynamically.`,
    tags: ["HTML", "CSS", "JavaScrit"],
    imageUrl: calculatorTwo,
  },
  {
    title: "Weather App",
    description: `Developed a responsive weather application using HTML, CSS, JavaScript, 
  Integrated the OpenWeather API to fetch and display real-time weather information.
  Implemented dynamic UI updates based on user input and weather data.
  Improved proficiency in API integration and handling asynchronous JavaScript operations `,
    tags: ["Html", "CSS", "JavaScript", "OpenWeather API"],
    imageUrl: weatherApp,
  },
  {
    title: "Fintech Website",
    description: `I created a modern Static Responsive landing page with React JS, featuring a captivating hero section, high-quality assets, dynamic gradients, business statistics, and impactful testimonials.`,
    tags: ["React", "Tailwind"],
    imageUrl: modernWebsite,
  },
  {
    title: "Sushi Website ",
    description: `Designed and developed a visually appealing fully responsive , static sushi-themed website using HTML and CSS, leveraging Vite for fast builds and optimized performance. Incorporated AOS (Animate On Scroll) library for smooth scroll animations, enhancing user experience`,
    tags: ["HTML", "CSS", "VITE"],
    imageUrl: sushiWebsite,
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
