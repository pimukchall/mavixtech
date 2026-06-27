import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { updateProject } from "../../../actions";
import { FormField, FormCheckbox } from "@/components/admin/AdminFormField";
import { MultiImageUpload } from "@/components/admin/MultiImageUpload";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) notFound();

  const action = updateProject.bind(null, id);

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/projects" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold mb-0.5">Edit Project</h1>
          <p className="text-sm text-muted-foreground">{project.title}</p>
        </div>
      </div>
      <form action={action} className="space-y-5">
        <FormField label="Project Title" name="title" required defaultValue={project.title} />
        <FormField
          label="Description"
          name="description"
          required
          textarea
          defaultValue={project.description}
        />
        <MultiImageUpload
          name="images"
          folder="mavixtech/projects"
          label="Project Images"
          max={10}
          defaultValue={project.images ? JSON.parse(project.images) : project.imageUrl ? [project.imageUrl] : []}
        />
        <FormField
          label="Tags"
          name="tags"
          defaultValue={project.tags ?? ""}
          placeholder="e.g. Web, Mobile, AI"
        />
        <FormField label="Project URL" name="url" defaultValue={project.url ?? ""} />
        <div className="flex gap-6 pt-2">
          <FormCheckbox
            label="Publish"
            name="published"
            defaultChecked={project.published}
            description="Show on the public website"
          />
          <FormCheckbox
            label="Featured"
            name="featured"
            defaultChecked={project.featured}
            description="Highlight in featured section"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Save Changes
          </Button>
          <Link href="/admin/projects">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
