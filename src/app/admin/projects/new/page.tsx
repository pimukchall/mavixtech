import { createProject } from "../../actions";
import { FormField, FormCheckbox } from "@/components/admin/AdminFormField";
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
          <h1 className="text-2xl font-bold mb-0.5">เพิ่มผลงานใหม่</h1>
          <p className="text-sm text-muted-foreground">กรอกข้อมูลผลงานของบริษัท</p>
        </div>
      </div>
      <form action={createProject} className="space-y-5">
        <FormField
          label="ชื่อผลงาน"
          name="title"
          required
          placeholder="เช่น Website E-Commerce"
        />
        <FormField
          label="รายละเอียด"
          name="description"
          required
          textarea
          placeholder="อธิบายผลงานโดยย่อ..."
        />
        <FormField label="URL รูปภาพ" name="imageUrl" placeholder="https://..." />
        <FormField
          label="Tags"
          name="tags"
          placeholder="เช่น Web, Mobile, AI (คั่นด้วย comma)"
        />
        <FormField label="URL ผลงาน" name="url" placeholder="https://..." />
        <div className="flex gap-6 pt-2">
          <FormCheckbox
            label="เผยแพร่"
            name="published"
            defaultChecked={true}
            description="แสดงบน landing page"
          />
          <FormCheckbox
            label="Featured"
            name="featured"
            description="แสดงในส่วน highlight"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            บันทึก
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
