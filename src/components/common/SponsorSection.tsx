"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SponsorSection() {
  const brandLogos = [
    "/logos/partner1.png",
    "/logos/partner2.png",
    "/logos/partner3.png",
    "/logos/partner4.png",
    "/logos/partner5.png",
    "/logos/partner6.png",
    "/logos/Partner7.png",
  ];

  // Duplicate the array so Framer Motion has enough width to animate seamlessly to -50%
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="w-full bg-white py-16 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-10">
        <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
          TRUSTED BY LEADING ORGANIZATIONS
        </p>
        <h2 className="text-4xl font-extrabold text-[#004d26] tracking-tight">
          Our Partners & Supporters
        </h2>
      </div>

      <div className="w-full overflow-hidden relative py-4">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max items-center gap-20 pr-20"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[160px] h-28 flex-shrink-0"
            >
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                /* Added grayscale, opacity, and smooth hover transition */
                className="max-h-full max-w-full object-contain select-none mix-blend-multiply grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                draggable="false"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <p className="text-sm font-light text-gray-600 mt-10">
        Join a network of innovative organizations making an impact
      </p>
    </section>
  );
}