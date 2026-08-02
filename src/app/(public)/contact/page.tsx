import NetworkBg from "@/components/NetworkBg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import LineQR from "@/components/LineQR";

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "199/106, Moo 11, Bang Bua Thong,\nNonthaburi 11110, Thailand",
    href: "https://maps.google.com/?q=199/106+Moo+11+Bang+Bua+Thong+Nonthaburi+Thailand",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: MapPin,
    label: "Service Center — Samui",
    value: "28/252 Moo 1, Mae Nam,\nKoh Samui, Surat Thani 84330, Thailand",
    href: "https://maps.google.com/?q=28/252+Moo+1+Mae+Nam+Koh+Samui+Surat+Thani+Thailand",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "02-064-7556",
    href: "tel:020647556",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@mavixtech.co.th",
    href: "mailto:support@mavixtech.co.th",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri  9:00 – 18:00\nSat  10:00 – 15:00",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.mavixtech.co.th",
    href: "https://www.mavixtech.co.th",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <NetworkBg />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or a question? Our team is ready to help you find the best IT solution.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <Card className="border-border bg-card">
            <CardContent className="p-6 space-y-5">
              <h3 className="font-semibold text-lg">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <LineQR />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border-border bg-card overflow-hidden">
              <a
                href="https://maps.google.com/?q=199/106+Moo+11+Bang+Bua+Thong+Nonthaburi+Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-40 bg-gradient-to-br from-primary/5 to-primary/15 flex flex-col items-center justify-center gap-2 hover:from-primary/10 hover:to-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Head Office</p>
                  <p className="text-xs text-muted-foreground">Nonthaburi</p>
                  <p className="text-xs text-muted-foreground/70">Open in Google Maps</p>
                </div>
              </a>
            </Card>
            <Card className="border-border bg-card overflow-hidden">
              <a
                href="https://maps.google.com/?q=28/252+Moo+1+Mae+Nam+Koh+Samui+Surat+Thani+Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-40 bg-gradient-to-br from-primary/5 to-primary/15 flex flex-col items-center justify-center gap-2 hover:from-primary/10 hover:to-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Service Center</p>
                  <p className="text-xs text-muted-foreground">Koh Samui</p>
                  <p className="text-xs text-muted-foreground/70">Open in Google Maps</p>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
