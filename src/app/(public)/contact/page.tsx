import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/public/ContactForm";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            ติดต่อ<span className="gradient-text">เรา</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            มีโปรเจ็คในใจ? มีคำถาม? หรืออยากร่วมงานกับเรา — เราพร้อมรับฟังเสมอ
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="border-border bg-card/60">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-1">ส่งข้อความหาเรา</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-5">
            <Card className="border-border bg-card/60">
              <CardContent className="p-6 space-y-5">
                <h3 className="font-semibold text-lg">ข้อมูลติดต่อ</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5">ที่อยู่</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        199/106, Moo 11, Bang Bua Thong,<br />
                        Nonthaburi 11110, Thailand
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green-400/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5">โทรศัพท์</p>
                      <a href="tel:020647556" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        02-064-7556
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5">อีเมล</p>
                      <a href="mailto:support@mavixtech.co.th" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        support@mavixtech.co.th
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-yellow-400/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5">เวลาทำการ</p>
                      <p className="text-sm text-muted-foreground">
                        จันทร์ – ศุกร์ 9:00 – 18:00 น.<br />
                        เสาร์ 10:00 – 15:00 น.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="border-border bg-card/60 overflow-hidden">
              <div className="h-52 bg-gradient-to-br from-secondary to-secondary/50 flex flex-col items-center justify-center gap-2">
                <MapPin className="w-8 h-8 text-primary" />
                <p className="text-sm font-medium">Bang Bua Thong, Nonthaburi</p>
                <p className="text-xs text-muted-foreground">ใกล้ MRT สายสีม่วง</p>
                <a
                  href="https://maps.google.com/?q=Bang+Bua+Thong+Nonthaburi+Thailand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline mt-1"
                >
                  เปิดใน Google Maps →
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
