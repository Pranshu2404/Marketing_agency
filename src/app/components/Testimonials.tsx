import { motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar's Tea Stall, Delhi",
      image:
        "https://images.unsplash.com/photo-1536514888772-a269c6a8a198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZWElMjBzdGFsbCUyMG93bmVyfGVufDF8fHx8MTc3Mjg1NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "From 0 to 45 customers per week! Orivo Tech transformed my small tea stall into a local favorite. My Google Maps listing shows up first now!",
      rating: 5,
      beforeLeads: "2-3/week",
      afterLeads: "45+/week",
    },
    {
      name: "Priya Sharma",
      business: "Priya's Boutique, Mumbai",
      image:
        "https://images.unsplash.com/photo-1659355894515-2548f35525f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMGJ1c2luZXNzJTIwb3duZXIlMjBsYXB0b3B8ZW58MXx8fHwxNzcyODU1NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "My Instagram went from 0 to 2,000 followers in 3 months! The team set everything up perfectly. Now I get daily orders through social media.",
      rating: 5,
      beforeLeads: "0/month",
      afterLeads: "60+/month",
    },
    {
      name: "Amit Patel",
      business: "Patel's Café, Bangalore",
      image:
        "https://images.unsplash.com/photo-1567383326513-ee6ebaf4679b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzbWFsbCUyMGJ1c2luZXNzJTIwY2FmZSUyMG93bmVyfGVufDF8fHx8MTc3Mjg1NTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "I was struggling to get customers. After Orivo Tech, my café is always full! The SEO work they did is incredible. Worth every rupee!",
      rating: 5,
      beforeLeads: "5-10/week",
      afterLeads: "80+/week",
    },
    {
      name: "Sunita Verma",
      business: "Verma Beauty Salon, Lucknow",
      image:
        "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEluZGlhbiUyMGVudHJlcHJlbmV1ciUyMHBob25lfGVufDF8fHx8MTc3Mjg1NTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Best investment for my new salon! The Facebook page they created brings customers daily. Support team is amazing and always helpful!",
      rating: 5,
      beforeLeads: "1-2/day",
      afterLeads: "15+/day",
    },
  ];

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 6000);
    return () => clearInterval(interval);
  }, [goNext]);

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0c1d] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          }}
        />
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
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-gray-400 font-medium text-xs sm:text-sm">5.0 Average Rating</span>
          </motion.div>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Real Stories,{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-xl mx-auto">
            Join happy business owners who transformed their businesses with Orivo Tech
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={activeIndex}
            className="relative bg-white/[0.03] rounded-2xl p-6 sm:p-10 border border-white/[0.06] overflow-hidden"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
          >
            {/* Large quote icon */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-violet-500/[0.08]" />
            </div>

            <div className="relative z-10 grid md:grid-cols-[280px_1fr] gap-8 items-center">
              {/* Left: Profile */}
              <div className="text-center md:text-left">
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto md:mx-0 mb-4 rounded-2xl overflow-hidden border-2 border-violet-500/30 shadow-lg shadow-violet-500/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h4 className="text-lg font-bold text-white mb-0.5">{current.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{current.business}</p>
                <div className="flex justify-center md:justify-start gap-0.5 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Before/After Stats */}
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-3">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1.5">
                    Leads Growth
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <span className="text-gray-600 line-through text-xs">{current.beforeLeads}</span>
                    <span className="text-gray-600">→</span>
                    <span className="text-emerald-400 font-bold text-lg">{current.afterLeads}</span>
                  </div>
                </div>
              </div>

              {/* Right: Quote */}
              <div>
                <motion.p
                  className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  "{current.quote}"
                </motion.p>

                {/* Verified Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  <span className="text-xs font-semibold text-emerald-400">Verified Customer</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={goPrev}
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? "w-8 h-2 bg-gradient-to-r from-violet-500 to-cyan-500"
                      : "w-2 h-2 bg-white/10 hover:bg-white/20"
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={goNext}
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
