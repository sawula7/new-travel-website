const testimonials = [
  { quote: "Ceylon Paradise Holidays turned our honeymoon into a fairytale. The personalized itinerary, the gorgeous hotels, and our guide Suresh made every moment magical. Sri Lanka exceeded every expectation.", name: "Emma & James", location: "London, UK", flag: "🇬🇧", tour: "14-Day Honeymoon Package", rating: 5 },
  { quote: "I've traveled to 40+ countries, and this was hands-down the best-organized trip I've ever taken. The attention to detail, the local experiences, and the flexibility were outstanding.", name: "Michael Chen", location: "Singapore", flag: "🇸🇬", tour: "Cultural Heritage Tour", rating: 5 },
  { quote: "The wildlife safari in Yala was breathtaking — we spotted three leopards in one morning! The team's knowledge of animal behavior made all the difference. Truly unforgettable.", name: "Sarah Müller", location: "Berlin, Germany", flag: "🇩🇪", tour: "Yala Safari Expedition", rating: 5 },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#2EC98A]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#2EC98A]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#2EC98A] text-sm tracking-widest uppercase font-medium">Real Stories</span>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#1A2B2B] mt-3 mb-4">Voices of Our Travelers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white shadow-sm border border-[#E2F5F0] hover:border-[#2EC98A]/30 hover:shadow-md rounded-2xl p-8 flex flex-col gap-5 transition-all duration-500 hover:-translate-y-1">
              <div className="text-[#2EC98A]/20 font-playfair text-6xl leading-none select-none">&ldquo;</div>
              <p className="text-[#1A2B2B] leading-relaxed -mt-6">{t.quote}</p>
              <Stars n={t.rating} />
              <div className="pt-4 border-t border-[#E2F5F0] flex items-center justify-between">
                <div>
                  <div className="text-[#1A2B2B] font-semibold">{t.flag} {t.name}</div>
                  <div className="text-[#6B7B7B] text-xs">{t.location}</div>
                </div>
                <span className="text-[#2EC98A] text-xs bg-[#2EC98A]/10 px-3 py-1 rounded-full">{t.tour}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
