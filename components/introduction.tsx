"use client";

import Image from "next/image";
import ProfileImage from "../public/sayedaPicture.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <motion.p
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
      </motion.p>
      <div className="bg-gray-900 text-white px-2 py-2 rounded-full ">
        <Link href="#contact">Contact Me</Link>
      </div>
      <div className="bg-white px-2 py-2 rounded-full">
        <a href="" className="">
          Download Cv
        </a>
      </div>
    </section>
  );
};

export default Introduction;
