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
        <section className=" bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8  sm:h-[18rem] hover:bg-gray-200 transition flex flex-col-reverse sm:flex-row sm:items-center sm:justify-center gap-4">
          {/* text */}
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  sm:max-w-[50%] flex flex-col h-full border border-blue-400">
            <h3 className="text-2xl font-semibold dark:text-gray-700">
              {title}
            </h3>
            <p className="mt-2 leading-relaxed text-gray-700 sm:mb-4 ">
              {about}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto max-w-full ">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          {/* image */}
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  sm:max-w-[50%] flex flex-col h-full border border-blue-400">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="rounded-t-lg shadow-xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
            />
          </div>
        </section>
        {isModalOpen && (
          <motion.div
            className=" max-w-[42rem] shadow-sm border border-gray-100"
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.h3
              className="text-2xl mb-4 px-4"
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Description
            </motion.h3>
            <motion.p
              className="mb-4 px-4"
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {description}
            </motion.p>
            <hr />
            <div className="flex gap-4 px-4">
              <a
                href={gitHubUrl}
                className="px-3 py-2 border border-gray/50 text-gray-950 rounded-lg dark:text-white/70"
              >
                Github Repo
              </a>
              <a
                href={liveUrl}
                className="px-3 py-2 border border-gray/50 text-gray-950 rounded-lg dark:text-white/70"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}

// remove from Image classname="w-full h-full object-cover"
