import { motion } from "motion/react";
import { Check, X, Sparkles, Zap } from "lucide-react";

export function Pricing() {
  const features = [
    "Google Maps Business Profile Setup",
    "Instagram Business Page Creation",
    "Facebook Business Page Setup",
    "SEO Optimization & Keywords",
    "Professional Business Photos",
    "Unlimited Lead Generation",
    "Monthly Performance Reports",
    "24/7 Customer Support",
    "Free Updates & Maintenance",
    "Dedicated Account Manager",
  ];

  const comparison = [
    { feature: "Professional Setup", diy: false, us: true },
    { feature: "Time to Results", diy: false, us: true },
    { feature: "SEO Expertise", diy: false, us: true },
    { feature: "Ongoing Support", diy: false, us: true },
    { feature: "Guaranteed Results", diy: false, us: true },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1E3A8A] to-[#1E3A8A]/95 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-[#F97316]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-[#FCD34D]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.5, 1], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-3 sm:mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-10 h-10 sm:w-16 sm:h-16 text-[#FCD34D]" />
          </motion.div>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm sm:text-xl text-[#F8FAFC]/80 max-w-2xl mx-auto px-4">
            Try risk-free with 3 free leads, then continue for just ₹999/month
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {/* Popular Badge */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20 w-fit whitespace-nowrap"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white px-5 py-1.5 sm:px-8 sm:py-2 rounded-full font-bold shadow-xl text-xs sm:text-base">
                🔥 MOST POPULAR
              </div>
            </motion.div>

            {/* Pricing Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 pt-10 sm:pt-10 shadow-2xl border-4 border-[#FCD34D] relative overflow-hidden">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FCD34D]/20 to-transparent"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10 pt-4 sm:pt-0">
                {/* Plan Name */}
                <div className="text-center mb-6 sm:mb-8 mt-5 sm:mt-0">
                  <h3 className="text-xl sm:text-3xl font-bold text-[#1E3A8A] mb-2">
                    Growth Plan
                  </h3>
                  <p className="text-[10px] sm:text-base text-gray-600 uppercase tracking-wider font-semibold">Perfect for New Businesses</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-left">
                      <p className="text-xs sm:text-sm text-gray-500 line-through">₹2,999/mo</p>
                      <div className="flex items-baseline">
                        <span className="text-4xl sm:text-6xl font-extrabold text-[#1E3A8A]">₹999</span>
                        <span className="text-xl sm:text-2xl text-gray-600 ml-2">/month</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-[#10B981] to-[#059669] text-white rounded-full font-bold text-sm sm:text-lg shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    First 3 Leads Completely FREE! 🎉
                  </motion.div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                {/* <motion.button
                  className="w-full py-5 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Claim Your 3 Free Leads Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="w-6 h-6" />
                  </motion.span>
                </motion.button> */}

                {/* <p className="text-center text-sm text-gray-500 mt-4">
                  No credit card required • Cancel anytime • Money-back guarantee
                </p> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Orivo Tech vs DIY?
          </h3>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="min-w-[500px]">
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/20 bg-white/5">
                  <div className="text-white font-bold">Feature</div>
                  <div className="text-center text-white font-bold">DIY Approach</div>
                  <div className="text-center text-[#FCD34D] font-bold">Orivo Tech Agency</div>
                </div>

                {/* Table Rows */}
                {comparison.map((row, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-white">{row.feature}</div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                        <X className="w-5 h-5 text-red-500" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-[#10B981]/20 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-[#10B981]" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Money-Back Guarantee */}
        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block bg-[#FCD34D]/20 border-2 border-[#FCD34D] rounded-2xl p-6">
            <p className="text-2xl font-bold text-white mb-2">
              💯 100% Money-Back Guarantee
            </p>
            <p className="text-[#F8FAFC]/80">
              If you don't get results in 30 days, we'll refund every rupee
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
