export default function StatsBar() {
  const stats = [
    { value: "15+", label: "Years Experience", icon: "🏆" },
    { value: "50,000+", label: "Happy Travelers", icon: "✈️" },
    { value: "200+", label: "Destinations", icon: "📍" },
    { value: "98%", label: "Satisfaction Rate", icon: "⭐" },
  ];

  return (
    <section className="py-12 border-y border-[#C8A96E]/10 bg-[#161B22]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center group">
              <span className="text-2xl mb-2">{stat.icon}</span>
              <span className="font-playfair text-3xl md:text-4xl font-bold text-[#C8A96E] mb-1">
                {stat.value}
              </span>
              <span className="text-[#8B949E] text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
