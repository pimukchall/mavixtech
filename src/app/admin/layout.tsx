import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LayoutDashboard, FolderOpen, Newspaper, LogOut, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "ผลงาน", icon: FolderOpen },
  { href: "/admin/news", label: "ข่าวสาร", icon: Newspaper },
  { href: "/admin/contacts", label: "ข้อความ", icon: MessageSquare },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-60 border-r border-sidebar-border bg-sidebar flex flex-col shrink-0">
        <div className="px-6 py-5 border-b border-sidebar-border">
          <Link href="/admin" className="flex items-center gap-2 font-bold text-lg">
            <Image src="/Icon_M.png" alt="Mavixtech" width={30} height={30} className="object-contain rounded-md bg-white p-0.5" />
            <span className="gradient-text">Mavixtech</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-7 h-7 rounded-full bg-sidebar-primary/20 flex items-center justify-center text-xs font-bold text-sidebar-primary">
              {session.user?.name?.charAt(0) ?? "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate text-sidebar-foreground">{session.user?.name}</p>
              <p className="text-xs text-sidebar-foreground/50 truncate">{session.user?.email}</p>
            </div>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirect: false });
              redirect("/login");
            }}
          >
            <button className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
              <LogOut className="w-4 h-4" />
              ออกจากระบบ
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
