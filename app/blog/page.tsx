import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BlogList } from "@/components/blog/BlogList";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, education, and the truth about building wealth in India — wealth psychology, SIP education, real journeys, and the India opportunity.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title={
          <>
            Insights. Education. The truth about{" "}
            <span className="gold-text">building wealth in India.</span>
          </>
        }
      />
      <SectionWrapper width="wide">
        <BlogList posts={blogPosts} />
      </SectionWrapper>
    </>
  );
}
