import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from '~/app/projects/utils'
import ProfilPhoto from '~/assets/profile-photo.png'
import { Badge } from '~/components/badge'
import { Button } from '~/components/button'
import { cn } from '~/utils/cn'

export const metadata: Metadata = {
  title: 'Next Portfolio Starter',
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[528px] items-center justify-center border-white/8 border-b bg-[#1D1D21] py-20">
        <div className="container mt-20 flex flex-col items-center gap-8 text-center">
          <h1 className="font-medium text-5xl text-[#818186]">
            Walter O’Brien
            <br />
            <span className="font-normal text-white">
              Technology Entrepreneur
            </span>
          </h1>
          <p className="max-w-lg font-medium text-[#C3C3C6] text-lg">
            A globally recognized tech expert and entrepreneur, known for
            leading advancements in cybersecurity, AI solutions, and strategic
            consulting.
          </p>
          <Button>Let's work together</Button>
        </div>
      </section>

      {/* Projects */}
      <section
        className={cn(
          'container relative z-10 mt-20 mb-10 grid grid-cols-1 place-content-center items-center gap-4 p-8 md:grid-cols-2',
        )}
      >
        {projects.map((project) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="relative rounded-2xl border border-white/8 bg-[#1D1D21] p-4"
            >
              <div className="mb-4">
                <span className="font-medium text-white">{project.title}</span>
                <p className="line-clamp-1">{project.description}</p>
              </div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="!relative aspect-5/3 rounded-2xl"
              />
            </Link>
          )
        })}
      </section>

      {/* About */}
      <section
        className={cn(
          'container relative z-10 mt-10 mb-20 grid grid-cols-1 place-content-center items-center gap-12 rounded-b-2xl bg-linear-to-tl from-white/8 to-20% p-8 md:grid-cols-12',
        )}
      >
        <div className="col-span-1 space-y-3 md:col-span-8">
          <Badge>About me</Badge>
          <p className="font-medium text-[#C3C3C6] text-xl">
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
