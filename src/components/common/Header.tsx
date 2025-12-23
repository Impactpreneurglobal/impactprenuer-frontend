"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, MenuIcon, XIcon } from "lucide-react"
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
import Image from "next/image"
import { Button } from "@/src/components/ui/button"

export function Header() {
  const isMobile = useIsMobile()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <div className="flex items-center justify-between px-4 py-3 shadow-md bg-white fixed top-0 left-0 w-full z-50">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>

      {/* Center: Navigation Menu (desktop) */}
      <div className="hidden md:flex flex-1 justify-center">
        <NavigationMenu viewport={isMobile}>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/our-team">Our Team</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right: Join button & Hamburger */}
      <div className="flex items-center gap-2">
        <Button className="hidden md:inline-flex">
          Join Our Community
        </Button>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile menu */}
{/* Dark overlay */}
{mobileOpen && (
  <div
    className="fixed inset-0 bg-black/50 z-30"
    onClick={() => setMobileOpen(false)}
  />
)}

{/* Sidebar menu */}
<div
  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 ${
    mobileOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Close button */}
  <div className="flex justify-end p-4">
    <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
      <XIcon />
    </button>
  </div>

  {/* Menu links */}
  <nav className="flex flex-col px-4">
    <Link href="/about" className="py-2 border-b">About</Link>
    <Link href="/our-team" className="py-2 border-b">Our Team</Link>
    <Link href="/contact" className="py-2 border-b">Contact</Link>
    <Link href="#" className="py-2 border-b">Programs</Link>
    <Link href="#" className="py-2 border-b">Resources</Link>
    <Button className="mt-4">Join Our Community</Button>
  </nav>
</div>

    </div>
  )
}
