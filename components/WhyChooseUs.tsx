const features = [
  { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Licensed & Certified", description: "Fully accredited by the Sri Lanka Tourism Development Authority with 15+ years of proven excellence." },
  { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Expert Local Guides", description: "Our certified guides are passionate locals who bring authentic knowledge and insider stories to every tour." },
  { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>, title: "Tailor-Made Itineraries", description: "Every journey is unique. We craft custom itineraries that perfectly match your pace, interests, and budget." },
  { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, title: "24/7 Support", description: "Travel with complete peace of mind. Our dedicated support team is always just a call away, day or night." },
  { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Best Price Guarantee", description: "We promise the best value for your investment. Find it cheaper elsewhere and we'll match it." },
  { icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, title: "Responsible Tourism", description: "We partner with local communities and prioritize eco-friendly practices to protect Sri Lanka's natural heritage." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 bg-[#F7FDFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#2EC98A] text-sm tracking-widest uppercase font-medium">Why Travel with Us</span>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#1A2B2B] mt-3 mb-4">The Ceylon Paradise Difference</h2>
          <p className="text-[#6B7B7B] max-w-2xl mx-auto">We don&apos;t just plan trips — we create memories that last a lifetime</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-2xl border border-[#E2F5F0] hover:border-[#2EC98A]/30 bg-white hover:bg-white transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-md">
              <div className="w-14 h-14 rounded-xl bg-[#2EC98A]/10 border border-[#2EC98A]/20 flex items-center justify-center text-[#2EC98A] mb-5 group-hover:bg-[#2EC98A]/20 transition-colors duration-300">{f.icon}</div>
              <h3 className="text-[#1A2B2B] font-semibold text-xl mb-3">{f.title}</h3>
              <p className="text-[#6B7B7B] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
