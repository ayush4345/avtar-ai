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
          <span className="text-2xl font-bold text-white mr-1">Avtar.ai</span>
        </Link>

        {/* <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-avtar-blue transition-colors">
            Home
          </Link>
          <Link href="" target="_blank" className="text-white hover:text-avtar-blue transition-colors">
            Doc
          </Link>
          <Link href="" target="_blank" className="text-white hover:text-avtar-blue transition-colors">
            Github
          </Link>
        </nav> */}

        <div className="hidden md:flex items-center space-x-4">
          <Link href="" target="_blank">
            <Button className="bg-avtar-blue hover:bg-avtar-blue/90 text-white">
              Launch AI Agent
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-avtar-dark border-t border-avtar-blue/20 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white hover:text-avtar-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href=""
              target="_blank"
              className="text-white hover:text-avtar-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Doc
            </Link>
            <Link
              href=""
              target="_blank"
              className="text-white hover:text-avtar-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Github
            </Link>
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="" target="_blank">
                <Button className="w-full bg-avtar-blue hover:bg-avtar-blue/90 text-white">
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
