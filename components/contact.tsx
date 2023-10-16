import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import SectionHeading from "./section-heading";

const Contact = () => {
  return (
    <section
      className="shadow-md bg-gray-100 py-8 max-w-8xl w-full text-center mb-40 scroll-mt-28 dark:text-white dark:bg-gray-800"
      id="contact"
    >
      <SectionHeading>Contact me</SectionHeading>
      <div className="py-4 max-w-[80%] mx-auto">
        <div className="w-full flex flex-col gap-4 items-center justify-between sm:mx-auto">
          <p className="w-full sm:max-w-[60%] mx-auto text-md sm:text-lg leading-relaxed mb-4 dark:text-white/70">
            I am looking forward to working on projects that need fresh ideas
            and high quality work. Let us make some amazing things together!
          </p>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex flex-row gap-4">
              <Link
                href="mailto:sayeda.b@gmail.com"
                className="p-4 text-gray-700  flex items-center gap-2 text-[1.5rem]  rounded-lg outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950  active:-scale-[1.15] transition border border-black/10 dark:bg-white/70"
              >
                <MdEmail />
              </Link>
              <a
                href="https://www.linkedin.com/in/sayedac/"
                target="_blank"
                className="p-4 text-gray-700 flex items-center gap-2 text-[1.4rem] rounded-lg outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950  active:-scale-[1.15] transition border border-black/10 dark:bg-white/70"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/sayeda-chattopadhyay"
                target="_blank"
                className="p-4 text-gray-700 flex items-center gap-2 text-[1.5rem] rounded-lg outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:-scale-105 transition border border-black/10 dark:bg-white/70"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
