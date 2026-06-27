import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Newspaper } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await prisma.news.findUnique({ where: { id, published: true } });
  if (!article) notFound();

  const images: string[] = article.images
    ? JSON.parse(article.images)
    : article.imageUrl
    ? [article.imageUrl]
    : [];

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

        {/* Date */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
          <Calendar className="w-3.5 h-3.5" />
          {new Date(article.publishedAt ?? article.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{article.title}</h1>

        {/* Cover image */}
        {images.length > 0 ? (
          <div className="rounded-2xl overflow-hidden border border-border mb-8 aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0]}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border mb-8 h-64 flex items-center justify-center">
            <Newspaper className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}

        {/* Content */}
        <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-base">
          {article.content}
        </div>

        {/* Additional images */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 gap-4 mt-8">
            {images.slice(1).map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt={`${article.title} ${i + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
