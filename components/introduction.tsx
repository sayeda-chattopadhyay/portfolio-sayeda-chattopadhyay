"use client";

import Image from "next/image";
import ProfileImage from "../public/sayedaPicture.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Introduction = () => {
  return (
    <motion.section
      id="home"
      className="mb-28 sm:mb-0 scroll-mt-[100rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 3.5 }}
    >
      <div className="px-8 py-4 shadow-sm w-full max-w-[100rem] flex flex-col  gap-14 mt-10 items-center sm:flex-row sm:justify-between sm:gap-40 sm:mt-20">
        {/* text */}
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <div>
            <h3 className="text-xl font-bold mb-2">
              <span>Hi</span> ! I am{" "}
              <span className="text-xl sm:text-3xl text-[#803363] dark:text-[#F9F1F5]">
                Sayeda
              </span>
            </h3>
            <h1 className="text-2xl sm:text-5xl font-semibold mb-4 text-gray-750">
              UX designer & Frontend Developer
            </h1>
            <p className="text-md sm:text-lg">
              A lifelong learner in love with everything fancy.
            </p>
            <p className="text-md sm:text-lg">
              Delighted to welcome you to my portfolio.
            </p>
          </div>

          <motion.div
            className="px-4 py-2 sm:px-5 sm:py-3 mt-8  bg-[#803363] text-white rounded-lg dark:border-[#803363] dark:bg-white/80 dark:text-gray-900"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            <motion.a href="#projects" className="uppercase">
              See my works
            </motion.a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 2.0 }}
        >
          <Image
            src={ProfileImage}
            alt="profile Image"
            quality="95"
            priority={true}
            className="rounded-lg object-cover "
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Introduction;
