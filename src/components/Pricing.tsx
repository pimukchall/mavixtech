"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    description: "Perfect for side projects and personal use.",
    features: [
      "Up to 3 projects",
      "5 GB storage",
      "1 team member",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    monthly: 49,
    yearly: 39,
    description: "For growing teams that need more power and collaboration.",
    features: [
      "Unlimited projects",
      "100 GB storage",
      "Up to 10 members",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "CI/CD pipelines",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    monthly: 199,
    yearly: 159,
    description: "For large teams that demand scale, security, and SLAs.",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Unlimited members",
      "Dedicated support",
      "SSO / SAML",
      "SLA guarantee",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, transparent{" "}
            <span className="gradient-text">pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Start free, scale as you grow. No hidden fees, ever.
          </p>

          <div className="inline-flex items-center gap-3 bg-secondary rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                !yearly
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                yearly
                  ? "bg-background text-foreground shadow"
                  : "text-muted-foreground"
              }`}
            >
              Yearly
              <span className="text-xs text-green-400 font-semibold">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <motion.div
                key={plan.name}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={plan.highlight ? "md:-mt-4 md:mb-[-1rem]" : ""}
              >
                <Card
                  className={`h-full relative overflow-hidden transition-all duration-300 ${
                    plan.highlight
                      ? "border-primary bg-primary/5 shadow-2xl shadow-primary/20"
                      : "border-border bg-card/60 hover:border-primary/30"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="p-6 pb-0">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {plan.name}
                    </p>
                    <div className="flex items-end gap-1 mb-2">
                      <span className="text-5xl font-bold">${price}</span>
                      <span className="text-muted-foreground mb-2">/mo</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Button
                      className={`w-full mb-6 ${
                        plan.highlight
                          ? "bg-primary hover:bg-primary/90 glow"
                          : "bg-secondary hover:bg-secondary/80 text-foreground"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
