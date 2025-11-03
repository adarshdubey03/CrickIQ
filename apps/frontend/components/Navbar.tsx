"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Matches", href: "/matches" },
    { name: "Players", href: "/players" },
    { name: "Stats", href: "/stats" },
    { name: "Insights", href: "/insights" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#35CAFE] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-display font-semibold tracking-wide text-white"
        >
          Crick<span className="text-[#F5895A]">IQ</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-white font-medium transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#F5895A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-md font-medium bg-[#F5895A] text-white hover:bg-[#e9774d] transition-colors duration-200">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-[#F5895A] transition"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#35CAFE] border-t border-white/20">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-white font-medium hover:bg-[#F5895A] hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="px-6 py-3">
            <button className="w-full px-5 py-2 rounded-md font-medium bg-[#F5895A] text-white hover:bg-[#e9774d] transition-colors duration-200">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
