"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon, XIcon } from "lucide-react"

import { useIsMobile } from "@/src/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import { Button } from "@/src/components/ui/button"

export function Header() {
  const isMobile = useIsMobile()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const navLinks = [
    { title: "How It Works", href: "/howItWorks" },
    { title: "Blog", href: "/blog" },
    { title: "Events", href: "/event" },
    { title: "Product/Services", href: "/productServices" },
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 z-50 w-full flex items-center justify-center bg-white shadow-md">
      <div className="flex items-center w-[90%] justify-between px-4 py-3">
        {/* Brand Logo */}
        <Link href="/">
          <Image src="/logo3.png" alt="Logo" width={35} height={35} priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href={link.href}>{link.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA & Mobile Hamburger Button */}
        <div className="flex items-center gap-2">
          <Link href="/join">
            <Button className="hidden md:inline-flex bg-[#008000] hover:bg-green-800 text-white font-medium rounded-full px-6">
              Join Now
            </Button>
          </Link>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
          >
            <MenuIcon className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 h-[80%] bg-white flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200">
          {/* Top Header Bar inside Mobile Menu */}
          <div>
            <div className="flex items-center justify-between pb-8">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Image src="/logo3.png" alt="Logo" width={35} height={35} />
              </Link>

              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
                aria-label="Close Menu"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-6 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 hover:text-green-700 text-lg font-normal transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom Call to Action Button */}
          <div className="pb-4">
            <Link href="/join" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-[#008000] hover:bg-green-800 text-white font-medium py-6 rounded-2xl text-base shadow-sm">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}