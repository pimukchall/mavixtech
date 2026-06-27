import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("admin1234", 12);
  await prisma.user.upsert({
    where: { email: "admin@mavixtech.co.th" },
    update: {},
    create: {
      email: "admin@mavixtech.co.th",
      name: "Admin",
      password,
      role: "ADMIN",
    },
  });
  console.log("Seeded admin user: admin@mavixtech.co.th / admin1234");
}

main().finally(() => prisma.$disconnect());
