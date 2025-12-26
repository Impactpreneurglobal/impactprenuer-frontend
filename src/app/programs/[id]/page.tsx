"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { ProgramCard } from "@/src/components/common/ProgramCard";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";

const ProgramData = [
  {
    id: 1,
    title: "Young Investors: A Guide to Financial Freedom",
    date: "28 October, 2025",
    subtitle:
      "Learn how young people can start their investment journey with practical tips and strategies.",
    imageUrl: "/images/slide1.png",
  },
  {
    id: 2,
    title: "Leadership in the Modern World",
    date: "10 November, 2025",
    subtitle:
      "Explore the essential leadership qualities needed for today's rapidly changing environment.",
    imageUrl: "/images/slide1.png",
  },
  {
    id: 3,
    title: "From Idea to Startup",
    date: "5 December, 2025",
    subtitle:
      "Turn your innovative ideas into viable businesses with this comprehensive guide.",
    imageUrl: "/images/slide1.png",
  },
  {
    id: 4,
    title: "Financial Literacy for All Ages",
    date: "18 January, 2026",
    subtitle:
      "Essential money management skills everyone should know regardless of age or income.",
    imageUrl: "/images/slide1.png",
  },
  {
    id: 5,
    title: "The Entrepreneur’s Mindset",
    date: "10 March, 2026",
    subtitle:
      "Develop the mindset needed to overcome challenges and build successful ventures.",
    imageUrl: "/images/slide1.png",
  },
];

export default function ProgramDetailPage() {
  const { id } = useParams();

  const program = ProgramData.find(
    (item) => String(item.id) === String(id)
  );

  const otherPrograms = ProgramData.filter(
    (item) => String(item.id) !== String(id)
  ).slice(0, 4);

  if (!program) return null;

  return (
    <GeneralLayout>
      <main className="py-20 px-4 sm:px-6 lg:px-20">

        {/* ===== Breadcrumb ===== */}
        <Breadcrumb className="mb-6 py-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/programs">Programs</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>{program.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* ===== Layout ===== */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT — Program Details */}
          <section className="flex-1 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#004119]">
              {program.title}
            </h1>

            <p className="text-sm text-muted-foreground">
              {program.date}
            </p>
            <div className="overflow-hidden">
              <img
                src={program.imageUrl}
                alt={program.title}
                className="w-full h-[300px] lg:h-[428px] object-cover"
              />
            </div>


            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl">
              {program.subtitle}
            </p>

            <Button variant="secondary" className="flex items-center gap-2 w-fit">
              Register <ArrowRight size={16} />
            </Button>
          </section>

          {/* RIGHT — Sidebar */}
          <aside className="w-full lg:w-[320px] space-y-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-normal text-[#8A8A8A]">
              See more programs
            </h2>

            {/* Desktop button */}
            <Link
              href="/programs"
              className="hidden md:block"
            >
              <Button variant="ghost" className="flex items-center gap-1">
                See all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Cards */}
          <div className="space-y-4 flex flex-col items-center md:items-stretch">
            {otherPrograms.map((item) => (
              <ProgramCard
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                ctaText="See more"
              />
            ))}
          </div>

          {/* Mobile button (bottom & centered) */}
          <div className="flex justify-center md:hidden pt-2">
            <Link href="/programs">
              <Button variant="ghost" className="flex items-center gap-1">
                See all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </aside>


        </div>
      </main>
    </GeneralLayout>
  );
}
