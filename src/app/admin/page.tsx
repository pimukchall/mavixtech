import { prisma } from "@/lib/prisma";
import { FolderOpen, Newspaper, Eye, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default async function AdminDashboard() {
  const [totalProjects, publishedProjects, featuredProjects, totalNews, publishedNews] =
    await Promise.all([
      prisma.project.count(),
      prisma.project.count({ where: { published: true } }),
      prisma.project.count({ where: { featured: true } }),
      prisma.news.count(),
      prisma.news.count({ where: { published: true } }),
    ]);

  const recentProjects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  const recentNews = await prisma.news.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  const stats = [
    {
      label: "Total Projects",
      value: totalProjects,
      sub: `${publishedProjects} published`,
      icon: FolderOpen,
      color: "text-primary",
    },
    {
      label: "Featured Projects",
      value: featuredProjects,
      sub: "Highlighted on site",
      icon: Star,
      color: "text-yellow-400",
    },
    {
      label: "Total News",
      value: totalNews,
      sub: `${publishedNews} published`,
      icon: Newspaper,
      color: "text-accent",
    },
    {
      label: "Published",
      value: publishedProjects + publishedNews,
      sub: "Projects + News",
      icon: Eye,
      color: "text-green-400",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Mavixtech system overview</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((s) => (
          <Card key={s.label} className="border-border bg-card/60">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <s.icon className={`w-4 h-4 ${s.color}`} />
              </div>
              <p className="text-3xl font-bold mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-border bg-card/60">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Recent Projects</h2>
              <Link href="/admin/projects/new" className="text-xs text-primary hover:underline">
                + Add New
              </Link>
            </div>
            {recentProjects.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-6">No projects yet</p>
            ) : (
              <ul className="space-y-2">
                {recentProjects.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium">{p.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(p.createdAt).toLocaleDateString("en-US")}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        p.published
                          ? "bg-green-400/10 text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {p.published ? "Published" : "Draft"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className="border-border bg-card/60">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Recent News</h2>
              <Link href="/admin/news/new" className="text-xs text-primary hover:underline">
                + Add New
              </Link>
            </div>
            {recentNews.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-6">No news yet</p>
            ) : (
              <ul className="space-y-2">
                {recentNews.map((n) => (
                  <li
                    key={n.id}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium">{n.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(n.createdAt).toLocaleDateString("en-US")}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        n.published
                          ? "bg-green-400/10 text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {n.published ? "Published" : "Draft"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
