"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Cloud,
  Palette,
  RefreshCw,
  MessageSquare,
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "พัฒนาเว็บไซต์และ Web Application ด้วย modern tech stack ที่รองรับการขยายตัวและ performance สูง",
    color: "text-primary",
    bg: "bg-primary/10",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "พัฒนาแอปมือถือ iOS/Android ทั้งแบบ native และ cross-platform ด้วย React Native / Flutter",
    color: "text-accent",
    bg: "bg-accent/10",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "ออกแบบ วางแผน และ migrate ระบบขึ้น Cloud อย่างปลอดภัย รองรับ AWS, GCP และ Azure",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    tags: ["AWS", "GCP", "Azure", "Docker"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "ออกแบบ interface ที่สวยงาม ใช้งานง่าย และได้ผลลัพธ์ทางธุรกิจที่วัดได้จริง",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    tags: ["Figma", "User Research", "Prototyping"],
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    description: "ปรับกระบวนการธุรกิจสู่ดิจิทัลอย่างครบวงจร ตั้งแต่วิเคราะห์จนถึงการ implement จริง",
    color: "text-green-400",
    bg: "bg-green-400/10",
    tags: ["Process Design", "Automation", "Change Management"],
  },
  {
    icon: MessageSquare,
    title: "IT Consulting",
    description: "ให้คำปรึกษา IT strategy และ architecture เพื่อให้ธุรกิจของคุณเลือกเทคโนโลยีที่ใช่",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    tags: ["Strategy", "Architecture", "Tech Stack"],
  },
];

const process = [
  { icon: Search, step: "01", title: "วิเคราะห์", description: "ทำความเข้าใจธุรกิจ เป้าหมาย และ pain points ของลูกค้าอย่างลึกซึ้ง" },
  { icon: PenTool, step: "02", title: "ออกแบบ", description: "วางโครงสร้างระบบและ design prototype เพื่อให้เห็นภาพก่อน development" },
  { icon: Code2, step: "03", title: "พัฒนา", description: "เขียนโค้ดด้วย agile sprint ส่ง demo ทุก 2 สัปดาห์ เพื่อ feedback ต่อเนื่อง" },
  { icon: Rocket, step: "04", title: "ส่งมอบ", description: "Deploy ระบบ ทดสอบ UAT พร้อม training และ support หลัง go-live" },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div ref={heroRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Services
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
            ครบทุกบริการด้าน IT ที่ธุรกิจสมัยใหม่ต้องการ ตั้งแต่ design ไปจนถึง deployment
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={s.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-border bg-card/60 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <s.icon className={`w-6 h-6 ${s.color}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 border-y border-border bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          {(() => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-80px" });
            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">กระบวนการทำงาน</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  ขั้นตอน<span className="gradient-text">ที่ชัดเจน</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  กระบวนการที่โปร่งใสและวัดผลได้ในทุกขั้นตอน
                </p>
              </motion.div>
            );
          })()}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((p, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={p.step}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="relative w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <p.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {p.step}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        {(() => {
          const ref = useRef(null);
          const inView = useInView(ref, { once: true, margin: "-80px" });
          return (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="relative rounded-3xl border border-primary/20 bg-card/60 px-8 py-16 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">เริ่มต้นวันนี้</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  ปรึกษา<span className="gradient-text">ฟรี</span>ไม่มีค่าใช้จ่าย
                </h2>
                <p className="text-muted-foreground mb-8">บอกเราเรื่องโปรเจ็คของคุณ แล้วเราจะแนะนำแนวทางที่ดีที่สุด</p>
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 glow">
                    ติดต่อปรึกษาฟรี
                  </Button>
                </Link>
              </div>
            </motion.div>
          );
        })()}
      </section>
    </main>
  );
}
