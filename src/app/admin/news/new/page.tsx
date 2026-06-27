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
          <h1 className="text-2xl font-bold mb-0.5">เพิ่มข่าวสารใหม่</h1>
          <p className="text-sm text-muted-foreground">เขียนข่าวสารหรือประกาศของบริษัท</p>
        </div>
      </div>
      <form action={createNews} className="space-y-5">
        <FormField label="หัวข้อ" name="title" required placeholder="เช่น Mavixtech เปิดตัวบริการใหม่..." />
        <FormField
          label="เนื้อหา"
          name="content"
          required
          textarea
          placeholder="เนื้อหาข่าวสาร..."
        />
        <MultiImageUpload name="images" folder="mavixtech/news" label="รูปภาพ" max={5} />
        <div className="pt-2">
          <FormCheckbox
            label="เผยแพร่ทันที"
            name="published"
            description="ถ้าเลือก จะแสดงบน landing page ทันที"
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90">
            บันทึก
          </Button>
          <Link href="/admin/news">
            <Button type="button" variant="outline">
              ยกเลิก
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
