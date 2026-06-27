"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MonitorSmartphone,
  Network,
  Building2,
  Utensils,
  Hotel,
  Landmark,
} from "lucide-react";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

// ─── Service card ─────────────────────────────────────────────
const services = [
  {
    icon: MonitorSmartphone,
    title: "POS & Hospitality System",
    desc: "Your guests deserve the best — and so does your business. Our POS & Hospitality Solutions keep your hotel running smarter, faster, and better.",
  },
  {
    icon: Network,
    title: "IT Solutions & Consulting",
    desc: "From strategy to execution, our IT Solutions & Consulting services help you optimize infrastructure, enhance security, and unlock new growth opportunities. Future-proof your business with us.",
  },
];

function ServiceCard({ icon: Icon, title, desc, delay }: {
  icon: React.ElementType; title: string; desc: string; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="rounded-2xl border border-border bg-card p-8 hover:shadow-md hover:border-primary/20 transition-all"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-5">{desc}</p>
      <Link href="/services">
        <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/5">
          Learn More <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
        </Button>
      </Link>
    </motion.div>
  );
}

// ─── Capability card ──────────────────────────────────────────
function CapabilityCard({ icon: Icon, label, desc, delay }: {
  icon: React.ElementType; label: string; desc: string; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <p className="font-semibold text-sm">{label}</p>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

// ─── Industry card ────────────────────────────────────────────
function IndustryCard({ icon: Icon, label, sub, delay }: {
  icon: React.ElementType; label: string; sub: string; delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="rounded-2xl border border-border bg-card p-6 flex flex-col items-center gap-3 hover:border-primary/30 hover:shadow-sm transition-all"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <p className="font-bold text-sm">{label}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </motion.div>
  );
}

// ─── Trusted Tech Partner section ────────────────────────────
function TrustedSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Your Trusted Tech Partner
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          MavixTech, we specialize in delivering IT, POS, and IoT solutions tailored
          for hotels, enterprises, and government organizations. Our expert team ensures
          complete, reliable, and professional support at every stage.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          <Link href="/services">
            <Button size="lg" variant="secondary" className="px-8 h-12">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Transform section ────────────────────────────────────────
function TransformSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
          >
            Ready to Transform Your Business with{" "}
            <span className="gradient-text">Smarter Technology?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="text-muted-foreground leading-relaxed mb-4"
          >
            At MavixTech, we provide end-to-end IT, AI, IoT, Cloud, and Security solutions
            tailored for hotels, enterprises, and government organizations. Partner with us
            to unlock reliable, secure, and innovative technology that drives growth and
            long-term success.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="text-muted-foreground leading-relaxed mb-8"
          >
            <span className="font-semibold text-foreground">Contact Us Today</span> and
            let&apos;s build the future of your business together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 h-12 glow">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <CapabilityCard icon={Network} label="Network & Security" desc="Enterprise-grade protection" delay={0} />
          <CapabilityCard icon={MonitorSmartphone} label="POS & Hospitality" desc="Hotel & restaurant systems" delay={0.1} />
          <CapabilityCard icon={Building2} label="Cloud & Server" desc="Scalable infrastructure" delay={0.2} />
          <CapabilityCard icon={Utensils} label="PBX & Communication" desc="Unified communication" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

// ─── Industries section ───────────────────────────────────────
function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6 bg-secondary/30 border-y border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Industries We <span className="gradient-text">Serve</span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <IndustryCard icon={Hotel} label="ACARA" sub="Hotel & Hospitality" delay={0} />
          <IndustryCard icon={Hotel} label="Nana Nally Luxury" sub="Luxury Resort" delay={0.1} />
          <IndustryCard icon={Hotel} label="Sheraton" sub="International Hotel" delay={0.2} />
          <IndustryCard icon={Landmark} label="Emperor" sub="Enterprise" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-60px" });

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={heroRef}>
          <motion.p
            custom={0} variants={fadeUp} initial="hidden" animate={heroInView ? "show" : "hidden"}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
          >
            MAVIXTECH CO., LTD.
          </motion.p>
          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate={heroInView ? "show" : "hidden"}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-5 leading-tight"
          >
            Empowering <span className="gradient-text">Hospitality</span>
          </motion.h1>
          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate={heroInView ? "show" : "hidden"}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            with Smarter IT Infrastructure
          </motion.p>
          <motion.p
            custom={3} variants={fadeUp} initial="hidden" animate={heroInView ? "show" : "hidden"}
            className="text-base text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We provide end-to-end IT, AI, IoT, Cloud, and Security solutions tailored
            for hotels, enterprises, and government organizations.
          </motion.p>
          <motion.div
            custom={4} variants={fadeUp} initial="hidden" animate={heroInView ? "show" : "hidden"}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 h-12 text-base glow">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-12 text-base border-border hover:bg-secondary">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* We Design, Build, and Support */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={servicesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            We Design, Build, and Support{" "}
            <span className="gradient-text">Smart IT Solutions</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>

      <TrustedSection />
      <TransformSection />
      <IndustriesSection />
    </main>
  );
}
