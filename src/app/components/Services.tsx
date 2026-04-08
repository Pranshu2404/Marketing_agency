import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Instagram, TrendingUp, Zap, ArrowUpRight } from "lucide-react";

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: MapPin,
      title: "Google Maps Mastery",
      subtitle: "Top Local Ranking",
      description:
        "We create and optimize your Google Business Profile to dominate local searches. Your customers will find you first.",
      stat: "5,000+ Monthly Views",
      gradient: "from-rose-500 to-orange-500",
      glowColor: "rgba(244,63,94,0.15)",
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
    },
    {
      icon: Instagram,
      title: "Social Media Setup",
      subtitle: "Pro Pages Built",
      description:
        "Professional Instagram and Facebook business pages with engaging content strategy that builds your brand.",
      stat: "2,000+ Followers",
      gradient: "from-fuchsia-500 to-pink-500",
      glowColor: "rgba(217,70,239,0.15)",
      iconBg: "bg-fuchsia-500/10",
      iconColor: "text-fuchsia-400",
    },
    {
      icon: TrendingUp,
      title: "SEO Power-Up",
      subtitle: "Organic Growth",
      description:
        "Advanced SEO optimization to rank higher on Google and attract organic traffic that converts into paying customers.",
      stat: "Top 3 Rankings",
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "rgba(16,185,129,0.15)",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
    },
    {
      icon: Zap,
      title: "Ongoing Leads",
      subtitle: "₹999/mo After Free",
      description:
        "Continuous lead generation, monthly reports, and dedicated support to grow your business month after month.",
      stat: "50+ Leads/Month",
      gradient: "from-violet-500 to-blue-500",
      glowColor: "rgba(124,58,237,0.15)",
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-400",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0a0a1a] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
            <span className="text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Everything Your Business{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Needs
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Complete digital presence package designed specifically for Indian shops and new businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <motion.div
                className="relative h-full rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(400px circle at 50% 50%, ${service.glowColor}, transparent 70%)`,
                  }}
                />

                {/* Top row: icon + stat badge */}
                <div className="relative z-10 flex items-start justify-between mb-5">
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.iconBg} flex items-center justify-center`}
                    animate={hoveredCard === index ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} />
                  </motion.div>

                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">{service.stat}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                    {service.title}
                  </h3>
                  <div className="inline-block px-2.5 py-0.5 bg-white/5 rounded-md mb-3">
                    <span className="text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-violet-600/10 to-cyan-500/10 border border-violet-500/20 rounded-2xl px-6 py-4 sm:px-8 sm:py-5">
            <div className="text-left">
              <p className="text-white font-semibold text-sm sm:text-base">
                All Services Included in One Package
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                First 3 Leads FREE • Then just{" "}
                <span className="text-amber-400 font-semibold">₹999/month</span>
              </p>
            </div>
            <motion.a
              href="#contact"
              className="shrink-0 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-violet-600/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
