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
            Full Stack Software Engineer with 2+ years of experience
            specializing in Generative AI applications. I build cutting-edge
            AI-powered web applications with a strong foundation in data
            structures, algorithms, and modern cloud technologies.
          </p>
        </div>
        <Callout className='mt-4'>
          <p>
            Currently working as a Software Engineer at{" "}
            <Link
              className='underline'
              href={"https://buildfastwithai.com"}
              target='_blank'
            >
              Build Fast with AI
            </Link>
            , developing AI applications using LLMs including GPT, Claude,
            Mistral, LLaMA, and Gemini with expertise in prompt engineering and
            custom AI pipelines.
          </p>
          <p className='mt-2 mb-4'>
            I leverage technologies like TypeScript, Python, React.js, Next.js,
            Node.js, PostgreSQL, Supabase, Firebase, Docker, Kubernetes, AWS,
            and OpenAI/LangChain to build scalable, production-ready solutions.
          </p>
          <div className='flex flex-row items-center justify-start gap-4'>
            {/* <Button onClick={() => window.open("https://cal.com/yashsehgal")}>
              {"Schedule a meet / cal.com"}
            </Button> */}
            {/* <LinkText
              href={"/resume"}
              className='text-zinc-600 font-medium text-sm'
            >
              {"Resume"}
            </LinkText> */}
          </div>
        </Callout>
      </Section>
    </main>
  );
};

export default HeroSection;
