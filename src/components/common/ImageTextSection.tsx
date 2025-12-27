// components/ImageTextSection.tsx
import React from "react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ImageTextSectionProps {
  badgeText: string;
  body: string;
  imageUrl?: string;

  /** Desktop layout variants */
  imageRight?: boolean;
  imageTopDesktop?: boolean;

  isButton?: boolean;
}

export function ImageTextSection({
  badgeText,
  body,
  imageUrl,
  imageRight = false,
  imageTopDesktop = false,
  isButton = false,
}: ImageTextSectionProps) {
  /**
   * Layout priority:
   * 1. imageTopDesktop (TEXT top, IMAGE bottom on desktop)
   * 2. imageRight
   * 3. default
   */
  const desktopLayout = imageTopDesktop
    ? "lg:flex-col"
    : imageRight
    ? "lg:flex-row-reverse"
    : "lg:flex-row";

  const sectionPadding = imageTopDesktop ? "lg:px-20" : "lg:pl-20";

  return (
    <section
      className={`flex flex-col items-center justify-between gap-8 px-4 sm:px-6 py-12 bg-background ${desktopLayout} ${sectionPadding}`}
    >
      {/* TEXT */}
      <div
        className={`w-full space-y-4 text-left ${
          imageUrl && !imageTopDesktop ? "lg:w-1/2" : "lg:w-full"
        }`}
      >
        <Badge variant="muted" className="w-fit">
          {badgeText}
        </Badge>

        <p className="text-muted-foreground text-base sm:text-lg">
          {body}
        </p>

        {isButton && (
          <Link href="/about">
            <Button variant="secondary" className="flex items-center">
              Learn more <ArrowRight className="ms-1" />
            </Button>
          </Link>
        )}
      </div>

      {/* IMAGE (ONLY IF PROVIDED) */}
      {imageUrl && (
        <div
          className={`w-full overflow-hidden rounded-[30px] ${
            imageTopDesktop ? "lg:w-full" : "lg:w-1/2"
          }`}
        >
          <img
            src={imageUrl}
            alt={badgeText}
            className="w-full h-[300px] lg:h-[428px] object-cover"
          />
        </div>
      )}
    </section>
  );
}
