"use client";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { name: "Beach Tours", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80" },
  { name: "Cultural Tours", image: "https://images.unsplash.com/photo-1567591370842-9b6cb9e7c92b?w=800&q=80" },
  { name: "Wildlife Tours", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80" },
  { name: "Family Tours", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80" },
  { name: "Hill Country", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" },
  { name: "Wellness", image: "https://images.unsplash.com/photo-1586185456174-1c39e2b5b8ba?w=800&q=80" },
];

export default function TourCategories() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#E8F6FF]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          <div className="flex-shrink-0">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#1A2B2B] leading-tight">
              Tour<br />Categories
            </h2>
          </div>
          <div className="flex-1 max-w-sm md:pt-2">
            <p className="text-[#6B7B7B] text-base leading-relaxed">
              As Sri Lanka's leading travel agency, we craft seamless journeys to iconic and hidden destinations.
            </p>
          </div>
          <div className="flex-shrink-0 md:pt-2">
            <button className="w-12 h-12 rounded-full bg-[#1A2B2B] flex items-center justify-center hover:bg-[#2EC98A] transition-colors duration-300 group">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <span className="block text-xs text-[#1A2B2B] font-semibold tracking-widest uppercase mt-2 text-center">Explore</span>
          </div>
        </div>

        {/* Cards row */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              onClick={() => setActive(i)}
              className="group relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
              style={{ width: "calc(25% - 12px)", minWidth: "200px", height: "380px" }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B2B]/80 via-transparent to-transparent" />
              {/* Category label bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <p className="text-white font-bold text-base uppercase tracking-wider leading-tight">
                    {cat.name}
                    <span className="inline-block w-6 h-px bg-white ml-2 align-middle" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav arrows */}
        <div className="flex gap-3 mt-8 justify-end">
          {[
            <path key="l" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />,
            <path key="r" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />,
          ].map((icon, i) => (
            <button
              key={i}
              className="w-10 h-10 rounded-full border border-[#1A2B2B]/20 hover:border-[#2EC98A] hover:text-[#2EC98A] flex items-center justify-center text-[#1A2B2B] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icon}</svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
