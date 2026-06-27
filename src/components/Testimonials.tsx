"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, NexaCloud",
    avatar: "SC",
    quote:
      "Mavixtech cut our deployment time from 45 minutes to under 3. The AI-powered pipeline suggestions alone saved us weeks of DevOps work.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Engineer, Stackify",
    avatar: "MR",
    quote:
      "We moved 12 microservices to Mavixtech in a weekend. The multi-region setup just works. No more 3am pager alerts for the team.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Head of Product, Orbit",
    avatar: "PN",
    quote:
      "The analytics dashboard gives us insights we never had before. We caught a performance regression in staging before it ever hit production.",
    rating: 5,
  },
  {
    name: "James Holloway",
    role: "Founder, Launchpad",
    avatar: "JH",
    quote:
      "As a solo founder, Mavixtech is like having a full DevOps team. The starter tier is incredibly generous — I scaled to 10k users without paying a cent.",
    rating: 5,
  },
  {
    name: "Amara Osei",
    role: "Engineering Manager, Finli",
    avatar: "AO",
    quote:
      "The SOC 2 compliance features were the deciding factor for us. Our security team signed off in record time — something unheard of in our organization.",
    rating: 5,
  },
  {
    name: "Tom Nakamura",
    role: "Principal Architect, DevForge",
    avatar: "TN",
    quote:
      "The CI/CD integration with our existing GitHub flow was painless. The team adopted Mavixtech with zero friction — and they never want to go back.",
    rating: 5,
  },
];

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
    >
      <Card className="h-full border-border bg-card/60 hover:bg-card hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex mb-4">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
              {t.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="py-32 px-6 bg-secondary/20 border-y border-border"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by teams{" "}
            <span className="gradient-text">worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Join 50,000+ developers and teams who trust Mavixtech to power
            their products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
