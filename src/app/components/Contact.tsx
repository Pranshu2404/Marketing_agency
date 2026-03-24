import { motion } from "motion/react";
import { useState } from "react";
import { Send, Phone, Upload, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { } from "firebase/storage";export function Contact() {
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
      let photoURL = "";

      // Handle photo upload if a file is selected
      // if (formData.shopPhoto) {
      //   const photoRef = ref(`shopPhotos/${Date.now()}_${formData.shopPhoto.name}`);
      //   const snapshot = await uploadBytes(photoRef, formData.shopPhoto);
      //   photoURL = await getDownloadURL(snapshot.ref);
      // }

      // Add user details to db
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
    <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#F97316]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-[#FCD34D]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-14 h-14 sm:w-20 sm:h-20 bg-[#F97316] rounded-full flex items-center justify-center shadow-2xl">
              <Send className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white mb-4">
            Get Your First 3 Leads FREE!
          </h2>
          <p className="text-base sm:text-xl text-[#F8FAFC]/90 max-w-2xl mx-auto">
            Fill out the form below and we'll get you online in 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-start">
          {/* Left: Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Business Name */}
                <div>
                  <label className="block text-white/90 font-semibold mb-1.5 text-sm sm:text-base">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Kumar's Tea Stall"
                    className="w-full px-4 py-2.5 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm sm:text-base"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white/90 font-semibold mb-1.5 text-sm sm:text-base flex items-center gap-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 74599 63373"
                    className="w-full px-4 py-2.5 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm sm:text-base"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-white/90 font-semibold mb-1.5 text-sm sm:text-base flex items-center gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City, State"
                    className="w-full px-4 py-2.5 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent text-sm sm:text-base"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                {/* Shop Photo Upload */}
                <div>
                  <label className="block text-white/90 font-semibold mb-1.5 text-sm sm:text-base flex items-center gap-2">
                    <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                    Shop Photo (Optional)
                  </label>
                  <div className="border-2 border-dashed border-white/30 rounded-xl p-4 sm:p-6 text-center hover:border-[#F97316] transition-colors cursor-pointer bg-white/5">
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
                      <Upload className="w-8 h-8 sm:w-12 sm:h-12 text-white/60 mx-auto mb-2" />
                      <p className="text-white/80 text-sm">
                        {formData.shopPhoto ? formData.shopPhoto.name : "Click to upload"}
                      </p>
                      <p className="text-white/50 text-sm mt-1">PNG, JPG up to 10MB</p>
                    </label>
                  </div>
                </div>

                {error && (
                  <div className="text-red-400 text-sm p-3 bg-red-400/10 border border-red-400/20 rounded-xl">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-xl text-lg sm:text-xl font-bold shadow-2xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                  {isSubmitting ? "Submitting..." : "Claim My 3 Free Leads"}
                </motion.button>

                <p className="text-white/70 text-sm text-center">
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
                  className="w-24 h-24 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">Success! 🎉</h3>
                <p className="text-xl text-white/90 mb-2">
                  Thank you for registering!
                </p>
                <p className="text-white/70">
                  We'll contact you within 24 hours to get you started.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right: Info & WhatsApp */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Quick Contact Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Or Contact Us Directly
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/917459963373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#25D366]/20 border border-[#25D366] rounded-2xl p-3 sm:p-4 hover:bg-[#25D366]/30 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base sm:text-lg">WhatsApp</p>
                    <p className="text-white/80 text-sm sm:text-base">+91 74599 63373</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                  <div className="w-14 h-14 bg-[#F97316] rounded-full flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Call Us</p>
                    <p className="text-white/80">+91 74599 63373</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                  <div className="w-14 h-14 bg-[#FCD34D] rounded-full flex items-center justify-center">
                    <Clock className="w-7 h-7 text-[#1E3A8A]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Office Hours</p>
                    <p className="text-white/80">Mon-Sat: 9 AM - 7 PM</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                  <div className="w-14 h-14 bg-[#10B981] rounded-full flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Office</p>
                    <p className="text-white/80">Lucknow, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Promise Card */}
            <motion.div
              className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-3xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Our 24-Hour Promise
              </h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>We'll call you within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>Your Google Maps & social pages will be live in 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>First 3 leads are completely FREE</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>100% money-back guarantee if not satisfied</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
