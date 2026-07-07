// components/ui/hero-card.tsx
import { Card, CardContent, CardHeader } from "@/src/components/ui/card"
import Link from "next/link"
import { Badge } from "@/src/components/ui/badge";


export interface BlogCardProps {
  id?: string | number
  title?: string
  name: string,
  time: string,
  date?: string,
  subtitle?: string
  body?: string
  blogUrl?: string
  imageUrl?: string,
  icon?: string, 
}

export function BlogCard({
  id,
  imageUrl = "/images/Blog.png",
  title = "Young Investors",
  date = "28 October, 2025",
  subtitle = "At Impactpreneur Global, we bring together aspiring social entrepreneurs, nonprofits, and changemakers—and provide them with the lead.",
  body,
  blogUrl,
  name, 
  time,
  icon,
}: BlogCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl flex flex-col max-w-[338px] border-none shadow">
      <CardHeader className="p-0 mt-[-30px]">
        {/* Image */}
        <div className="relative w-full h-[150px]">
          <img
            src={imageUrl}
            alt={title ?? "program image"}
            className="absolute inset-0 w-full h-full object-cover "
          />
          <Badge variant="muted" className="absolute top-4 rounded-full left-3">
            Community
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="rounded-[20px] z-10 p-3 mt-[-20px] ">
        <div className="space-y-2 text-left">
          {title && (
            <h3 className="text-base font-semibold text-[#004119]">
              {title}
            </h3>
          )}


          {subtitle && (
            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">
              {subtitle}
            </p>
          )}

          <div className="border-t border-black/10 my-2"/>
          {name &&
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
              <p className="text-[#515151] text-xs font-medium sm:text-sm">{icon}</p>
              <p className="text-[#515151] text-xs font-medium sm:text-sm">{name}</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-[#515151] text-xs font-medium sm:text-sm">{icon}</p>
              <p className="text-[#515151] text-xs font-medium sm:text-sm">{time}</p>
            </div>
          </div>
          }
          

           {date && (
            <p className="text-[#515151] text-xs font-medium sm:text-sm">
              {date}
            </p>
          )} 

          {/* {body && (
            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">
              {body}
            </p>
          )} */}

          {/* <Link
            href={`/resources/blogs/${id}`}
            className="inline-block text-[#004119] text-sm font-medium"
          >
            See more
          </Link> */}
        </div>
      </CardContent>
    </Card>
  )
}
