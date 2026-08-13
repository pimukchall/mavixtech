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

const strategySteps = [
  {
    num: "3",
    title: "Three Copies",
    description: "Keep at least 3 copies of your data — the original plus 2 backups for redundancy",
  },
  {
    num: "2",
    title: "Two Media Types",
    description: "Store backups on 2 different media — local storage and cloud for maximum resilience",
  },
  {
    num: "1",
    title: "One Offsite Copy",
    description: "Keep at least 1 copy offsite or in the cloud — protection against physical disasters",
  },
];

export default function ServerBackupPage() {
  return (
    <main>
      <ServiceHero
        badge="Veeam Certified Partner"
        title="Server &"
        highlight="Backup Management"
        description="Ensure business continuity with proactive server management and enterprise-grade data protection — powered by Veeam Data Platform."
        stats={[
          { value: "20+", label: "Years Experience" },
          { value: "24/7", label: "Monitoring" },
          { value: "99.9%", label: "Recovery Rate" },
          { value: "<15min", label: "RTO Target" },
        ]}
      />

      <IntroBox
        heading="Your Data Is Your Business"
        description="Downtime and data loss can cost hotels, enterprises, and government organizations millions in revenue and reputation. MavixTech provides comprehensive server management and backup solutions that keep your systems running and your data protected — whether on-premises, in the cloud, or hybrid environments."
        list={[
          "Proactive server health monitoring and maintenance",
          "Automated backup with verified recovery",
          "Protection for physical, virtual, and cloud workloads",
          "Rapid disaster recovery with minimal downtime",
          "Compliance-ready data retention policies",
        ]}
      />

      <Section title="Our Services" subtitle="End-to-end server and backup management to protect what matters most">
        <FeatureCardGrid
          items={[
            {
              icon: "🖥️",
              title: "Server Management & Monitoring",
              description:
                "Proactive management of your server infrastructure to prevent issues before they impact your business.",
              details: [
                "24/7 health monitoring and alerting",
                "Patch management and security updates",
                "Performance optimization and capacity planning",
                "Hardware lifecycle management",
              ],
            },
            {
              icon: "💾",
              title: "Backup & Data Protection",
              description:
                "Automated, reliable backup solutions ensuring your data is always recoverable when you need it.",
              details: [
                "Automated daily/hourly backup schedules",
                "Immutable backups — ransomware-proof",
                "Backup verification and recovery testing",
                "Offsite and cloud backup copies",
              ],
            },
            {
              icon: "🔄",
              title: "Disaster Recovery (DR)",
              description:
                "Get back online fast with tested disaster recovery plans and instant VM recovery capabilities.",
              details: [
                "Instant VM Recovery — back online in minutes",
                "Continuous Data Protection (CDP)",
                "DR runbooks and automated failover",
                "Regular DR testing and validation",
              ],
            },
            {
              icon: "☁️",
              title: "Cloud & Hybrid Infrastructure",
              description:
                "Manage and protect workloads across on-premises, cloud, and hybrid environments seamlessly.",
              details: [
                "VMware vSphere and Hyper-V support",
                "AWS, Azure, and Google Cloud backup",
                "Cloud migration and replication",
                "Unified management across all platforms",
              ],
            },
          ]}
        />
      </Section>

      <Section>
        <ProductShowcase
          logoText="VEEAM"
          heading="Powered by Veeam Data Platform"
          description="The industry-leading backup and recovery solution trusted by 450,000+ customers worldwide — ensuring your data is always protected and recoverable."
          accentBg="bg-emerald-600"
          accentText="text-emerald-600"
          products={[
            {
              label: "Core Product",
              title: "Veeam Backup & Replication",
              description:
                "Complete backup, recovery, and replication for virtual, physical, and cloud workloads. Supports VMware, Hyper-V, Nutanix AHV, and more.",
              badge: "On-Premises & Hybrid",
            },
            {
              label: "Cloud Protection",
              title: "Veeam Backup for Cloud",
              description:
                "Native backup and disaster recovery for AWS, Microsoft Azure, and Google Cloud environments with full automation.",
              badge: "AWS / Azure / GCP",
            },
            {
              label: "Microsoft 365",
              title: "Veeam Backup for M365",
              description:
                "Protect Exchange Online, SharePoint, OneDrive, and Teams data from accidental deletion and security threats.",
              badge: "SaaS Protection",
            },
          ]}
          features={[
            { icon: "🛡️", title: "Immutable Backups", description: "Ransomware-proof protection" },
            { icon: "⚡", title: "Instant Recovery", description: "VMs back online in minutes" },
            { icon: "🔍", title: "Malware Detection", description: "AI-powered threat scanning" },
            { icon: "📊", title: "Monitoring & Analytics", description: "Real-time backup insights" },
            { icon: "🔐", title: "Zero Trust Security", description: "RBAC and encryption" },
            { icon: "🌐", title: "Multi-Platform", description: "Physical, virtual, cloud" },
            { icon: "📋", title: "Compliance Ready", description: "Data retention policies" },
            { icon: "🔄", title: "CDP", description: "Near-zero data loss" },
          ]}
        />
      </Section>

      <Section>
        <Reveal className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <h3 className="text-xl font-bold text-center mb-1.5">The 3-2-1 Backup Strategy</h3>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Industry best practice for data protection — implemented and managed by MavixTech
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {strategySteps.map((s) => (
              <div key={s.num} className="rounded-xl border border-border bg-secondary/30 text-center p-6">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center mx-auto mb-3">
                  {s.num}
                </div>
                <h4 className="font-bold text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section title="Solutions for Every Industry" subtitle="Tailored server and backup solutions for the industries we serve">
        <UseCaseGrid
          items={[
            {
              icon: "🏨",
              title: "Hotels & Resorts",
              subtitle: "Protect PMS, booking, and guest data",
              list: [
                "PMS and reservation system backup",
                "Guest data protection (PDPA compliant)",
                "POS transaction data archiving",
                "Rapid recovery to minimize guest impact",
              ],
            },
            {
              icon: "🏢",
              title: "Enterprises",
              subtitle: "Enterprise-grade data resilience",
              list: [
                "ERP and database server protection",
                "Microsoft 365 backup (email, files, Teams)",
                "Multi-site replication and DR",
                "Compliance and audit-ready retention",
              ],
            },
            {
              icon: "🏛️",
              title: "Government",
              subtitle: "Secure, compliant data management",
              list: [
                "Encrypted backup with access controls",
                "Long-term data retention policies",
                "Air-gapped and immutable backups",
                "Disaster recovery planning and testing",
              ],
            },
          ]}
        />
      </Section>

      <Section title="Why MavixTech" subtitle="Trusted expertise in server management and data protection">
        <WhyGrid
          items={[
            {
              icon: "🎯",
              title: "Certified Veeam Engineers",
              description:
                "Our team holds Veeam certifications with hands-on experience deploying and managing backup infrastructure.",
            },
            {
              icon: "🔧",
              title: "End-to-End Service",
              description:
                "From assessment and design to deployment, monitoring, and recovery — one trusted partner for everything.",
            },
            {
              icon: "🏨",
              title: "Hospitality Specialists",
              description: "Deep understanding of hotel IT environments — PMS, POS, PBX systems and the data they generate.",
            },
          ]}
        />
      </Section>

      <ServiceCTA
        title="Ready to Protect Your Business Data?"
        description="Get a free assessment of your current backup strategy — we'll identify gaps and recommend the right solution."
        buttonText="Get a Free Assessment"
      />
    </main>
  );
}
