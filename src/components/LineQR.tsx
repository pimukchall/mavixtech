"use client";

import { QRCodeSVG } from "qrcode.react";
import { Card, CardContent } from "@/components/ui/card";

const LINE_URL = "https://line.me/R/ti/p/@366pklzy";

export default function LineQR() {
  return (
    <Card className="border-border bg-card">
      <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
        <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="shrink-0">
          <div className="p-3 bg-white rounded-2xl shadow-sm border border-border">
            <QRCodeSVG
              value={LINE_URL}
              size={120}
              fgColor="#06C755"
              bgColor="#ffffff"
              level="M"
            />
          </div>
        </a>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#06C755]">
              <path d="M12 2C6.48 2 2 6.02 2 11c0 3.17 1.67 5.97 4.24 7.76L5.5 22l3.36-1.76C9.87 20.72 10.93 21 12 21c5.52 0 10-4.02 10-9S17.52 2 12 2z"/>
            </svg>
            <span className="font-semibold text-sm">Add us on LINE</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Scan QR code or click to open LINE and chat with our team directly.
          </p>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#06C755] hover:bg-[#05b34c] text-white text-sm font-medium transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M12 2C6.48 2 2 6.02 2 11c0 3.17 1.67 5.97 4.24 7.76L5.5 22l3.36-1.76C9.87 20.72 10.93 21 12 21c5.52 0 10-4.02 10-9S17.52 2 12 2z"/>
            </svg>
            Open LINE Chat
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
