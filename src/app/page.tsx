import { Button } from "@/src/components/ui/button";
import {Header} from "@/src/components/common/Header";
import {CarouselCard} from "@/src/components/blocks/Carousel";
import {ImageTextSection} from "@/src/components/common/ImageTextSection"

export default function Home() {
  return (
    <main className="">
      <Header />
      <CarouselCard />
      <ImageTextSection
        badgeText="WHO WE ARE"
        // title="Transform Your Workflow"
        body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."
        imageUrl="/images/slide1.png"
        // imageRight={true}
        isButton={true}
      />

     

    </main>
  );
}
