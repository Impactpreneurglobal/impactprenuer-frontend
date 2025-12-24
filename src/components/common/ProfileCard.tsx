// components/ProfileCard.tsx
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ProfileCardProps {
  name: string;
  title: string;
  imageUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  imageUrl,
  socialLinks,
}) => {
  return (
   
      <div className="relative w-64 h-80 overflow-hidden rounded-xl shadow-lg cursor-pointer group">
        
        {/* Image */}
        <img
          src={imageUrl}
          alt={name}
          className="
            w-full h-full object-cover
            transition-transform duration-700
           
            md:group-hover:grayscale-0 md:group-hover:opacity-100
            group-hover:scale-110
          "
        />

        {/* Default bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

        {/* Overlay */}
        <div className="
          absolute inset-0 bg-black/75
          opacity-100 md:opacity-0
          transition-all duration-500
          md:group-hover:opacity-100
        ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-normal text-sm tracking-wide">
          <Link href="/team">See Details</Link>
        </div>
          {/* Bottom content */}
          <div className="
            absolute bottom-0 left-0 right-0 p-6 text-white
            transform translate-y-0
            md:translate-y-4 md:group-hover:translate-y-0
            transition-transform duration-500
          ">
            <div className="text-center mb-4">
              <h3 className="font-bold font-dm-sans text-xl mb-1">
                {name}
              </h3>
              <p className="text-sm text-gray-300">{title}</p>
            </div>

            {/* Social icons */}
            {socialLinks && (
              <div className="
                flex justify-center space-x-5
                opacity-100 md:opacity-0
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
          </div>
        </div>
      </div>
    
  );
};

export default ProfileCard;
