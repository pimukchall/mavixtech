import { createProject } from "../../actions";
import { FormField, FormCheckbox } from "@/components/admin/AdminFormField";
import { MultiImageUpload } from "@/components/admin/MultiImageUpload";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewProjectPage() {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/projects" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold mb-0.5">Add New Project</h1>
          <p className="text-sm text-muted-foreground">Fill in the project details</p>
        </div>
      </div>
      <form action={createProject} className="space-y-5">
        <FormField
          label="Project Title"
          name="title"
          required
          placeholder="e.g. Hotel Management System"
        />
        <FormField
          label="Description"
          name="description"
          required
          textarea
          placeholder="Brief description of the project..."
        />
        <MultiImageUpload name="images" folder="mavixtech/projects" label="Project Images" max={10} />
        <FormField
          label="Tags"
          name="tags"
          placeholder="e.g. Web, Mobile, AI (comma separated)"
        />
        <FormField label="Project URL" name="url" placeholder="https://..." />
        <div className="flex gap-6 pt-2">
          <FormCheckbox
            label="Publish"
            name="published"
            defaultChecked={true}
            description="Show on the public website"
          />
          <FormCheckbox
            label="Featured"
            name="featured"
            description="Highlight in featured section"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Save
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
