import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Zap } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Results", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-xl flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-7 h-7 text-white" />
              </motion.div>
              <div>
                <h1
                  className={`text-xl sm:text-2xl font-extrabold ${
                    isScrolled
                      ? "bg-gradient-to-r from-[#1E3A8A] to-[#F97316] bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  LeadBoost
                </h1>
                <p className={`text-[10px] sm:text-xs ${isScrolled ? "text-[#F97316]" : "text-[#FCD34D]"}`}>
                  Agency
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className={`font-semibold transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#F97316]"
                      : "text-white hover:text-[#FCD34D]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="tel:+917459963373"
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-colors ${
                  isScrolled
                    ? "text-[#1E3A8A] hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-full font-bold shadow-xl hover:shadow-2xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Free</span>
                <Zap className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`lg:hidden p-2 rounded-xl ${
                isScrolled ? "text-[#1E3A8A]" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        initial={false}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#1E3A8A]/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <motion.div
          className="absolute top-20 left-0 right-0 bottom-0 overflow-y-auto"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="max-w-xl mx-auto px-4 py-8">
            {/* Navigation Links */}
            <div className="space-y-2 mb-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block px-6 py-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white font-bold text-lg hover:bg-white/20 transition-colors border border-white/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <motion.a
                href="tel:+917459963373"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl text-white font-bold text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-6 h-6" />
                <span>Call: +91 74599 63373</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-2xl text-white font-bold text-lg shadow-2xl"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="w-6 h-6" />
                <span>Get Started Free</span>
              </motion.a>
            </div>

            {/* Extra Info */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-white/80 mb-2">First 3 Leads FREE!</p>
              <p className="text-[#FCD34D] font-bold">Then just ₹999/month</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
