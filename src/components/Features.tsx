"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Cpu,
  Shield,
  Zap,
  Globe,
  BarChart3,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Automation",
    description:
      "Let our AI handle repetitive tasks — from code reviews to performance tuning — so your team stays focused on what matters.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption, role-based access control, and real-time threat detection built in.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Zap,
    title: "Blazing Fast Performance",
    description:
      "Global edge network with sub-50ms latency. Auto-scaling infrastructure that adapts to your traffic in seconds.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Globe,
    title: "Multi-Region Deployment",
    description:
      "Deploy to 20+ regions worldwide with a single command. Built-in CDN ensures your users get the fastest experience.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description:
      "Real-time dashboards with actionable insights. Track every metric that matters — from error rates to revenue impact.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description:
      "Seamless integration with GitHub, GitLab, and Bitbucket. Automated pipelines from commit to production in minutes.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.5, ease: "easeOut" }}
    >
      <Card className="h-full border-border bg-card/60 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
        <CardContent className="p-6">
          <div
            className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
          >
            <feature.icon className={`w-6 h-6 ${feature.color}`} />
          </div>
          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {feature.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="gradient-text">ship great products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A complete platform from prototype to production — with the tools
            and insights your team needs to move fast without breaking things.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
