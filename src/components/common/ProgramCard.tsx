// components/ui/hero-card.tsx
import { Card, CardContent, CardHeader } from "@/src/components/ui/card"
import Link from "next/link"

export interface ProgramCardProps {
  title?: string
  date?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  imageUrl?: string
}

export function ProgramCard({
  imageUrl = "/images/slide1.png",
  title = "Young Investors",
  date = "28 October, 2025",
  subtitle = "At Impactpreneur Global, we bring together aspiring social entrepreneurs, nonprofits, and changemakers—and provide them with the lead.",
  ctaText = "See more",
  ctaHref = "#",
}: ProgramCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl flex flex-col max-w-[300px] border-none shadow-none">
      <CardHeader className="mb-[-50px] p-0">
        {/* Image */}
        <div className="relative w-full h-[140px]">
          <img
            src={imageUrl}
            alt={title ?? "program image"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="rounded-[25px] z-10 bg-white p-5 ">
        <div className="space-y-2 text-left">
          {title && (
            <h3 className="text-base font-semibold text-[#004119]">
              {title}
            </h3>
          )}

          {date && (
            <p className="text-[#515151] text-xs font-medium sm:text-sm">
              {date}
            </p>
          )}

          {subtitle && (
            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">
              {subtitle}
            </p>
          )}

          <Link
            href={ctaHref}
            className="inline-block text-[#004119] text-sm font-medium"
          >
            {ctaText}
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
