import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { updateNews } from "../../../actions";
import { FormField, FormCheckbox } from "@/components/admin/AdminFormField";
import { MultiImageUpload } from "@/components/admin/MultiImageUpload";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await prisma.news.findUnique({ where: { id } });
  if (!news) notFound();

  const action = updateNews.bind(null, id);

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-8">
        <Link href="/admin/news" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold mb-0.5">Edit Article</h1>
          <p className="text-sm text-muted-foreground">{news.title}</p>
        </div>
      </div>
      <form action={action} className="space-y-5">
        <FormField label="Title" name="title" required defaultValue={news.title} />
        <FormField
          label="Content"
          name="content"
          required
          textarea
          defaultValue={news.content}
        />
        <MultiImageUpload
          name="images"
          folder="mavixtech/news"
          label="Images"
          max={5}
          defaultValue={news.images ? JSON.parse(news.images) : news.imageUrl ? [news.imageUrl] : []}
        />
        <div className="pt-2">
          <FormCheckbox
            label="Publish"
            name="published"
            defaultChecked={news.published}
            description="Show on the public website"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            Save Changes
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
