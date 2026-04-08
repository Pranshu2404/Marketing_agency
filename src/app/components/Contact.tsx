import { motion } from "motion/react";
import { useState } from "react";
import { Send, Phone, Upload, MapPin, Clock, CheckCircle2, Zap } from "lucide-react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function Contact() {
  const [formData, setFormData] = useState({
    businessName: "",
    phone: "",
    location: "",
    shopPhoto: null as File | null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const photoURL = "";

      await addDoc(collection(db, "leads"), {
        businessName: formData.businessName,
        phone: formData.phone,
        location: formData.location,
        photoURL: photoURL,
        timestamp: serverTimestamp(),
      });

      setIsSubmitted(true);
      setFormData({ businessName: "", phone: "", location: "", shopPhoto: null });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      console.error("Error submitting form: ", err);
      setError("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0a0a1a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <motion.div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
          }}
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
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
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Get Started
            </span>
          </motion.div>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get Your First 3 Leads{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              FREE!
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-xl mx-auto">
            Fill out the form below and we'll get you online in 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact Form */}
          <motion.div
            className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 sm:p-8 border border-white/[0.06]"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Business Name */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Kumar's Tea Stall"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 text-sm transition-all"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 text-violet-400" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91980 58216"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 text-sm transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City, State"
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.08] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 text-sm transition-all"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                {/* Shop Photo Upload */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm flex items-center gap-2">
                    <Upload className="w-4 h-4 text-emerald-400" />
                    Shop Photo (Optional)
                  </label>
                  <div className="border border-dashed border-white/[0.1] rounded-xl p-4 sm:p-6 text-center hover:border-violet-500/30 transition-colors cursor-pointer bg-white/[0.02]">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="photo-upload"
                      onChange={(e) =>
                        setFormData({ ...formData, shopPhoto: e.target.files?.[0] || null })
                      }
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">
                        {formData.shopPhoto ? formData.shopPhoto.name : "Click to upload"}
                      </p>
                      <p className="text-gray-600 text-xs mt-1">PNG, JPG up to 10MB</p>
                    </label>
                  </div>
                </div>

                {error && (
                  <div className="text-red-400 text-sm p-3 bg-red-400/5 border border-red-400/10 rounded-xl">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl text-sm sm:text-lg font-bold shadow-xl shadow-violet-600/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Submitting..." : "Claim My 3 Free Leads"}
                </motion.button>

                <p className="text-gray-600 text-xs text-center">
                  🔒 Your information is safe and secure
                </p>
              </form>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Success! 🎉
                </h3>
                <p className="text-lg text-gray-300 mb-2">Thank you for registering!</p>
                <p className="text-gray-500">We'll contact you within 24 hours to get you started.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Info & WhatsApp */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quick Contact Card */}
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 sm:p-7 border border-white/[0.06]">
              <h3
                className="text-lg sm:text-xl font-bold text-white mb-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Or Contact Us Directly
              </h3>

              <div className="space-y-3">
                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/919198058216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl p-3 sm:p-4 hover:bg-emerald-500/10 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">WhatsApp</p>
                    <p className="text-gray-500 text-xs sm:text-sm">+91 91980 58216</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <div className="flex items-center gap-4 bg-white/[0.03] rounded-xl p-3 sm:p-4 border border-white/[0.04]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-violet-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Call Us</p>
                    <p className="text-gray-500 text-xs sm:text-sm">+91 91980 58216</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-4 bg-white/[0.03] rounded-xl p-3 sm:p-4 border border-white/[0.04]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Office Hours</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Mon-Sat: 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 bg-white/[0.03] rounded-xl p-3 sm:p-4 border border-white/[0.04]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Office</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Lucknow, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Promise Card */}
            <motion.div
              className="relative bg-gradient-to-br from-violet-600/10 to-cyan-500/10 rounded-2xl p-6 sm:p-7 border border-violet-500/15 overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-3xl" />
              <h3
                className="text-lg font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Our 24-Hour Promise
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span className="text-gray-300">We'll call you within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span className="text-gray-300">Your Google Maps & social pages live in 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span className="text-gray-300">First 3 leads are completely FREE</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-400" />
                  <span className="text-gray-300">100% money-back guarantee if not satisfied</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
