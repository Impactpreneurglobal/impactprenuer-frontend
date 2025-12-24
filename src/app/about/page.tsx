"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import {Header} from "@/src/components/common/Header";
import {JoinCommunity} from "@/src/components/blocks/JoinCommunity";
import {ImageTextSection} from "@/src/components/common/ImageTextSection"


export default function About(){
    return(
    <main>

        <Header />
        <HeroSection
            badgeText="ABOUT US"
            title="Empowering Changemakers to Build a Sustainable Future"
            body="Welcome to Impactprenuer Global — a purpose-driven platform dedicated to equipping individuals, nonprofits, and social entrepreneurs with the tools, knowledge, and digital resources they need to create lasting impact in their communities. Through leadership development, capacity-building programs, and innovative digital products, we inspire and support the next generation of African change leaders."
            imageUrl="images/slide1.png"
          />
           <ImageTextSection
                  badgeText="WHO WE ARE"
                  // title="Transform Your Workflow"
                  body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."
                  imageUrl="/images/slide1.png"
                  // imageRight={true}
                //   isButton={true}
                />
           <ImageTextSection
                  badgeText="OUR STORY"
                  // title="Transform Your Workflow"
                  body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."
                  imageUrl="/images/slide1.png"
                  imageRight={true}
                //   isButton={true}
                />
           <ImageTextSection
                  badgeText="OUR MISSION"
                  // title="Transform Your Workflow"
                  body="Impactpreneur Global is a youth-focused, mission-driven organization committed to equipping young people across Africa (and beyond) with entrepreneurial skills, leadership capabilities, and financial literacy. We believe that knowledge + opportunity = impact, and our goal is to make education and empowerment accessible to all."
                  imageUrl="/images/slide1.png"
                //   imageRight={true}
                //   isButton={true}
            />
           <JoinCommunity
                  badgeText="OUR COMMUNITY"
                  title="Join Our Community"
                  body="Our journey started with a clear vision: create a world where success isn’t reserved for a few, but is available to anyone with the passion to build. Through training programs, leadership labs, and community-building initiatives, Impactpreneur Global has grown into a powerful ecosystem. As we scale, we are expanding our offerings to include digital products — e-books, courses, and guides — so learners can access high-quality material on demand."
                  imageUrl="/images/slide1.png"
                //   imageRight={true}
                  isButton={true}
            />
          
    </main>
    )
}