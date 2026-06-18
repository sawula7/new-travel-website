import Image from "next/image";

const tours = [
  { id: 1, name: "Ancient Kingdoms Trail", image: "https://images.unsplash.com/photo-1586185456174-1c39e2b5b8ba?w=800&q=80", badge: "Best Seller", duration: "8 Days / 7 Nights", price: "$1,290", rating: 4.9, reviews: 284, highlights: ["Sigiriya Rock", "Dambulla Cave", "Polonnaruwa"] },
  { id: 2, name: "Southern Coast Escape", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", badge: "Top Rated", duration: "6 Days / 5 Nights", price: "$980", rating: 4.8, reviews: 196, highlights: ["Mirissa Beach", "Galle Fort", "Whale Watching"] },
  { id: 3, name: "Yala Wildlife Safari", image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80", badge: "Adventure", duration: "5 Days / 4 Nights", price: "$1,050", rating: 4.9, reviews: 152, highlights: ["Yala National Park", "Leopard Spotting", "Bird Watching"] },
  { id: 4, name: "Hill Country & Tea Trails", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", badge: "New", duration: "7 Days / 6 Nights", price: "$1,180", rating: 4.7, reviews: 89, highlights: ["Ella Rock Hike", "Tea Plantation", "Train Ride"] },
];

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-gradient-to-r from-[#2EC98A] to-[#26C8C6] text-white",
  "Top Rated": "bg-[#2EC98A] text-white",
  Adventure: "bg-blue-500 text-white",
  New: "bg-purple-500 text-white",
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "text-[#2EC98A]" : "text-[#E2F5F0]"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function FeaturedTours() {
  return (
    <section className="py-24 bg-[#F7FDFB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-[#2EC98A] text-sm tracking-widest uppercase font-medium">Handpicked for You</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1A2B2B] mt-3">Featured Tour Packages</h2>
          </div>
          <button className="text-[#2EC98A] border border-[#2EC98A]/50 hover:bg-[#2EC98A]/10 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap">View All Tours →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <div key={tour.id} className="group bg-white rounded-2xl overflow-hidden border border-[#E2F5F0] hover:border-[#2EC98A]/40 shadow-sm hover:shadow-lg hover:shadow-[#2EC98A]/10 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                <Image src={tour.image} alt={tour.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${badgeColors[tour.badge]}`}>{tour.badge}</span>
              </div>
              <div className="p-5">
                <h3 className="text-[#1A2B2B] font-semibold text-base mb-2 group-hover:text-[#2EC98A] transition-colors">{tour.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Stars rating={tour.rating} />
                  <span className="text-[#2EC98A] text-xs font-semibold">{tour.rating}</span>
                  <span className="text-[#6B7B7B] text-xs">({tour.reviews})</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tour.highlights.map((h) => (
                    <span key={h} className="text-xs text-[#6B7B7B] bg-[#F7FDFB] border border-[#E2F5F0] px-2 py-0.5 rounded-full">{h}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#E2F5F0]">
                  <div>
                    <span className="text-[#6B7B7B] text-xs">{tour.duration}</span>
                    <div className="text-[#2EC98A] font-bold text-lg">{tour.price} <span className="text-[#6B7B7B] text-xs font-normal">/ person</span></div>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-[#2EC98A]/10 hover:bg-[#2EC98A] border border-[#2EC98A]/30 flex items-center justify-center transition-all duration-300 group/btn">
                    <svg className="w-4 h-4 text-[#2EC98A] group-hover/btn:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
