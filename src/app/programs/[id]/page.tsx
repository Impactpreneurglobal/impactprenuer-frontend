"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { ProgramCard } from "@/src/components/common/ProgramCard";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import { fetchPrograms } from "@/services/api";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";

// Define a type for the program data
interface Program {
  id: number;
  title: string;
  date: string;
  subtitle: string;
  imageUrl: string;
  description?: string;
  // Add other fields if your API returns more data
}

export default function ProgramDetailPage() {
  const { id } = useParams();
  const [program, setProgram] = useState<Program | null>(null);
  const [otherPrograms, setOtherPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPrograms = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch programs from API
        const apiPrograms = await fetchPrograms();
        
        // Transform API data to match your ProgramCard component format
        const transformedPrograms: Program[] = apiPrograms.map((apiProgram: any) => ({
          id: apiProgram.id,
          title: apiProgram.title || "Program Title",
          date: apiProgram.date || apiProgram.created_at || "Coming Soon",
          subtitle: apiProgram.description || apiProgram.subtitle || "Program description",
          imageUrl: apiProgram.image || apiProgram.imageUrl || apiProgram.cover_image || "/images/slide1.png",
          description: apiProgram.full_description || apiProgram.description || apiProgram.subtitle || ""
        }));
        
        // Find the current program
        const currentProgram = transformedPrograms.find(
          (item) => String(item.id) === String(id)
        );
        
        if (currentProgram) {
          setProgram(currentProgram);
          
          // Get other programs (excluding the current one)
          const otherProgramsList = transformedPrograms
            .filter((item) => String(item.id) !== String(id))
            .slice(0, 4); // Show only 4 other programs
          
          setOtherPrograms(otherProgramsList);
        } else {
          setError("Program not found");
        }
      } catch (err) {
        setError("Failed to load program details. Please try again later.");
        console.error("Error fetching program:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadPrograms();
    }
  }, [id]);

  if (loading) {
    return (
      <GeneralLayout>
        <main className="py-20 px-4 sm:px-6 lg:px-20">
          <div className="text-center py-12">
            <p>Loading program details...</p>
          </div>
        </main>
      </GeneralLayout>
    );
  }

  if (error || !program) {
    return (
      <GeneralLayout>
        <main className="py-20 px-4 sm:px-6 lg:px-20">
          <div className="text-center py-12 text-red-600">
            <p>{error || "Program not found"}</p>
            <Link href="/programs">
              <Button variant="outline" className="mt-4">
                Back to Programs
              </Button>
            </Link>
          </div>
        </main>
      </GeneralLayout>
    );
  }

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
              <BreadcrumbPage className="max-w-xs truncate">
                {program.title}
              </BreadcrumbPage>
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
              {program.description || program.subtitle}
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
              {otherPrograms.length > 0 ? (
                otherPrograms.map((item) => (
                  <ProgramCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    subtitle={item.subtitle}
                    imageUrl={item.imageUrl}
                    ctaText="See more"
                  />
                ))
              ) : (
                <p className="text-center text-muted-foreground py-4">
                  No other programs available
                </p>
              )}
            </div>

            {/* Mobile button (bottom & centered) */}
            {otherPrograms.length > 0 && (
              <div className="flex justify-center md:hidden pt-2">
                <Link href="/programs">
                  <Button variant="ghost" className="flex items-center gap-1">
                    See all
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </aside>
        </div>
      </main>
    </GeneralLayout>
  );
}