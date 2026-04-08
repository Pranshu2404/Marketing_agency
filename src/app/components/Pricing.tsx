import { motion } from "motion/react";
import { AnimatedCounter } from "./AnimatedCounter";
import { Check, Sparkles, ArrowRight, Shield, Zap } from "lucide-react";

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
    { feature: "Professional Setup", diy: "❌ Trial & Error", us: "✅ Expert Setup" },
    { feature: "Time to Results", diy: "❌ 6+ Months", us: "✅ 2-4 Weeks" },
    { feature: "SEO Expertise", diy: "❌ Basic", us: "✅ Advanced" },
    { feature: "Ongoing Support", diy: "❌ None", us: "✅ 24/7 Support" },
    { feature: "Guaranteed Results", diy: "❌ No Guarantee", us: "✅ Money-Back" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0a0a1a] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]" />
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
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Pricing
            </span>
          </motion.div>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Simple,{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Transparent
            </span>{" "}
            Pricing
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-xl mx-auto">
            Try risk-free with 3 free leads, then continue for just ₹999/month
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Pricing Card */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Popular Badge */}
              <motion.div
                className="absolute -top-4 left-6 z-20"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white px-5 py-1.5 rounded-full font-bold shadow-xl shadow-violet-600/25 text-xs sm:text-sm flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  MOST POPULAR
                </div>
              </motion.div>

              {/* Pricing Card */}
              <div className="relative bg-white/[0.03] rounded-2xl p-6 sm:p-10 pt-10 sm:pt-12 border border-white/[0.08] hover:border-violet-500/20 transition-all duration-500 overflow-hidden">
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-violet-600/10 to-transparent rounded-bl-full" />

                <div className="relative z-10">
                  {/* Plan Name */}
                  <div className="mb-8">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Growth Plan
                    </h3>
                    <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">
                      Perfect for New Businesses
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-gray-600 line-through text-sm">₹2,999/mo</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-5xl sm:text-6xl font-bold text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        <AnimatedCounter target={999} prefix="₹" />
                      </span>
                      <span className="text-gray-500 text-lg">/month</span>
                    </div>
                    <motion.div
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-sm font-semibold text-emerald-400">
                        🎉 First 3 Leads Completely FREE!
                      </span>
                    </motion.div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.04 }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-md flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-400 text-sm sm:text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    className="group/btn w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl text-sm sm:text-base md:text-lg font-bold shadow-xl shadow-violet-600/20 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Claim Your 3 Free Leads Now
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>

                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5" />
                      No credit card
                    </span>
                    <span>•</span>
                    <span>Cancel anytime</span>
                    <span>•</span>
                    <span>Money-back guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white/[0.03] rounded-2xl border border-white/[0.06] overflow-hidden">
              <div className="p-5 sm:p-6 border-b border-white/[0.06]">
                <h3
                  className="text-lg sm:text-xl font-bold text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Why Choose Us?
                </h3>
                <p className="text-gray-500 text-sm mt-1">Orivo Tech vs DIY Approach</p>
              </div>

              <div className="divide-y divide-white/[0.04]">
                {comparison.map((row, index) => (
                  <motion.div
                    key={index}
                    className="p-4 sm:p-5 hover:bg-white/[0.02] transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <p className="text-white font-medium text-sm mb-2">{row.feature}</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-gray-600 text-xs">{row.diy}</span>
                      <span className="text-emerald-400 text-xs font-medium">{row.us}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Money-back guarantee */}
              <div className="p-5 sm:p-6 bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-t border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">100% Money-Back Guarantee</p>
                    <p className="text-gray-500 text-xs">
                      No results in 30 days? Full refund, no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
