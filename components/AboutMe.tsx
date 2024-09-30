"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function AbouMe() {
  const { ref } = useSectionInView("About");

  // const { ref, inView } = useInView({
  //   threshold: 0.75,
  // });
  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 100) {
  //     setActiveSection("About");
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>
      <p>
        I graduated from the University of Lagos with a degree in{" "}
        <span className="font-medium">Insurance </span> and am now a dedicated
        <span className="font-medium">Frontend Developer</span> . I am currenty
        a <span className="font-medium">frontend web developer</span> intern at
        Zulfah Academy, where I actively participate in hands-on projects,
        coding exercises, and collaborative activities using{" "}
        <span className="font-medium">HTML</span>,{" "}
        <span className="font-medium">CSS,</span>{" "}
        <span className="font-medium">JavaScript,</span> and{" "}
        <span className="font-medium">React</span> to further enhance my
        practical skills and understanding of frontend development. I specialize
        in building modern, responsive web applications using technologies like
        <span className="font-medium">React JS</span> ,{" "}
        <span className="font-medium">Next.js</span> , and{" "}
        <span className="font-medium">Tailwind CSS</span> , with projects
        ranging from an e-commerce app featuring product filtering and cart
        functionality to a weather app displaying real-time data and more. I am
        passionate about solving problems through clean, efficient code and
        design, and I’m always open to new opportunities to collaborate and
        create impactful solutions
      </p>
      <p>
        <span className="italic">Beyond Coding coding</span>, I have diverse
        interests in sports, design, cooking, nature, and landscape photography.
        I also enjoy <span className="font-medium">learning new things</span>. I
        am currently learning about{" "}
        <span className="font-medium">UI design </span>. I thrive in
        environments that foster creativity and continuous learning.
      </p>
    </motion.section>
  );
}

/*
I graduated from the University of Lagos, Nigeria, with a degree in insurance. My passion for programming led me to complete a rigorous six-month Front-End Web Development program at Zulfah Academy. This experience taught me proficiency in HTML, CSS, JavaScript, and React. I am deeply motivated by problem-solving and enjoy providing innovative solutions to challenges individuals and businesses face.
With a core stack in React and Next.js, supplemented by familiarity with TypeScript, I seek a full-time position as a junior software developer. I am eager to apply my skills and continue my growth in the field.
Beyond coding, I have diverse interests in sports, design, cooking, nature, and landscape photography. I thrive in environments that foster creativity and continuous learning.

*/
/*
<p className="mb-3">
        I graduated from the University of Lagos, Nigeria, with a degree{" "}
        <span className="font-medium">Insurance</span>, My passion for
        programming led me to complete a rigorous six-month{" "}
        <span className="font-medium">Front-End Web Development</span> program
        at Zulfah Academy. <span className="font-medium"></span> This experience
        taught me proficiency in <span className="font-medium">HTML</span>,{" "}
        <span className="font-medium">CSS,</span>{" "}
        <span className="font-medium">JavaScript,</span> and{" "}
        <span className="font-medium">React</span>.
        <span className="italic">
          I am deeply motivated by problem-solving and would love to help
          provide innovative solutions to challenges faced by individuals and
          businesses.
        </span>{" "}
        My core stack is <span className="font-medium">React, Next.js.</span>. I
        am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a junior
        front-end developer.
      </p>

*/
