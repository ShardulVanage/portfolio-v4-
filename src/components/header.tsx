"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Section from "./section";

const Header: React.FunctionComponent = () => {
  return (
    <Section className='flex flex-row items-center justify-start gap-4 mt-12 max-sm:items-start max-md:items-start'>
      <motion.div
        className='profile-icon-wrapper relative w-fit h-fit'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src={"/pp2.jpg"}
          alt='prathmesh-profile'
          width={"200"}
          height={"100"}
          className='rounded-full transition-all contain-fill scale-110 hover:grayscale'
          priority
        />
        <motion.div
          className='box icon-content-wrapper animation-delay absolute px-2 py-1 bg-white shadow rounded-full text-sm left-14 bottom-0 cursor-default select-none max-sm:left-8 max-sm:text-xs max-sm:px-1 max-sm:py-0.5'
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {"✨"}
        </motion.div>
      </motion.div>
      <div className='ml-4'>
        <h1 className=' welcome-text leading-snug font-semibold text-2xl text-zinc-900'>
          {" Hi, I am Shardul"}
        </h1>
        <div className='leading-snug font-normal text-base text-zinc-500 mt-2'>
          <p>{"A frontend  engineer, from India."}</p>
          <p>{new Date().getFullYear() - 2002 + ", he/him"}</p>
        </div>
        <a
          href='/Shardul_resume_2026.pdf'
          download
          className='mt-3 inline-flex items-center rounded-md border border-zinc-200 bg-white/50 drop-shadow-sm px-3.5 py-2 text-xs font-medium text-zinc-800 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98]'
        >
          Download resume
        </a>
      </div>
    </Section>
  );
};

export default Header;
