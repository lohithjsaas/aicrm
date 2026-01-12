import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateProposalPDF } from "@/lib/pdfGenerator";

const proposalContents = [
  "Executive Summary & Partnership Overview",
  "Implementation Methodology (5-Phase Approach)",
  "Support Operations Model & SLAs",
  "Metrics, KPIs & ROI Projections",
  "Partnership Structure & Engagement Model",
  "Case Studies & Success Stories",
];

export const DownloadSection = () => {
  const handleDownload = () => {
    generateProposalPDF();
  };

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700 p-8 md:p-12 lg:p-16"
        >
          {/* Animated background decoration */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-64 h-64 bg-sage-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -20, 0],
              y: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FileText className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4"
              >
                Download the Complete
                <br />
                Partnership Proposal
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-lg max-w-xl mb-8"
              >
                Get the comprehensive Sagepilot × SuperCX partnership proposal with detailed methodology, success metrics, and implementation roadmap.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleDownload}
                    variant="secondary"
                    size="lg"
                    className="bg-white text-sage-700 hover:bg-sage-50 gap-2 shadow-xl transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF Proposal
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Content - Proposal Contents */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-lg font-heading font-semibold text-white mb-4">
                What's Inside the Proposal
              </h3>
              <ul className="space-y-3">
                {proposalContents.map((content, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0" />
                    </motion.div>
                    <span className="text-sm md:text-base">{content}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div 
                className="mt-6 pt-4 border-t border-white/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <p className="text-white/70 text-sm">
                  6 pages • PDF format • Ready for stakeholder review
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
