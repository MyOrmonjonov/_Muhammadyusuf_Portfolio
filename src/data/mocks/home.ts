/**
 * Placeholder content for the portfolio home page.
 *
 * Everything a human would want to personalise lives here — no copy is
 * hardcoded inside components (see obsidian/frontend/component-conventions.md).
 * Replace every value below with your own.
 */

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: string[];
  email: string;
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "Sizning Ismingiz",
  role: "Full-Stack Developer",
  location: "Tashkent, O'zbekiston",
  tagline: "Men tez, chiroyli va ishonchli veb-ilovalar quraman.",
  bio: [
    "Men zamonaviy veb-texnologiyalar bilan ishlaydigan dasturchiman — React, Next.js, TypeScript va Node.js asosiy qurollarim.",
    "Interfeys va backend orasidagi bog'liqlikni tushunib, boshidan oxirigacha mahsulot qura olaman. Kod sifatini, performance va foydalanuvchi tajribasini muhim deb bilaman.",
  ],
  email: "hello@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { label: "Telegram", href: "https://t.me/yourusername" },
  ],
};

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-commerce Platform",
    description:
      "To'liq funksional onlayn do'kon: mahsulotlar katalogi, savat, to'lov integratsiyasi va admin panel.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    href: "#",
    repo: "#",
    year: "2026",
  },
  {
    id: "proj-2",
    title: "Task Management App",
    description:
      "Jamoalar uchun real-time vazifa boshqaruv tizimi — drag-and-drop board, bildirishnomalar, rollar.",
    tags: ["React", "Node.js", "WebSocket", "Zustand"],
    href: "#",
    repo: "#",
    year: "2025",
  },
  {
    id: "proj-3",
    title: "Analytics Dashboard",
    description:
      "Biznes ko'rsatkichlarini vizualizatsiya qiluvchi dashboard — grafiklar, filtrlar, eksport funksiyasi.",
    tags: ["Next.js", "D3.js", "Tailwind", "tRPC"],
    href: "#",
    repo: "#",
    year: "2025",
  },
  {
    id: "proj-4",
    title: "Mobile Banking UI",
    description:
      "Bank ilovasi uchun animatsion interfeys prototipi — mikro-interaksiyalar va moliyaviy vizualizatsiya.",
    tags: ["React Native", "Reanimated", "Figma"],
    href: "#",
    year: "2024",
  },
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Spring"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "REST API", "GraphQL", "Redis"],
  },
  {
    category: "Vositalar",
    items: ["Git", "Docker", "Vercel", "Figma", "CI/CD"],
  },
];

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: "Yillik tajriba", value: "3+" },
  { label: "Bajarilgan loyihalar", value: "20+" },
  { label: "Mamnun mijozlar", value: "15+" },
];
