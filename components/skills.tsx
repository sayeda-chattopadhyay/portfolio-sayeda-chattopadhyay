"use client";

import { useState } from "react";
import SectionHeading from "@/components/section-heading";
import {
  skillsTabData,
  experienceTabData,
  educationTabData,
} from "@/lib/data";
import { motion } from "framer-motion";

const tabs = ["Skills", "Experience", "Education"] as const;
type Tab = (typeof tabs)[number];

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
  const [activeTab, setActiveTab] = useState<Tab>("Skills");

  return (
    <section
      className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      id="skills"
    >
      <SectionHeading>Skills & Experience</SectionHeading>

      {/* Tab bar */}
      <div className="flex justify-center gap-6 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-lg font-medium transition-colors ${
              activeTab === tab
                ? "text-[#803363]"
                : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#803363] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === "Skills" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {skillsTabData.map((card, cardIndex) => (
            <motion.div
              key={card.title}
              className="bg-white border border-black/[0.1] rounded-xl p-6 dark:bg-white/10 dark:border-white/10"
              variants={animationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={cardIndex}
            >
              <h3 className="text-lg font-semibold mb-3 dark:text-white/90">
                {card.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full dark:bg-white/10 dark:text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === "Experience" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {experienceTabData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white border border-black/[0.1] rounded-xl p-6 dark:bg-white/10 dark:border-white/10"
              variants={animationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <h3 className="text-lg font-semibold dark:text-white/90">
                {item.title}
              </h3>
              <p className="text-sm text-[#803363] font-medium mt-1">
                {item.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.date}
              </p>
              <p className="text-gray-700 dark:text-white/70 mt-3 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === "Education" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {educationTabData.map((item, index) => (
            <motion.div
              key={item.degree}
              className="bg-white border border-black/[0.1] rounded-xl p-6 dark:bg-white/10 dark:border-white/10"
              variants={animationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <h3 className="text-lg font-semibold dark:text-white/90">
                {item.degree}
              </h3>
              <p className="text-sm text-[#803363] font-medium mt-1">
                {item.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.date}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
