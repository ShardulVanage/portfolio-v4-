import Link from "next/link";
import { ArrowUpRight, Code, ExternalLink } from "lucide-react";

import Section from "@/components/section";
import { getUiComponents } from "@/lib/ui-components";

export const metadata = {
  title: "UI Components | Shardul Vanage",
  description:
    "A clean, minimal library of reusable UI components with code and live previews.",
};

const ComponentsPage = () => {
  const components = getUiComponents();

  return (
    <main className='components-page'>
      <Section>
        <h1 className='text-2xl font-semibold text-zinc-900'>  Components with Soul</h1>
        <p className='mt-2 text-sm leading-6 text-zinc-500 max-w-3xl'>
  A curated collection of aesthetic, production-ready components crafted with
    motion, precision, and clean code. Explore each block, inspect the code, and
    experience it live — built for developers who care about the vibe as much as
    the build.
        </p>
      </Section>

      <Section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {components.map((component) => (
          <div
            key={component.title}
            className='rounded-2xl border border-zinc-200 bg-white overflow-hidden'
          >
            {/* Media Preview */}
            <div className='w-full aspect-video bg-zinc-100 overflow-hidden'>
              {component.mediaUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                <video
                  src={component.mediaUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover'
                />
              ) : (
                <img
                  src={component.mediaUrl}
                  alt={component.title}
                  className='w-full h-full object-cover'
                />
              )}
            </div>

            {/* Card Body */}
            <div className='p-5'>
              <div className='flex items-start justify-between gap-2'>
                <div>
                  <p className='text-xs uppercase tracking-[0.2em] text-zinc-400'>
                    {component.type}
                  </p>
                  <h2 className='mt-1 text-lg font-semibold text-zinc-900'>
                    {component.title}
                  </h2>
                </div>
              </div>

              {/* Actions */}
              <div className='mt-4 flex items-center gap-3'>
                <Link
                  target="_blank"
                   rel="noopener noreferrer"
                  href={component.codeUrl}
                  className='inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition hover:border-zinc-400 hover:text-zinc-900'
                >
                  <Code className='h-3.5 w-3.5' />
                  Code
                </Link>
                <Link
                 target="_blank"
                   rel="noopener noreferrer"
                  href={component.liveUrl}
                  className='inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-700'
                >
                  Live Preview
                  <ArrowUpRight className='h-3.5 w-3.5' />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Section>
    </main>
  );
};

export default ComponentsPage;