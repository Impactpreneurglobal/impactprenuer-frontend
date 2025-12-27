"use client"

import { HeroSection } from "@/src/components/common/HeroCard";
import { GeneralLayout } from "@/src/components/common/GeneralLayout";
import { ImageTextSection } from "@/src/components/common/ImageTextSection";
import { ContactForm } from "@/src/components/blocks/ContactForm";
import { Badge } from "@/src/components/ui/badge";

export default function Contact(){
    return(
        <GeneralLayout>
        <main>

            <HeroSection
                badgeText="CONTACT"
                title="Get in Touch with Impactpreneur Global"
                body="Have questions, want to purchase our programs, courses, or services, or explore a partnership or collaboration? Impactpreneur Global is here to help entrepreneurs and businesses turn ideas into impact-driven, revenue-generating ventures."
                imageUrl="images/slide1.png"
            />
           <section className="bg-background ">
            <div className="py-5 px-4 sm:px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-top">
                
                {/* Left: Image + Text */}
                <div>
                <ImageTextSection
                    badgeText="CONTACT US"
                    body="Whether you are an early-stage founder seeking mentorship, resources, or training; an established business looking to scale, innovate, or access consulting services; or a partner or organization interested in supporting Africa’s entrepreneurial ecosystem, our team is ready to provide personalized guidance, program information, and seamless access to our products and services."

                />
                <div className="flex gap-5 pl-20">
                    <div className="w-full outline rounded-lg p-4 bg-white">
                       <Badge variant="outline" className="mb-2">Email</Badge>
                        <p className="text-sm text-gray-600">
                            impactpreneurglobal@gmail.com
                        </p>
                    </div>
                    <div className="w-full outline rounded-lg p-4 bg-white">
                         <Badge variant="outline" className="mb-2">Phone</Badge>
                        <p className="text-sm text-gray-600">
                             +2348168010495
                        </p>
                    </div>

                </div>
                </div>
                {/* Right: Contact Form */}
                <div className="flex justify-center lg:justify-end pt-10">
                    <ContactForm />
                </div>

                </div>
            </div>
            </section>


        </main>

        </GeneralLayout>
    )
}