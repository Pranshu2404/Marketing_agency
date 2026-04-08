import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  const [activeSlider, setActiveSlider] = useState<number | null>(null);
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({});

  const results = [
    {
      title: "Empty Shop → Thriving Business",
      before:
        "https://images.unsplash.com/photo-1569062980724-23e1063d8790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjByZXRhaWwlMjBzaG9wJTIwZW1wdHl8ZW58MXx8fHwxNzcyODU1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      after:
        "https://images.unsplash.com/photo-1741836063636-35868368fe9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXN5JTIwSW5kaWFuJTIwcmVzdGF1cmFudCUyMGN1c3RvbWVyc3xlbnwxfHx8fDE3NzI4NTU0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      metric: "0 → 80 customers/week",
      growth: "+1,500%",
    },
    {
      title: "Local Shop → Google #1 Ranking",
      before:
        "https://images.unsplash.com/photo-1680532043072-d3930fa9bf8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBib3V0aXF1ZSUyMHN0b3JlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcyODU1NDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      after:
        "https://images.unsplash.com/photo-1760262492874-80283261b99c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXN0bGluZyUyMEluZGlhbiUyMG1hcmtldCUyMHN0cmVldHxlbnwxfHx8fDE3NzI4NTU0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      metric: "Page 10 → Position #1",
      growth: "+900%",
    },
  ];

  const socialStats = [
    {
      platform: "Google Maps",
      before: "0 views",
      after: "5,000+/mo",
      growth: "+∞",
      color: "from-rose-500 to-red-500",
      bgColor: "bg-rose-500/10",
      textColor: "text-rose-400",
    },
    {
      platform: "Instagram",
      before: "No profile",
      after: "2,000+ followers",
      growth: "+2000",
      color: "from-fuchsia-500 to-pink-500",
      bgColor: "bg-fuchsia-500/10",
      textColor: "text-fuchsia-400",
    },
    {
      platform: "Facebook",
      before: "Personal page",
      after: "3,500+ likes",
      growth: "+3500",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
    },
  ];

  const getSliderPosition = (index: number) => sliderPositions[index] || 50;

  const handleSliderMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    if (activeSlider !== index) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPositions((prev) => ({
      ...prev,
      [index]: Math.max(0, Math.min(100, percentage)),
    }));
  };

  return (
    <section className="py-24 sm:py-32 bg-[#0a0a1a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
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
            transition={{ type: "spring" }}
          >
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-gray-400 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Our Results
            </span>
          </motion.div>
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            See The{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-500 max-w-xl mx-auto">
            Real businesses, real results. Drag sliders to compare
          </p>
        </motion.div>

        {/* Before/After Sliders */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {results.map((result, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Title overlay */}
              <div className="absolute top-3 left-3 z-30 bg-[#0a0a1a]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <h3 className="text-xs sm:text-sm font-bold text-white">{result.title}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-[10px] sm:text-xs text-gray-400">{result.metric}</p>
                  <span className="text-[10px] sm:text-xs text-emerald-400 font-bold flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" />
                    {result.growth}
                  </span>
                </div>
              </div>

              {/* Slider Container */}
              <div
                className="relative h-[280px] sm:h-[380px] cursor-ew-resize touch-none"
                onMouseDown={() => setActiveSlider(index)}
                onMouseUp={() => setActiveSlider(null)}
                onMouseLeave={() => setActiveSlider(null)}
                onMouseMove={(e) => handleSliderMove(e, index)}
                onTouchStart={() => setActiveSlider(index)}
                onTouchEnd={() => setActiveSlider(null)}
                onTouchMove={(e) =>
                  handleSliderMove(e as unknown as React.TouchEvent<HTMLDivElement>, index)
                }
              >
                {/* After Image (Background) */}
                <div className="absolute inset-0">
                  <img src={result.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">
                    AFTER ✓
                  </div>
                </div>

                {/* Before Image (Overlay with clip) */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - getSliderPosition(index)}% 0 0)` }}
                >
                  <img src={result.before} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-gray-700/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">
                    BEFORE
                  </div>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-2xl"
                  style={{ left: `${getSliderPosition(index)}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-violet-500">
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-3 bg-violet-500 rounded-full" />
                      <div className="w-0.5 h-3 bg-violet-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Drag Hint */}
              <motion.div
                className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 bg-violet-600/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium pointer-events-none"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ← Drag to Compare →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Growth Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {socialStats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/[0.03] rounded-2xl p-5 sm:p-6 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
              whileHover={{ y: -4 }}
            >
              {/* Platform header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-bold text-sm sm:text-base">{stat.platform}</h4>
                <div className={`px-2 py-0.5 ${stat.bgColor} rounded-md`}>
                  <span className={`text-[10px] font-bold ${stat.textColor}`}>{stat.growth}%</span>
                </div>
              </div>

              {/* Before/After */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/[0.03] rounded-lg p-3 border border-white/[0.04]">
                  <p className="text-[10px] text-gray-600 uppercase mb-1">Before</p>
                  <p className="text-gray-400 font-medium text-sm">{stat.before}</p>
                </div>
                <span className="text-gray-600 text-lg">→</span>
                <div className="flex-1 bg-white/[0.03] rounded-lg p-3 border border-white/[0.04]">
                  <p className="text-[10px] text-gray-600 uppercase mb-1">After</p>
                  <p className="text-white font-bold text-sm">{stat.after}</p>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
