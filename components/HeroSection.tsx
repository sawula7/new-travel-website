"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1567591370842-9b6cb9e7c92b?w=1920&q=80",
    location: "Kandy, Sri Lanka",
    label: "Temple of the Tooth",
  },
  {
    image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=1920&q=80",
    location: "Sigiriya, Sri Lanka",
    label: "Lion Rock Fortress",
  },
  {
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80",
    location: "Mirissa, Sri Lanka",
    label: "Southern Coast",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    location: "Ella, Sri Lanka",
    label: "Hill Country",
  },
  {
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1920&q=80",
    location: "Yala, Sri Lanka",
    label: "Wildlife Safari",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2 Adults");

  const goTo = useCallback((index: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 400);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
          style={{
            backgroundImage: `url('${slide.image}')`,
            opacity: i === current ? (fading ? 0 : 1) : 0,
          }}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2B2B]/65 via-[#1A2B2B]/35 to-[#1A2B2B]/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B2B]/40 to-transparent" />

      {/* Current location label — bottom left */}
      <div className="absolute bottom-20 left-8 z-20 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2EC98A]" />
        <span className="text-white/80 text-xs tracking-widest uppercase">{slides[current].label}</span>
        <span className="text-white/40 text-xs">·</span>
        <span className="text-white/50 text-xs">{slides[current].location}</span>
      </div>

      {/* Slide counter + arrows — bottom right */}
      <div className="absolute bottom-20 right-8 z-20 flex items-center gap-4">
        <span className="text-white/60 text-xs tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-white/30 hover:border-[#2EC98A] hover:bg-[#2EC98A]/20 flex items-center justify-center text-white transition-all duration-300"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-white/30 hover:border-[#2EC98A] hover:bg-[#2EC98A]/20 flex items-center justify-center text-white transition-all duration-300"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-6 h-1.5 bg-[#2EC98A]" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-40 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2EC98A] animate-pulse" />
          <span className="text-white text-xs font-medium tracking-widest uppercase">Award-Winning Sri Lanka Specialists</span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight max-w-5xl mb-6">
          Discover the{","}
          <span className="relative inline-block">
            <span className="text-[#2EC98A]">Pearl</span>
            <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2EC98A]/80 to-transparent" />
          </span>{","}
          of the Indian Ocean
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Immerse yourself in ancient civilizations, pristine beaches, lush tea gardens, and extraordinary wildlife. Your dream journey begins here.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur rounded-2xl p-2 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center gap-3 bg-[#F7FDFB] rounded-xl px-4 py-3">
            <svg className="w-5 h-5 text-[#2EC98A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="flex-1">
              <label className="text-[#2EC98A] text-xs block mb-0.5 font-medium">Destination</label>
              <select className="w-full bg-transparent text-[#1A2B2B] text-sm outline-none" value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option value="">All Sri Lanka</option>
                <option value="colombo">Colombo</option>
                <option value="kandy">Kandy</option>
                <option value="sigiriya">Sigiriya</option>
                <option value="galle">Galle</option>
                <option value="ella">Ella</option>
                <option value="yala">Yala National Park</option>
              </select>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 bg-[#F7FDFB] rounded-xl px-4 py-3">
            <svg className="w-5 h-5 text-[#2EC98A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="flex-1">
              <label className="text-[#2EC98A] text-xs block mb-0.5 font-medium">Travel Date</label>
              <input type="month" className="w-full bg-transparent text-[#1A2B2B] text-sm outline-none" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 bg-[#F7FDFB] rounded-xl px-4 py-3">
            <svg className="w-5 h-5 text-[#2EC98A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="flex-1">
              <label className="text-[#2EC98A] text-xs block mb-0.5 font-medium">Travelers</label>
              <select className="w-full bg-transparent text-[#1A2B2B] text-sm outline-none" value={travelers} onChange={(e) => setTravelers(e.target.value)}>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
                <option>2 Adults, 2 Children</option>
                <option>Group (5+)</option>
              </select>
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#2EC98A] to-[#26C8C6] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#2EC98A]/30 flex items-center gap-2 whitespace-nowrap">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Tours
          </button>
        </div>

        {/* Popular searches */}
        <div className="flex flex-wrap items-center gap-3 mt-8 justify-center">
          <span className="text-white/70 text-sm">Popular:</span>
          {["Kandy Temple", "Sigiriya Rock", "Yala Safari", "Galle Fort", "Train to Ella"].map((tag) => (
            <button key={tag} className="text-xs text-white border border-white/40 rounded-full px-3 py-1 hover:bg-white/20 transition-colors">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
