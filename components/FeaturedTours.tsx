import Image from "next/image";

const featured = {
  category: "Wildlife Tours",
  name: "Deep Dive into the Wild",
  image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80",
  duration: "16 Nights & 17 Days",
};

const tours = [
  { category: "Hill Country Tours", name: "A Quick Escape to the Hills", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", duration: "08 Nights & 09 Days" },
  { category: "Family Tours", name: "Family Escapade in Paradise", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80", duration: "18 Nights & 19 Days" },
  { category: "Cultural Tours", name: "The Cultural Odyssey", image: "https://images.unsplash.com/photo-1567591370842-9b6cb9e7c92b?w=800&q=80", duration: "08 Nights & 09 Days" },
  { category: "Ayurvedic Tours", name: "Wander & Awaken", image: "https://images.unsplash.com/photo-1586185456174-1c39e2b5b8ba?w=800&q=80", duration: "10 Nights & 11 Days" },
  { category: "Honeymoon Tours", name: "Adventure, Culture & Love", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", duration: "16 Nights & 17 Days" },
];

export default function FeaturedTours() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-playfair font-bold text-[#1A2B2B]/[0.04] whitespace-nowrap" style={{ fontSize: "clamp(80px, 15vw, 200px)" }}>
          unforgettable
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-20">
          <div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#1A2B2B] leading-tight">Tour Packages</h2>
          </div>
          <div className="max-w-sm">
            <p className="text-[#6B7B7B] leading-relaxed mb-6">
              Embark on an unforgettable journey through Sri Lanka&apos;s stunning landscapes, rich history, and culture. Whether it be adventure or relaxation, Ceylon Paradise crafts seamless, tailor-made experiences just for you.
            </p>
            <button className="inline-flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-full bg-[#1A2B2B] flex items-center justify-center group-hover:bg-[#2EC98A] transition-colors duration-300">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
              <span className="text-sm font-semibold tracking-widest uppercase text-[#1A2B2B] group-hover:text-[#2EC98A] transition-colors">Explore</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="relative lg:w-[340px] flex-shrink-0 rounded-2xl overflow-hidden" style={{ minHeight: "680px" }}>
            <Image src={featured.image} alt={featured.name} fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B2B]/90 via-[#1A2B2B]/20 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="bg-[#C8440A] text-white text-xs font-bold px-3 py-1.5 rounded leading-tight block uppercase tracking-wide">
                Most Popular<br />Tour
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[#2EC98A] text-xs font-semibold uppercase tracking-widest mb-2">{featured.category}</p>
              <h3 className="text-white font-bold text-xl leading-snug mb-3">
                {featured.name}
                <span className="inline-block w-8 h-px bg-white ml-2 align-middle" />
              </h3>
              <p className="text-white/70 text-sm">{featured.duration}</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tours.map((tour) => (
              <div key={tour.name} className="group relative rounded-2xl overflow-hidden cursor-pointer" style={{ minHeight: "320px" }}>
                <Image src={tour.image} alt={tour.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B2B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#2EC98A] text-xs font-semibold uppercase tracking-widest mb-1">{tour.category}</p>
                  <h3 className="text-white font-bold text-base leading-snug mb-1">
                    {tour.name}
                    <span className="inline-block w-6 h-px bg-white ml-2 align-middle" />
                  </h3>
                  <p className="text-white/60 text-xs">{tour.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
