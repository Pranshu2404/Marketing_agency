import { motion, useMotionValue, useTransform } from "motion/react";
import { Star, TrendingUp, Users, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 800], [2, -2]);
  const rotateY = useTransform(mouseX, [0, 1200], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32"
        style={{ rotateX, rotateY, perspective: 1200 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Trust Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm text-gray-300 font-medium">
              Trusted by <span className="text-white font-semibold">10,000+</span> Indian Businesses
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                100+ Customers
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
            <br />
            <span className="text-gray-300 block mt-2 sm:mt-0">in Weeks</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We build your{" "}
            <span className="text-violet-400 font-medium">Google Maps page</span>,{" "}
            <span className="text-purple-400 font-medium">Instagram/FB profiles</span>, and
            skyrocket your{" "}
            <span className="text-cyan-400 font-medium">SEO</span>
          </motion.p>

          {/* Price Banner */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border border-violet-500/30 rounded-full px-6 py-2.5 mb-10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-white font-semibold text-sm sm:text-base">
              First 3 Leads <span className="text-emerald-400">FREE</span> • Then Just{" "}
              <span className="text-amber-400">₹999</span>/Month
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg overflow-hidden shadow-2xl shadow-violet-600/25"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Claim Your Free Leads</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="tel:+919198058216"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>📞</span>
              <span>Call Now</span>
            </motion.a>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] hover:border-violet-500/30 transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-white">5.0 Rating</p>
                <p className="text-gray-500 text-sm">From Happy Clients</p>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative z-10">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">
                  <AnimatedCounter target={10000} suffix="+" />
                </p>
                <p className="text-gray-500 text-sm">Businesses Helped</p>
              </div>
            </motion.div>

            <motion.div
              className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] hover:border-purple-500/30 transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <div className="relative z-10">
                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">
                  <AnimatedCounter target={50} suffix="+" />
                </p>
                <p className="text-gray-500 text-sm">Average Leads/Month</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-7 h-11 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gradient-to-b from-violet-400 to-cyan-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a1a] to-transparent" />
    </section>
  );
}
