"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-300 ${scrolled ? 'bg-[#0a0b0f]/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <span className="text-2xl font-bold text-white mr-1 group-hover:text-[#00C3FF] transition-colors duration-300">Avtar<span className="text-[#00C3FF]">.</span>ai</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] group-hover:w-full transition-all duration-300"></div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-[#00C3FF] transition-colors relative group">
            <span>Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#features" className="text-white hover:text-[#00C3FF] transition-colors relative group">
            <span>Features</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="#about" className="text-white hover:text-[#00C3FF] transition-colors relative group">
            <span>About</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C3FF] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://t.me/avtarai_bot" target="_blank" className="btn-primary inline-flex items-center justify-center">
            <span className="flex items-center justify-center">
              Launch AI Agent
            </span>
          </Link>
        </div>

        <button className="md:hidden text-white hover:text-[#00C3FF] transition-colors" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0a0b0f]/95 backdrop-blur-md border-t border-[#00C3FF]/20 py-6 px-6 glass-effect">
          <nav className="flex flex-col space-y-5">
            <Link
              href="/"
              className="text-white hover:text-[#00C3FF] transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#features"
              className="text-white hover:text-[#00C3FF] transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-[#00C3FF] transition-colors text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="https://t.me/avtarai_bot" target="_blank" className="btn-primary inline-flex items-center justify-center">
                <span className="flex items-center justify-center">
                  Launch AI Agent
                </span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
