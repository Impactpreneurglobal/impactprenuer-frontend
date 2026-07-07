// components/ui/hero-card.tsx
import { Card, CardContent, CardHeader } from "@/src/components/ui/card"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

export interface StoryCardProps {
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
  classname: string

}


export function StoryCard({
  
  title = "Young Investors",
  date = "",
  subtitle = "At Impactpreneur Global, we bring together aspiring social entrepreneurs, nonprofits, and changemakers—and provide them with the lead.",
  Icon,
  iconBgColor,
  iconColor,
  classname
}: StoryCardProps) {
  return (
    <Card className={`overflow-hidden flex flex-col border-none ${classname}`}>

      <CardContent className={`rounded-[25px] w-full h-full z-10 p-5 ${classname}`}>
        <div className={`w-12 h-12 flex items-center justify-center mb-[67px] rounded-2xl ${iconBgColor}`}>
          {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
        </div>
        <div className="space-y-2 text-left">
          {title && (
            <h3 className={`text-base font-semibold text-black${classname}`}>
              {title}
            </h3>
          )}

          {date && (
            <p className={`${classname}text-[#515151] text-xs font-medium sm:text-sm`}>
              {date}
            </p>
          )}

          {subtitle && (
            <p className={`text-muted-foreground text-xs sm:text-sm line-clamp-3 ${classname}`}>
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
