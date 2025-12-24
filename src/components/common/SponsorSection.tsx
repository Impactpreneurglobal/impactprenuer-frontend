import Image from "next/image"

interface Sponsor {
  name: string
  logo: string
}

interface SponsorSectionProps {
  sponsors: Sponsor[]
}

export function SponsorSection({ sponsors }: SponsorSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20 bg-background">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-dm-sans font-bold text-[#004119]">
          Sponsors and Partners
        </h2>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex items-center justify-center md:grayscale md:opacity-80 md:hover:grayscale-0 md:hover:opacity-100 transition duration-300"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={160}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
