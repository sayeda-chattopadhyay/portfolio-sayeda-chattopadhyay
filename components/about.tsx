"use client";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";

const About = () => {
  return (
    <motion.section
      id="about"
      className="mb-20 max-w-[52rem] mx-auto sm:mt-20 sm:mb-40 scroll-mt-28 px-4 py-2"
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
          field. <br /> <br />
          {/* I really enjoy tackling challenges and solving tricky problems. Every
          project is like a puzzle for me, a chance to use my skills and
          creativity to make something even better than what people expect. I am
          always excited to dive into new projects and bring my best to the
          table. <br /> <br />
          The world of web design is always changing, and I love that! I want to
          keep growing and learning so I can be even better at what I do. */}
        </motion.p>
        <div className="flex justify-between mb-8">
          <div>
            <h3 className="text-2xl font-semibold dark:text-white/80 mb-4">
              My Education
            </h3>
            <ul>
              <li className="text-lg">Bachelor in science</li>
              <li className="text-lg">UX Design</li>
              <li className="text-lg">Front-end development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold dark:text-white/80 mb-4">
              My Interests
            </h3>
            <ul>
              <li className="text-lg">Coding</li>
              <li className="text-lg">Design</li>
              <li className="text-lg">Art & Craft</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold dark:text-white/80 mb-4">
              My Hobbies
            </h3>
            <ul>
              <li className="text-lg">Painting</li>
              <li className="text-lg">Baking</li>
              <li className="text-lg">Reading</li>
            </ul>
          </div>
        </div>
        <motion.div
          className="max-w-[80%] sm:max-w-[40%] mx-auto group"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href="/sayeda_cv.pdf"
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
