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

const hardware = [
  { icon: "🖥️", title: "Touch Terminals", description: "15\" capacitive touchscreen, fanless design, water-resistant" },
  { icon: "🖨️", title: "Receipt & Kitchen Printers", description: "Thermal printers for receipts, kitchen tickets, and bar orders" },
  { icon: "📟", title: "Cash Drawers & Scanners", description: "Heavy-duty cash drawers and barcode/QR scanners" },
  { icon: "📺", title: "Kitchen Display (KDS)", description: "Digital order screens for kitchen and bar — paperless workflow" },
];

export default function PosHospitalityPage() {
  return (
    <main>
      <ServiceHero
        badge="Codesoft POS Authorized Dealer"
        title="POS &"
        highlight="Hospitality System"
        description="Comprehensive point-of-sale and hospitality solutions tailored for hotels, restaurants, and resorts — streamline operations, boost revenue, and delight your guests."
        stats={[
          { value: "20+", label: "Years Experience" },
          { value: "100+", label: "Properties Served" },
          { value: "24/7", label: "Support" },
          { value: "99%", label: "Uptime" },
        ]}
      />

      <IntroBox
        heading="Smart POS for Modern Hospitality"
        description="Today's hotels and restaurants need more than just a cash register. They need an intelligent system that connects front-of-house to back-of-house, integrates with property management, handles multi-outlet operations, and provides real-time business insights — all while delivering a seamless guest experience."
        list={[
          "Touchscreen POS designed for F&B and retail",
          "Seamless integration with PMS (room charge posting)",
          "Multi-outlet management from a single dashboard",
          "Real-time sales reporting and inventory tracking",
          "Support for Thai tax compliance and VAT invoicing",
        ]}
      />

      <Section
        title="Our POS & Hospitality Services"
        subtitle="From consultation to installation, training, and ongoing support — we handle everything"
      >
        <FeatureCardGrid
          items={[
            {
              icon: "🍽️",
              title: "Restaurant & F&B POS",
              description:
                "Complete point-of-sale system for restaurants, cafes, bars, and room service — built for speed and accuracy.",
              details: [
                "Table management and floor plan layout",
                "Kitchen Display System (KDS) for order routing",
                "Split bills, discounts, and service charge",
                "QR code ordering and mobile POS",
              ],
            },
            {
              icon: "🏨",
              title: "Hotel PMS Integration",
              description:
                "Connect your POS directly to the property management system for seamless room charge and guest billing.",
              details: [
                "Post F&B charges directly to guest folio",
                "Guest recognition across all outlets",
                "Centralized billing and reporting",
                "Interface with major PMS platforms",
              ],
            },
            {
              icon: "🛒",
              title: "Retail & Gift Shop POS",
              description:
                "POS for hotel gift shops, convenience stores, and retail outlets with barcode scanning and stock control.",
              details: [
                "Barcode and SKU management",
                "Stock level alerts and auto-reorder",
                "Multi-location inventory sync",
                "Loyalty programs and promotions",
              ],
            },
            {
              icon: "💆",
              title: "Spa & Recreation POS",
              description: "Booking and billing solutions for spa, fitness center, pool bar, and other hotel amenities.",
              details: [
                "Appointment scheduling and therapist management",
                "Package and membership tracking",
                "Room charge integration for guests",
                "Commission and tip reporting",
              ],
            },
          ]}
        />
      </Section>

      <Section>
        <ProductShowcase
          logoText="CODESOFT"
          heading="Codesoft POS — Built for Hospitality"
          description="A powerful, reliable, and easy-to-use POS system designed specifically for hotels, restaurants, and F&B businesses in Southeast Asia."
          accentBg="bg-orange-500"
          accentText="text-orange-500"
          products={[
            {
              label: "Restaurant",
              title: "Codesoft Restaurant POS",
              description:
                "Full-featured F&B POS with table management, kitchen printing, multi-menu support, and real-time reporting.",
              badge: "Hotels / Restaurants / Cafes",
            },
            {
              label: "Retail",
              title: "Codesoft Retail POS",
              description: "Fast and intuitive retail checkout with inventory management, barcode scanning, and multi-store support.",
              badge: "Gift Shops / Convenience / Retail",
            },
            {
              label: "All-in-One",
              title: "Codesoft Touch Terminal",
              description:
                "Sleek touchscreen hardware with built-in printer, cash drawer interface, and customer display — ready to use out of the box.",
              badge: "Compact / Durable / Stylish",
            },
          ]}
          features={[
            { icon: "⚡", title: "Fast & Reliable", description: "Handles peak hours without lag" },
            { icon: "🔗", title: "PMS Integration", description: "Room charge posting in one tap" },
            { icon: "📊", title: "Real-time Reports", description: "Sales, inventory, and staff data" },
            { icon: "🖨️", title: "Kitchen Printing", description: "Route orders to the right station" },
            { icon: "💳", title: "Multi-Payment", description: "Cash, card, QR, room charge" },
            { icon: "🏪", title: "Multi-Outlet", description: "Manage all locations centrally" },
            { icon: "📱", title: "Mobile Ready", description: "Tableside ordering via tablet" },
            { icon: "🔒", title: "Secure & Compliant", description: "Thai tax and VAT ready" },
          ]}
        />
      </Section>

      <Section>
        <Reveal className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <h3 className="text-xl font-bold text-center mb-1.5">POS Hardware Solutions</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Complete hardware packages — we supply, install, and maintain everything you need
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hardware.map((h) => (
              <div key={h.title} className="rounded-xl border border-border bg-secondary/30 text-center p-5">
                <div className="text-2xl mb-2">{h.icon}</div>
                <h4 className="font-bold text-xs mb-1">{h.title}</h4>
                <p className="text-[11px] text-muted-foreground">{h.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section title="Solutions for Every Venue" subtitle="Tailored POS setups for different hospitality environments">
        <UseCaseGrid
          items={[
            {
              icon: "🏨",
              title: "Hotels & Resorts",
              subtitle: "Multi-outlet POS with PMS integration",
              list: ["All-day dining restaurant", "Lobby lounge and bar", "Room service and minibar", "Pool bar and beach club", "Gift shop and retail"],
            },
            {
              icon: "🍜",
              title: "Restaurants & Cafes",
              subtitle: "Fast, intuitive POS for F&B operations",
              list: ["Dine-in with table management", "Takeaway and delivery orders", "QR code self-ordering", "Happy hour and promotions", "Multi-branch management"],
            },
            {
              icon: "🏖️",
              title: "Spa & Recreation",
              subtitle: "Booking + billing in one system",
              list: ["Treatment booking and scheduling", "Package and membership billing", "Product sales and inventory", "Therapist commission tracking", "Guest folio integration"],
            },
          ]}
        />
      </Section>

      <Section title="Why MavixTech" subtitle="Your trusted POS partner for the hospitality industry">
        <WhyGrid
          items={[
            {
              icon: "🏨",
              title: "Hospitality Specialists",
              description: "Over 20 years deploying POS systems in hotels, resorts, and restaurants across Thailand. We know what works.",
            },
            {
              icon: "🔧",
              title: "Full-Service Support",
              description:
                "From site survey and system design to installation, staff training, and 24/7 technical support — one team for everything.",
            },
            {
              icon: "🤝",
              title: "Official Codesoft Partner",
              description: "Authorized dealer with certified technicians — genuine products, warranty support, and software updates guaranteed.",
            },
          ]}
        />
      </Section>

      <ServiceCTA
        title="Ready to Upgrade Your POS System?"
        description="Let our team assess your current setup and recommend the perfect Codesoft POS solution for your property."
        buttonText="Get a Free Consultation"
      />
    </main>
  );
}
