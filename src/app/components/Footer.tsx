import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Shield, Award, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Google Maps Setup", href: "#services" },
      { name: "Social Media Management", href: "#services" },
      { name: "SEO Optimization", href: "#services" },
      { name: "Lead Generation", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Results", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Pricing", href: "#pricing" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#060612] text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* Pre-footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="relative bg-gradient-to-r from-violet-600/10 to-cyan-500/10 border border-violet-500/15 rounded-2xl p-6 sm:p-10 mt-8 mb-16 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-[100px]" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Join 10,000+ businesses already growing with Orivo Tech
              </p>
            </div>
            <motion.a
              href="#contact"
              className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl font-bold shadow-xl shadow-violet-600/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">
              <h3
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-white">Orivo</span>
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Tech
                </span>
              </h3>
              <p className="text-violet-400/60 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                Agency
              </p>
            </div>
            <p className="text-gray-500 mb-5 leading-relaxed text-sm">
              Helping Indian shops and new businesses unlock endless customers through Google Maps, social
              media, and powerful SEO.
            </p>

            {/* Trust Badges */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/[0.05] rounded-lg p-2 border border-white/[0.06]">
                <Shield className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="bg-white/[0.05] rounded-lg p-2 border border-white/[0.06]">
                <Award className="w-4 h-4 text-amber-400" />
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              <span className="bg-white/[0.05] px-2.5 py-1 rounded-md text-[10px] text-gray-500">
                SSL Secured
              </span>
              <span className="bg-white/[0.05] px-2.5 py-1 rounded-md text-[10px] text-gray-500">
                Google Partner
              </span>
              <span className="bg-white/[0.05] px-2.5 py-1 rounded-md text-[10px] text-gray-500">
                Verified
              </span>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-gray-300 mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-violet-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-violet-400 transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-gray-300 mb-5 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-violet-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-violet-400 transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold text-gray-300 mb-5 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-violet-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-violet-400 transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <Phone className="w-3.5 h-3.5 text-violet-400/60" />
                <span>+91 91980 58216</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Mail className="w-3.5 h-3.5 text-violet-400/60" />
                <span>admin@cognexon.in</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-violet-400/60" />
                <span>Lucknow, UP, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.04]" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-600 text-center md:text-left text-xs sm:text-sm">
            <p>© {currentYear} Orivo Tech Agency. All rights reserved.</p>
            <p className="text-xs mt-0.5">
              Made with <span className="text-red-400">❤️</span> in Lucknow, Uttar Pradesh
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/[0.04] rounded-lg flex items-center justify-center hover:bg-white/[0.08] transition-all border border-white/[0.04] hover:border-white/[0.1]"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-gray-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
