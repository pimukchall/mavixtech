"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Server,
  MonitorSmartphone,
  Phone,
  CheckCircle2,
  Network,
  HardDrive,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Shield,
    accent: Network,
    title: "Network & Security",
    description:
      "Protect your business with enterprise-grade network and security solutions.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "hover:border-blue-400/30",
    detail:
      "ออกแบบและติดตั้งระบบเครือข่ายองค์กร Firewall, VPN, VLAN และระบบ Security Monitoring ให้ธุรกิจของคุณปลอดภัยจากภัยคุกคามทุกรูปแบบ",
  },
  {
    icon: Server,
    accent: HardDrive,
    title: "Cloud & Server Management",
    description:
      "Empower your business with secure, scalable, and high-performance cloud and server solutions.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "hover:border-primary/30",
    detail:
      "บริหารจัดการ Server และ Cloud Infrastructure ทั้ง On-Premise และ Cloud-Based ครอบคลุม Backup, Monitoring, และ Disaster Recovery",
  },
  {
    icon: MonitorSmartphone,
    accent: MonitorSmartphone,
    title: "POS & Hospitality System",
    description:
      "Deliver seamless guest experiences with our advanced POS and hospitality solutions.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "hover:border-green-400/30",
    detail:
      "ติดตั้งและดูแลระบบ POS สำหรับโรงแรม ร้านอาหาร และธุรกิจ Hospitality เชื่อมต่อกับระบบ PMS และ Payment Gateway อย่างครบวงจร",
  },
  {
    icon: Phone,
    accent: Headphones,
    title: "PBX & Communication System",
    description:
      "Enhance business communication with our secure and reliable PBX solutions.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "hover:border-yellow-400/30",
    detail:
      "วางระบบโทรศัพท์องค์กร IP-PBX, VoIP และ Unified Communication รองรับทั้งระบบ Analog และ Digital ให้การสื่อสารภายในองค์กรมีประสิทธิภาพสูงสุด",
  },
];

const whyUs = [
  "20+ Years of Experience",
  "End-to-End IT Solutions",
  "Professional & Trusted Team",
  "Strong Support & Maintenance",
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 2) * 0.15, duration: 0.5 }}
      className={`group rounded-2xl border border-border bg-card/60 hover:bg-card transition-all duration-300 overflow-hidden ${service.border}`}
    >
      {/* Icon banner */}
      <div className={`h-48 ${service.bg} flex items-center justify-center relative overflow-hidden`}>
        <service.icon className={`w-24 h-24 ${service.color} opacity-20`} />
        <div className={`absolute inset-0 flex items-center justify-center`}>
          <div className={`w-20 h-20 rounded-2xl ${service.bg} border border-current/20 flex items-center justify-center`}>
            <service.icon className={`w-10 h-10 ${service.color}`} />
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {service.description}
        </p>
        <p className="text-xs text-muted-foreground/70 leading-relaxed">
          {service.detail}
        </p>
      </div>
    </motion.div>
  );
}

function WhySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 border-y border-border bg-secondary/10">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold mb-6">
              ทำไมต้อง<span className="gradient-text">Mavixtech</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At MavixTech, we combine over 20 years of IT expertise with innovative
              solutions in POS, PBX, Server, and Network Security. Our team delivers
              reliable, end-to-end services tailored to hotels, enterprises, and
              government organizations—ensuring performance, trust, and long-term success.
            </p>
            <ul className="space-y-4">
              {whyUs.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "20+", label: "ปีประสบการณ์" },
              { value: "500+", label: "โปรเจกต์สำเร็จ" },
              { value: "99%", label: "ความพึงพอใจ" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card/60 p-6 text-center"
              >
                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="relative rounded-3xl border border-primary/20 bg-card/60 px-8 py-16 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            เริ่มต้นวันนี้
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ปรึกษา<span className="gradient-text">ฟรี</span>ไม่มีค่าใช้จ่าย
          </h2>
          <p className="text-muted-foreground mb-8">
            บอกเราเรื่องความต้องการของคุณ แล้วเราจะแนะนำแนวทางที่ดีที่สุด
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 glow">
              ติดต่อปรึกษาฟรี
            </Button>
          </Link>
        </div>
      </motion.div>
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
      <section className="relative min-h-[55vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            บริการของ<span className="gradient-text">เรา</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            ครบทุกบริการด้าน IT ที่ธุรกิจสมัยใหม่ต้องการ ตั้งแต่ Network ไปจนถึง Cloud
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6">
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 30 }}
          animate={introInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technology that Empowers{" "}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            At MavixTech, we provide more than just IT solutions — we deliver technology
            that drives growth, security, and innovation.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <WhySection />

      {/* CTA */}
      <CtaSection />
    </main>
  );
}
