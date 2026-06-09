import type { LucideIcon } from "lucide-react";

export type BlogCategory = "psychology" | "education" | "journey" | "macro";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: number; // minutes
  publishDate: string; // ISO
  author: string;
  featured?: boolean;
  /** Cover image — local "/images/blog/..." or a remote URL. Optional; a branded placeholder shows until set. */
  coverImage?: string;
  body: string[]; // paragraphs (Markdown-lite: lines starting with "## " are headings)
}

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  detail?: string;
  forWhom?: string[];
  cta: string;
}

export interface SuccessStory {
  name: string;
  initials: string;
  /** Optional headshot — local "/images/stories/..." or remote URL. Falls back to initials. */
  photo?: string;
  profession: string;
  city: string;
  age: number;
  whenJoined: string;
  plan: string;
  today: string; // portfolio value, display string
  todayValue: number;
  onTrack: string;
  quote: string;
}

export interface Pillar {
  number: string;
  title: string;
  icon: LucideIcon;
  short: string;
  detail: string[];
  insight: string;
}
