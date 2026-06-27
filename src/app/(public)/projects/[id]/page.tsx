import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, FolderOpen } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id, published: true } });
  if (!project) notFound();

  const images: string[] = project.images
    ? JSON.parse(project.images)
    : project.imageUrl
    ? [project.imageUrl]
    : [];

  const tags = project.tags
    ? project.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          {project.featured && (
            <Badge className="bg-primary text-primary-foreground text-xs mb-3">Featured</Badge>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Cover image */}
        {images.length > 0 ? (
          <div className="rounded-2xl overflow-hidden border border-border mb-8 aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border mb-8 aspect-video flex items-center justify-center">
            <FolderOpen className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}

        {/* Description */}
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap text-base">
            {project.description}
          </p>
        </div>

        {/* Additional images */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {images.slice(1).map((url, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-border aspect-video">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={url} alt={`${project.title} ${i + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* External link */}
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <ExternalLink className="w-4 h-4" />
              Visit Project
            </Button>
          </a>
        )}
      </div>
    </main>
  );
}
