import Link from "next/link";

const links = {
  Tours: ["Cultural Heritage", "Beach & Coast", "Wildlife Safari", "Hill Country", "Adventure", "Wellness Retreat"],
  Destinations: ["Sigiriya", "Galle", "Kandy", "Ella", "Yala", "Mirissa"],
  Company: ["About Us", "Our Team", "Careers", "Press", "Blog", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-[#F7FDFB] border-t border-[#E2F5F0]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🌿</span>
              <span className="font-playfair text-xl font-bold text-[#1A2B2B]">Ceylon <span className="text-[#2EC98A]">Paradise</span></span>
            </Link>
            <p className="text-[#6B7B7B] text-sm leading-relaxed mb-6 max-w-xs">Sri Lanka&apos;s premier destination management company, crafting unforgettable journeys since 2009.</p>
            <div className="flex gap-3">
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a2 2 0 012 2v8a2 2 0 01-2 2h-11a2 2 0 01-2-2v-8a2 2 0 012-2z" },
                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              ].map((s) => (
                <button key={s.label} aria-label={s.label} className="w-9 h-9 rounded-full border border-[#E2F5F0] hover:border-[#2EC98A]/50 flex items-center justify-center text-[#6B7B7B] hover:text-[#2EC98A] transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[#1A2B2B] font-semibold text-sm mb-5 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}><Link href="#" className="text-[#6B7B7B] hover:text-[#2EC98A] text-sm transition-colors duration-300">{item}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#E2F5F0] pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { icon: "📍", label: "No. 42, Galle Road, Colombo 03, Sri Lanka" },
            { icon: "📞", label: "+94 11 234 5678" },
            { icon: "✉️", label: "hello@ceylonparadise.lk" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-3 text-[#6B7B7B] text-sm"><span>{c.icon}</span><span>{c.label}</span></div>
          ))}
        </div>
        <div className="border-t border-[#E2F5F0] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6B7B7B] text-xs">© 2025 Ceylon Paradise Holidays. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-[#6B7B7B] hover:text-[#2EC98A] text-xs transition-colors duration-300">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
