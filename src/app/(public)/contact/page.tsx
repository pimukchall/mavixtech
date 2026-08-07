import NetworkBg from "@/components/NetworkBg";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Globe, FileText, Download, ExternalLink } from "lucide-react";

const LINE_URL = "https://line.me/R/ti/p/@366pklzy";
const FACEBOOK_URL = "https://www.facebook.com";
const EMAIL = "support@mavixtech.co.th";

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
    value: "02-064-7556 / 095-485-2896",
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
      <section className="relative min-h-[45vh] flex items-center justify-center pt-24 overflow-hidden grid-bg">
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

          {/* Company Profile */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Company Profile</h3>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">MAVIXTECH Company Profile</p>
                  <p className="text-xs text-muted-foreground">PDF Document</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/MAVIXTECH_Company_Profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    title="Open"
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </a>
                  <a
                    href="/MAVIXTECH_Company_Profile.pdf"
                    download
                    className="w-9 h-9 rounded-lg bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social icons */}
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Connect with Us</h3>
              <div className="flex items-center justify-center gap-4">
                {/* Facebook */}
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1877F2] hover:bg-[#1877F2]/90 transition-colors"
                  aria-label="Facebook">
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </a>
                {/* LINE */}
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-[#06C755] hover:bg-[#06C755]/90 transition-colors"
                  aria-label="LINE">
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                  </svg>
                </a>
                {/* Email */}
                <a href={`mailto:${EMAIL}`}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-primary hover:bg-primary/90 transition-colors"
                  aria-label="Email">
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </CardContent>
          </Card>

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
