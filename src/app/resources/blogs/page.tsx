"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "@/src/components/common/BlogCard";

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
    title: "Tech Innovators",
    date: "12 February, 2026",
    subtitle:
      "Explore emerging technologies and build innovative projects with expert guidance.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/tech-innovators",
  },
  {
    id: 6,
    title: "Creative Arts Workshop",
    date: "25 February, 2026",
    subtitle:
      "Enhance your artistic skills through hands-on workshops and creative exercises.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/creative-arts-workshop",
  },
  {
    id: 7,
    title: "Entrepreneurship Challenge",
    date: "10 March, 2026",
    subtitle:
      "Compete in teams to develop business ideas, pitch to investors, and learn entrepreneurship skills.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/entrepreneurship-challenge",
  },
  {
    id: 8,
    title: "Digital Marketing Bootcamp",
    date: "22 March, 2026",
    subtitle:
      "Master digital marketing strategies and tools to grow brands and businesses online.",
    imageUrl: "/images/slide1.png",
    ctaText: "See more",
    ctaHref: "/programs/digital-marketing-bootcamp",
  },
];


export default function Blogs(){
    return(
        <GeneralLayout>
    <main>

        <HeroSection
            badgeText="BLOGS"
            title="Our Blogs"
            body="Explore Impactprenuer Global’s transformative programs built to empower individuals, nonprofits, and social entrepreneurs with practical skills, mentorship, and tools for long-term impact. From leadership development to capacity-building workshops and community-driven initiatives, our programs are shaping a new generation of purpose-driven African changemakers."
            imageUrl="images/slide1.png"
          />
      <section className="py-16 px-4 sm:px-6 lg:px-20">
    

        {/* Blogs */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch mt-">
          {programCards.map((program) => (
            <BlogCard
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
    </GeneralLayout>
    )
}