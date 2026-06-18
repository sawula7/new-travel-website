"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8A96E]/5 via-transparent to-[#39D353]/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C8A96E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="text-4xl block mb-4">✈️</span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Start Your Sri Lanka Story
        </h2>
        <p className="text-[#8B949E] mb-10 leading-relaxed">
          Join 12,000+ travelers who receive exclusive deals, hidden gems, and curated Sri Lanka travel guides straight to their inbox.
        </p>

        {submitted ? (
          <div className="glass rounded-2xl p-8 text-center">
            <span className="text-4xl block mb-3">🎉</span>
            <h3 className="text-white font-semibold text-xl mb-2">You&apos;re in!</h3>
            <p className="text-[#8B949E] text-sm">Watch your inbox for extraordinary Sri Lanka travel inspiration.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-[#161B22] border border-white/10 focus:border-[#C8A96E]/50 rounded-xl px-5 py-4 text-[#E6EDF3] placeholder:text-[#8B949E] outline-none transition-colors text-sm"
            />
            <button
              type="submit"
              className="bg-[#C8A96E] hover:bg-[#b8996e] text-[#0D1117] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A96E]/30 whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}
        <p className="text-[#8B949E] text-xs mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
      </div>
    </section>
  );
}
