import { motion } from "motion/react";
import { Star, TrendingUp, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A] to-[#2563EB]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1760262492874-80283261b99c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXN0bGluZyUyMEluZGlhbiUyMG1hcmtldCUyMHN0cmVldHxlbnwxfHx8fDE3NzI4NTU0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Bustling Indian Market"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/90 via-[#1E3A8A]/80 to-[#1E3A8A]/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#F97316] rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-[#FCD34D] rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust Badge */}
          {/* <motion.div
            className="inline-flex items-center gap-2 bg-[#FCD34D]/20 border border-[#FCD34D]/40 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-5 h-5 text-[#FCD34D] fill-[#FCD34D]" />
            <span className="text-[#FCD34D]">Trusted by 10,000+ Indian Businesses</span>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight mt-20 sm:mt-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Get <span className="text-[#F97316] bg-gradient-to-r from-[#F97316] to-[#FCD34D] bg-clip-text text-transparent">100+ Customers</span> in Weeks
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#FCD34D]">
              First 3 Leads FREE, Then Just ₹999/Month
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl text-[#F8FAFC] mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We build your <span className="text-[#F97316]">Google Maps page</span>, 
            <span className="text-[#F97316]"> Instagram/FB profiles</span>, and skyrocket your 
            <span className="text-[#F97316]"> SEO</span>. 
            <br className="hidden sm:block" />
            <span className="text-[#FCD34D]">For Shops & New Businesses Only.</span>
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-full text-xl font-bold shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Free Now
                <TrendingUp className="w-6 h-6" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#EA580C] to-[#F97316]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-xl font-bold hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Results 📊
            </motion.button>
          </motion.div> */}

          {/* Stats Counter */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-[#FCD34D] fill-[#FCD34D]" />
                <Star className="w-6 h-6 text-[#FCD34D] fill-[#FCD34D]" />
                <Star className="w-6 h-6 text-[#FCD34D] fill-[#FCD34D]" />
                <Star className="w-6 h-6 text-[#FCD34D] fill-[#FCD34D]" />
                <Star className="w-6 h-6 text-[#FCD34D] fill-[#FCD34D]" />
              </div>
              <p className="text-2xl font-bold text-white">5.0 Rating</p>
              <p className="text-[#F8FAFC]/70">From Happy Clients</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <Users className="w-12 h-12 text-[#F97316] mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">10,000+</p>
              <p className="text-[#F8FAFC]/70">Businesses Helped</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <TrendingUp className="w-12 h-12 text-[#FCD34D] mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">50+ Leads</p>
              <p className="text-[#F8FAFC]/70">Average Per Month</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
