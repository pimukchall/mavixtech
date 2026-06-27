import { createNews } from "../../actions";
import { FormField, FormCheckbox } from "@/components/admin/AdminFormField";
import { MultiImageUpload } from "@/components/admin/MultiImageUpload";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NewNewsPage() {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/news" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold mb-0.5">Add New Article</h1>
          <p className="text-sm text-muted-foreground">Write a company news or announcement</p>
        </div>
      </div>
      <form action={createNews} className="space-y-5">
        <FormField label="Title" name="title" required placeholder="e.g. Mavixtech launches new service..." />
        <FormField
          label="Content"
          name="content"
          required
          textarea
          placeholder="Article content..."
        />
        <MultiImageUpload name="images" folder="mavixtech/news" label="Images" max={5} />
        <div className="pt-2">
          <FormCheckbox
            label="Publish immediately"
            name="published"
            description="If checked, the article will appear on the website right away"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Save
          </Button>
          <Link href="/admin/news">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
