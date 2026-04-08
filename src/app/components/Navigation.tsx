import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Zap, ArrowRight } from "lucide-react";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-[#0a0a1a]/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(124,58,237,0.15)] border-b border-white/5"
          : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <motion.div
                  className="w-11 h-11 bg-gradient-to-br from-violet-600 via-purple-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.4 }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-600 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
              </div>
              <div>
                <h1
                  className="text-xl sm:text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                    Orivo
                  </span>
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    Tech
                  </span>
                </h1>
                <p className="text-[10px] sm:text-xs text-violet-400/80 tracking-[0.2em] uppercase font-medium -mt-0.5">
                  Agency
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-lg group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="nav-hover"
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="tel:+919198058216"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="relative group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#0a0a1a]/98 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-20 left-0 right-0 bottom-0 overflow-y-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="max-w-xl mx-auto px-4 py-8">
                {/* Navigation Links */}
                <div className="space-y-2 mb-8">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="block px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl text-white font-medium text-lg hover:bg-white/10 transition-colors border border-white/5"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.07 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <motion.a
                    href="tel:+919198058216"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-medium text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call: +91 91980 58216</span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl text-white font-bold text-lg shadow-2xl shadow-violet-500/25"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="w-5 h-5" />
                    <span>Get Started Free</span>
                  </motion.a>
                </div>

                {/* Extra Info */}
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-gray-400 mb-1">First 3 Leads FREE!</p>
                  <p className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text font-bold">
                    Then just ₹999/month
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
