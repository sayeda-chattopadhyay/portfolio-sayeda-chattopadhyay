"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  about,
  description,
  tags,
  imageUrl,
  gitHubUrl,
  liveUrl,
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Split the description into two paragraphs
  const paragraphs = description.split("\n\n");

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0 "
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <section className="sm:px-10 sm:pt-10 bg-gray-100 max-w-[60rem] rounded-t-lg overflow-hidden sm:pr-8  sm:h-[22rem] hover:bg-gray-200 transition flex flex-col-reverse  sm:flex-row sm:items-center sm:justify-center gap-4 dark:text-white dark:bg-gray-800 dark:hover:bg-white/20">
          {/* text */}
          <div className="pt-4 pb-7 px-4  sm:max-w-[50%] flex flex-col h-full ">
            <h3 className="text-2xl font-semibold dark:text-white/80">
              {title}
            </h3>
            <hr className="h-1 w-14 mt-2 rounded-full bg-black/70 dark:bg-white/80" />

            <p className="my-4 text-md sm:text-lg leading-relaxed sm:mb-4 dark:text-white/70 ">
              {about}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto max-w-full ">
              {tags.map((tag, index) => (
                <li
                  className="px-2 py-1 text-[0.7rem] uppercase tracking-wider bg-black/90 text-white border-gray/50 rounded-lg dark:border-white dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          {/* image */}
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  sm:max-w-[50%] flex flex-col h-full ">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="rounded-lg shadow-xl transition sm:group-hover:scale-[1.04] sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2"
            />
          </div>
        </section>
        {isModalOpen && (
          <motion.div
            className="pt-4 pb-7 px-5 sm:px-10 sm:pt-10 max-w-[60rem] bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-white/20 rounded-b-lg mb-24"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.h3
              className="text-2xl my-4 px-4 dark:text-white/80"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Description
            </motion.h3>
            {/* Display two paragraphs for the description */}
            {paragraphs.map((paragraph, index) => (
              <>
                <motion.p
                  key={index}
                  className="mb-8 px-4 text-md sm:text-lg leading-relaxed dark:text-white/70"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  {paragraph}
                </motion.p>
              </>
            ))}

            <div className="flex gap-4 px-4 mb-4">
              <motion.a
                href={gitHubUrl}
                className="px-3 py-2 bg-black/90 text-white border-gray/50 rounded-lg dark:border-white dark:text-white/70"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                Github Repo
              </motion.a>
              <motion.a
                href={liveUrl}
                className="px-3 py-2 bg-black/90 text-white border-gray/50 rounded-lg dark:border-white dark:text-white/70"
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 50, opacity: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Live Demo
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
