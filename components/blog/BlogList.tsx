"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { TabBar } from "@/components/ui/TabBar";
import { Reveal } from "@/components/shared/Reveal";
import { BrandImage } from "@/components/shared/BrandImage";
import { Badge } from "@/components/ui/Badge";
import { categoryLabels } from "@/data/blog-posts";
import type { BlogPost } from "@/types";

const tabs = [
  { value: "all", label: "All" },
  { value: "psychology", label: "Wealth Psychology" },
  { value: "education", label: "SIP Education" },
  { value: "journey", label: "Real Journeys" },
  { value: "macro", label: "India Opportunity" },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [cat, setCat] = useState("all");
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p !== featured);
  const filtered =
    cat === "all" ? rest : rest.filter((p) => p.category === cat);

  return (
    <div className="space-y-10">
      {/* Featured */}
      {featured && cat === "all" && (
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-xl border border-gold/30 bg-ink-card transition-all hover:border-gold/60"
          >
            <BrandImage
              src={featured.coverImage}
              alt={featured.title}
              aspect="21/9"
              rounded="none"
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              placeholderLabel={`Featured · ${categoryLabels[featured.category]}`}
            />
            <div className="p-8 sm:p-10">
              <Badge variant="gold">Featured · {categoryLabels[featured.category]}</Badge>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-cream sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl text-gold-light/70">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-4 text-sm text-gold-light/55">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" /> {featured.readTime} min read
                </span>
                <span>{formatDate(featured.publishDate)}</span>
                <span className="ml-auto flex items-center gap-1 text-gold transition-all group-hover:gap-2">
                  Read <ArrowRight className="size-4" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      )}

      <TabBar tabs={tabs} value={cat} onChange={setCat} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, i) => (
          <Reveal as="article" key={post.slug} delay={(i % 3) * 90}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-ink-card transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <BrandImage
                src={post.coverImage}
                alt={post.title}
                aspect="16/9"
                rounded="none"
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                placeholderLabel={categoryLabels[post.category]}
              />
              <div className="flex flex-1 flex-col p-6">
                <Badge variant="outline">{categoryLabels[post.category]}</Badge>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-cream group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gold-light/65">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-gold-light/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {post.readTime} min
                  </span>
                  <span>{formatDate(post.publishDate)}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-10 text-center text-gold-light/50">No posts in this category yet.</p>
      )}
    </div>
  );
}
