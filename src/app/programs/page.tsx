"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import {Header} from "@/src/components/common/Header";
import {ProgramCard} from "@/src/components/common/ProgramCard";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const programCards = [
  {
    id: 1,
    title: "Young Investors",
    date: "28 October, 2025",
    subtitle:
      "A hands-on program helping young people understand investing, savings, and wealth creation.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/young-investors",
  },
  {
    id: 2,
    title: "Leadership Lab",
    date: "10 November, 2025",
    subtitle:
      "Develop purpose-driven leadership skills through mentorship and real-world projects.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/leadership-lab",
  },
  {
    id: 3,
    title: "Startup Bootcamp",
    date: "5 December, 2025",
    subtitle:
      "Turn ideas into viable businesses with guidance from experienced founders.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/startup-bootcamp",
  },
  {
    id: 4,
    title: "Financial Literacy",
    date: "18 January, 2026",
    subtitle:
      "Learn budgeting, investing, and smart money habits for long-term success.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/financial-literacy",
  },
  {
    id: 5,
    title: "Digital Skills Academy",
    date: "25 February, 2026",
    subtitle:
      "Master essential digital skills like coding, design, and online marketing.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/digital-skills-academy",
  },
  {
    id: 6,
    title: "Entrepreneurship Essentials",
    date: "10 March, 2026",
    subtitle:
      "Learn how to start, run, and scale a small business successfully.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/entrepreneurship-essentials",
  },
  {
    id: 7,
    title: "Community Impact Project",
    date: "22 March, 2026",
    subtitle:
      "Create meaningful change by designing and implementing social impact projects.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/community-impact-project",
  },
  {
    id: 8,
    title: "Innovation Lab",
    date: "5 April, 2026",
    subtitle:
      "Experiment with creative problem-solving and bring innovative ideas to life.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/innovation-lab",
  },
  {
    id: 9,
    title: "Career Prep Workshop",
    date: "18 April, 2026",
    subtitle:
      "Prepare for the future with resume building, interviews, and professional skills.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/career-prep-workshop",
  },
  {
    id: 10,
    title: "Creative Arts Camp",
    date: "2 May, 2026",
    subtitle:
      "Explore your creativity through art, music, and design projects.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/creative-arts-camp",
  },
  {
    id: 11,
    title: "Tech for Good",
    date: "15 May, 2026",
    subtitle:
      "Use technology to solve real-world problems and create social impact.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/tech-for-good",
  },
  {
    id: 12,
    title: "Mindset & Resilience",
    date: "28 May, 2026",
    subtitle:
      "Build mental toughness, positive habits, and a growth mindset for lifelong success.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/mindset-resilience",
  },
];

export default function Programs(){
    return(
    <main>

        <Header />
        <HeroSection
            badgeText="PROGRAMS"
            title="Programs Designed to Unlock Potential and Drive Real Change"
            body="Explore Impactprenuer Global’s transformative programs built to empower individuals, nonprofits, and social entrepreneurs with practical skills, mentorship, and tools for long-term impact. From leadership development to capacity-building workshops and community-driven initiatives, our programs are shaping a new generation of purpose-driven African changemakers."
            imageUrl="images/slide1.png"
          />
          <section className="py-5 px-4 sm:px-6 lg:px-20">
           

            {/* Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-">
                {programCards.map((program) => (
                <ProgramCard
                    key={program.id}
                    title={program.title}
                    date={program.date}
                    subtitle={program.subtitle}
                    imageUrl={program.imageUrl}
                    ctaText={program.ctaText}
                    ctaHref={program.ctaHref}
                />
                ))}
            </div>

            {/* Mobile button - visible only on mobile */}
            <div className="mt-8 flex justify-center sm:hidden">
                <Button variant="ghost" className="flex items-center gap-1">
                See all
                <ArrowRight className="h-4 w-4" />
                </Button>
            </div>
            </section>
    </main>
    )
}