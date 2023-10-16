"use client";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const About = () => {
  return (
    <motion.section
      id="about"
      className="my-28 max-w-[45rem] mx-auto sm:mb-40 scroll-mt-28 px-4 py-2"
    >
      <SectionHeading> About me</SectionHeading>
      <div className="mb-3">
        <motion.p
          className="leading-tight text-lg sm:text-xl  mb-8 text-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          I am a passionate Front-end developer and UX designer with a deep
          affection for creating user-friendly and responsive designs. My
          journey in web design and development has equipped me with a robust
          skill set, and I am eager to further immerse myself in this dynamic
          field.I thrive on challenges and am drawn to solving critical
          problems. Each project is an opportunity for me to apply my skills and
          creativity to deliver solutions that not only meet but exceed
          expectations. As I continue to grow in this ever-evolving landscape, I
          look forward to contributing my expertise to projects that demand
          innovation and excellence
        </motion.p>
        <motion.div
          className="max-w-[40%] mx-auto group"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href="/sayedaChattopadhyay.pdf"
            download
            className="border-2 border-[#803363]/80 px-4 py-2 text-[#803363] font-bold rounded-lg flex items-center justify-center gap-2 outline-none focus:scale-110 hover:scale-110 group-hover:bg-[#803363] group-hover:text-white transition dark:text-white/80 dark:border-white/60  dark:group-hover:bg-white dark:group-hover:text-[#803363] "
          >
            Download CV
            <HiDownload className="opacity-80 text-[#803363]font-bold  group-hover:translate-y-1 transition group-hover:text-white dark:group-hover:text-[#803363] " />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
