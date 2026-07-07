"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  MenuIcon,
  XIcon,
  ChevronDown,
} from "lucide-react"

import { useIsMobile } from "@/src/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu"
import { Button } from "@/src/components/ui/button"

export function Header() {
  const isMobile = useIsMobile()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [resourcesOpen, setResourcesOpen] = React.useState(false)

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-center bg-white shadow-md">
      <div className="flex items-center w-[90%] justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo3.png" alt="Logo" width={35} height={35} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/howItWorks">How It Works</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/blog">Blogs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
{/* 
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[300px] space-y-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/resources/blogs">
                          <div className="font-medium">Event</div>
                          <p className="text-sm text-muted-foreground">
                            Thoughtful articles on impact-driven ventures.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}


              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/event">Event</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/productServices">Product/Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button className="hidden md:inline-flex">
            Join Now
          </Button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>
            <XIcon />
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex flex-col px-4 space-y-1">
          <Link onClick={() => setMobileOpen(false)} href="/about" className="py-2 border-b">
            About
          </Link>

          <Link onClick={() => setMobileOpen(false)} href="/programs" className="py-2 border-b">
            Programs
          </Link>

          {/* Resources Dropdown (CLICK-BASED) */}
          <button
            onClick={() => setResourcesOpen(!resourcesOpen)}
            className="flex items-center justify-between py-2 border-b text-left"
          >
            Resources
            <ChevronDown
              className={`transition-transform ${
                resourcesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {resourcesOpen && (
            <div className="pl-4">
              <Link
                href="/resources/blogs"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm"
              >
                Blog
              </Link>
            </div>
          )}

          <Link onClick={() => setMobileOpen(false)} href="/our-team" className="py-2 border-b">
            Our Team
          </Link>

          <Link onClick={() => setMobileOpen(false)} href="/contact" className="py-2 border-b">
            Contact
          </Link>

          <Button className="mt-4">Join Now</Button>
        </nav>
      </aside>
    </div>
  )
}
