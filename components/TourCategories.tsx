import Image from "next/image";

const categories = [
  { name: "Cultural Heritage", image: "https://images.unsplash.com/photo-1567591370842-9b6cb9e7c92b?w=800&q=80", icon: "🏛️", count: "45 Tours" },
  { name: "Beach & Coast", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", icon: "🏖️", count: "38 Tours" },
  { name: "Wildlife Safari", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", icon: "🐘", count: "28 Tours" },
  { name: "Hill Country", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", icon: "🌿", count: "32 Tours" },
  { name: "Adventure", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80", icon: "🏄", count: "24 Tours" },
  { name: "Wellness Retreat", image: "https://images.unsplash.com/photo-1586185456174-1c39e2b5b8ba?w=800&q=80", icon: "🧘", count: "18 Tours" },
];

export default function TourCategories() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-[#C8A96E] text-sm tracking-widest uppercase font-medium">Explore Sri Lanka</span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
          Tour Categories
        </h2>
        <p className="text-[#8B949E] max-w-2xl mx-auto">
          From ancient temples to pristine beaches, choose your perfect Sri Lankan adventure
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="group relative overflow-hidden rounded-2xl cursor-pointer h-48 md:h-64"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/90 via-[#0D1117]/30 to-transparent" />
            <div className="absolute inset-0 bg-[#C8A96E]/0 group-hover:bg-[#C8A96E]/10 transition-colors duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-2xl mb-2 block">{cat.icon}</span>
                  <h3 className="text-white font-semibold text-lg leading-tight">{cat.name}</h3>
                  <span className="text-[#C8A96E] text-sm">{cat.count}</span>
                </div>
                <div className="w-9 h-9 rounded-full border border-[#C8A96E]/50 flex items-center justify-center group-hover:bg-[#C8A96E] group-hover:border-[#C8A96E] transition-all duration-300">
                  <svg className="w-4 h-4 text-[#C8A96E] group-hover:text-[#0D1117] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
