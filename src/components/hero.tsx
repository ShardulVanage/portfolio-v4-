import Link from "next/link";
import Button from "./button";
import Callout from "./callout";
import Header from "./header";
import LinkText from "./link-text";
import Section from "./section";

const HeroSection: React.FunctionComponent = () => {
  return (
    <main className='hero-section' id='hero'>
      <Header />
      <Section>
        <h2 className='about-heading leading-snug font-medium text-base text-zinc-900'>
          {"about me."}
        </h2>
        <div className='about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4'>
          <p>
            Frontend UI/UX Developer with 1+ years of experience creating scalable and aesthetically 
            refined web applications. Skilled in translating design systems into interactive, 
            responsive interfaces with attention to usability, performance, and detail.
          </p>
        </div>
     <Callout className='mt-4'>
  <p>
    Currently working as a Frontend UI/UX Developer at{" "}
    <Link
      className='underline'
      href={"https://zepresearch.com"}
      target='_blank'
    >
      Zep Research
    </Link>
    , where I design and build intuitive, high-performance web interfaces
    with a strong focus on user experience, interaction design, and
    accessibility.
  </p>
  <p className='mt-2 mb-4'>
    I specialize in crafting responsive, visually engaging applications
    using TypeScript, React.js, Next.js, and Tailwind CSS, Framer-motion, PocketBase, Dokploy  while ensuring
    seamless performance and scalability across modern web platforms.
  </p>
  <div className='flex flex-row items-center justify-start gap-4'>
    {/* Optional CTA buttons */}
  </div>
</Callout>
      </Section>
    </main>
  );
};

export default HeroSection;
