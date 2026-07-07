// components/ui/hero-card.tsx
import { Card, CardContent, CardHeader } from "@/src/components/ui/card"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

export interface CoreValuesProps {
  // id: string | number
  title?: string
  date?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  imageUrl?: string
  Icon: LucideIcon
  iconBgColor?: string // e.g., "bg-green-50", "bg-blue-50"
  iconColor?: string

}


export function CoreValueCard({
  
  imageUrl = "/images/slide1.png",
  title = "Young Investors",
  date = "",
  subtitle = "At Impactpreneur Global, we bring together aspiring social entrepreneurs, nonprofits, and changemakers—and provide them with the lead.",
  ctaText = "",
  ctaHref = "#",
  Icon,
  iconBgColor,
  iconColor
}: CoreValuesProps) {
  return (
    <Card className="overflow-hidden rounded-xl flex flex-col max-w-[262px] border-none shadow">

      <CardContent className="rounded-[25px] z-10 bg-white p-5 ">
        <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${iconBgColor}`}>
          {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
        </div>
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
{/* route to /programs/[id] */}
         {/* <Link
            href={`/programs/${id}`}
            
          >
            See more
          </Link> */}

        </div>
      </CardContent>
    </Card>
  )
}
