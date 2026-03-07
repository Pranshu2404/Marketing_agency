import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar's Tea Stall, Delhi",
      image: "https://images.unsplash.com/photo-1536514888772-a269c6a8a198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB0ZWElMjBzdGFsbCUyMG93bmVyfGVufDF8fHx8MTc3Mjg1NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "From 0 to 45 customers per week! LeadBoost transformed my small tea stall into a local favorite. My Google Maps listing shows up first now!",
      rating: 5,
      beforeLeads: "2-3/week",
      afterLeads: "45+/week",
    },
    {
      name: "Priya Sharma",
      business: "Priya's Boutique, Mumbai",
      image: "https://images.unsplash.com/photo-1659355894515-2548f35525f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjB3b21hbiUyMGJ1c2luZXNzJTIwb3duZXIlMjBsYXB0b3B8ZW58MXx8fHwxNzcyODU1NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "My Instagram went from 0 to 2,000 followers in 3 months! The team set everything up perfectly. Now I get daily orders through social media.",
      rating: 5,
      beforeLeads: "0/month",
      afterLeads: "60+/month",
    },
    {
      name: "Amit Patel",
      business: "Patel's Café, Bangalore",
      image: "https://images.unsplash.com/photo-1567383326513-ee6ebaf4679b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzbWFsbCUyMGJ1c2luZXNzJTIwY2FmZSUyMG93bmVyfGVufDF8fHx8MTc3Mjg1NTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "I was struggling to get customers. After LeadBoost, my café is always full! The SEO work they did is incredible. Worth every rupee!",
      rating: 5,
      beforeLeads: "5-10/week",
      afterLeads: "80+/week",
    },
    {
      name: "Sunita Verma",
      business: "Verma Beauty Salon, Lucknow",
      image: "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEluZGlhbiUyMGVudHJlcHJlbmV1ciUyMHBob25lfGVufDF8fHx8MTc3Mjg1NTQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "Best investment for my new salon! The Facebook page they created brings customers daily. Support team is amazing and always helpful!",
      rating: 5,
      beforeLeads: "1-2/day",
      afterLeads: "15+/day",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-10 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#F97316_1px,transparent_1px)] bg-[length:30px_30px]" />
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
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#FCD34D] fill-[#FCD34D]" />
              ))}
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E3A8A] mb-4">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join happy business owners who transformed their businesses with LeadBoost
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Card */}
          <motion.div
            key={activeIndex}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-20 h-20 text-[#F97316]" />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              {/* Left: Profile */}
              <div className="text-center">
                <motion.div
                  className="w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden border-4 border-[#F97316] shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h4 className="text-lg font-bold text-[#1E3A8A] mb-1">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-gray-600 mb-2">{testimonials[activeIndex].business}</p>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FCD34D] fill-[#FCD34D]" />
                  ))}
                </div>

                {/* Before/After Stats */}
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl p-3 text-white text-sm">
                  <p className="text-xs opacity-80 mb-0.5">Leads Growth</p>
                  <p className="text-xs line-through opacity-60">
                    {testimonials[activeIndex].beforeLeads}
                  </p>
                  <p className="text-xl font-bold text-[#FCD34D]">
                    {testimonials[activeIndex].afterLeads}
                  </p>
                </div>
              </div>

              {/* Right: Quote */}
              <div className="md:col-span-2">
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed mb-4 italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[activeIndex].quote}"
                </motion.p>

                {/* Verified Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981] rounded-full px-3 py-1 text-sm"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <div className="w-2 h-2 bg-[#10B981] rounded-full" />
                  <span className="text-xs font-bold text-[#10B981]">Verified Customer</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all ${
                  index === activeIndex
                    ? "w-8 h-2 bg-[#F97316]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-2xl transition-all ${
                index === activeIndex
                  ? "bg-white shadow-xl border-2 border-[#F97316]"
                  : "bg-white/50 hover:bg-white hover:shadow-lg"
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-[#F97316]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-bold text-[#1E3A8A] truncate">
                {testimonial.name}
              </p>
              <div className="flex justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#FCD34D] fill-[#FCD34D]" />
                ))}
              </div>
            </motion.button>
          ))}
        </motion.div> */}

        {/* CTA */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-full text-xl font-bold shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join 10,000+ Success Stories
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}
