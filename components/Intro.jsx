"use client";
import Image from "next/image";
import React from "react";
import profileImg from "@/public/linkedin-profile22.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profileImg}
              alt="Tosin image"
              priority={true}
              quality="100"
              className="rounded-full h-[15rem] w-[15rem] object-cover shadow-xl  border-[#fde9ea] border-[0.35rem] "
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.2,
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-3xl absolute bottom-5 right-6"
          >
            👋🏽
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Tosin.</span> I'm a{" "}
        <span className="font-bold">Front-end developer</span>. I enjoy building{" "}
        <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-xl "
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition bg-gray-900 text-white px-7 py-3 flex gap-2 items-center rounded-full"
        >
          Contact Me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group outline-none bg-white px-7 py-3 flex gap-2 items-center rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10"
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/tosin-akinsemoyin"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex gap-2 items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/tosin223"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex gap-2 items-center rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
