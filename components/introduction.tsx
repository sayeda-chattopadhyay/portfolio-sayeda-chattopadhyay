"use client";

import Image from "next/image";
import ProfileImage from "../public/sayedaPicture.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Introduction = () => {
  return (
    <section className="max-w-4xl text-center mx-auto px-4">
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
              delay: 0.1,
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
        <span className="font-bold">Hi,</span> I am a Front-End Developer,
        dedicated to transforming creative designs into captivating and
        responsive digital interfaces. I craft seamless user experiences to
        bring websites to life.
      </motion.h1>
      <motion.div
        className=" flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-6 py-2 flex items-center justify-center gap-2 
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/CV.pdf download"
          className=" group bg-white px-6 py-2 rounded-full flex items-center justify-center gap-2 outline-none focus:scale-110 hover:scale-110 active:-scale-105 transition border border-black/10"
        >
          Download Cv
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950  active:-scale-[1.15] transition border border-black/10"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:-scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Introduction;
