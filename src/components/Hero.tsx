"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-6"
        >
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/10 px-4 py-1.5 text-sm"
          >
            Now in Public Beta — Try it Free
          </Badge>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Build Smarter.{" "}
          <span className="gradient-text">Scale Faster.</span>
          <br />
          Ship Confidently.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Mavixtech gives your team a unified platform to design, develop, and
          deploy modern applications — with AI-powered insights at every step.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-12 text-base glow"
          >
            Start for Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 text-base border-border hover:bg-secondary"
          >
            <Play className="mr-2 w-4 h-4 fill-current" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 text-sm text-muted-foreground"
        >
          No credit card required · 14-day free trial · Cancel anytime
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-20 relative"
        >
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                mavixtech — dashboard
              </span>
            </div>
            <div className="p-8 grid grid-cols-3 gap-4 min-h-[260px]">
              {[
                { label: "Deployments", value: "1,248", color: "text-primary" },
                { label: "Uptime", value: "99.99%", color: "text-green-400" },
                { label: "Requests / s", value: "48.3k", color: "text-accent" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-background/50 p-6 flex flex-col gap-2"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
