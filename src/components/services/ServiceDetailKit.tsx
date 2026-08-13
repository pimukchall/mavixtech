"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import NetworkBg from "@/components/NetworkBg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Reveal wrapper ─────────────────────────────────────────
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────
export function ServiceHero({
  badge,
  title,
  highlight,
  description,
  stats,
}: {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  stats: { value: string; label: string }[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-24 overflow-hidden grid-bg">
      <NetworkBg />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs tracking-wide text-primary mb-5"
        >
          {badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {title} <span className="gradient-text">{highlight}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "grid gap-6 mt-10 mx-auto",
            stats.length === 3 ? "max-w-sm grid-cols-3" : "max-w-lg grid-cols-4"
          )}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold font-mono text-primary">{s.value}</div>
              <div className="text-[10px] md:text-xs uppercase tracking-wide text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section wrapper ─────────────────────────────────────────
export function Section({
  title,
  subtitle,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 px-6", className)}>
      <div className="max-w-5xl mx-auto">
        {title && (
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

// ─── Intro box ─────────────────────────────────────────
export function IntroBox({
  heading,
  description,
  list,
}: {
  heading: string;
  description: string;
  list: string[];
}) {
  return (
    <Section className="pt-16 pb-0">
      <Reveal className="rounded-2xl border border-border bg-card p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">{heading}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
        <ul className="space-y-0">
          {list.map((item, i) => (
            <li
              key={item}
              className={cn(
                "text-sm text-foreground/90 py-2.5 pl-6 relative",
                i !== list.length - 1 && "border-b border-border/60"
              )}
            >
              <span className="absolute left-0 text-primary font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

// ─── Feature / service card grid ─────────────────────────────────────────
export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  details?: string[];
}

export function FeatureCardGrid({ items }: { items: FeatureCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={(i % 2) * 0.1}
          className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all"
        >
          <div className="text-2xl mb-3">{item.icon}</div>
          <h4 className="font-bold mb-1.5">{item.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          {item.details && (
            <ul className="mt-3 space-y-1.5">
              {item.details.map((d) => (
                <li key={d} className="text-xs text-muted-foreground pl-3.5 relative">
                  <span className="absolute left-0 text-primary">•</span>
                  {d}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}
    </div>
  );
}

// ─── Product showcase (brand spotlight) ─────────────────────────────────────────
export interface ShowcaseProduct {
  label: string;
  title: string;
  description: string;
  badge: string;
}

export interface ShowcaseFeature {
  icon: string;
  title: string;
  description: string;
}

export function ProductShowcase({
  logoText,
  heading,
  description,
  products,
  features,
  accentBg,
  accentText,
}: {
  logoText: string;
  heading: string;
  description: string;
  products: ShowcaseProduct[];
  features: ShowcaseFeature[];
  accentBg: string;
  accentText: string;
}) {
  return (
    <Reveal className="rounded-2xl border border-border bg-gradient-to-br from-secondary/40 to-secondary/10 p-8 md:p-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <div className={cn("rounded-lg px-4 py-2.5 font-extrabold text-xs tracking-wide text-white shrink-0", accentBg)}>
          {logoText}
        </div>
        <div>
          <h3 className="font-bold text-lg">{heading}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/30 hover:-translate-y-0.5 transition-all"
          >
            <div className={cn("text-[10px] uppercase tracking-widest font-bold mb-1", accentText)}>{p.label}</div>
            <h4 className="font-bold text-sm mb-1.5">{p.title}</h4>
            <p className="text-xs text-muted-foreground mb-3">{p.description}</p>
            <span className="inline-block rounded-full bg-foreground/90 text-background text-[10px] px-2.5 py-1">
              {p.badge}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-lg bg-card border border-border text-center px-3 py-4">
            <div className="text-xl mb-1.5">{f.icon}</div>
            <h5 className="text-xs font-bold">{f.title}</h5>
            <p className="text-[11px] text-muted-foreground mt-0.5">{f.description}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

// ─── Use case grid ─────────────────────────────────────────
export interface UseCase {
  icon: string;
  title: string;
  subtitle: string;
  list: string[];
}

export function UseCaseGrid({ items }: { items: UseCase[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 0.1}
          className="rounded-2xl border border-border bg-card p-6 text-center"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <h4 className="font-bold mb-1">{item.title}</h4>
          <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
          <ul className="text-left space-y-1.5">
            {item.list.map((l) => (
              <li key={l} className="text-xs text-muted-foreground pl-4 relative">
                <span className="absolute left-0 text-primary font-bold">✓</span>
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

// ─── Why grid ─────────────────────────────────────────
export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export function WhyGrid({ items }: { items: WhyItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 0.1}
          className="rounded-2xl border border-border bg-card p-6 text-center"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <h4 className="font-bold mb-1.5">{item.title}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </Reveal>
      ))}
    </div>
  );
}

// ─── CTA ─────────────────────────────────────────
export function ServiceCTA({
  title,
  description,
  buttonText,
}: {
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <section className="py-16 px-6 border-t border-border text-center">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{description}</p>
        <Link href="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 h-12 glow">
            {buttonText}
          </Button>
        </Link>
      </Reveal>
    </section>
  );
}
