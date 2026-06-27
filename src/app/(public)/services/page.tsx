"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Server,
  MonitorSmartphone,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    title: "Network & Security",
    description: "Protect your business with enterprise-grade network and security solutions.",
    color: "text-blue-500",
    bg: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    icon: Server,
    title: "Cloud & Server Management",
    description: "Empower your business with secure, scalable, and high-performance cloud and server solutions.",
    color: "text-primary",
    bg: "from-primary/5 to-primary/15",
    iconBg: "bg-primary",
  },
  {
    icon: MonitorSmartphone,
    title: "POS & Hospitality System",
    description: "Deliver seamless guest experiences with our advanced POS and hospitality solutions.",
    color: "text-green-600",
    bg: "from-green-50 to-green-100",
    iconBg: "bg-green-600",
  },
  {
    icon: Phone,
    title: "PBX & Communication System",
    description: "Enhance business communication with our secure and reliable PBX solutions.",
    color: "text-yellow-600",
    bg: "from-yellow-50 to-yellow-100",
    iconBg: "bg-yellow-500",
  },
];

const whyUs = [
  "20+ Years of Experience",
  "End-to-End IT Solutions",
  "Professional & Trusted Team",
  "Strong Support & Maintenance",
];

type Service = typeof services[0];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 2) * 0.15, duration: 0.5 }}
      className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300"
    >
      {/* Image area — gradient with centered icon */}
      <div className={`h-52 bg-gradient-to-br ${service.bg} flex items-center justify-center`}>
        <div className={`w-20 h-20 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-lg`}>
          <service.icon className="w-10 h-10 text-white" />
        </div>
      </div>
      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-2"
        >
          Why Choose Us
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-16 h-1 bg-primary rounded mb-6 origin-left"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground leading-relaxed mb-8 max-w-3xl"
        >
          At MavixTech, we combine over 20 years of IT expertise with innovative solutions
          in POS, PBX, Server, and Network Security. Our team delivers reliable, end-to-end
          services tailored to hotels, enterprises, and government organizations—ensuring
          performance, trust, and long-term success.
        </motion.p>
        <ul className="space-y-3">
          {whyUs.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="font-medium">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-60px" });

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive IT services designed to drive growth, security, and innovation for modern businesses.
          </motion.p>
        </div>
      </section>

      {/* Technology that Empowers */}
      <section className="py-14 px-6 border-b border-border">
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 30 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Technology that Empowers Your Business
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At MavixTech, we provide more than just IT solutions — we deliver technology
            that drives growth, security, and innovation.
          </p>
        </motion.div>
      </section>

      {/* Service Cards */}
      <section className="py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <WhySection />

      {/* CTA */}
      <section className="py-16 px-6 border-t border-border text-center">
        <p className="text-muted-foreground mb-2">Ready to get started?</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Let&apos;s Build Your <span className="gradient-text">IT Solution</span>
        </h2>
        <Link href="/contact">
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 h-12 glow">
            Contact Us
          </Button>
        </Link>
      </section>
    </main>
  );
}
