"use client";

import {
  ServiceHero,
  IntroBox,
  Section,
  FeatureCardGrid,
  ProductShowcase,
  WhyGrid,
  ServiceCTA,
} from "@/components/services/ServiceDetailKit";

export default function NetworkSecurityPage() {
  return (
    <main>
      <ServiceHero
        badge="Network & WiFi Solutions for Hospitality"
        title="Network &"
        highlight="Security"
        description="Design, deploy, and manage secure network and WiFi infrastructure for hotels, resorts, and hospitality businesses — powered by industry-leading technology."
        stats={[
          { value: "20+", label: "Years of Experience" },
          { value: "24/7", label: "Support" },
          { value: "99.9%", label: "Uptime" },
        ]}
      />

      <IntroBox
        heading="Networking Built for Hotels"
        description="Hotels and resorts have unique networking demands — from WiFi that supports hundreds of guests simultaneously, to security systems that isolate internal operations from guest networks. MavixTech designs end-to-end solutions tailored to these needs."
        list={[
          "Full WiFi coverage — rooms, lobby, pool, restaurant",
          "Secure segmentation of Guest / Staff / IoT networks",
          "Supports hundreds of concurrent devices",
          "Protects guest data and payment information",
          "Easy cloud-based management",
        ]}
      />

      <Section
        title="Network & WiFi Solutions for Hotels"
        subtitle="Everything your hotel needs — from design and installation to ongoing management"
      >
        <FeatureCardGrid
          items={[
            {
              icon: "📶",
              title: "High-Density WiFi",
              description:
                "WiFi systems engineered for high-traffic areas, supporting large numbers of guests and devices simultaneously.",
              details: [
                "Enterprise-grade Access Points for rooms and common areas",
                "Seamless Roaming — no disconnection when moving",
                "Band Steering for optimal performance",
                "Captive Portal for guest login and branding",
              ],
            },
            {
              icon: "🔀",
              title: "Network Segmentation (VLAN)",
              description:
                "Isolate network zones for security and performance — keeping guest traffic separate from operations.",
              details: [
                "Guest Network — fully isolated from internal systems",
                "Staff Network — for employees and PMS access",
                "POS Network — dedicated to payment processing",
                "IoT Network — cameras, door locks, sensors",
              ],
            },
            {
              icon: "🛡️",
              title: "Firewall & Security",
              description:
                "Protect your network from threats and safeguard guest data in compliance with PCI-DSS standards.",
              details: [
                "Next-Gen Firewall with intrusion prevention",
                "Content Filtering — block inappropriate content",
                "Intrusion Prevention System (IPS)",
                "Site-to-Site VPN for multi-property connectivity",
              ],
            },
            {
              icon: "☁️",
              title: "Cloud Management & Monitoring",
              description:
                "Manage your entire network from a single dashboard — monitor status and resolve issues instantly.",
              details: [
                "Real-time device status dashboard",
                "Automated alerts when issues are detected",
                "Remote firmware updates",
                "Traffic and usage reports",
              ],
            },
          ]}
        />
      </Section>

      <Section>
        <ProductShowcase
          logoText="WATCHGUARD"
          heading="Recommended Products"
          description="WatchGuard — globally trusted network security solutions, ideal for hotels and hospitality businesses."
          accentBg="bg-red-600"
          accentText="text-red-600"
          products={[
            {
              label: "Firewall",
              title: "Firebox T Series",
              description: "Compact firewall for small to mid-size hotels. Easy to deploy and cloud-managed.",
              badge: "Boutique Hotels / Branches",
            },
            {
              label: "Firewall",
              title: "Firebox M Series",
              description: "High-performance firewall for large properties with heavy traffic and multiple VLANs.",
              badge: "Hotel Chains / Resorts",
            },
            {
              label: "WiFi",
              title: "Secure WiFi AP",
              description: "Access Points with built-in security, managed through WatchGuard Cloud.",
              badge: "Guest Rooms / Common Areas",
            },
          ]}
          features={[
            { icon: "🔒", title: "Total Security", description: "All-in-one protection" },
            { icon: "☁️", title: "Cloud Managed", description: "Manage from anywhere" },
            { icon: "📊", title: "Visibility", description: "Real-time traffic insights" },
            { icon: "🔗", title: "SD-WAN", description: "Smart multi-site connectivity" },
          ]}
        />
      </Section>

      <Section title="Why MavixTech" subtitle="We understand hospitality and build systems that work in the real world.">
        <WhyGrid
          items={[
            {
              icon: "🏨",
              title: "Hospitality Experts",
              description:
                "Over 20 years of experience designing and deploying network infrastructure for hotels and resorts.",
            },
            {
              icon: "🔧",
              title: "End-to-End Service",
              description:
                "From site survey and design to installation and ongoing support — one team handles everything.",
            },
            {
              icon: "🤝",
              title: "Trusted Partner",
              description:
                "Official WatchGuard Partner with certified engineers — genuine products and reliable after-sales service.",
            },
          ]}
        />
      </Section>

      <ServiceCTA
        title="Interested in Network & WiFi for Your Hotel?"
        description="Consult with our team of experts — we'll design the right solution for your property."
        buttonText="Get a Free Consultation"
      />
    </main>
  );
}
