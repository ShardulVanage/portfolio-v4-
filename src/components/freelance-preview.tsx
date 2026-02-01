import Link from "next/link";
import Section from "./section";
import { getFreelanceProjects } from "@/lib/freelance-projects";
import { ArrowUpRight } from "lucide-react";
import LinkText from "./link-text";

const FreelancePreview: React.FunctionComponent = () => {
  const projects = getFreelanceProjects().slice(0, 4); // Show first 4 projects

  return (
    <Section
      className='freelance-preview-section grid grid-cols-1 justify-start gap-4'
      id='freelance'
    >
      <div className='flex flex-row items-center justify-between'>
        <h2 className='about-heading leading-snug font-medium text-base text-zinc-900'>
          {"freelance work."}
        </h2>
        <LinkText
          href='/freelance'
          className='text-sm font-normal text-zinc-500 hover:text-zinc-700'
        >
          view all
        </LinkText>
      </div>

      <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {projects.map((project, index) => (
          <div
            key={index}
            className='project-preview-card border-l-2 pl-4 hover:border-orange-300 transition-all cursor-default'
          >
            <div className='flex flex-col gap-1'>
              <div className='flex items-start justify-between gap-2'>
                <h3 className='font-medium text-sm text-zinc-900'>
                  {project.title}
                </h3>
                {project.link && (
                  <Link
                    href={project.link}
                    target='_blank'
                    className='text-orange-500 hover:text-orange-600 transition-colors flex-shrink-0'
                  >
                    <ArrowUpRight className='w-4 h-4' />
                  </Link>
                )}
              </div>
              <p className='text-xs text-zinc-500'>
                {project.shortDescription}
              </p>
              <div className='flex flex-wrap gap-1 mt-2'>
                {project.techStack.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-1.5 py-0.5 text-[10px] font-medium bg-zinc-200 text-zinc-600 rounded'
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className='text-[10px] text-zinc-400'>
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FreelancePreview;
