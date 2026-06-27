"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
        <div className="relative rounded-3xl border border-primary/20 bg-card/60 backdrop-blur px-8 py-20 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Get Started Today
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build the{" "}
            <span className="gradient-text">future?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Start for free with no credit card required. Upgrade when you need
            to. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 px-10 h-12 text-base glow"
            >
              Start for Free
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 text-base border-border hover:bg-secondary"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
