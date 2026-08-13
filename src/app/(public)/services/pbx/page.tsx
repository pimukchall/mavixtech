"use client";

import {
  ServiceHero,
  IntroBox,
  Section,
  FeatureCardGrid,
  ProductShowcase,
  UseCaseGrid,
  WhyGrid,
  ServiceCTA,
  Reveal,
} from "@/components/services/ServiceDetailKit";
import { cn } from "@/lib/utils";

const compare = [
  {
    brand: "Grandstream",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/40",
    dot: "bg-blue-600",
    items: [
      "Best for: SMBs, boutique hotels, branch offices",
      "Budget-friendly with enterprise features",
      "Easy to deploy and manage",
      "Open SIP standard — flexible integration",
      "Built-in video conferencing",
      "Hotel-specific IP phones (GHP Series)",
      "Ideal for 10–500 extensions",
    ],
  },
  {
    brand: "Mitel",
    color: "text-purple-700",
    bg: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900/40",
    dot: "bg-purple-700",
    items: [
      "Best for: Large hotels, enterprises, government",
      "Premium reliability and uptime (99.999%)",
      "Advanced UC and contact center",
      "Deep PMS/hospitality integration",
      "MiCollab collaboration suite",
      "Trusted by global hotel chains (Starwood, etc.)",
      "Ideal for 500–10,000+ extensions",
    ],
  },
];

export default function PbxCommunicationPage() {
  return (
    <main>
      <ServiceHero
        badge="Grandstream & Mitel Authorized Partner"
        title="PBX &"
        highlight="Communication System"
        description="Advanced business telephony and unified communications solutions for hotels, enterprises, and government organizations — reliable, scalable, and future-ready."
        stats={[
          { value: "20+", label: "Years Experience" },
          { value: "1000+", label: "Extensions Deployed" },
          { value: "24/7", label: "Support" },
          { value: "99.9%", label: "Uptime" },
        ]}
      />

      <IntroBox
        heading="Unified Communications for Modern Business"
        description="Whether you're running a 200-room hotel or a multi-site enterprise, your communication system is the backbone of daily operations. MavixTech designs, installs, and manages PBX and unified communication systems that keep your teams connected, your guests served, and your business running smoothly."
        list={[
          "IP-PBX systems for voice, video, and messaging",
          "Hotel telephony with PMS integration and wake-up calls",
          "SIP trunking for cost-effective calling",
          "Unified Communications (UC) — voice, chat, video in one",
          "Scalable from 10 to 10,000+ extensions",
        ]}
      />

      <Section
        title="Our Communication Services"
        subtitle="Complete telephony and UC solutions — from design to deployment and ongoing management"
      >
        <FeatureCardGrid
          items={[
            {
              icon: "📞",
              title: "IP-PBX System Design & Installation",
              description:
                "Design and deploy enterprise-grade IP-PBX systems with full call management and routing capabilities.",
              details: [
                "Auto-attendant and IVR configuration",
                "Call queues, ring groups, and hunt groups",
                "Voicemail-to-email and call recording",
                "Multi-site interconnection via VPN/SIP trunk",
              ],
            },
            {
              icon: "🏨",
              title: "Hotel Telephony Solutions",
              description: "Purpose-built PBX features for hospitality — integrated with your PMS for seamless guest services.",
              details: [
                "Guest room phone provisioning (check-in/out)",
                "Wake-up call scheduling and confirmation",
                "Room status and housekeeping codes",
                "Call billing and cost center tracking",
              ],
            },
            {
              icon: "💬",
              title: "Unified Communications (UC)",
              description: "Bring voice, video, messaging, and presence together — enabling collaboration from anywhere.",
              details: [
                "Desktop and mobile softphone clients",
                "Video conferencing and screen sharing",
                "Team messaging and presence status",
                "Integration with Microsoft Teams and CRM",
              ],
            },
            {
              icon: "🔧",
              title: "Maintenance & Support",
              description:
                "Keep your communication system running at peak performance with proactive monitoring and rapid response.",
              details: [
                "24/7 system monitoring and alerting",
                "Firmware updates and security patches",
                "Remote troubleshooting and on-site support",
                "Capacity planning and system upgrades",
              ],
            },
          ]}
        />
      </Section>

      <Section>
        <ProductShowcase
          logoText="GRANDSTREAM"
          heading="Grandstream — Smart IP Communication"
          description="Open-standard, cost-effective IP voice and video solutions ideal for SMBs, hotels, and multi-site deployments."
          accentBg="bg-blue-600"
          accentText="text-blue-600"
          products={[
            {
              label: "IP-PBX",
              title: "UCM6300 Series",
              description:
                "Enterprise IP-PBX with built-in video conferencing, call recording, and up to 3,000 users. Cloud and on-premise options.",
              badge: "Hotels / SMB / Enterprise",
            },
            {
              label: "IP Phones",
              title: "GRP / GXP Series",
              description: "Professional desktop IP phones with HD audio, color display, and PoE — perfect for offices and hotel back-of-house.",
              badge: "Office / Reception / Staff",
            },
            {
              label: "Hotel Phones",
              title: "GHP Series",
              description: "Purpose-built hotel IP phones — compact, elegant design with programmable speed-dial and guest-friendly interface.",
              badge: "Guest Rooms / Lobby / Bathroom",
            },
          ]}
          features={[
            { icon: "💰", title: "Cost-Effective", description: "Enterprise features at SMB pricing" },
            { icon: "🔓", title: "Open Standard SIP", description: "Works with any SIP provider" },
            { icon: "📹", title: "Video Conferencing", description: "Built-in video bridge" },
            { icon: "☁️", title: "Cloud Management", description: "GDMS remote provisioning" },
          ]}
        />
      </Section>

      <Section>
        <ProductShowcase
          logoText="MITEL"
          heading="Mitel — Enterprise Unified Communications"
          description="Trusted by the world's leading hotels and enterprises — delivering reliability, scalability, and advanced UC capabilities since 1973."
          accentBg="bg-purple-700"
          accentText="text-purple-700"
          products={[
            {
              label: "UC Platform",
              title: "MiVoice Business",
              description:
                "Full unified communications platform with voice, video, messaging, and contact center — for medium to large enterprises.",
              badge: "Enterprise / Hotel Chains",
            },
            {
              label: "Hospitality",
              title: "MiVoice Office 400",
              description: "Tailored hospitality solution with PMS integration, guest management, wake-up calls, and room status automation.",
              badge: "Hotels / Resorts / Healthcare",
            },
            {
              label: "Collaboration",
              title: "MiCollab",
              description: "Unified collaboration platform — voice, video, messaging, and presence across desktop, mobile, and web.",
              badge: "Remote Work / Hybrid Teams",
            },
          ]}
          features={[
            { icon: "🏢", title: "Enterprise-Grade", description: "Scalable to 10,000+ users" },
            { icon: "🏨", title: "Hospitality Ready", description: "PMS integration built-in" },
            { icon: "🔒", title: "Secure & Reliable", description: "99.999% uptime architecture" },
            { icon: "🌍", title: "Global Support", description: "Trusted by Fortune 500" },
          ]}
        />
      </Section>

      <Section>
        <Reveal className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <h3 className="text-xl font-bold text-center mb-1.5">Which Solution Is Right for You?</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Both brands deliver excellent communication solutions — here&apos;s a quick guide to help you choose
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {compare.map((c) => (
              <div key={c.brand} className={cn("rounded-xl border p-6", c.bg)}>
                <h4 className={cn("font-bold text-center mb-4", c.color)}>{c.brand}</h4>
                <ul>
                  {c.items.map((item, i) => (
                    <li
                      key={item}
                      className={cn(
                        "text-sm text-foreground/90 py-2 pl-5 relative",
                        i !== c.items.length - 1 && "border-b border-border/40"
                      )}
                    >
                      <span className={cn("absolute left-0 top-3 w-1.5 h-1.5 rounded-full", c.dot)} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section title="Solutions for Every Environment" subtitle="Communication systems designed for the way you work">
        <UseCaseGrid
          items={[
            {
              icon: "🏨",
              title: "Hotels & Resorts",
              subtitle: "Hospitality-grade telephony for guests and staff",
              list: [
                "Guest room phones with PMS integration",
                "Automated wake-up calls",
                "Room status via phone codes",
                "Emergency notification system",
                "Multi-language auto-attendant",
              ],
            },
            {
              icon: "🏢",
              title: "Enterprises",
              subtitle: "Unified communications for productivity",
              list: [
                "Desktop and mobile softphones",
                "Video conferencing rooms",
                "Call center and IVR",
                "CRM and Teams integration",
                "Multi-site VPN connectivity",
              ],
            },
            {
              icon: "🏛️",
              title: "Government",
              subtitle: "Secure, reliable communications",
              list: [
                "Encrypted voice communication",
                "Redundant failover architecture",
                "Call logging and compliance",
                "PA system integration",
                "Emergency broadcast capability",
              ],
            },
          ]}
        />
      </Section>

      <Section title="Why MavixTech" subtitle="Your trusted communication system partner">
        <WhyGrid
          items={[
            {
              icon: "📞",
              title: "PBX Specialists",
              description: "Over 20 years designing and deploying telephony systems for hotels, offices, and government agencies.",
            },
            {
              icon: "🔧",
              title: "End-to-End Service",
              description: "From consultation and cabling to programming, training, and 24/7 maintenance — a single point of contact.",
            },
            {
              icon: "🤝",
              title: "Dual-Brand Partner",
              description: "Authorized Grandstream and Mitel partner — we recommend the right solution based on your needs and budget.",
            },
          ]}
        />
      </Section>

      <ServiceCTA
        title="Ready to Upgrade Your Communication System?"
        description="Get a free consultation — we'll assess your needs and design the perfect PBX or UC solution for your organization."
        buttonText="Get a Free Consultation"
      />
    </main>
  );
}
