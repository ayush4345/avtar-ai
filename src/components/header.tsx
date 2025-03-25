"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-avtar-dark/80 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white mr-1">avtar</span>
          <Image
            src="/logo.svg"
            alt="avtar Logo"
            width={36}
            height={36}
            className="w-8 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-avtar-green transition-colors">
            Home
          </Link>
          <Link href="/proof-of-trading" className="text-white hover:text-avtar-green transition-colors">
            Token
          </Link>
          <Link href="https://avtar.gitbook.io/docs/" target="_blank" className="text-white hover:text-avtar-green transition-colors">
            Doc
          </Link>
          <Link href="https://github.com/thirdfi" target="_blank" className="text-white hover:text-avtar-green transition-colors">
            Github
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://data.thirdfi.org/" target="_blank">
            <Button variant="outline" className="border-avtar-green text-avtar-green hover:bg-avtar-green/10">
              Data-To-Earn
            </Button>
          </Link>
          <Link href="https://t.me/avtarxbt_bot" target="_blank">
            <Button className="bg-avtar-green hover:bg-avtar-green/90 text-white">
              Launch AI Agent
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-avtar-dark border-t border-avtar-green/20 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-avtar-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/proof-of-trading"
              className="text-white hover:text-avtar-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Token
            </Link>
            <Link
              href="https://avtar.gitbook.io/docs/"
              target="_blank"
              className="text-white hover:text-avtar-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Doc
            </Link>
            <Link
              href="https://github.com/thirdfi"
              target="_blank"
              className="text-white hover:text-avtar-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Github
            </Link>
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="https://data.thirdfi.org/" target="_blank">
                <Button variant="outline" className="w-full border-avtar-green text-avtar-green hover:bg-avtar-green/10">
                  Data-To-Earn
                </Button>
              </Link>
              <Link href="https://t.me/avtarxbt_bot" target="_blank">
                <Button className="w-full bg-avtar-green hover:bg-avtar-green/90 text-white">
                  Launch AI Agent
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
