"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import NetworkBg from "@/components/NetworkBg";
import projects from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── Client logo card ─────────────────────────────────────────
const clientGroups = [
  {
    label: "Hotel & Hospitality",
    clients: [
      { src: "/Logo_Customer/Hospitality/ASIA Hotel Bangkok.png", name: "ASIA Hotel Bangkok" },
      { src: "/Logo_Customer/Hospitality/All Seasons Place.png", name: "All Seasons Place" },
      { src: "/Logo_Customer/Hospitality/Asset World Corporation.png", name: "Asset World Corporation" },
      { src: "/Logo_Customer/Hospitality/DusitThanni_Krabi.png", name: "Dusit Thanni Krabi" },
      { src: "/Logo_Customer/Hospitality/Grand Fourwing.jpg", name: "Grand Fourwings" },
      { src: "/Logo_Customer/Hospitality/Holiday-Inn-Sukhumvit BKK.jpg", name: "Holiday Inn Sukhumvit" },
      { src: "/Logo_Customer/Hospitality/Holiday-Inn.png", name: "Holiday Inn" },
      { src: "/Logo_Customer/Hospitality/Layana Resort & Spa.jpg", name: "Layana Resort & Spa" },
      { src: "/Logo_Customer/Hospitality/MBK Group.png", name: "MBK Group" },
      { src: "/Logo_Customer/Hospitality/Maraleina Samui.jpg", name: "Maraleina Samui" },
      { src: "/Logo_Customer/Hospitality/Sheraton Huahin.jpg", name: "Sheraton Hua Hin" },
      { src: "/Logo_Customer/Hospitality/Sheraton Samui.png", name: "Sheraton Samui" },
      { src: "/Logo_Customer/Hospitality/Surang Mansion.jpg", name: "Surang Mansion" },
      { src: "/Logo_Customer/Hospitality/Tinidee Hotel Bangkok.png", name: "Tinidee Hotel Bangkok" },
      { src: "/Logo_Customer/Hospitality/Vanabell Samui.jpg", name: "VanaBelle Samui" },
      { src: "/Logo_Customer/Hospitality/ibis Bangkok IMPACT.jpg", name: "ibis Bangkok IMPACT" },
    ],
  },
  {
    label: "Enterprise",
    clients: [
      { src: "/Logo_Customer/Enterprise/EmperorHouse.jpg", name: "Emperor House" },
      { src: "/Logo_Customer/Enterprise/Leo Angelo.jpg", name: "Leo Angelo" },
      { src: "/Logo_Customer/Enterprise/DConnectPlus.jpg", name: "DConnect Plus" },
      { src: "/Logo_Customer/Enterprise/KengSengGroup.webp", name: "Keng Seng Group" },
      { src: "/Logo_Customer/Enterprise/Noble.jpg", name: "Noble" },
      { src: "/Logo_Customer/Enterprise/Sasipakdi.png", name: "Sasipakdi" },
    ],
  },
];

const vendorGroups = [
  {
    label: "Network & Security System",
    vendors: [
      { src: "/Logo_Vendor/Network & Security System/Cisco.png", name: "Cisco" },
      { src: "/Logo_Vendor/Network & Security System/Fortinet.png", name: "Fortinet" },
      { src: "/Logo_Vendor/Network & Security System/hpe_aruba.png", name: "HPE Aruba" },
      { src: "/Logo_Vendor/Network & Security System/Ruckus.png", name: "Ruckus" },
      { src: "/Logo_Vendor/Network & Security System/Ubiquiti.png", name: "Ubiquiti" },
      { src: "/Logo_Vendor/Network & Security System/Mikrotik.png", name: "MikroTik" },
      { src: "/Logo_Vendor/Network & Security System/Tp-link.png", name: "TP-Link" },
      { src: "/Logo_Vendor/Network & Security System/H3C.png", name: "H3C" },
      { src: "/Logo_Vendor/Network & Security System/WatchGuard.png", name: "WatchGuard" },
      { src: "/Logo_Vendor/Network & Security System/Bitdefender.png", name: "Bitdefender" },
      { src: "/Logo_Vendor/Network & Security System/Vmware.png", name: "VMware" },
      { src: "/Logo_Vendor/Network & Security System/Hikvision.png", name: "Hikvision" },
      { src: "/Logo_Vendor/Network & Security System/ZKTeco.png", name: "ZKTeco" },
      { src: "/Logo_Vendor/Network & Security System/Acsi.jpg", name: "ACSI" },
      { src: "/Logo_Vendor/Network & Security System/Neogate.png", name: "Neogate" },
    ],
  },
  {
    label: "Server & Backup Management",
    vendors: [
      { src: "/Logo_Vendor/Server & Backup Management/Dell.png", name: "Dell" },
      { src: "/Logo_Vendor/Server & Backup Management/HPE.png", name: "HPE" },
      { src: "/Logo_Vendor/Server & Backup Management/Lenovo.jpg", name: "Lenovo" },
      { src: "/Logo_Vendor/Server & Backup Management/Microsoft.png", name: "Microsoft" },
      { src: "/Logo_Vendor/Server & Backup Management/Synology.png", name: "Synology" },
      { src: "/Logo_Vendor/Server & Backup Management/Qnap.png", name: "QNAP" },
      { src: "/Logo_Vendor/Server & Backup Management/Veeam.png", name: "Veeam" },
      { src: "/Logo_Vendor/Server & Backup Management/Axentel.png", name: "Axentel" },
    ],
  },
  {
    label: "POS & Hospitality System",
    vendors: [
      { src: "/Logo_Vendor/POS & Hospitality System/Seito.png", name: "Seito" },
      { src: "/Logo_Vendor/POS & Hospitality System/Pxier.png", name: "Pxier" },
      { src: "/Logo_Vendor/POS & Hospitality System/Mymenu.png", name: "MyMenu" },
      { src: "/Logo_Vendor/POS & Hospitality System/Tripla.jpg", name: "Tripla" },
      { src: "/Logo_Vendor/POS & Hospitality System/Code-soft.jpg", name: "Code-Soft" },
    ],
  },
  {
    label: "PBX & Communication System",
    vendors: [
      { src: "/Logo_Vendor/PBX & Communication System/3CX.png", name: "3CX" },
      { src: "/Logo_Vendor/PBX & Communication System/Grandstream.png", name: "Grandstream" },
      { src: "/Logo_Vendor/PBX & Communication System/Yealink.jpg", name: "Yealink" },
      { src: "/Logo_Vendor/PBX & Communication System/Mitel.jpg", name: "Mitel" },
    ],
  },
  {
    label: "Distributor",
    vendors: [
      { src: "/Logo_Vendor/Distribution/Ingram.jpg", name: "Ingram Micro" },
      { src: "/Logo_Vendor/Distribution/Synnex.png", name: "Synnex" },
      { src: "/Logo_Vendor/Distribution/SIS.jpg", name: "SIS" },
      { src: "/Logo_Vendor/Distribution/VST_ECS.png", name: "VST ECS" },
      { src: "/Logo_Vendor/Distribution/Advice.png", name: "Advice" },
    ],
  },
];

function LogoCard({ src, name, delay }: { src: string; name: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="rounded-2xl border border-border bg-card p-4 flex flex-col items-center gap-3 hover:border-primary/30 hover:shadow-sm transition-all"
    >
      <div className="w-20 h-20 rounded-xl bg-white border border-border flex items-center justify-center overflow-hidden">
        <Image src={src} alt={name} width={80} height={80} className="object-contain w-full h-full" />
      </div>
      <p className="font-semibold text-xs text-center leading-tight">{name}</p>
    </motion.div>
  );
}

function ClientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6 bg-secondary/30 border-y border-border">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
        >
          Our Clients
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05, duration: 0.55 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Trusted by Leading <span className="gradient-text">Organizations</span>
        </motion.h2>
        <div className="flex flex-col gap-14">
          {clientGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-3 text-left">
                {group.label}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.clients.map((c, i) => (
                  <LogoCard key={c.name} src={c.src} name={c.name} delay={i * 0.05} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VendorsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-24 px-6 border-b border-border">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
        >
          Technology Partners
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05, duration: 0.55 }}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
          Powered by <span className="gradient-text">World-Class Brands</span>
        </motion.h2>
        <div className="flex flex-col gap-14">
          {vendorGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6 border-b border-border pb-3 text-left">
                {group.label}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.vendors.map((v, i) => (
                  <LogoCard key={v.name} src={v.src} name={v.name} delay={i * 0.05} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-24 overflow-hidden grid-bg">
        <NetworkBg />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At MavixTech, we take pride in delivering innovative solutions that drive success.
            Explore some of our key projects across various industries.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <p className="text-sm font-semibold text-foreground">Our Projects Action</p>
            <div className="flex-1 max-w-[60px] h-0.5 bg-primary rounded" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Transforming Ideas into <span className="gradient-text">Reality</span>
          </h2>

          {projects.length === 0 ? (
            <div className="text-center py-32 border border-dashed border-border rounded-2xl">
              <FolderOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold mb-2">No projects yet</p>
              <p className="text-muted-foreground text-sm">We are updating our portfolio. Stay tuned.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-primary/30 overflow-hidden transition-all duration-300"
                >
                  <Link href={`/projects/${project.id}`} className="block relative h-52 overflow-hidden">
                    {project.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                        <FolderOpen className="w-12 h-12 text-primary/40" />
                      </div>
                    )}
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>
                      </div>
                    )}
                  </Link>
                  <div className="p-5">
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1 hover:text-primary transition-colors">{project.title}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="w-full border-border hover:border-primary/50">
                          <ExternalLink className="w-3.5 h-3.5 mr-2" />
                          View Project
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ClientsSection />
      <VendorsSection />

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let&apos;s Discuss Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-muted-foreground mb-8">Contact Us to Start Your Solution Today.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 h-12 glow">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
