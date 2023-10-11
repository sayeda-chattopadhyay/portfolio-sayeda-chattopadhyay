"use client";

import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounden-full hidden sm:block dark:bg-opacity-30"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

export default SectionDivider;
