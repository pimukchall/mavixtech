"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function requireAdmin() {
  const session = await auth();
  if (!session) redirect("/login");
}

function parseImages(formData: FormData, field = "images"): { imageUrl: string | null; images: string | null } {
  const raw = (formData.get(field) as string) || "[]";
  let arr: string[] = [];
  try { arr = JSON.parse(raw); } catch { arr = []; }
  return {
    imageUrl: arr[0] ?? null,
    images: arr.length > 0 ? JSON.stringify(arr) : null,
  };
}

// --- Projects ---
export async function createProject(formData: FormData) {
  await requireAdmin();
  const { imageUrl, images } = parseImages(formData);
  await prisma.project.create({
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl,
      images,
      tags: (formData.get("tags") as string) || null,
      url: (formData.get("url") as string) || null,
      featured: formData.get("featured") === "on",
      published: formData.get("published") === "on",
    },
  });
  revalidatePath("/admin/projects");
  revalidatePath("/admin");
  redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
  await requireAdmin();
  const { imageUrl, images } = parseImages(formData);
  await prisma.project.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      imageUrl,
      images,
      tags: (formData.get("tags") as string) || null,
      url: (formData.get("url") as string) || null,
      featured: formData.get("featured") === "on",
      published: formData.get("published") === "on",
    },
  });
  revalidatePath("/admin/projects");
  revalidatePath("/admin");
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  await requireAdmin();
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin/projects");
  revalidatePath("/admin");
}

// --- News ---
export async function createNews(formData: FormData) {
  await requireAdmin();
  const published = formData.get("published") === "on";
  const { imageUrl, images } = parseImages(formData);
  await prisma.news.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      imageUrl,
      images,
      published,
      publishedAt: published ? new Date() : null,
    },
  });
  revalidatePath("/admin/news");
  revalidatePath("/admin");
  redirect("/admin/news");
}

export async function updateNews(id: string, formData: FormData) {
  await requireAdmin();
  const published = formData.get("published") === "on";
  const { imageUrl, images } = parseImages(formData);
  const existing = await prisma.news.findUnique({ where: { id }, select: { publishedAt: true } });
  await prisma.news.update({
    where: { id },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      imageUrl,
      images,
      published,
      publishedAt: published ? (existing?.publishedAt ?? new Date()) : null,
    },
  });
  revalidatePath("/admin/news");
  revalidatePath("/admin");
  redirect("/admin/news");
}

export async function deleteNews(id: string) {
  await requireAdmin();
  await prisma.news.delete({ where: { id } });
  revalidatePath("/admin/news");
  revalidatePath("/admin");
}

// --- Contacts ---
export async function markContactRead(id: string) {
  await requireAdmin();
  await prisma.contact.update({ where: { id }, data: { read: true } });
  revalidatePath("/admin/contacts");
}
