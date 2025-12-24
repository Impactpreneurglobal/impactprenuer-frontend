import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="text-white lg:py-6 mt-12 w-full">
      <div className="container bg-[#003715] lg:rounded-[12px] mx-auto px-5 py-10">
        
        {/* Top: Logo + Navigation */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20 mb-10">
          
          {/* Logo */}
          <div className="flex justify-center lg:justify-start lg:items-center lg:pl-20" >
            <Link href="/about" className="hover:underline">
              <Image src="/logo2.png" alt="Impactpreneur Global" width={120} height={40} />
            </Link>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-around gap-10 w-full lg:w-3/4">
            {/* Column 1 */}
            <ul className="text-center sm:text-left">
              <li className="mb-5">
                <p className="font-bold text-[16px]">Company</p>
              </li>
              <li><Link href="/about" className="hover:underline text-light">About Us</Link></li>
              <li><Link href="/programs" className="hover:underline text-light">Programs</Link></li>
              <li><Link href="/blog" className="hover:underline text-light">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline text-light">Contact Us</Link></li>
            </ul>

            {/* Column 2 */}
            <ul className="text-center sm:text-left">
              <li className="mb-5">
                <p className="font-bold text-[16px]">Resources</p>
              </li>
              <li><Link href="/about" className="hover:underline text-light">About Us</Link></li>
              <li><Link href="/programs" className="hover:underline text-light">Programs</Link></li>
              <li><Link href="/blog" className="hover:underline text-light">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline text-light">Contact Us</Link></li>
            </ul>

            {/* Column 3 */}
            <ul className="text-center sm:text-left">
              <li className="mb-5">
                <p className="font-bold text-[16px]">Support</p>
              </li>
              <li><Link href="/faq" className="hover:underline text-light">FAQ</Link></li>
              <li><Link href="/help" className="hover:underline text-light">Help Center</Link></li>
              <li><Link href="/terms" className="hover:underline text-light">Terms</Link></li>
              <li><Link href="/privacy" className="hover:underline text-light">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 sm:gap-6 px-5 pb-6">
          <p className="font-semibold">Follow us:</p>
          <div className="flex gap-5">
            <a href="#" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125 transition-transform duration-300">
              <FaTwitter className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125 transition-transform duration-300">
              <FaLinkedin className="w-6 h-6 hover:text-blue-600 transition-colors" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="transform hover:scale-125 transition-transform duration-300">
              <FaGithub className="w-6 h-6 hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center sm:text-left py-4 border-t border-white/20">
          &copy; {new Date().getFullYear()} Impactpreneur Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
