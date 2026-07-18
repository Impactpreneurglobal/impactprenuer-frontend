"use client"

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="text-white w-full bg-[#0b1d14]">
      <div className="container mx-auto px-6 lg:px-16 py-12 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit">
              <Image 
                src="/logo2.png" 
                alt="Impactpreneur Global" 
                width={160} 
                height={50} 
                className="object-contain"
              />
            </Link>
            
            <p className="text-gray-300 text-[14px] max-w-sm leading-relaxed">
              Where impactpreneurs come to build, grow, and go global.
            </p>

            <div className="flex flex-col gap-3.5 text-[14px] text-gray-300 mt-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                <span>123 Impact Street, Innovation District, Global City</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <a href="mailto:hello@impactpreneur.global" className="hover:underline">
                  hello@impactpreneur.global
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-[15px] mb-4 text-white">Company</h4>
              <ul className="space-y-2.5 text-[14px] text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[15px] mb-4 text-white">Resources</h4>
              <ul className="space-y-2.5 text-[14px] text-gray-300">
                <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[15px] mb-4 text-white">Support</h4>
              <ul className="space-y-2.5 text-[14px] text-gray-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-12 border-b border-white/10">
          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-[14px] mb-6">
              Get the latest insights and opportunities delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full max-w-sm px-4 py-2.5 rounded-[8px] bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button 
                type="submit" 
                className="bg-[#00801a] hover:bg-[#006614] text-white font-medium text-sm px-6 py-2.5 rounded-[8px] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <p className="text-[13px] text-gray-400">
            &copy; {new Date().getFullYear()} Impactpreneur Global. All rights reserved.
          </p>

          <div className="flex gap-3">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FaFacebookF className="w-3.5 h-3.5 text-gray-200" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FaXTwitter className="w-3.5 h-3.5 text-gray-200" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FaLinkedinIn className="w-3.5 h-3.5 text-gray-200" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <FaInstagram className="w-3.5 h-3.5 text-gray-200" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}