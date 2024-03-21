"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skillsData.map((skill, i) => (
          <motion.div
            key={i}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i}
            className="flex p-6 dark:bg-white/10 justify-between  items-center border border-black/[0.1] rounded-xl bg-white dark:text-white/80"
          >
            <div className="mr-2">{skill.title}</div>
            <div>
              {
                <Image
                  src={skill.imageSkill}
                  alt="Skill image"
                  className="w-10 h-10 m-auto"
                />
              }
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
