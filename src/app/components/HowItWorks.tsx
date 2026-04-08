import { motion } from "motion/react";
import { FileText, Sparkles, PhoneIncoming, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Register Free",
      description:
        "Simply fill out a quick form with your business details. Takes just 2 minutes — no payment required!",
      badge: "100% Free",
      color: "violet",
      gradientFrom: "from-violet-500",
      gradientTo: "to-purple-500",
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-400",
      borderHover: "hover:border-violet-500/30",
      badgeBg: "bg-violet-500/10",
      badgeText: "text-violet-400",
      badgeBorder: "border-violet-500/20",
      number: "01",
    },
    {
      icon: Sparkles,
      title: "We Create Magic",
      description:
        "Our experts build your Google Maps listing, professional Instagram & Facebook pages, and optimize your SEO.",
      badge: "First 3 Leads Free",
      color: "cyan",
      gradientFrom: "from-cyan-500",
      gradientTo: "to-teal-500",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
      borderHover: "hover:border-cyan-500/30",
      badgeBg: "bg-cyan-500/10",
      badgeText: "text-cyan-400",
      badgeBorder: "border-cyan-500/20",
      number: "02",
    },
    {
      icon: PhoneIncoming,
      title: "Leads Flood In",
      description:
        "Watch your phone ring with customer inquiries, orders, and bookings. See real growth in just weeks!",
      badge: "₹999/mo After",
      color: "emerald",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-green-500",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      borderHover: "hover:border-emerald-500/30",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/20",
      number: "03",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0c1d] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
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
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            <span className="text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Simple Process
            </span>
          </motion.div>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How It{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-xl mx-auto">
            Get your business online in 3 simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - Desktop */}
          {/* <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-px bg-gradient-to-r from-violet-500/30 via-cyan-500/30 to-emerald-500/30 transform -translate-y-1/2" /> */}

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Card */}
                <motion.div
                  className={`group relative bg-white/[0.03] rounded-2xl p-6 sm:p-8 border border-white/[0.06] ${step.borderHover} transition-all duration-500 overflow-hidden h-full`}
                  whileHover={{ y: -6 }}
                >
                  {/* Step number - top right */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <span
                      className="text-4xl sm:text-5xl font-bold text-white/[0.03]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 mb-5 px-3 py-1 ${step.badgeBg} border ${step.badgeBorder} rounded-full`}
                  >
                    <span className={`text-[10px] sm:text-xs font-semibold ${step.badgeText}`}>
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${step.iconBg} flex items-center justify-center mb-5`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${step.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>

                  {/* Bottom gradient line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.gradientFrom} ${step.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </motion.div>

                {/* Arrow - between cards on desktop */}
                {index < 2 && (
                  <motion.div
                    className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 w-8 h-8 bg-[#0c0c1d] border border-white/10 rounded-full items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15 }}
                  >
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl text-base font-bold shadow-xl shadow-violet-600/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Free Trial Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <p className="mt-3 text-gray-500 text-sm">
            No credit card required • Get results in 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
