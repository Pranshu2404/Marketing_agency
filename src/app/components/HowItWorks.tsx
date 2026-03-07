import { motion } from "motion/react";
import { FileText, Sparkles, PhoneIncoming, Badge } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: "Register Free",
      description: "Simply fill out a quick form with your business details and upload a shop photo. Takes just 2 minutes!",
      badge: "100% Free",
      color: "#F97316",
      delay: 0.2,
    },
    {
      icon: Sparkles,
      title: "We Create Magic",
      description: "Our experts build your Google Maps listing, professional Instagram & Facebook pages, and optimize your SEO.",
      badge: "First 3 Leads Free",
      color: "#FCD34D",
      delay: 0.4,
    },
    {
      icon: PhoneIncoming,
      title: "Leads Flood In",
      description: "Watch your phone explode with customer inquiries, orders, and bookings. See real growth in just weeks!",
      badge: "₹999/mo After",
      color: "#10B981",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-5 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#1E3A8A_1px,transparent_1px)] bg-[length:40px_40px]" />
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
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Badge className="w-16 h-16 text-[#F97316]" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E3A8A] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your business online and start attracting customers in just 3 simple steps
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] via-[#FCD34D] to-[#10B981] transform -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay, duration: 0.6 }}
              >
                {/* Card */}
                <motion.div
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow relative z-10 border-2 border-transparent hover:border-[#F97316]"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>

                  {/* Free Badge */}
                  <motion.div
                    className="inline-block mb-4 px-4 py-1 bg-gradient-to-r from-[#F97316]/20 to-[#FCD34D]/20 border border-[#F97316]/40 rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-sm font-bold text-[#F97316]">{step.badge}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="ml-6 mb-6 inline-block"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20 0%, ${step.color}40 100%)`,
                      }}
                    >
                      <step.icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Animated Dots */}
                  <div className="mt-6 flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: step.color }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Arrow - Desktop */}
                {index < 2 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: step.delay + 0.3 }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#F97316]">
                      <motion.span
                        className="text-2xl"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {/* <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-full text-xl font-bold shadow-xl hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial Today 🚀
          </motion.button>
          <p className="mt-4 text-gray-600">No credit card required • Get results in 24 hours</p> */}
        </motion.div>
      </div>
    </section>
  );
}
