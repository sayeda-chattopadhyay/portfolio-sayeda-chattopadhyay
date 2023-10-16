"use client";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="my-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading> About me</SectionHeading>
      <div className="mb-3">
        <p className="text-md sm:text-lg">
          I am a passionate Front-end developer and UX designer with a deep
          affection for creating user-friendly and responsive designs. My
          journey in web design and development has equipped me with a robust
          skill set, and I am eager to further immerse myself in this dynamic
          field.
        </p>
        <br />
        <p className="text-md sm:text-lg">
          Ambitious and dedicated to continuous learning, I approach my work as
          a lifelong learner, always excited to explore new tools and tricks
          that enhance my craft. Through my experiences, I have successfully
          developed numerous websites and crafted engaging designs for mobile
          apps.
        </p>
        <br />
        <p className="text-md sm:text-lg">
          I thrive on challenges and am drawn to solving critical problems. Each
          project is an opportunity for me to apply my skills and creativity to
          deliver solutions that not only meet but exceed expectations. As I
          continue to grow in this ever-evolving landscape, I look forward to
          contributing my expertise to projects that demand innovation and
          excellence.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
