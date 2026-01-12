import { motion } from "framer-motion";
import { Download, MessageSquare, Mail, Smartphone, Plug, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateProposalPDF } from "@/lib/pdfGenerator";

const integrationTags = [
  { label: "Website Chat", icon: MessageSquare },
  { label: "WhatsApp", icon: Smartphone },
  { label: "Email", icon: Mail },
  { label: "CRM", icon: Plug },
  { label: "Zendesk", icon: Plug },
  { label: "Slack", icon: Plug },
];

const floatingCards = [
  { icon: Zap, label: "Fast Deployment", delay: 0.5 },
  { icon: Shield, label: "Enterprise Ready", delay: 0.7 },
  { icon: Globe, label: "Global Scale", delay: 0.9 },
];

export const HeroSection = () => {
  const handleDownload = () => {
    generateProposalPDF();
  };

  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-16 overflow-hidden">
      {/* Animated Background Glow */}
      <motion.div 
        className="absolute inset-0 hero-glow pointer-events-none"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-sage-200/30 blur-[120px] pointer-events-none"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-sage-100/40 blur-[100px] pointer-events-none"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6"
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-sage-500"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Strategic Partnership
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Meet Your AI Platform's{" "}
              <motion.span 
                className="gradient-text"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                Growth Partner
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl font-heading font-medium text-sage-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Scaling Implementations, Customer Success & Integrations for Sagepilot
            </motion.p>

            <motion.p 
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              SuperCX partners with Sagepilot to manage enterprise implementations, 
              customer success, support operations, and integrations—helping customers 
              achieve faster ROI and measurable business outcomes.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(104, 141, 115, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="gap-2"
                  onClick={handleDownload}
                >
                  <Download className="w-5 h-5" />
                  Download Partnership Proposal
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.5 }}
                className={`absolute z-10 glass-card px-4 py-2 flex items-center gap-2 ${
                  index === 0 ? "-top-4 -left-4" : 
                  index === 1 ? "top-1/2 -right-8" : 
                  "-bottom-4 left-1/4"
                }`}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-lg bg-sage-100 flex items-center justify-center"
                >
                  <card.icon className="w-4 h-4 text-sage-600" />
                </motion.div>
                <span className="text-sm font-medium whitespace-nowrap">{card.label}</span>
              </motion.div>
            ))}

            <motion.div 
              className="glass-card p-6 md:p-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* AI Conversation Preview */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <MessageSquare className="w-5 h-5 text-sage-600" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-sm">AI Assistant</p>
                    <p className="text-xs text-muted-foreground">Online</p>
                  </div>
                  <motion.span 
                    className="ml-auto px-2 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-medium"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Live
                  </motion.span>
                </div>
                <div className="space-y-3">
                  <motion.div 
                    className="bg-sage-50 rounded-2xl rounded-tl-none p-4 max-w-[85%]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <p className="text-sm">How can I help you today? I can assist with orders, returns, or product questions.</p>
                  </motion.div>
                  <motion.div 
                    className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 max-w-[85%] ml-auto"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    <p className="text-sm">I'd like to track my recent order #12345</p>
                  </motion.div>
                </div>
              </div>

              {/* Integration Tags */}
              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted-foreground mb-3">Connected Channels</p>
                <div className="flex flex-wrap gap-2">
                  {integrationTags.map((tag, index) => (
                    <motion.span
                      key={tag.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.8 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--sage-200))" }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-50 text-sage-700 text-xs font-medium border border-sage-200/50 cursor-pointer"
                    >
                      <tag.icon className="w-3 h-3" />
                      {tag.label}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Title */}
              <div className="mt-6 pt-4 border-t border-border">
                <h3 className="font-heading font-semibold text-lg">Unified CX Delivery at Scale</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  One platform, every channel, enterprise-ready
                </p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-sage-200/50 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-100/50 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
