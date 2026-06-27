"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MonitorSmartphone,
  Phone,
  Network,
  Server,
  CheckCircle2,
  CircleDot,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// ─── Vision & Mission ─────────────────────────────────────────
function VisionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Vision and Mission</h2>
          <div className="w-12 h-1 bg-primary rounded mb-8" />
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-foreground mb-1">
                <span className="text-primary">Our Vision</span> : To be a trusted leader in innovative technology
                solutions that drive sustainable growth.
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                <span className="text-primary">Our Mission</span> : To provide secure, reliable, and comprehensive
                technology that empowers our clients to succeed long-term.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border border-border bg-secondary/30 p-10 flex flex-col gap-6"
        >
          <div className="flex gap-4">
            {["M", "A", "V", "I", "X"].map((letter) => (
              <div key={letter} className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-lg">
                {letter}
              </div>
            ))}
          </div>
          <p className="text-lg font-semibold leading-relaxed">
            &ldquo;Empowering businesses through reliable, secure, and innovative IT solutions — built for the hospitality era.&rdquo;
          </p>
          <p className="text-sm text-muted-foreground">— MAVIXTECH CO., LTD.</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Extraordinary Experiences + Core Values ─────────────────
function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const coreValues = [
    {
      prefix: "Maverick Mindset",
      desc: "Focused on innovation and forward-thinking ideas.",
    },
    {
      prefix: "Vision-Driven",
      desc: "Driving every solution with clear goals and outstanding results.",
    },
    {
      prefix: "Technology Excellence",
      desc: "Committed to delivering reliable, secure, and comprehensive technology services.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/20 border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16" ref={ref}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Extraordinary Experiences</h2>
          <div className="w-12 h-1 bg-primary rounded mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-4">
            MavixTech provides comprehensive{" "}
            <span className="font-semibold text-foreground">IT, POS, PBX, and Network Security Solutions</span>{" "}
            for hotels, enterprises, and government organizations, supported by a team of highly
            skilled professionals.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With more than{" "}
            <span className="font-semibold text-foreground">20 years of experience</span> in hotel IT
            systems and enterprise technology, our team specializes in{" "}
            <span className="font-semibold text-foreground">
              end-to-end IT consulting and solution design
            </span>
            . Our expertise includes{" "}
            <span className="font-semibold text-foreground">
              POS Systems, PBX Systems, Network and Firewall Solutions, WiFi Internet Gateways,
              Server Systems, and Cloud Solutions.
            </span>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are dedicated to delivering{" "}
            <span className="font-semibold text-foreground">
              secure, reliable, and scalable technologies
            </span>{" "}
            that drive business growth and ensure long-term success.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
          <div className="w-12 h-1 bg-primary rounded mb-6" />
          <p className="text-muted-foreground mb-8">
            Driving creative and forward-thinking technology solutions.
          </p>
          <ul className="space-y-6">
            {coreValues.map((v) => (
              <li key={v.prefix} className="flex gap-4">
                <div className="w-1 bg-primary/40 rounded shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">{v.prefix}</span>
                  {": "}{v.desc}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Our Expertise ────────────────────────────────────────────
const expertise = [
  { icon: MonitorSmartphone, label: "POS Solutions" },
  { icon: Phone, label: "PBX & Communication Systems" },
  { icon: Network, label: "Network & Firewall" },
  { icon: Server, label: "Cloud & Server Management" },
];

function ExpertiseCard({ icon: Icon, label, delay }: {
  icon: React.ElementType; label: string; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <div className="w-24 h-24 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <p className="text-sm font-medium text-center">{label}</p>
    </motion.div>
  );
}

// ─── Timeline ─────────────────────────────────────────────────
const timeline = [
  { year: "2025", bold: "End-to-End IT Solutions", text: "Established as a trusted provider of {bold} across industries." },
  { year: "2020", bold: "Enterprise and Government sectors", text: "Grew into serving {bold}, delivering advanced and customized IT solutions." },
  { year: "2015", bold: "Cloud & Security Solutions", text: "Introduced {bold}, helping clients achieve secure and scalable digital transformation." },
  { year: "2010", bold: "Server & Network Systems", text: "Expanded services to include {bold}, strengthening enterprise IT infrastructure." },
  { year: "2005", bold: "Hotel IT Administration", text: "Began our journey in {bold}, providing reliable technology support for hospitality businesses." },
];

function TimelineItem({ year, bold, text, delay, last }: {
  year: string; bold: string; text: string; delay: number; last: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [before, after] = text.split("{bold}");
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <CircleDot className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        {!last && <div className="w-px flex-1 bg-border mt-2" />}
      </div>
      <div className="pb-8">
        <span className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">{year}</span>
          {" : "}
          {before}
          <span className="font-semibold text-primary">{bold}</span>
          {after}
        </span>
      </div>
    </motion.li>
  );
}

// ─── CTA ──────────────────────────────────────────────────────
function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-muted-foreground mb-2">Ready to get started ?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Launch Your Project{" "}
          <span className="gradient-text">with Us</span>
        </h2>
        <Link href="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 h-12 glow">
            Contact Us <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const expertiseRef = useRef(null);
  const expertiseInView = useInView(expertiseRef, { once: true, margin: "-60px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-60px" });

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Who We <span className="gradient-text">Are?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            MAVIXTECH CO., LTD. — delivering innovative IT, POS, PBX, and Security solutions
            for hotels, enterprises, and government organizations since 2005.
          </motion.p>
        </div>
      </section>

      <VisionSection />
      <ExperienceSection />

      {/* Our Expertise */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            ref={expertiseRef}
            initial={{ opacity: 0, y: 30 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-4xl font-bold mb-16"
          >
            Our <span className="gradient-text">Expertise</span>
          </motion.h2>
          <div className="relative">
            <div className="absolute top-12 left-[10%] right-[10%] h-0.5 bg-primary/20 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
              {expertise.map((e, i) => (
                <ExpertiseCard key={e.label} icon={e.icon} label={e.label} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-secondary/20 border-y border-border">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            ref={timelineRef}
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            <span className="gradient-text">Timeline</span>
          </motion.h2>
          <ul className="space-y-0">
            {timeline.map((item, i) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                bold={item.bold}
                text={item.text}
                delay={i * 0.1}
                last={i === timeline.length - 1}
              />
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
