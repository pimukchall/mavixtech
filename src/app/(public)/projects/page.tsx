import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await prisma.project
    .findMany({
      where: { published: true },
      orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
    })
    .catch(() => []);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center pt-16 overflow-hidden grid-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At MavixTech, we take pride in delivering innovative solutions that drive success.
            Explore some of our key projects across various industries.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-3">
            <p className="text-sm font-semibold text-foreground">Our Projects Action</p>
            <div className="flex-1 max-w-[60px] h-0.5 bg-primary rounded" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Transforming Ideas into <span className="gradient-text">Reality</span>
          </h2>

          {projects.length === 0 ? (
            <div className="text-center py-32 border border-dashed border-border rounded-2xl">
              <FolderOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl font-semibold mb-2">No projects yet</p>
              <p className="text-muted-foreground text-sm">We are updating our portfolio. Stay tuned.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => {
                const tags = project.tags
                  ? project.tags.split(",").map((t) => t.trim()).filter(Boolean)
                  : [];

                return (
                  <div
                    key={project.id}
                    className="group rounded-2xl border border-border bg-card/60 hover:bg-card hover:border-primary/30 overflow-hidden transition-all duration-300"
                  >
                    {/* Image — clickable */}
                    <Link href={`/projects/${project.id}`} className="block relative h-52 overflow-hidden">
                      {project.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                          <FolderOpen className="w-12 h-12 text-primary/40" />
                        </div>
                      )}
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>
                        </div>
                      )}
                    </Link>

                    {/* Content */}
                    <div className="p-5">
                      <Link href={`/projects/${project.id}`}>
                        <h3 className="font-semibold text-lg mb-2 line-clamp-1 hover:text-primary transition-colors">{project.title}</h3>
                      </Link>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>

                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="w-full border-border hover:border-primary/50">
                            <ExternalLink className="w-3.5 h-3.5 mr-2" />
                            View Project
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Let&apos;s Discuss Your <span className="gradient-text">Project</span>
          </h2>
          <p className="text-muted-foreground mb-8">Contact Us to Start Your Solution Today.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 h-12 glow">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
