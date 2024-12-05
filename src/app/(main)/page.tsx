import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProfilPhoto from '~/assets/profile-photo.png'
import { Badge } from '~/components/badge'
import { Button } from '~/components/button'
import { cn } from '~/utils/cn'

export const metadata: Metadata = {
  title: 'Next Portfolio Starter',
}

export default function Home() {
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
        id="projects"
        className={cn(
          'container relative z-10 mt-20 mb-10 grid scroll-m-12 grid-cols-1 place-content-center items-center gap-4 p-8 md:grid-cols-2',
        )}
      >
        <Link
          href="/projects/lead-catch"
          className="relative rounded-2xl border border-white/8 bg-[#1D1D21] p-4"
        >
          <div className="mb-4">
            <span className="font-medium text-white">LeadCatch</span>
            <p className="line-clamp-1">
              A tool for capturing and managing newsletter built with SvelteKit
              and shadcn/ui.
            </p>
          </div>
          <Image
            src="/images/projects/cover.png"
            alt="LeadCatch"
            fill
            className="!relative aspect-5/3 rounded-2xl"
          />
        </Link>
        <Link
          href="/projects/lead-catch"
          className="relative rounded-2xl border border-white/8 bg-[#1D1D21] p-4"
        >
          <div className="mb-4">
            <span className="font-medium text-white">LeadCatch</span>
            <p className="line-clamp-1">
              A tool for capturing and managing newsletter built with SvelteKit
              and shadcn/ui.
            </p>
          </div>
          <Image
            src="/images/projects/cover.png"
            alt="LeadCatch"
            fill
            className="!relative aspect-5/3 rounded-2xl"
          />
        </Link>
      </section>

      {/* Experience */}
      <section
        className={cn(
          'container relative z-10 mt-10 mb-20 space-y-8 divide-y divide-white/8 p-8',
        )}
      >
        <Badge>Experience</Badge>
        <div className="grid grid-cols-1 justify-between gap-8 pb-8 md:grid-cols-12">
          <h3 className="col-span-4 font-medium text-white">Founder & CEO</h3>

          <div className="col-span-8">
            <span className="mb-2 font-medium text-white">
              TechVantage Solutions
            </span>
            <p className="text-[#818186]">2020-Present</p>
            <p className="mt-4">
              As Founder and CEO, I launched an AI productivity tool, growing it
              to 500,000 users in three years. I secured $2M in seed funding and
              built a 20+ member cross-functional team.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-between gap-8 pb-8 md:grid-cols-12">
          <h3 className="col-span-4 font-medium text-white">Co-Founder</h3>

          <div className="col-span-8">
            <span className="mb-2 font-medium text-white">
              InnoNext Ventures
            </span>
            <p className="text-[#818186]">2017 – 2019</p>
            <p className="mt-4">
              I co-founded InnoNext Ventures, developing a SaaS CRM platform
              that boosted user retention by 70%. I managed the product
              lifecycle from concept to launch using agile methodologies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-between gap-8 md:grid-cols-12">
          <h3 className="col-span-4 font-medium text-white">Co-Founder</h3>

          <div className="col-span-8">
            <span className="mb-2 font-medium text-white">
              SwiftData Analytics
            </span>
            <p className="text-[#818186]">2015 – 2017</p>
            <p className="mt-4">
              As Product Manager, I led the development of a data visualization
              platform, increasing enterprise adoption by 30%. I conducted
              market research to inform new features.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className={cn(
          'container relative z-10 mt-10 mb-20 grid scroll-m-12 grid-cols-1 place-content-center items-center gap-12 rounded-b-2xl bg-linear-to-tl from-white/8 to-20% p-8 md:grid-cols-12',
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
