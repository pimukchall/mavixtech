import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const newsList = await prisma.news
    .findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    })
    .catch(() => []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Latest Updates</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Company <span className="gradient-text">News</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest news, product updates, and announcements from Mavixtech.
          </p>
        </div>
      </section>

      {/* News list */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {newsList.length === 0 ? (
            <div className="text-center py-32 border border-dashed border-border rounded-2xl">
              <Newspaper className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold mb-2">No news yet</p>
              <p className="text-muted-foreground text-sm">Check back soon for updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsList.map((article) => {
                const images: string[] = article.images
                  ? JSON.parse(article.images)
                  : article.imageUrl
                  ? [article.imageUrl]
                  : [];

                return (
                  <Link
                    key={article.id}
                    href={`/news/${article.id}`}
                    className="group rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-primary/30 overflow-hidden transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      {images.length > 0 ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={images[0]}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                          <Newspaper className="w-10 h-10 text-primary/40" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(article.publishedAt ?? article.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {article.content}
                      </p>
                      <div className="flex items-center gap-1 text-primary text-sm mt-4 font-medium">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
