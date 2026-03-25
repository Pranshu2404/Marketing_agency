import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Shield, Award } from "lucide-react";

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
    { icon: Facebook, href: "#", color: "#1877F2", label: "Facebook" },
    { icon: Instagram, href: "#", color: "#E1306C", label: "Instagram" },
    { icon: Twitter, href: "#", color: "#1DA1F2", label: "Twitter" },
    { icon: Linkedin, href: "#", color: "#0A66C2", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1E3A8A] to-[#0F172A] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#F97316_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#F97316] to-[#FCD34D] bg-clip-text text-transparent">
                Orivo Tech
              </h3>
              <p className="text-[#FCD34D] text-[10px] sm:text-sm">Agency</p>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Helping Indian shops and new businesses unlock endless customers through Google Maps, 
              social media, and powerful SEO.
            </p>

            {/* Trust Badges */}
            <div className="flex gap-3 mb-6">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Shield className="w-6 h-6 text-[#10B981]" />
              </motion.div>
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-6 h-6 text-[#FCD34D]" />
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs">SSL Secured</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Google Partner</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Verified</span>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#FCD34D]">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#F97316] transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1 h-1 bg-[#F97316] rounded-full"
                      whileHover={{ scale: 2 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#FCD34D]">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#F97316] transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1 h-1 bg-[#F97316] rounded-full"
                      whileHover={{ scale: 2 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#FCD34D]">Support</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#F97316] transition-colors flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1 h-1 bg-[#F97316] rounded-full"
                      whileHover={{ scale: 2 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 text-[#F97316]" />
                <span>+91 74599 63373</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 text-[#F97316]" />
                <span>admin@cognexon.in</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-[#F97316]" />
                <span>Lucknow, UP, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            className="text-white/60 text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>© {currentYear} Orivo Tech Agency. All rights reserved.</p>
            <p className="text-sm mt-1">
              Made with <span className="text-red-500">❤️</span> in Lucknow, Uttar Pradesh
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" style={{ color: social.color }} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Extra Info */}
        <motion.div
          className="pb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-[#F97316]/20 to-[#FCD34D]/20 border border-[#F97316]/40 rounded-full px-4 py-1.5 sm:px-6 sm:py-2">
            <p className="text-white/80 text-[10px] sm:text-sm">
              🚀 Helping <span className="text-[#FCD34D] font-bold">10,000+</span> businesses grow • 
              <span className="text-[#F97316] font-bold"> Start Free Today!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
