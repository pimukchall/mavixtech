"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ShieldCheck, Handshake, Zap, Target, Eye } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Lightbulb,
    title: "นวัตกรรม",
    description: "เราไม่หยุดคิดค้นและพัฒนาเทคโนโลยีใหม่ๆ เพื่อตอบโจทย์ยุคดิจิทัลที่เปลี่ยนแปลงอย่างรวดเร็ว",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: ShieldCheck,
    title: "คุณภาพ",
    description: "ทุกโปรเจ็คผ่านกระบวนการ QA ที่เข้มงวด เพื่อให้ได้ผลลัพธ์ที่ดีที่สุดสำหรับลูกค้า",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Handshake,
    title: "พาร์ทเนอร์ชิพ",
    description: "เราไม่ได้เป็นแค่ผู้รับจ้าง แต่เป็นพาร์ทเนอร์ที่เติบโตไปพร้อมกับธุรกิจของคุณ",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "ความเร็ว",
    description: "ส่งมอบงานตรงเวลาด้วย agile process ที่ยืดหยุ่น พร้อมอัปเดตความคืบหน้าอย่างโปร่งใส",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const team = [
  { name: "ธนพล วงศ์สุวรรณ", role: "CEO & Co-Founder", initials: "ธว" },
  { name: "สุภาวดี รัตนกุล", role: "CTO & Co-Founder", initials: "สร" },
  { name: "วรวุฒิ ชัยมงคล", role: "Head of Design", initials: "วช" },
  { name: "พิชญา เจริญสุข", role: "Head of Engineering", initials: "พจ" },
];

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            เราคือ{" "}
            <span className="gradient-text">Mavixtech</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            บริษัทเทคโนโลยีไทยที่มุ่งมั่นสร้างโซลูชันดิจิทัลชั้นนำ ด้วยทีมผู้เชี่ยวชาญและนวัตกรรมที่ไม่หยุดพัฒนา
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">พันธกิจและวิสัยทัศน์</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              สิ่งที่{" "}
              <span className="gradient-text">ขับเคลื่อนเรา</span>
            </h2>
          </Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                label: "พันธกิจ (Mission)",
                color: "text-primary",
                bg: "bg-primary/10",
                text: "มุ่งมั่นส่งมอบโซลูชันเทคโนโลยีที่ตอบโจทย์ธุรกิจไทย ด้วยนวัตกรรมและความเชี่ยวชาญที่สามารถวัดผลได้จริง พร้อมสนับสนุนลูกค้าในทุกขั้นตอนของการเติบโต",
              },
              {
                icon: Eye,
                label: "วิสัยทัศน์ (Vision)",
                color: "text-accent",
                bg: "bg-accent/10",
                text: "เป็นบริษัท IT ชั้นนำที่ช่วยขับเคลื่อนการเติบโตของธุรกิจไทยในยุคดิจิทัล และก้าวสู่เวทีระดับภูมิภาคเอเชียตะวันออกเฉียงใต้",
              },
            ].map((item, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={item.label}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  <Card className="h-full border-border bg-card/60 hover:bg-card hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-5`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <p className={`text-xs font-semibold uppercase tracking-widest ${item.color} mb-2`}>{item.label}</p>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 border-y border-border bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">ค่านิยมองค์กร</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ทำไมต้องเลือก{" "}
              <span className="gradient-text">Mavixtech</span>
            </h2>
          </Section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={v.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-border bg-card/60 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <v.icon className={`w-6 h-6 ${v.color}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Section className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">ทีมงาน</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ทีม<span className="gradient-text">ผู้บริหาร</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              คนเก่งที่มีความหลงใหลในเทคโนโลยีและมุ่งมั่นสร้างสิ่งที่ดีที่สุดให้ลูกค้า
            </p>
          </Section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={member.name}
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 text-xl font-bold text-primary">
                    {member.initials}
                  </div>
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <Section className="max-w-3xl mx-auto text-center">
          <div className="relative rounded-3xl border border-primary/20 bg-card/60 backdrop-blur px-8 py-16 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">พร้อมร่วมงานกัน?</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              มาสร้างสิ่งที่ยิ่งใหญ่{" "}
              <span className="gradient-text">ด้วยกัน</span>
            </h2>
            <p className="text-muted-foreground mb-8">ติดต่อเราวันนี้เพื่อปรึกษาโปรเจ็คของคุณฟรี ไม่มีค่าใช้จ่าย</p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 glow">
                ติดต่อเรา
              </Button>
            </Link>
          </div>
        </Section>
      </section>
    </main>
  );
}
