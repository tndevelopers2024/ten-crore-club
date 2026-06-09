# Images

Drop image files here and reference them with a root-relative path
(e.g. `/images/blog/my-post.jpg`). They're served by `next/image` and
optimized automatically (resized + AVIF/WebP).

## Folders

| Folder              | Used by                                   | Suggested ratio | Notes                          |
| ------------------- | ----------------------------------------- | --------------- | ------------------------------ |
| `images/blog/`      | Blog covers (listing, post hero, related) | 16/9 or 21/9    | Name by post slug, e.g. `images/blog/<slug>.jpg` |
| `images/stories/`   | Member / success-story headshots          | 1/1 (square)    | Name by initials, e.g. `images/stories/rk.jpg`   |
| `images/team/`      | Founder / advisor portraits               | 3/4 (portrait)  | e.g. `images/team/advisor.jpg` |
| `images/sections/`  | Decorative section art / backgrounds      | varies          |                                |

## How to wire an image in

Image slots already exist — they show a branded placeholder until you add a `src`.

- **Blog**: set `coverImage` on the post in [`data/blog-posts.ts`](../../data/blog-posts.ts):
  `coverImage: "/images/blog/<slug>.jpg"` (local) **or** a full remote URL.
- **Stories**: set `photo` on the entry in [`data/success-stories.ts`](../../data/success-stories.ts):
  `photo: "/images/stories/rk.jpg"`. Falls back to initials if missing/broken.
- **Advisor portrait**: set `src` on the `<BrandImage>` in [`app/about/page.tsx`](../../app/about/page.tsx).

## Remote images

Local files need no config. **Remote** URLs require the host to be allow-listed in
[`next.config.ts`](../../next.config.ts) under `images.remotePatterns`
(Unsplash, Cloudinary, and Pexels are pre-added). Add your CMS/CDN host there.

## Reusable components

- `BrandImage` — `components/shared/BrandImage.tsx`. Handles local/remote, a loading
  shimmer, fade-in, gold border, aspect-ratio or fixed size, and a branded
  placeholder/fallback. `alt` is required.
- `Avatar` — `components/shared/Avatar.tsx`. Circular photo with initials fallback.
