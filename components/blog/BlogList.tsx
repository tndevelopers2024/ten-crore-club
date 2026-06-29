"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search, X } from "lucide-react";
import { TabBar } from "@/components/ui/TabBar";
import { Reveal } from "@/components/shared/Reveal";
import { BrandImage } from "@/components/shared/BrandImage";
import { Badge } from "@/components/ui/Badge";
import { categoryLabels } from "@/data/blog-posts";
import { NewsletterSubscribe } from "@/components/blog/NewsletterSubscribe";
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
  const [searchQuery, setSearchQuery] = useState("");

  const featured = posts.find((p) => p.featured);
  
  // Decide whether to display the distinct full-featured header card
  const showFeaturedHeader = cat === "all" && !searchQuery && !!featured;

  const filteredPosts = posts.filter((p) => {
    // Exclude featured post from listing if it's shown in the top header hero
    if (showFeaturedHeader && p.slug === featured?.slug) {
      return false;
    }

    const matchesCategory = cat === "all" || p.category === cat;
    
    const matchesSearch =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.body.some((block) => block.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search Input Box */}
      <Reveal className="mx-auto max-w-lg">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gold-light/40 group-focus-within:text-gold transition-colors" />
          <input
            type="text"
            placeholder="Search insights, articles, and math..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 pl-11 pr-10 rounded-full bg-ink-card/60 backdrop-blur-sm border border-line text-cream placeholder:text-gold-light/35 focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/10 transition-all text-sm shadow-md"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-light/40 hover:text-gold transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </Reveal>

      {/* Featured Header Card */}
      {showFeaturedHeader && featured && (
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-xl border border-gold/20 bg-ink-card transition-all hover:border-gold/40 hover:shadow-[0_12px_40px_-20px_rgba(213,160,74,0.35)] glare-sweep relative"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Left Column content */}
              <div className="p-8 sm:p-10 lg:p-12 lg:col-span-5 flex flex-col justify-center">
                <div>
                  <Badge variant="gold">Featured · {categoryLabels[featured.category]}</Badge>
                </div>
                <h2 className="mt-5 font-display text-3xl font-semibold text-cream sm:text-4xl group-hover:text-gold transition-colors duration-300 leading-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gold-light/70 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs text-gold-light/50">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-4" /> {featured.readTime} min read
                  </span>
                  <span>{formatDate(featured.publishDate)}</span>
                  <span className="ml-auto flex items-center gap-1 text-gold font-semibold transition-all group-hover:gap-2">
                    Read Post <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>

              {/* Right Column image */}
              <div className="relative h-60 sm:h-80 lg:h-auto min-h-[300px] lg:col-span-7 overflow-hidden">
                <BrandImage
                  src={featured.coverImage}
                  alt={featured.title}
                  aspect="none"
                  rounded="none"
                  priority
                  sizes="(min-width: 1280px) 750px, (min-width: 1024px) 60vw, 100vw"
                  placeholderLabel={categoryLabels[featured.category]}
                  imgClassName="transition-transform duration-700 group-hover:scale-105 h-full w-full object-cover"
                  className="h-full w-full absolute inset-0"
                />
              </div>
            </div>
          </Link>
        </Reveal>
      )}

      {/* Categories Underline tabs */}
      <div className="flex justify-center">
        <TabBar tabs={tabs} value={cat} onChange={setCat} className="max-w-max" />
      </div>

      {/* Listing Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, i) => (
          <Reveal as="article" key={post.slug} delay={(i % 3) * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-ink-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_12px_32px_-16px_rgba(213,160,74,0.22)] glare-sweep relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-lg aspect-[16/9] w-full">
                <BrandImage
                  src={post.coverImage}
                  alt={post.title}
                  aspect="16/9"
                  rounded="none"
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  placeholderLabel={categoryLabels[post.category]}
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="bg-black/75 backdrop-blur-md border border-white/10 text-cream text-[10px] uppercase tracking-wider py-1 px-2.5 rounded font-semibold font-sans">
                    {categoryLabels[post.category]}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold leading-snug text-cream group-hover:text-gold transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gold-light/65 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-gold-light/50 border-t border-line/40">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" /> {post.readTime} min
                  </span>
                  <span>{formatDate(post.publishDate)}</span>
                  <span className="text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1 text-[11px] font-semibold">
                    Read <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="py-16 text-center animate-in">
          <p className="text-gold-light/50 text-base">No matches found for your search/filter parameters.</p>
          <button 
            onClick={() => { setCat("all"); setSearchQuery(""); }}
            className="mt-4 text-sm text-gold hover:text-cream underline decoration-gold underline-offset-4 cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Newsletter signup banner */}
      <NewsletterSubscribe />
    </div>
  );
}
