import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { BrandImage } from "@/components/shared/BrandImage";
import { Badge } from "@/components/ui/Badge";
import { GoldDivider } from "@/components/shared/GoldDivider";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { blogPosts, getPost, relatedPosts, categoryLabels } from "@/data/blog-posts";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const headings = post.body
    .filter((b) => b.startsWith("## "))
    .map((b) => ({ text: b.slice(3), id: slugify(b.slice(3)) }));

  const related = relatedPosts(slug);
  const midpoint = Math.floor(post.body.length / 2);
  const firstTextIndex = post.body.findIndex((b) => !b.startsWith("## "));

  return (
    <>
      <ReadingProgress />

      <article className="px-5 pt-28 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm text-gold-light/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> Back to all posts
          </Link>

          <header className="mt-6">
            <Badge variant="gold">{categoryLabels[post.category]}</Badge>
            <h1 className="mt-4 text-display-lg text-balance text-cream">{post.title}</h1>
            <div className="mt-5 flex items-center gap-4 text-sm text-gold-light/55">
              <span>{post.author}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4" /> {post.readTime} min read
              </span>
              <span>
                {new Date(post.publishDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </header>

          <div className="mt-8">
            <BrandImage
              src={post.coverImage}
              alt={post.title}
              aspect="21/9"
              priority
              bordered
              sizes="(min-width: 768px) 768px, 100vw"
              placeholderLabel={categoryLabels[post.category]}
              className="shadow-2xl"
            />
          </div>

          <GoldDivider className="my-10" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_minmax(0,3rem)] xl:grid-cols-[16rem_1fr_16rem]">
          {/* TOC — left rail on xl */}
          <TableOfContents headings={headings} />

          {/* Body */}
          <div className="mx-auto w-full max-w-3xl">
            <div className="space-y-6">
              {post.body.map((block, i) => {
                const isFirstText = i === firstTextIndex;
                const node = block.startsWith("## ") ? (
                  <h2
                    key={i}
                    id={slugify(block.slice(3))}
                    className="scroll-mt-28 pt-8 pb-3 font-display text-3xl font-semibold text-gold border-b border-line/30 mb-6"
                  >
                    {block.slice(3)}
                  </h2>
                ) : (
                  <p 
                    key={i} 
                    className={cn(
                      "text-lg leading-relaxed text-gold-light/85",
                      isFirstText && "first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-display first-letter:font-semibold first-letter:text-gold first-letter:leading-[0.8]"
                    )}
                  >
                    {block}
                  </p>
                );

                if (i === midpoint) {
                  return (
                    <div key={`wrap-${i}`} className="space-y-6">
                      {node}
                      <MidCTA />
                    </div>
                  );
                }
                return node;
              })}
            </div>

            {/* Mobile / Tablet Share Buttons (Hidden on XL) */}
            <div className="xl:hidden border-y border-line/30 py-4 my-8">
              <ShareButtons title={post.title} />
            </div>

            {/* End CTA */}
            <div className="mt-12">
              <div className="rounded-xl border border-gold/40 bg-ink-card p-8 text-center gold-glow">
                <h3 className="font-display text-2xl text-cream">
                  Ready to turn theory into a plan?
                </h3>
                <p className="mx-auto mt-2 max-w-md text-gold-light/70">
                  Book a free 30-minute strategy call and we&apos;ll build your
                  ₹10 Crore roadmap.
                </p>
                <div className="mt-6 flex justify-center">
                  <CTAButton href="/book">Book a Free Strategy Call</CTAButton>
                </div>
              </div>
            </div>

            <p className="mt-8 text-[11px] leading-relaxed text-gold-light/40">
              For educational purposes only; not financial advice. Mutual fund
              investments are subject to market risks. Past performance is not
              indicative of future returns.
            </p>
          </div>

          {/* Social Share — right rail on xl */}
          <aside className="hidden xl:block">
            <div className="sticky top-28">
              <ShareButtons title={post.title} />
            </div>
          </aside>
        </div>

        {/* Related */}
        <div className="mx-auto mt-20 max-w-6xl">
          <h2 className="mb-6 font-display text-2xl text-cream">Keep reading</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => (
              <Reveal as="article" key={r.slug}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-ink-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_10px_20px_-10px_rgba(213,160,74,0.15)] glare-sweep relative"
                >
                  <div className="relative overflow-hidden aspect-[16/9] w-full">
                    <BrandImage
                      src={r.coverImage}
                      alt={r.title}
                      aspect="16/9"
                      rounded="none"
                      sizes="(min-width: 768px) 360px, 100vw"
                      placeholderLabel={categoryLabels[r.category]}
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="bg-black/75 backdrop-blur-md border border-white/10 text-cream text-[10px] uppercase tracking-wider py-1 px-2.5 rounded font-semibold font-sans">
                        {categoryLabels[r.category]}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold leading-snug text-cream group-hover:text-gold transition-colors duration-200">
                      {r.title}
                    </h3>
                    <div className="mt-auto pt-5 flex items-center justify-between text-xs text-gold-light/50 border-t border-line/30">
                      <span>{r.readTime} min read</span>
                      <span className="text-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1 text-[11px] font-semibold">
                        Read <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}

function MidCTA() {
  return (
    <div className="my-6 rounded-lg border border-red-vivid/30 bg-red-deep/5 p-6 text-center shadow-lg">
      <p className="font-display text-xl text-cream">
        Curious what one year of waiting costs you?
      </p>
      <div className="mt-4 flex justify-center">
        <CTAButton href="/calculators" variant="secondary" size="sm">
          Try the Delay Cost Calculator
        </CTAButton>
      </div>
    </div>
  );
}
