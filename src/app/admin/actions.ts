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
  const arr: string[] = JSON.parse(raw);
  return {
    imageUrl: arr[0] ?? null,
    images: arr.length > 0 ? raw : null,
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
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  await requireAdmin();
  await prisma.project.delete({ where: { id } });
  revalidatePath("/admin/projects");
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
  redirect("/admin/news");
}

export async function updateNews(id: string, formData: FormData) {
  await requireAdmin();
  const published = formData.get("published") === "on";
  const { imageUrl, images } = parseImages(formData);
  await prisma.news.update({
    where: { id },
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
  redirect("/admin/news");
}

export async function deleteNews(id: string) {
  await requireAdmin();
  await prisma.news.delete({ where: { id } });
  revalidatePath("/admin/news");
}

// --- Contacts ---
export async function markContactRead(id: string) {
  await requireAdmin();
  await prisma.contact.update({ where: { id }, data: { read: true } });
  revalidatePath("/admin/contacts");
}
