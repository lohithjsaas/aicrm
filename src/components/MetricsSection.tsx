import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Timer, Bot, CheckCircle2, ShoppingCart, Smile, DollarSign, TrendingDown, TrendingUp as TrendingUpIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const metrics = [
  {
    icon: Timer,
    title: "Response Time",
    direction: "↓",
    improvement: "60%",
    description: "Average response time reduced from minutes to seconds",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    isDecrease: true,
  },
  {
    icon: Bot,
    title: "Automation Rate",
    direction: "↑",
    improvement: "45%",
    description: "Inquiries handled automatically without agent intervention",
    color: "text-sage-600",
    bgColor: "bg-sage-50",
    isDecrease: false,
  },
  {
    icon: CheckCircle2,
    title: "First Contact Resolution",
    direction: "↑",
    improvement: "78%",
    description: "Issues resolved on first interaction without escalation",
    color: "text-sage-600",
    bgColor: "bg-sage-50",
    isDecrease: false,
  },
  {
    icon: ShoppingCart,
    title: "Cart Recovery & Revenue",
    direction: "↑",
    improvement: "23%",
    description: "Increase in recovered abandoned carts and revenue",
    color: "text-sage-600",
    bgColor: "bg-sage-50",
    isDecrease: false,
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    direction: "↑",
    improvement: "4.7/5",
    description: "Average CSAT score across all customer interactions",
    color: "text-sage-600",
    bgColor: "bg-sage-50",
    isDecrease: false,
  },
  {
    icon: DollarSign,
    title: "Support Cost per Ticket",
    direction: "↓",
    improvement: "35%",
    description: "Reduction in average cost per support ticket handled",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    isDecrease: true,
  },
];

const AnimatedNumber = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value.includes("/")) return value;
    if (value.includes("%")) return `${Math.round(latest)}%`;
    return Math.round(latest).toString();
  });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      animate(count, numericValue, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, value, count]);

  return (
    <motion.span ref={ref}>
      {value.includes("/") ? value : <motion.span>{rounded}</motion.span>}
      {suffix}
    </motion.span>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    }
  },
};

export const MetricsSection = () => {
  return (
    <section id="metrics" className="section-padding bg-sage-50/50 overflow-hidden">
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
            ROI Metrics
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Metrics We Help <span className="gradient-text">Improve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tangible KPIs that demonstrate the value of our partnership with measurable improvements across all customer experience dimensions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card p-6 group cursor-pointer"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(104, 141, 115, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div 
                  className={`w-14 h-14 rounded-2xl ${metric.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                >
                  <metric.icon className={`w-7 h-7 ${metric.color}`} />
                </motion.div>
                <motion.div 
                  className={`flex items-center gap-1 px-2 py-1 rounded-full ${metric.bgColor}`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {metric.isDecrease ? (
                    <TrendingDown className={`w-4 h-4 ${metric.color}`} />
                  ) : (
                    <TrendingUpIcon className={`w-4 h-4 ${metric.color}`} />
                  )}
                  <span className={`text-xs font-medium ${metric.color}`}>{metric.direction}</span>
                </motion.div>
              </div>
              
              <h3 className="text-lg font-heading font-semibold mb-2">{metric.title}</h3>
              
              <div className={`text-3xl font-bold ${metric.color} mb-3`}>
                <AnimatedNumber value={metric.improvement} />
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 glass-card p-8 md:p-10"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                <AnimatedNumber value="150" suffix="+" />
              </div>
              <p className="text-muted-foreground">Enterprise Implementations</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                <AnimatedNumber value="98" suffix="%" />
              </div>
              <p className="text-muted-foreground">Client Satisfaction Rate</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                <AnimatedNumber value="2.5" suffix="M+" />
              </div>
              <p className="text-muted-foreground">Conversations Handled</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
