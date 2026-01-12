import { motion, useInView } from "framer-motion";
import { Clock, HeadphonesIcon, Heart, Plug2, TrendingUp, Users, Shield, Zap } from "lucide-react";
import { useRef } from "react";

const metrics = [
  {
    icon: Clock,
    stat: "40–60%",
    title: "Faster Customer Go-Live",
    description: "Structured onboarding and implementation ownership by SuperCX ensures rapid deployment with reduced friction and accelerated time-to-value for every enterprise customer.",
  },
  {
    icon: HeadphonesIcon,
    stat: "30–50%",
    title: "Reduction in Support Load",
    description: "Tiered L1/L2 support with clear escalation protocols to Sagepilot, freeing your team to focus on product innovation and strategic initiatives.",
  },
  {
    icon: Heart,
    stat: "95%+",
    title: "Customer Retention Rate",
    description: "Dedicated customer success governance, quarterly business reviews, and proactive engagement drives exceptional retention and satisfaction scores.",
  },
  {
    icon: Plug2,
    stat: "50+",
    title: "Enterprise Integrations",
    description: "Pre-built connectors for CRM, E-commerce, Logistics, Payments, Analytics, and communication platforms ensure seamless enterprise deployments.",
  },
];

const additionalBenefits = [
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Expand market presence without proportional headcount increase",
  },
  {
    icon: Users,
    title: "Expert Teams",
    description: "Access specialized implementation and CX expertise on-demand",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Proven methodologies reduce implementation risks and delays",
  },
  {
    icon: Zap,
    title: "Faster ROI",
    description: "Customers achieve measurable business outcomes in weeks, not months",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    }
  },
};

export const WhyPartnershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partnership" className="section-padding bg-sage-50/50 overflow-hidden">
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
            Partnership Value
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Why This Partnership <span className="gradient-text">Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable outcomes that accelerate your customers' success with Sagepilot through proven methodologies and dedicated expertise
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              variants={item} 
              className="metric-card group"
              whileHover={{ 
                y: -8, 
                boxShadow: "0 25px 50px -12px rgba(104, 141, 115, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-start gap-5">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center group-hover:bg-sage-200 transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <metric.icon className="w-7 h-7 text-sage-600" />
                </motion.div>
                <div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    {metric.stat}
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{metric.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card p-8 md:p-10"
        >
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Additional Partnership Benefits
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-2xl hover:bg-sage-50 transition-colors cursor-pointer"
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mx-auto mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-6 h-6 text-sage-600" />
                </motion.div>
                <h4 className="font-heading font-semibold mb-1">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
