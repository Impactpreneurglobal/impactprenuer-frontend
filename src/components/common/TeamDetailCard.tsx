// components/TeamDetail.tsx
import React from "react";
import { Badge } from "@/src/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Home } from "lucide-react";

interface TeamDetailProps {
  name: string;
  title: string;
  bio?: string;
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export function TeamDetail({
  name,
  title,
  bio,
  imageUrl,
  socialLinks,
}: TeamDetailProps) {
  return (
    <section className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 px-4 sm:px-6 lg:pl-20 py-20 lg:py-20 bg-background">
      
      {/* Left: Text */}
      <div className="flex-1 space-y-5 text-left">
        <Breadcrumb className="mb-6 py-5">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/"><Home /></BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbLink href="/our-team">Our Team</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-[24px] sm:text-[28px] font-dm-sans text-[#004119] font-bold">
          {name}
        </h1>
            {socialLinks && (
              <div className="
                flex justify-start space-x-5
                opacity-100  
                transition-opacity duration-500
                md:group-hover:opacity-100 md:delay-300
              ">
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 transition-transform duration-300"
                  >
                    <FaTwitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
                  </a>
                )}

                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 transition-transform duration-300"
                  >
                    <FaLinkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
                  </a>
                )}

                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-125 transition-transform duration-300"
                  >
                    <FaGithub className="w-6 h-6 hover:text-gray-300 transition-colors" />
                  </a>
                )}
              </div>
            )}

        <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
          {bio}
        </p>
      </div>


      {/* Right: Image */}
      <div className="w-full relative min-h-[300px] sm:min-h-[300px] lg:min-h-[500px] lg:flex-1 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden rounded-l-[150px] sm:rounded-l-[200px] lg:rounded-l-[300px] border-l-[10px] lg:border-l-[15px] border-[#f5f5f5]">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 rounded-l-[150px] sm:rounded-l-[200px] lg:rounded-l-[220px]" />
        </div>
        </div>


    </section>
  );
}
