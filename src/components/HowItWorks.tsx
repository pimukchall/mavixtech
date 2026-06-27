"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Layers, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Workspace",
    description:
      "Sign up in seconds. Invite your team, connect your repositories, and configure your environment — all from one intuitive dashboard.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Build & Integrate",
    description:
      "Use our drag-and-drop pipeline builder or IaC templates. Connect to your favorite tools with 200+ pre-built integrations.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy & Scale",
    description:
      "Push to production with confidence. Mavixtech handles auto-scaling, monitoring, and rollback — so you sleep soundly.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From idea to production{" "}
            <span className="gradient-text">in three steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We designed Mavixtech to remove friction at every stage of your
            development lifecycle.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={step.step}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
