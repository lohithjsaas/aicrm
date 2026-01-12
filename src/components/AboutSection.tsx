import { motion } from "framer-motion";
import { Sparkles, Bot, Rocket, Users, Layers, Award, Globe, Clock, Target } from "lucide-react";

const capabilities = [
  { icon: Sparkles, label: "Customer Experience (CX) Strategy & Consulting", description: "End-to-end CX transformation roadmaps" },
  { icon: Bot, label: "AI & Automation Implementation", description: "Conversational AI deployment at scale" },
  { icon: Rocket, label: "SaaS Onboarding & Enterprise Delivery", description: "Structured implementation methodology" },
  { icon: Users, label: "Customer Success & Support Operations", description: "Dedicated success management teams" },
  { icon: Layers, label: "Systems Integration & Platform Scaling", description: "50+ pre-built enterprise connectors" },
];

const stats = [
  { icon: Award, value: "8+", label: "Years of CX Excellence" },
  { icon: Globe, value: "15+", label: "Countries Served" },
  { icon: Clock, value: "24/7", label: "Support Coverage" },
  { icon: Target, value: "100%", label: "Implementation Success" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring" as const, stiffness: 100 }
  },
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">SuperCX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for customer experience transformation and AI implementation excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 text-center group"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-sage-200 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-sage-600" />
              </motion.div>
              <div className="text-2xl md:text-3xl font-heading font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            className="glass-card p-8 md:p-12 relative overflow-hidden"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(104, 141, 115, 0.2)" }}
          >
            {/* Decorative gradient */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl pointer-events-none"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative">
              <motion.p 
                className="text-lg md:text-xl text-foreground leading-relaxed mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-heading font-semibold text-sage-700">SuperCX Technologies</span> is a premier consulting and software development company specializing in transforming how businesses engage with their customers. We bridge the gap between innovative SaaS products and successful enterprise deployments.
              </motion.p>

              <motion.h3 
                className="text-xl font-heading font-semibold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Our Core Competencies
              </motion.h3>

              <motion.ul 
                className="space-y-4 mb-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {capabilities.map((cap, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-sage-50 transition-colors cursor-pointer group"
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-200 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <cap.icon className="w-6 h-6 text-sage-600" />
                    </motion.div>
                    <div>
                      <span className="text-lg font-medium block">{cap.label}</span>
                      <span className="text-sm text-muted-foreground">{cap.description}</span>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div 
                className="pt-6 border-t border-border"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We work as an extension of product companies, helping them deliver world-class 
                  execution without increasing internal delivery overhead. Our white-label approach 
                  ensures seamless customer experiences while you focus on product innovation.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
