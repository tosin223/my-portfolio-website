"use client";
import { projectsData } from "@/lib/data";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="group mb-4 sm:mb-8 last:mb-0"
    >
      <section className="rounded-lg bg-gray-100 hover:bg-gray-200 transition max-w-[50rem] border border-black/5 sm:pr-8 relative  overflow-hidden  sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className=" pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:group-even:ml-[22rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap items-start mt-6 gap-2">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full cursor-pointer dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          alt="My Project"
          src={imageUrl}
          quality={95}
          className="absolute bottom-0 -right-40 w-[33rem] cursor-pointer rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:-translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:-rotate-2 hidden sm:block"
        />
      </section>
    </motion.div>
  );
}
