// components/ImageTextSection.tsx
import React from "react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link"


interface ImageTextSectionProps {
  badgeText: string;
  body: string;
  imageUrl: string;
  imageRight?: boolean; // toggle image position
  isButton?: boolean; // whether to show button
}

export function ImageTextSection({
  badgeText,
  body,
  imageUrl,
  imageRight = false,
  isButton = false,
}: ImageTextSectionProps) {
  return (
<section
  className={`flex flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:pl-20 py-12 bg-background ${
    imageRight ? "lg:flex-row-reverse" : "lg:flex-row"
  }`}
>
  {/* Text */}
  <div className="flex-1 w-full lg:w-1/2 space-y-4 text-left order-1 lg:order-1">
    <Badge variant="muted" className="w-fit">
      {badgeText}
    </Badge>

    <p className="text-muted-foreground text-base sm:text-lg">{body}</p>

    {isButton && (
      <Link href="/about">
        <Button variant="secondary" className="flex items-center justify-center">
          Learn more <ArrowRight className="ms-1" />
        </Button>
      </Link>
    )}
  </div>

  {/* Image */}
  <div className="flex-1 w-full lg:w-1/2 overflow-hidden rounded-[30px] order-2 lg:order-2">
    <img
      src={imageUrl}
      alt={badgeText}
      className="w-full h-[300px] lg:h-[428px] object-cover"
    />
  </div>
</section>

  );
}
