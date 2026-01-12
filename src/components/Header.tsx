import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateProposalPDF } from "@/lib/pdfGenerator";

const navItems = [
  { label: "Partnership Overview", href: "#partnership" },
  { label: "Implementation Model", href: "#implementation" },
  { label: "Customer Success Impact", href: "#metrics" },
  { label: "Metrics & ROI", href: "#roi" },
  { label: "About SuperCX", href: "#about" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    generateProposalPDF();
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container-tight">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg md:text-xl font-heading font-bold text-foreground">
              Sagepilot <span className="text-sage-400">×</span> SuperCX
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="primary" size="sm" className="gap-2" onClick={handleDownload}>
                <Download className="w-4 h-4" />
                Download Proposal
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden py-4 border-t border-border/50"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="primary" size="sm" className="gap-2 w-full mt-4" onClick={handleDownload}>
                <Download className="w-4 h-4" />
                Download Proposal
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};
