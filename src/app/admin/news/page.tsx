import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Pencil } from "lucide-react";
import { deleteNews } from "../actions";
import { DeleteButton } from "@/components/admin/DeleteButton";

export default async function NewsPage() {
  const newsList = await prisma.news.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">ข่าวสาร</h1>
          <p className="text-muted-foreground text-sm">จัดการข่าวสารและประกาศของบริษัท</p>
        </div>
        <Link href="/admin/news/new">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" /> เพิ่มข่าวสาร
          </Button>
        </Link>
      </div>

      {newsList.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground border border-dashed border-border rounded-xl">
          <p className="mb-2">ยังไม่มีข่าวสาร</p>
          <Link href="/admin/news/new" className="text-primary text-sm hover:underline">
            + เพิ่มข่าวสารแรก
          </Link>
        </div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">หัวข้อ</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">สถานะ</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">วันที่เผยแพร่</th>
                <th className="text-left px-4 py-3 font-medium text-muted-foreground">วันที่สร้าง</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {newsList.map((n) => (
                <tr
                  key={n.id}
                  className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">{n.title}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        n.published
                          ? "bg-green-400/10 text-green-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {n.published ? "เผยแพร่" : "ฉบับร่าง"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {n.publishedAt ? new Date(n.publishedAt).toLocaleDateString("th-TH") : "—"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(n.createdAt).toLocaleDateString("th-TH")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      <Link href={`/admin/news/${n.id}/edit`}>
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                          <Pencil className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                      <DeleteButton action={deleteNews.bind(null, n.id)} label={`ข่าว "${n.title}"`} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
