"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  gitHubUrl,
  liveUrl,
}: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
      onClick={() => setIsOpen(!isOpen)}
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:flex dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
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

        <div className="sm:w-[50%]">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="w-full sm:h-full object-cover rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
          />
        </div>
      </section>
      {isOpen && (
        <motion.div
          className=" w-100 h-100 p-3 border border-black/10 
           initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
            {description}
          </p>
          <a href={liveUrl}>Live</a>
          <a href={gitHubUrl}>Github</a>
        </motion.div>
      )}
    </motion.div>
  );
}

// "use client";

// import { useRef } from "react";
// import { projectsData } from "@/lib/data";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// type ProjectProps = (typeof projectsData)[number];

// export default function Project({
//   title,
//   description,
//   tags,
//   imageUrl,
// }: ProjectProps) {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.33 1"],
//   });
//   const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{
//         scale: scaleProgess,
//         opacity: opacityProgess,
//       }}
//       className="group mb-3 sm:mb-8 last:mb-0"
//     >
//       <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8">
//         <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
//           <h3 className="text-2xl font-semibold">{title}</h3>
//           <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
//           <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
//             {tags.map((tag, index) => (
//               <li
//                 className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
//                 key={index}
//               >
//                 {tag}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <Image
//           src={imageUrl}
//           alt="Project I worked on"
//           quality={95}
//           className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
//         transition
//         group-hover:scale-[1.04]
//         group-hover:-translate-x-3
//         group-hover:translate-y-3
//         group-hover:-rotate-2

//         group-even:group-hover:translate-x-3
//         group-even:group-hover:translate-y-3
//         group-even:group-hover:rotate-2

//         group-even:right-[initial] group-even:-left-40"
//         />
//       </section>
//     </motion.div>
//   );
// }
