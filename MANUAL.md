# Mavixtech — คู่มือการติดตั้งและใช้งาน

> **Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion · Auth.js v5 · Prisma v5 · MySQL 8 · Docker

---

## สารบัญ

1. [โครงสร้างโปรเจ็ค](#โครงสร้างโปรเจ็ค)
2. [Requirements](#requirements)
3. [ติดตั้งสำหรับ Development](#ติดตั้งสำหรับ-development)
4. [Deploy ด้วย Docker](#deploy-ด้วย-docker)
5. [ระบบ Admin](#ระบบ-admin)
6. [Database Schema](#database-schema)
7. [Environment Variables](#environment-variables)
8. [Scripts อ้างอิง](#scripts-อ้างอิง)

---

## โครงสร้างโปรเจ็ค

```
mavixtech/
├── src/
│   ├── app/
│   │   ├── (public)/           # Landing page (route group)
│   │   │   └── page.tsx
│   │   ├── (auth)/
│   │   │   └── login/          # หน้าเข้าสู่ระบบ
│   │   ├── admin/              # ระบบหลังบ้าน (ต้อง login)
│   │   │   ├── layout.tsx      # Sidebar + session guard
│   │   │   ├── page.tsx        # Dashboard
│   │   │   ├── actions.ts      # Server Actions (CRUD)
│   │   │   ├── projects/       # จัดการผลงาน
│   │   │   └── news/           # จัดการข่าวสาร
│   │   └── api/
│   │       └── auth/[...nextauth]/   # Auth.js handler
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── admin/              # Admin-specific components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── prisma.ts           # Prisma client singleton
│   │   └── auth.ts             # Auth.js v5 config
│   ├── types/
│   │   └── next-auth.d.ts      # Session type extension
│   └── middleware.ts           # ป้องกัน /admin/* routes
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── seed.ts                 # Initial admin user
├── .env                        # Environment variables (ไม่ commit)
├── .env.example                # Template สำหรับ env
├── Dockerfile                  # Multi-stage production build
├── docker-compose.yml          # Web + MySQL services
└── .dockerignore
```

---

## Requirements

| เครื่องมือ | Version ขั้นต่ำ |
|---|---|
| Node.js | 20.x |
| npm | 10.x |
| Docker | 24.x |
| Docker Compose | v2 |
| MySQL *(ถ้าไม่ใช้ Docker)* | 8.0 |

---

## ติดตั้งสำหรับ Development

### 1. Clone และติดตั้ง dependencies

```bash
git clone <repo-url>
cd mavixtech
npm install
```

### 2. ตั้งค่า Environment Variables

```bash
cp .env.example .env
```

แก้ไขค่าใน `.env` ตามนี้:

```env
DATABASE_URL="mysql://mavixtech:mavixpass@localhost:3307/mavixtech"
NEXTAUTH_SECRET="<สร้างใหม่ด้วย: openssl rand -base64 32>"
NEXTAUTH_URL="http://localhost:3002"
```

### 3. รัน MySQL ด้วย Docker

```bash
# รัน MySQL อย่างเดียว (ไม่รัน web)
docker compose up db -d
```

> MySQL จะพร้อมที่ `localhost:3307`
> - User: `mavixtech`
> - Password: `mavixpass`
> - Database: `mavixtech`

### 4. Migrate Database

```bash
# Push schema ไปยัง database
npm run db:push
```

### 5. สร้าง Admin User เริ่มต้น

```bash
npm run db:seed
```

จะได้ admin account:
| Field | Value |
|---|---|
| Email | `admin@mavixtech.co.th` |
| Password | `admin1234` |

> **สำคัญ:** เปลี่ยน password ทันทีหลัง deploy production

### 6. รัน Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3002](http://localhost:3002)

---

## Deploy ด้วย Docker

### Production (ทุก services)

```bash
# สร้าง .env สำหรับ production
cp .env.example .env
# แก้ไข NEXTAUTH_SECRET และ NEXTAUTH_URL

# Build และรัน
docker compose up -d --build
```

Services ที่จะรัน:

| Service | Port | หน้าที่ |
|---|---|---|
| `mavixtech-web` | **3002** | Next.js application → http://localhost:3002 |
| `mavixtech-db` | **3307** | MySQL 8.0 |
| `mavixtech-pma` | **8081** | phpMyAdmin → http://localhost:8081 |


### หลังจาก Docker รัน — Migrate และ Seed

```bash
# Run migration ใน container
docker compose exec web npx prisma db push

# Seed admin user
docker compose exec web npm run db:seed
```

### คำสั่ง Docker ที่ใช้บ่อย

```bash
# ดู logs
docker compose logs -f web
docker compose logs -f db

# หยุด services
docker compose down

# หยุดและลบ volumes (ลบข้อมูล DB ด้วย)
docker compose down -v

# รีสตาร์ท web เฉพาะ
docker compose restart web

# Rebuild หลังแก้โค้ด
docker compose up -d --build web
```

### Deploy บน Cloud (VPS / Cloud VM)

1. ติดตั้ง Docker + Docker Compose บน server
2. Copy ไฟล์โปรเจ็คขึ้น server (หรือ `git pull`)
3. ตั้งค่า `.env` ที่ production:
   ```env
   NEXTAUTH_URL="https://mavixtech.co.th"
   NEXTAUTH_SECRET="<random 32+ chars>"
   DATABASE_URL="mysql://mavixtech:mavixpass@db:3306/mavixtech"
   # หมายเหตุ: ภายใน Docker network ใช้ port 3306 (internal) ไม่ใช่ 3307 (host)
   ```
4. รัน:
   ```bash
   docker compose up -d --build
   ```
5. ตั้งค่า Reverse Proxy (Nginx / Caddy) ชี้ port 3002

#### ตัวอย่าง Nginx config

```nginx
server {
    server_name mavixtech.co.th www.mavixtech.co.th;

    location / {
        proxy_pass http://localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## ระบบ Admin

### เข้าถึง Admin Panel

ไปที่ `/login` หรือ `/admin` (จะถูก redirect ไป `/login` อัตโนมัติ)

### หน้า Admin

#### Dashboard `/admin`
- ภาพรวมจำนวนผลงานและข่าวสาร
- รายการล่าสุด 5 รายการของแต่ละประเภท
- Quick links ไปยังหน้า Create

#### จัดการผลงาน `/admin/projects`

| Field | ประเภท | หน้าที่ |
|---|---|---|
| ชื่อผลงาน | Text (required) | ชื่อโปรเจ็ค |
| รายละเอียด | Textarea (required) | คำอธิบาย |
| URL รูปภาพ | URL | รูป thumbnail |
| Tags | Text | เช่น `Web, Mobile, AI` (คั่น comma) |
| URL ผลงาน | URL | ลิงก์ไปยังผลงาน |
| เผยแพร่ | Checkbox | แสดงบน landing page |
| Featured | Checkbox | แสดงในส่วน highlight |

#### จัดการข่าวสาร `/admin/news`

| Field | ประเภท | หน้าที่ |
|---|---|---|
| หัวข้อ | Text (required) | ชื่อข่าวสาร |
| เนื้อหา | Textarea (required) | รายละเอียดข่าว |
| URL รูปภาพ | URL | รูปประกอบข่าว |
| เผยแพร่ | Checkbox | แสดงบน landing page |

### Security

- ทุก route ใต้ `/admin/*` ถูกป้องกันด้วย Middleware
- Session เก็บเป็น JWT (ไม่ต้องใช้ database สำหรับ session)
- Password ถูก hash ด้วย bcrypt (cost factor 12)
- ออกจากระบบจะ invalidate session ทันที

---

## Database Schema

```
User
├── id          String (cuid)
├── email       String (unique)
├── name        String?
├── password    String (bcrypt hash)
├── role        String (default: "ADMIN")
├── createdAt   DateTime
└── updatedAt   DateTime

Project
├── id          String (cuid)
├── title       String
├── description Text
├── imageUrl    String?
├── tags        String? (comma-separated)
├── url         String?
├── featured    Boolean (default: false)
├── published   Boolean (default: true)
├── order       Int (default: 0)
├── createdAt   DateTime
└── updatedAt   DateTime

News
├── id          String (cuid)
├── title       String
├── content     Text
├── imageUrl    String?
├── published   Boolean (default: false)
├── publishedAt DateTime?
├── createdAt   DateTime
└── updatedAt   DateTime
```

### Prisma Studio (GUI สำหรับ Database)

```bash
npm run db:studio
# เปิดที่ http://localhost:5555
```

---

## Environment Variables

| Variable | Required | ค่าตัวอย่าง | หมายเหตุ |
|---|---|---|---|
| `DATABASE_URL` | ✅ | `mysql://user:pass@host:3307/db` | Connection string MySQL (host port) |
| `NEXTAUTH_SECRET` | ✅ | `WK/oiaMmg7yL2qafWKk...` | สุ่มด้วย `openssl rand -base64 32` |
| `NEXTAUTH_URL` | ✅ | `https://mavixtech.co.th` | URL หลักของแอป (ไม่มี trailing slash) |

**สร้าง NEXTAUTH_SECRET ใหม่:**
```bash
openssl rand -base64 32
```

---

## Scripts อ้างอิง

```bash
# Development
npm run dev           # รัน dev server (http://localhost:3002)
npm run build         # Build production
npm run start         # รัน production build

# Database
npm run db:push       # Sync schema → database (dev)
npm run db:seed       # สร้าง admin user เริ่มต้น
npm run db:studio     # เปิด Prisma Studio GUI

# Code Quality
npm run lint          # ตรวจสอบ ESLint
```

---

## หมายเหตุ Production Checklist

- [ ] เปลี่ยน `NEXTAUTH_SECRET` เป็นค่าสุ่มใหม่
- [ ] เปลี่ยน `NEXTAUTH_URL` เป็น domain จริง
- [ ] เปลี่ยน MySQL password (`MYSQL_ROOT_PASSWORD`, `MYSQL_PASSWORD`) ใน `docker-compose.yml`
- [ ] เปลี่ยน password admin user หลัง seed
- [ ] ตั้งค่า HTTPS (SSL certificate)
- [ ] ตั้งค่า Firewall ปิด port 3307 จาก public
- [ ] ตั้งค่า backup MySQL volume สม่ำเสมอ
