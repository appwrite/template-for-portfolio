import type { Metadata } from 'next'
import Image from 'next/image'
import ProfilPhoto from '~/assets/profile-photo.png'
import { Badge } from '~/components/badge'
import { Button } from '~/components/button'
import { ProjectCard } from '~/components/project-card'
import { allProjects } from '~/content'
import { experiences } from '~/data'
import { cn } from '~/utils/cn'

export const metadata: Metadata = {
  title: 'Next Portfolio Starter',
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="-mt-30 flex min-h-[528px] items-center justify-center border-white/8 border-b bg-neutral-850 py-20"
      >
        <div className="container mt-20 flex flex-col items-center gap-8 text-center">
          <h1 className="font-medium text-5xl text-neutral-500">
            Walter O’Brien
            <br />
            <span className="font-normal text-white">
              Technology Entrepreneur
            </span>
          </h1>
          <p className="max-w-lg font-medium text-lg text-neutral-250">
            A globally recognized tech expert and entrepreneur, known for
            leading advancements in cybersecurity, AI solutions, and strategic
            consulting.
          </p>
          <Button>Let's work together</Button>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={cn(
          'container relative z-10 mt-20 mb-30 grid scroll-m-12 grid-cols-1 place-content-center items-center gap-4 p-8 md:grid-cols-2',
        )}
      >
        {allProjects.map((project) => {
          return <ProjectCard project={project} key={project.slug} />
        })}
      </section>

      {/* About */}
      <section
        id="about"
        className={cn(
          'container relative z-10 mt-20 mb-10 grid scroll-m-12 grid-cols-1 place-content-center items-center gap-12 rounded-b-2xl bg-linear-to-tl from-white/8 to-20% p-8 md:grid-cols-12',
        )}
      >
        <div className="col-span-1 space-y-3 md:col-span-8">
          <Badge>About me</Badge>
          <p className="font-medium text-neutral-250 text-xl">
            A globally recognized tech expert and entrepreneur, known for
            leading advancements in cybersecurity, AI solutions, and strategic
            consulting. As the founder of Scorpion Computer Services, I made
            headlines at 13 by hacking NASA’s servers. Today, I help
            corporations and governments tackle complex security and tech
            challenges.
          </p>
        </div>
        <Image
          className="col-span-1 rounded-2xl md:col-span-4"
          src={ProfilPhoto}
          alt=""
        />
      </section>

      {/* Experience */}
      <section
        className={cn(
          'container relative z-10 mt-10 mb-20 space-y-8 divide-y divide-white/8 p-8',
        )}
      >
        <Badge>Experience</Badge>
        {experiences.map(({ title, years, company, description }) => {
          return (
            <div
              className="grid grid-cols-1 justify-between gap-8 pb-8 md:grid-cols-12"
              key={title}
            >
              <h3 className="col-span-4 font-medium text-white">{title}</h3>

              <div className="col-span-8">
                <span className="mb-2 font-medium text-white">{company}</span>
                <p className="text-neutral-500">{years}</p>
                <p className="mt-4">{description}</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

// /* Halo */

// box-sizing: border-box;

// position: absolute;
// width: 308px;
// height: 311px;
// left: 932px;
// top: 80px;

// background: linear-gradient(317.25deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 48.18%);
// backdrop-filter: blur(7.48998px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 32px;
