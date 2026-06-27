import { auth } from "@/lib/auth";
import { cloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  const session = await auth();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const folder = (formData.get("folder") as string) || "mavixtech";

  if (!file) {
    return Response.json({ error: "No file provided" }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return Response.json({ error: "ไฟล์ต้องเป็น JPG, PNG หรือ WEBP เท่านั้น" }, { status: 400 });
  }

  if (file.size > 5 * 1024 * 1024) {
    return Response.json({ error: "ไฟล์ขนาดเกิน 5MB" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString("base64");
  const dataUri = `data:${file.type};base64,${base64}`;

  try {
    const result = await cloudinary.uploader.upload(dataUri, {
      folder,
      transformation: [{ width: 1280, crop: "limit", quality: "auto" }],
    });
    return Response.json({ url: result.secure_url, public_id: result.public_id });
  } catch {
    return Response.json({ error: "อัปโหลดไม่สำเร็จ กรุณาลองใหม่" }, { status: 502 });
  }
}
