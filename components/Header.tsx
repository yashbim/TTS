// components/Header.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // install lucide-react if not already: npm i lucide-react

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-blue-600/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logototaltextilesolutions.png"
              alt="Total Textile Solutions Logo"
              width={300}
              height={48}
              priority
              className=" border-white rounded-lg bg-white/90 p-1"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-yellow-300 transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-yellow-300 transition-colors">
              About
            </a>
            <a href="#services" className="text-white hover:text-yellow-300 transition-colors">
              Services
            </a>
            <a href="#qualities" className="text-white hover:text-yellow-300 transition-colors">
              Values
            </a>
            <a href="#contact" className="text-white hover:text-yellow-300 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Pane */}
      {mobileOpen && (
        <div className="md:hidden bg-blue-700 px-6 py-4 space-y-4 animate-slide-in">
          <a href="#home" className="block text-white hover:text-yellow-300">Home</a>
          <a href="#about" className="block text-white hover:text-yellow-300">About</a>
          <a href="#services" className="block text-white hover:text-yellow-300">Services</a>
          <a href="#qualities" className="block text-white hover:text-yellow-300">Values</a>
          <a href="#contact" className="block text-white hover:text-yellow-300">Contact</a>
        </div>
      )}
    </nav>
  );
}
