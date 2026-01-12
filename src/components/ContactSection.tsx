import { motion } from "framer-motion";
import { Mail, Phone, Building2, User, Linkedin, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "lohith@supercx.co",
    href: "mailto:lohith@supercx.co",
    description: "For partnership inquiries",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8970081700",
    href: "tel:+918970081700",
    description: "Direct line",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with us",
    href: "https://linkedin.com",
    description: "Follow our updates",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-sage-50/50 overflow-hidden">
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
            Get in Touch
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Let's Start the <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to accelerate your customers' success? Let's discuss how SuperCX can become your strategic implementation partner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                animate={{ boxShadow: ["0 0 0 0 rgba(104, 141, 115, 0.4)", "0 0 0 20px rgba(104, 141, 115, 0)", "0 0 0 0 rgba(104, 141, 115, 0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <User className="w-10 h-10 text-sage-600" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-heading font-bold">Lohith J</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
                <div className="flex items-center gap-1 mt-1">
                  <Building2 className="w-4 h-4 text-sage-500" />
                  <span className="text-sm text-sage-600 font-medium">SuperCX Technologies</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: "hsl(var(--sage-100))" }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-sage-50 transition-all group"
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-sage-100 group-hover:bg-sage-200 flex items-center justify-center transition-colors"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <method.icon className="w-6 h-6 text-sage-600" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-foreground">{method.label}</p>
                    <p className="font-medium">{method.value}</p>
                    <p className="text-xs text-sage-500">{method.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card p-8 flex flex-col"
          >
            <h3 className="text-xl font-heading font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Schedule a discovery call to discuss your specific requirements and how SuperCX can accelerate your enterprise implementations.
            </p>

            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full gap-2"
                  onClick={() => window.location.href = "mailto:lohith@supercx.co?subject=Partnership%20Inquiry%20-%20Sagepilot"}
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Discovery Call
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full gap-2"
                  onClick={() => window.location.href = "mailto:lohith@supercx.co"}
                >
                  <MessageCircle className="w-5 h-5" />
                  Send a Message
                </Button>
              </motion.div>
            </div>

            <motion.div 
              className="mt-6 pt-6 border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-muted-foreground text-center">
                Typical response time: <span className="font-medium text-sage-600">Within 24 hours</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
