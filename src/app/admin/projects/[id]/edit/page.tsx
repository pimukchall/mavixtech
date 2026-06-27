import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { updateProject } from "../../../actions";
import { FormField, FormCheckbox } from "@/components/admin/AdminFormField";
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
          <h1 className="text-2xl font-bold mb-0.5">แก้ไขผลงาน</h1>
          <p className="text-sm text-muted-foreground">{project.title}</p>
        </div>
      </div>
      <form action={action} className="space-y-5">
        <FormField label="ชื่อผลงาน" name="title" required defaultValue={project.title} />
        <FormField
          label="รายละเอียด"
          name="description"
          required
          textarea
          defaultValue={project.description}
        />
        <FormField label="URL รูปภาพ" name="imageUrl" defaultValue={project.imageUrl ?? ""} />
        <FormField
          label="Tags"
          name="tags"
          defaultValue={project.tags ?? ""}
          placeholder="เช่น Web, Mobile, AI"
        />
        <FormField label="URL ผลงาน" name="url" defaultValue={project.url ?? ""} />
        <div className="flex gap-6 pt-2">
          <FormCheckbox
            label="เผยแพร่"
            name="published"
            defaultChecked={project.published}
            description="แสดงบน landing page"
          />
          <FormCheckbox
            label="Featured"
            name="featured"
            defaultChecked={project.featured}
            description="แสดงในส่วน highlight"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            บันทึกการเปลี่ยนแปลง
          </Button>
          <Link href="/admin/projects">
            <Button type="button" variant="outline">
              ยกเลิก
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
