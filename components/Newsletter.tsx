"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#2EC98A] to-[#26C8C6]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="text-4xl block mb-4">✈️</span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Start Your Sri Lanka Story
        </h2>
        <p className="text-white/80 mb-10 leading-relaxed">
          Join 12,000+ travelers who receive exclusive deals, hidden gems, and curated Sri Lanka travel guides straight to their inbox.
        </p>

        {submitted ? (
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <span className="text-4xl block mb-3">🎉</span>
            <h3 className="text-[#1A2B2B] font-semibold text-xl mb-2">You&apos;re in!</h3>
            <p className="text-[#6B7B7B] text-sm">Watch your inbox for extraordinary Sri Lanka travel inspiration.</p>
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
              className="flex-1 bg-white/20 border border-white/30 focus:border-white/60 rounded-xl px-5 py-4 text-white placeholder:text-white/60 outline-none transition-colors text-sm"
            />
            <button
              type="submit"
              className="bg-white text-[#2EC98A] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/90 hover:shadow-xl whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}
        <p className="text-white/70 text-xs mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
      </div>
    </section>
  );
}
