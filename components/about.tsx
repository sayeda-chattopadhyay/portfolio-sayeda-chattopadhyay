"use client";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading> About me</SectionHeading>
      <p className="mb-3">
        I am passionate UX designer and front end developer in love with user
        friendly and responsive designs. I also design logos and illustrations.
        I am ambitious and a lifelong learner always looking forward to learning
        new tools and tricks. I have developed several websites and designed
        mobile apps.
      </p>
    </motion.section>
  );
};

export default About;
