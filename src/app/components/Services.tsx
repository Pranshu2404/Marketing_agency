import { motion } from "motion/react";
import { useState } from "react";
import { MapPin, Instagram, TrendingUp, Zap } from "lucide-react";

export function Services() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const services = [
    {
      icon: MapPin,
      title: "Google Maps Mastery",
      subtitle: "Top Local Ranking",
      description: "We create and optimize your Google Business Profile to dominate local searches.",
      beforeStat: "0 Map Views",
      afterStat: "5,000+ Monthly Views",
      color: "#EA4335",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Instagram,
      title: "Social Media Setup",
      subtitle: "Pro Pages Built",
      description: "Professional Instagram and Facebook business pages with engaging content strategy.",
      beforeStat: "No Social Presence",
      afterStat: "2,000+ Followers",
      color: "#E1306C",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "SEO Power-Up",
      subtitle: "Organic Leads",
      description: "Advanced SEO optimization to rank higher on Google and attract organic traffic.",
      beforeStat: "Page 10 on Google",
      afterStat: "Top 3 Rankings",
      color: "#10B981",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Ongoing Leads",
      subtitle: "₹999/mo After Free",
      description: "Continuous lead generation, monthly reports, and dedicated support to grow your business.",
      beforeStat: "0-5 Leads/Month",
      afterStat: "50+ Leads/Month",
      color: "#F97316",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#F97316]/20 to-[#FCD34D]/20 border border-[#F97316]/40 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="text-[#F97316] font-bold">Our Services</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E3A8A] mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete digital presence package designed specifically for Indian shops and new businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative h-[320px] perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setFlippedCard(index)}
              onHoverEnd={() => setFlippedCard(null)}
            >
              {/* Card Container */}
              <motion.div
                className="relative w-full h-full"
                // animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                // transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                // style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 rounded-3xl p-12 bg-white shadow-xl border-2 border-transparent hover:border-[#F97316] transition-colors"
                  // style={{
                  //   backfaceVisibility: "hidden",
                  //   transform: "rotateY(0deg)",
                  // }}
                >
                  {/* Icon Circle */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    animate={{ rotate: flippedCard === index ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">
                    {service.title}
                  </h3>

                  {/* Subtitle */}
                  <div className="inline-block px-4 py-1 bg-[#FCD34D]/20 rounded-full mb-4">
                    <span className="text-sm font-bold text-[#1E3A8A]">{service.subtitle}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Hover Hint */}
                  {/* <motion.div
                    className="absolute bottom-8 left-8 right-8 text-center text-sm text-gray-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Hover to see results →
                  </motion.div> */}
                </div>

                {/* Back Side - Before/After Stats */}
                {/* <div
                  className={`absolute inset-0 rounded-3xl p-8 bg-gradient-to-br ${service.gradient} shadow-xl flex flex-col items-center justify-center`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-3xl font-bold text-white mb-8">
                    Real Results
                  </h3> */}

                  {/* Before/After Comparison */}
                  {/* <div className="w-full space-y-6"> */}
                    {/* Before */}
                    {/* <motion.div
                      className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30"
                      initial={{ x: -50, opacity: 0 }}
                      animate={flippedCard === index ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-white/70 text-sm mb-2">BEFORE</p>
                      <p className="text-2xl font-bold text-white">{service.beforeStat}</p>
                    </motion.div> */}

                    {/* Arrow */}
                    {/* <motion.div
                      className="text-center"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <span className="text-5xl text-white">↓</span>
                    </motion.div> */}

                    {/* After */}
                    {/* <motion.div
                      className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/50 shadow-lg"
                      initial={{ x: 50, opacity: 0 }}
                      animate={flippedCard === index ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-white/70 text-sm mb-2">AFTER</p>
                      <p className="text-3xl font-bold text-white">{service.afterStat}</p>
                    </motion.div> */}
                  {/* </div> */}

                  {/* Success Badge */}
                  {/* <motion.div
                    className="mt-6 px-6 py-2 bg-white rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="font-bold" style={{ color: service.color }}>
                      ✓ Proven Results
                    </span>
                  </motion.div> */}
                {/* </div> */}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl p-8 shadow-2xl">
            <p className="text-2xl font-bold text-white mb-2">
              All Services Included in One Package
            </p>
            <p className="text-[#FCD34D] text-xl">
              First 3 Leads FREE • Then just ₹999/month
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
