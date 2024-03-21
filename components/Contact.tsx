"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-=28 w-[min(100%, 38rem)] text-center scroll-mt-28"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please Contact me directly at{" "}
        <a
          href="mailto:akinsemoyintosin1@gmail.com
        "
          className="underline"
        >
          akinsemoyintosin1@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
        className="mt-10 flex flex-col dark:text-black/80"
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          required
          name="message"
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Message"
        />
        {/* <button
          type="submit"
          className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem] text-white bg-gray-900 rounded-full outline-none transition-all  focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all" />
        </button> */}
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
