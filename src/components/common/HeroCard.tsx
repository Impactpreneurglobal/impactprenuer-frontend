// components/HeroSection.tsx
import React from "react";
import { Badge } from "@/src/components/ui/badge";

interface HeroSectionProps {
  badgeText: string;
  title: string;
  body: string;
  imageUrl: string;
}

export function HeroSection({
  badgeText,
  title,
  body,
  imageUrl,
}: HeroSectionProps) {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 px-4 sm:px-6 lg:pl-20 py-20 lg:py-20 bg-background">
      
      {/* Left: Text */}
      <div className="flex-1 space-y-5 text-left">
        <Badge className="w-fit">
          {badgeText}
        </Badge>

        <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-[#004119] font-bold">
          {title}
        </h1>

        <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
          {body}
        </p>
      </div>

      {/* Right: Image */}
      <div className="w-full relative min-h-[300px] sm:min-h-[300px] lg:min-h-[500px] lg:flex-1 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden rounded-l-[150px] sm:rounded-l-[200px] lg:rounded-l-[300px] border-l-[10px] lg:border-l-[15px] border-[#f5f5f5]">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 rounded-l-[150px] sm:rounded-l-[200px] lg:rounded-l-[220px]" />
        </div>
        </div>


    </section>
  );
}
