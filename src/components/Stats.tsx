"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "50K+", label: "Developers" },
  { value: "2.4B", label: "Requests / day" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "20+", label: "Global Regions" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 px-6 border-y border-border bg-card/30">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-4xl font-bold gradient-text mb-1">{stat.value}</p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
            {i < stats.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
