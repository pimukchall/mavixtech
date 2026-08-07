"use client";

import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import { Separator } from "@/components/ui/separator";
import { QRCodeSVG } from "qrcode.react";

const LINE_URL = "https://line.me/R/ti/p/@366pklzy";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left — logo + contact */}
          <div>
            <NextLink href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Image src="/logo_MT_BG.png" alt="Mavixtech" width={140} height={140} className="object-contain h-16 w-auto md:h-12" />
              <span className="gradient-text">Mavixtech</span>
            </NextLink>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span><span className="font-medium text-foreground">Head Office</span> — 199/106, Moo 11, Bang Bua Thong, Nonthaburi 11110, Thailand</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span><span className="font-medium text-foreground">Service Center</span> — 28/252 Moo 1, Mae Nam, Koh Samui, Surat Thani 84330, Thailand</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href="tel:020647556" className="hover:text-foreground transition-colors">02-064-7556</a>
                <span className="text-muted-foreground/50">/</span>
                <a href="tel:0954852896" className="hover:text-foreground transition-colors">095-485-2896</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:support@mavixtech.co.th" className="hover:text-foreground transition-colors">support@mavixtech.co.th</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 shrink-0 text-primary" />
                <a href="https://www.mavixtech.co.th" className="hover:text-foreground transition-colors">www.mavixtech.co.th</a>
              </li>
            </ul>
          </div>

          {/* Right — LINE QR code */}
          <div className="flex md:justify-end items-start">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 w-fit group">
              <div className="p-3 bg-white rounded-2xl border border-border group-hover:border-[#06C755]/40 transition-colors shadow-sm">
                <QRCodeSVG value={LINE_URL} size={140} fgColor="#06C755" bgColor="#ffffff" level="M" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">LINE Official</p>
                <p className="text-xs text-muted-foreground">Scan to chat with us</p>
              </div>
            </a>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 MAVIXTECH CO., LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
