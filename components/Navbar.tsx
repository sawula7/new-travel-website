"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0D1117]/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="font-playfair text-xl font-bold text-white">
            Ceylon <span className="text-[#C8A96E]">Journeys</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "Tours", "Destinations", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-sm text-[#8B949E] hover:text-[#C8A96E] transition-colors duration-300 tracking-wide"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-[#C8A96E] hover:bg-[#b8996e] text-[#0D1117] font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A96E]/25">
            Book Now
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D1117]/98 backdrop-blur-md border-t border-[#C8A96E]/10 px-6 py-6 flex flex-col gap-4">
          {["Home", "Tours", "Destinations", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-[#8B949E] hover:text-[#C8A96E] transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button className="mt-2 bg-[#C8A96E] text-[#0D1117] font-semibold text-sm px-6 py-2.5 rounded-full w-full">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
