import { motion } from "motion/react";
import { Heart, Target, Award, Users } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your success is our success. We're committed to helping every business thrive.",
      iconBg: "bg-rose-500/10",
      iconColor: "text-rose-400",
      borderHover: "hover:border-rose-500/30",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on what matters: bringing real customers to your business.",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      borderHover: "hover:border-emerald-500/30",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Premium service at affordable prices. No compromises on excellence.",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-400",
      borderHover: "hover:border-amber-500/30",
    },
    {
      icon: Users,
      title: "Local Experts",
      description: "Based in Lucknow, we understand Indian businesses and local markets.",
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-400",
      borderHover: "hover:border-violet-500/30",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0c1d] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 sm:mb-20"
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
            transition={{ type: "spring" }}
          >
            <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
            <span className="text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
              About Us
            </span>
          </motion.div>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Turning New Shops into{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Lead Machines
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto">
            We're a team of digital marketing experts based in Lucknow, dedicated to helping local businesses succeed
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Left: Team Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
              <img
                src="https://images.unsplash.com/photo-1761912915167-558fa68f16b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlJTIwSW5kaWF8ZW58MXx8fHwxNzcyODU1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Orivo Tech Team"
                className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1d] via-transparent to-transparent" />

              {/* Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <motion.div
                    className="bg-white/[0.08] backdrop-blur-md rounded-xl p-3 sm:p-4 text-center border border-white/[0.08]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <AnimatedCounter target={10000} suffix="+" />
                    </p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">Clients</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/[0.08] backdrop-blur-md rounded-xl p-3 sm:p-4 text-center border border-white/[0.08]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <AnimatedCounter target={5} suffix="+" />
                    </p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">Years</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/[0.08] backdrop-blur-md rounded-xl p-3 sm:p-4 text-center border border-white/[0.08]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <AnimatedCounter target={99} suffix="%" />
                    </p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">Happy</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-br from-violet-600 to-cyan-500 text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl shadow-violet-500/20 z-20"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                5.0 ⭐
              </p>
              <p className="text-[10px] sm:text-xs text-white/80">Customer Rating</p>
            </motion.div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Mission: Every Business Deserves{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Success
              </span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base">
              <p>
                Founded in 2021 in Lucknow, Uttar Pradesh, Orivo Tech Agency was born from a simple
                observation:{" "}
                <span className="text-violet-400 font-medium">
                  countless amazing shops and businesses struggle to get customers
                </span>{" "}
                simply because they don't have a strong online presence.
              </p>
              <p>
                We saw talented entrepreneurs with incredible products and services who were invisible on
                Google Maps, had no social media presence, and missed out on thousands of potential customers
                every month.
              </p>
              <p className="text-white font-medium text-base sm:text-lg">
                So we decided to change that. 💪
              </p>
              <p>
                Today, we've helped over{" "}
                <span className="text-cyan-400 font-medium">10,000+ businesses</span> across India
                transform their digital presence and attract a flood of new customers. From tea stalls to
                boutiques, cafes to salons – we've seen it all, and we know what works.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-violet-600/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Heart className="w-4 h-4" />
              Join Our Success Story
            </motion.a>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={`group bg-white/[0.03] rounded-2xl p-5 sm:p-6 border border-white/[0.06] ${value.borderHover} transition-all duration-500 overflow-hidden relative`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className={`w-11 h-11 rounded-xl ${value.iconBg} flex items-center justify-center mb-4`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className={`w-5 h-5 ${value.iconColor}`} />
              </motion.div>
              <h4 className="text-base font-bold text-white mb-1.5">{value.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Location Badge */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-6 py-3">
            <span className="text-xl">🏢</span>
            <div className="text-left">
              <p className="text-white font-medium text-sm">Based in Lucknow, Serving All of India</p>
              <p className="text-gray-500 text-xs">Working with businesses from Kashmir to Kanyakumari</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
