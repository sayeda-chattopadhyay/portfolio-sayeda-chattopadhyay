"use client";
import SectionHeading from "@/components/section-heading";
import { skillsFrontend } from "@/lib/data";
import { skillsUx } from "@/lib/data";
import { skillsSoft } from "@/lib/data";
import { motion } from "framer-motion";

const animationVariants = {
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

const Skills = () => {
  return (
    <section
      className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      id="skills"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="flex justify-between gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold dark:text-white/80 mb-4">
            Ux Design
          </h3>
          <ul className="text-md text-gray-800">
            {skillsUx.map((skill, index) => (
              <motion.li
                key={index}
                className="mb-2 bg-white border border-black/[0.3] px-4 py-2 rounded-lg dark:bg-white/70 dark:text-black/70"
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold dark:text-white/80 mb-4">
            Frontend Development
          </h3>
          <ul className="text-md text-gray-800">
            {skillsFrontend.map((skill, index) => (
              <motion.li
                key={index}
                className="mb-2 bg-white border border-black/[0.3] px-4 py-2 rounded-lg dark:bg-white/70 dark:text-black/70"
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-2xl font-semibold dark:text-white/80">
            Soft skills
          </h3>
          <ul className="text-md text-gray-800">
            {skillsSoft.map((skill, index) => (
              <motion.li
                key={index}
                className=" bg-white border border-black/[0.3] px-4 py-2 rounded-lg mb-2 dark:bg-white/70 dark:text-black/70"
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
