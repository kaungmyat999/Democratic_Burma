"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full border-b bg-white">
      <div className="w-full max-w-7xl mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-[#D30000]">Democratic Burma</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="/news" className="text-sm font-medium hover:underline">
            News
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4">
          <Link
            href="/volunteer"
            className="inline-flex items-center justify-center px-4 py-2 bg-[#D30000] text-white rounded-md text-sm font-medium hover:bg-[#B00000] transition-colors"
          >
            Get Involved
          </Link>
        </div>

        <button className="ml-4 md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Link href="/about" className="text-sm font-medium hover:underline py-2">
              About
            </Link>
            <Link href="/news" className="text-sm font-medium hover:underline py-2">
              News
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline py-2">
              Contact
            </Link>
            <Link href="/get-involved" className="text-sm font-medium hover:underline py-2 text-[#D30000] font-bold">
              Get Involved
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
