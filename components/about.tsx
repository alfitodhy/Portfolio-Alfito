"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p>
        Hello, I’m Alfito Dhiyu Priawan! I am dedicated to continuously
        enhancing my knowledge and skills in{" "}
        <span className="font-medium">FullStack Web Development </span> while
        staying up-to-date with the latest technologies. With expertise in
        building web applications, I always strive for perfection. Beyond
        coding, I have a strong passion for graphic design, where I enjoy
        blending creativity with technology to create engaging and user-friendly
        digital experiences.
      </p>
    </motion.section>
  );
}
