import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Settings, Plug, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Customer Discovery & Readiness",
    items: [
      "Business objectives and KPI identification workshop",
      "Current state assessment of customer service operations", 
      "Channel and system inventory mapping",
      "Integration complexity analysis",
      "Stakeholder alignment and governance setup",
    ],
    duration: "1-2 weeks",
  },
  {
    step: "02",
    icon: Settings,
    title: "AI Configuration & Workflow Design",
    items: [
      "Brand voice and personality configuration",
      "Intent taxonomy and conversation flow mapping",
      "Knowledge base structure and content migration",
      "Automation rules and escalation workflows",
      "Multi-language support configuration",
    ],
    duration: "2-4 weeks",
  },
  {
    step: "03",
    icon: Plug,
    title: "Integration & Testing",
    items: [
      "CRM integration (Salesforce, HubSpot, Zendesk)",
      "E-commerce platform connection (Shopify, Magento)",
      "Communication channels (WhatsApp, Email, Chat)",
      "User acceptance testing and QA",
      "Performance and load testing",
    ],
    duration: "2-3 weeks",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Go-Live & Hypercare",
    items: [
      "Phased rollout execution with monitoring",
      "Real-time performance tracking and optimization",
      "Daily stand-ups and issue resolution",
      "Knowledge base refinement",
      "Agent training and shadow support",
    ],
    duration: "2-4 weeks",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Customer Success & Expansion",
    items: [
      "Monthly performance reviews and KPI tracking",
      "Quarterly Business Reviews (QBRs)",
      "Proactive optimization recommendations",
      "Growth and upsell opportunity identification",
      "Continuous improvement initiatives",
    ],
    duration: "Ongoing",
  },
];

export const ImplementationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="implementation" className="section-padding overflow-hidden" ref={containerRef}>
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Implementation Model
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            How SuperCX Works With <span className="gradient-text">Sagepilot</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven 5-phase methodology for seamless enterprise deployments with clear deliverables and success criteria at every stage
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-sage-200 transform -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-sage-400 to-sage-600"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                }}
                className={`lg:flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div 
                    className="glass-card p-6 inline-block text-left group"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 25px 50px -12px rgba(104, 141, 115, 0.25)",
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center group-hover:bg-sage-200 transition-colors"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon className="w-6 h-6 text-sage-600" />
                      </motion.div>
                      <div>
                        <span className="text-xs font-medium text-sage-500 uppercase tracking-wider">
                          Phase {step.step}
                        </span>
                        <h3 className="text-lg font-heading font-semibold">{step.title}</h3>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-medium mb-4"
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-500" />
                      Duration: {step.duration}
                    </motion.div>

                    <ul className="space-y-2">
                      {step.items.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2 text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex w-16 justify-center">
                  <motion.div 
                    className="w-6 h-6 rounded-full bg-sage-400 border-4 border-background shadow-lg flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.3, backgroundColor: "hsl(var(--sage-600))" }}
                  >
                    <motion.span 
                      className="text-[10px] font-bold text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {step.step}
                    </motion.span>
                  </motion.div>
                </div>

                {/* Empty Space */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
