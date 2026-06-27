import { Zap, GitFork, X, Link, MapPin, Phone, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const links = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Docs", "API Reference", "Status", "Support"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="gradient-text">Mavixtech</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-4">
              The unified platform for teams that build and ship modern
              applications at scale.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>199/106, Moo 11, Bang Bua Thong, Nonthaburi 11110, Thailand</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href="tel:020647556" className="hover:text-foreground transition-colors">02-064-7556</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:support@mavixtech.co.th" className="hover:text-foreground transition-colors">support@mavixtech.co.th</a>
              </li>
            </ul>
            <div className="flex gap-4">
              {[GitFork, X, Link].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-sm font-semibold mb-4">{group}</p>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 MAVIXTECH CO., LTD. All rights reserved.</p>
          <p>
            Built with Next.js, Tailwind CSS &amp; shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
