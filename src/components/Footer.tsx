import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Partnership Overview", href: "#partnership" },
  { label: "Implementation Model", href: "#implementation" },
  { label: "Metrics & ROI", href: "#metrics" },
  { label: "About SuperCX", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 border-t border-border bg-background"
    >
      <div className="container-tight">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <a href="#" className="text-xl font-heading font-bold text-foreground">
              Sagepilot <span className="text-sage-400">×</span> SuperCX
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Strategic Implementation Partner
            </p>
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2, color: "hsl(var(--sage-600))" }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-sage-100 hover:bg-sage-200 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-sage-600" />
          </motion.button>
        </div>

        {/* Divider */}
        <motion.div 
          className="h-px bg-border mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p 
            className="text-sm text-muted-foreground text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} SuperCX Technologies. All rights reserved.
          </motion.p>

          <motion.p 
            className="text-sm text-muted-foreground flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with <Heart className="w-4 h-4 text-sage-500 inline" /> for exceptional customer experiences
          </motion.p>

          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
