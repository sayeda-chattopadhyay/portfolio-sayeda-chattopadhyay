"use client";
import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
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
      <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className=" bg-white border border-black/[0.3] px-2 py-2 rounded-lg dark:bg-white/70 dark:text-black/70"
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
    </section>
  );
};

export default Skills;
