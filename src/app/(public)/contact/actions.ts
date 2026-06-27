"use server";

import { prisma } from "@/lib/prisma";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || null;
  const message = formData.get("message") as string;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { error: "กรุณากรอกข้อมูลให้ครบถ้วน" };
  }

  await prisma.contact.create({
    data: { name: name.trim(), email: email.trim(), phone, message: message.trim() },
  });

  return { success: true };
}
