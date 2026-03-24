import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

export function Portfolio() {
  const [activeSlider, setActiveSlider] = useState<number | null>(null);
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({});

  const results = [
    {
      title: "Empty Shop → Thriving Business",
      before: "https://images.unsplash.com/photo-1569062980724-23e1063d8790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjByZXRhaWwlMjBzaG9wJTIwZW1wdHl8ZW58MXx8fHwxNzcyODU1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1741836063636-35868368fe9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXN5JTIwSW5kaWFuJTIwcmVzdGF1cmFudCUyMGN1c3RvbWVyc3xlbnwxfHx8fDE3NzI4NTU0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      metric: "0 → 80 customers/week",
    },
    {
      title: "Local Shop → Google #1 Ranking",
      before: "https://images.unsplash.com/photo-1680532043072-d3930fa9bf8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBib3V0aXF1ZSUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyODU1NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: "https://images.unsplash.com/photo-1760262492874-80283261b99c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXN0bGluZyUyMEluZGlhbiUyMG1hcmtldCUyMHN0cmVldHxlbnwxfHx8fDE3NzI4NTU0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      metric: "Page 10 → Position #1",
    },
  ];

  const getSliderPosition = (index: number) => sliderPositions[index] || 50;

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, index: number) => {
    if (activeSlider !== index) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPositions(prev => ({
      ...prev,
      [index]: Math.max(0, Math.min(100, percentage))
    }));
  };

  const socialStats = [
    { platform: "Google Maps", before: "0 views", after: "5,000+/mo", color: "#EA4335" },
    { platform: "Instagram", before: "No profile", after: "2,000+ followers", color: "#E1306C" },
    { platform: "Facebook", before: "Personal page", after: "3,500+ likes", color: "#1877F2" },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-3 sm:mb-4 px-4 py-1 sm:px-6 sm:py-2 bg-gradient-to-r from-[#F97316]/20 to-[#FCD34D]/20 border border-[#F97316]/40 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <span className="text-[#F97316] font-bold text-[10px] sm:text-base uppercase tracking-wider">Our Results</span>
          </motion.div>
          <h2 className="text-xl sm:text-5xl font-extrabold text-[#1E3A8A] mb-3 sm:mb-4">
            See The Transformation
          </h2>
          <p className="text-sm sm:text-xl text-gray-600 max-w-2xl mx-auto px-6">
            Real businesses, real results. See how we've helped shops like yours grow
          </p>
        </motion.div>

        {/* Before/After Sliders */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Title */}
              <div className="absolute top-3 left-3 z-30 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg">
                <h3 className="text-[10px] sm:text-sm font-bold text-[#1E3A8A]">{result.title}</h3>
                <p className="text-[9px] sm:text-xs text-[#F97316] font-bold">{result.metric}</p>
              </div>

              {/* Slider Container */}
              <div
                className="relative h-[300px] sm:h-[400px] cursor-ew-resize touch-none"
                onMouseDown={() => setActiveSlider(index)}
                onMouseUp={() => setActiveSlider(null)}
                onMouseLeave={() => setActiveSlider(null)}
                onMouseMove={(e) => handleSliderMove(e, index)}
                onTouchStart={() => setActiveSlider(index)}
                onTouchEnd={() => setActiveSlider(null)}
                onTouchMove={(e) => handleSliderMove(e as unknown as React.TouchEvent<HTMLDivElement>, index)}
              >
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                  <img
                    src={result.after}
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#10B981] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    AFTER ✓
                  </div>
                </div>

                {/* Before Image (Overlay with clip) */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - getSliderPosition(index)}% 0 0)` }}
                >
                  <img
                    src={result.before}
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    BEFORE
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                  style={{ left: `${getSliderPosition(index)}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-[#F97316]">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-[#F97316] rounded-full" />
                      <div className="w-1 h-4 bg-[#F97316] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Drag Hint */}
              <motion.div
                className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-20 bg-[#F97316] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-sm font-bold pointer-events-none whitespace-nowrap"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ← Drag to Compare →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Growth Stats */}
        {/* <motion.div
          className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-3xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Social Media & SEO Growth
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {socialStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: stat.color }}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{stat.platform}</h4>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/10 rounded-xl p-3">
                    <p className="text-white/60 text-sm mb-1">Before</p>
                    <p className="text-white font-bold">{stat.before}</p>
                  </div>

                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#FCD34D] mx-auto" />
                  </motion.div>

                  <div
                    className="rounded-xl p-3"
                    style={{ backgroundColor: `${stat.color}40` }}
                  >
                    <p className="text-white/60 text-sm mb-1">After</p>
                    <p className="text-white font-bold text-lg">{stat.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Client Logos */}
        {/* <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-center text-gray-600 mb-6">Trusted By Businesses Across India</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Kumar's Tea Stall", "Priya's Boutique", "Patel's Café", "Verma Salon", "Singh Electronics", "Gupta Sweets"].map(
              (client, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl px-6 py-3 shadow-md"
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  <p className="text-[#1E3A8A] font-bold">{client}</p>
                </motion.div>
              )
            )}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
