import { motion } from "motion/react";
import { Heart, Target, Award, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your success is our success. We're committed to helping every business thrive.",
      color: "#F97316",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on what matters: bringing real customers to your business.",
      color: "#10B981",
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "Premium service at affordable prices. No compromises on excellence.",
      color: "#FCD34D",
    },
    {
      icon: Users,
      title: "Local Experts",
      description: "Based in Lucknow, we understand Indian businesses and local markets.",
      color: "#1E3A8A",
    },
  ];

  return (
    <section className="py-5 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#F97316_1px,transparent_1px)] bg-[length:50px_50px]" />
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
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-[#1E3A8A]/20 to-[#2563EB]/20 border border-[#1E3A8A]/40 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <span className="text-[#1E3A8A] font-bold">About Us</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1E3A8A] mb-4">
            Turning New Shops into Lead Machines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of digital marketing experts based in Lucknow, dedicated to helping local businesses succeed in the digital world
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Team Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1761912915167-558fa68f16b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlJTIwSW5kaWF8ZW58MXx8fHwxNzcyODU1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="LeadBoost Team"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Overlay Stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-transparent to-transparent flex items-end p-8">
                <div className="grid grid-cols-3 gap-4 w-full">
                  <motion.div
                    className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center border border-white/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-3xl font-bold text-white">10K+</p>
                    <p className="text-white/80 text-sm">Clients</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center border border-white/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-3xl font-bold text-white">5+</p>
                    <p className="text-white/80 text-sm">Years</p>
                  </motion.div>
                  <motion.div
                    className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-center border border-white/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-3xl font-bold text-white">99%</p>
                    <p className="text-white/80 text-sm">Happy</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white rounded-2xl p-6 shadow-2xl"
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-4xl font-bold">5.0 ⭐</p>
              <p className="text-sm">Customer Rating</p>
            </motion.div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-[#1E3A8A] mb-6">
              Our Mission: Every Business Deserves Success
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2021 in Lucknow, Uttar Pradesh, LeadBoost Agency was born from a simple observation: 
                <span className="text-[#F97316] font-bold"> countless amazing shops and businesses struggle to get customers</span> simply because they don't have a strong online presence.
              </p>
              <p>
                We saw talented entrepreneurs with incredible products and services who were invisible on Google Maps, 
                had no social media presence, and missed out on thousands of potential customers every month.
              </p>
              <p className="text-[#1E3A8A] font-bold text-lg">
                So we decided to change that.
              </p>
              <p>
                Today, we've helped over <span className="text-[#F97316] font-bold">10,000+ businesses</span> across India 
                transform their digital presence and attract a flood of new customers. From tea stalls to boutiques, 
                cafes to salons – we've seen it all, and we know what works.
              </p>
              <p>
                Our team of digital marketing experts, SEO specialists, and social media strategists work tirelessly 
                to ensure every business we partner with sees <span className="text-[#10B981] font-bold">real, measurable results</span>.
              </p>
            </div>

            {/* CTA */}
            {/* <motion.div className="mt-8">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white rounded-full text-lg font-bold shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-5 h-5" />
                Join Our Success Story
              </motion.button>
            </motion.div> */}
          </motion.div>
        </div>

        {/* Values Grid */}
        {/* <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-[#F97316]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${value.color}20` }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="w-8 h-8" style={{ color: value.color }} />
              </motion.div>
              <h4 className="text-xl font-bold text-[#1E3A8A] mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Location Badge */}
        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl px-8 py-6 shadow-2xl">
            <p className="text-white text-2xl font-bold mb-2">
              🏢 Based in Lucknow, Serving All of India
            </p>
            <p className="text-[#FCD34D]">
              Working with businesses from Kashmir to Kanyakumari
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
