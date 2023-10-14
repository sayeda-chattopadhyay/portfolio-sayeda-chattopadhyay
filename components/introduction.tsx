"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../public/sayedaPicture.jpeg";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Introduction = () => {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.1 }}
          >
            <Image
              src={ProfileImage}
              alt="profile Image"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-2xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <span className="font-bold">Greetings ! </span>I am{" "}
        <span className="text-xl text-[#8e3b99] dark:text-white/90">
          Sayeda Chattopadhyay
        </span>
        , a Front-End Developer and UX Designer. Delighted to welcome you to my
        portfolio. I specialize in creating seamless user experiences that
        breathe life into websites. Explore my portfolio to witness the fusion
        of design and functionality.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="mailto:sayeda.b@gmail.com"
          className="group bg-gray-900 text-white px-6 py-2 flex items-center justify-center gap-2 
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/sayedaChattopadhyay.pdf"
          download
          className="group bg-white px-6 py-2 rounded-full flex items-center justify-center gap-2 outline-none focus:scale-110 hover:scale-110  transition border border-black/10 dark:bg-white/10"
        >
          Download Cv
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/sayedac/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950  active:-scale-[1.15] transition border border-black/10 dark:bg-white/70"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/sayeda-chattopadhyay"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:-scale-105 transition border border-black/10 dark:bg-white/70"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Introduction;
