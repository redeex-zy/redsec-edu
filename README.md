# RedSec Edu

Premium Next.js website for a cybersecurity initiative focused on protecting schools, students, education platforms, and broader EdTech ecosystems.

## Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React
- Resend

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Environment Variables

Create `.env.local` in the project root.

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=RedSec Edu <security@your-verified-domain.com>
```

### Variable notes

- `NEXT_PUBLIC_SITE_URL`
  Use the final canonical domain for metadata, sitemap URLs, robots host, OpenGraph URLs, and JSON-LD references.
- `RESEND_API_KEY`
  Server-only key used by the contact form API route.
- `RESEND_FROM_EMAIL`
  Must be a verified sender inside Resend.

If `NEXT_PUBLIC_SITE_URL` is not set:

- local development falls back to `http://localhost:3000`
- Vercel production falls back to `https://redsec-edu.vercel.app`
- Vercel preview deployments fall back to the preview URL

For the final domain cutover, set:

```env
NEXT_PUBLIC_SITE_URL=https://redsecedu.com
```

## SEO Architecture

The site uses a centralized SEO system built for clean domain migration and scalable content growth.

### Core SEO files

- `lib/site.ts`
  Central domain and site configuration, canonical URL helpers, future-domain preparation.
- `lib/metadata.ts`
  Shared Metadata API helpers, OpenGraph/Twitter generation, robots defaults.
- `lib/structured-data.ts`
  JSON-LD builders for organization, website, webpage, service, breadcrumb, FAQ, blog collection, and article schema.
- `app/sitemap.ts`
  Dynamic sitemap generation for static pages, blog posts, categories, and tags.
- `app/robots.ts`
  Dynamic robots generation with centralized sitemap and host handling.
- `app/api/og/route.tsx`
  Dynamic social preview image generation for premium share cards.

### Structured data included

- Organization schema
- Website schema
- WebPage schema
- Breadcrumb schema
- Service schema
- FAQ schema
- Blog collection schema
- BlogPosting schema

## Blog System

Routes:

- `/blog`
- `/blog/[slug]`
- `/blog/category/[slug]`
- `/blog/tag/[slug]`

Content lives in `content/blog.ts`.

Each article includes:

- title and description
- category and tags
- reading time
- publish and update dates
- article metadata
- JSON-LD article schema
- internal links to related posts and related services
- FAQ section for long-tail search visibility

## Contact Form Setup

The contact form sends inquiries server-side through Resend to `nu727027@gmail.com`.

### 1. Create a Resend API key

1. Sign in to [Resend](https://resend.com/).
2. Open `API Keys`.
3. Create a key for this project.
4. Store it only in `.env.local` locally and in Vercel environment variables for deployment.

### 2. Configure `.env.local`

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=RedSec Edu <security@your-verified-domain.com>
```

### 3. Test locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/contact`, submit the form, and confirm the inquiry arrives in the inbox.

### 4. Add variables on Vercel

In the Vercel project dashboard:

1. Open `Settings`
2. Open `Environment Variables`
3. Add:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
4. Redeploy after saving

## Deployment

### Vercel

This project is compatible with Vercel without additional config files.

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output: managed automatically by Vercel

Recommended production variables:

```env
NEXT_PUBLIC_SITE_URL=https://redsecedu.com
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=RedSec Edu <security@your-verified-domain.com>
```

## Domain Migration Plan

The site is already prepared for migration from `https://redsec-edu.vercel.app` to `https://redsecedu.com`.

### When the domain is ready

1. Add `redsecedu.com` and `www.redsecedu.com` in Vercel project domains.
2. Update DNS records at your registrar to point to Vercel.
3. Set `NEXT_PUBLIC_SITE_URL=https://redsecedu.com` in Vercel for:
   - Production
   - Preview if you want preview metadata to mirror the final domain less strictly
4. Redeploy production.
5. Verify:
   - page canonicals use `https://redsecedu.com`
   - `sitemap.xml` uses `https://redsecedu.com`
   - `robots.txt` host and sitemap use `https://redsecedu.com`
   - OpenGraph URLs resolve on the final domain

### Recommended canonical strategy

- Canonical production domain: `https://redsecedu.com`
- Redirect `www.redsecedu.com` to `https://redsecedu.com`
- Keep `redsec-edu.vercel.app` accessible only as a platform hostname, not as the preferred indexed domain

## Google Search Console Setup

After the final domain is live:

1. Open Google Search Console.
2. Add a `Domain property` for `redsecedu.com`.
3. Verify ownership through your DNS provider.
4. Add a `URL prefix property` for `https://redsecedu.com/` if you want more granular inspection.
5. Submit the sitemap:
   - `https://redsecedu.com/sitemap.xml`
6. Use `URL Inspection` on:
   - home page
   - services page
   - blog index
   - each article URL
7. Request indexing for new articles after publishing.

## Sitemap Submission

Current sitemap route:

- `/sitemap.xml`

Examples:

- `https://redsec-edu.vercel.app/sitemap.xml`
- `https://redsecedu.com/sitemap.xml`

Submit the final-domain sitemap in:

- Google Search Console
- Bing Webmaster Tools

## Social Preview System

The site generates dynamic preview images through `app/api/og/route.tsx`.

Supports:

- page-specific titles
- eyebrow labels
- page-specific descriptions
- premium dark brand styling for LinkedIn, X, WhatsApp, and Discord previews

## Project Structure

```text
app/
  api/
    contact/route.ts
    og/route.tsx
  about/
  blog/
    [slug]/page.tsx
    category/[slug]/page.tsx
    tag/[slug]/page.tsx
    page.tsx
  contact/
  methodology/
  services/
  fonts/
  globals.css
  icon.svg
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
components/
  blog-card.tsx
  breadcrumbs.tsx
  contact-form.tsx
  cta-section.tsx
  faq-section.tsx
  footer.tsx
  json-ld.tsx
  method-step.tsx
  mobile-menu.tsx
  navbar.tsx
  page-hero.tsx
  reveal.tsx
  section-heading.tsx
  service-card.tsx
  trust-badge.tsx
  ui/button.tsx
content/
  blog.ts
  site.tsx
lib/
  contact-inquiry.ts
  metadata.ts
  site.ts
  structured-data.ts
  utils.ts
```

## Notes

- Fonts are bundled locally to avoid runtime font fetches.
- Metadata, canonicals, social previews, sitemap, and robots are all centralized.
- The blog architecture is static-generation friendly and easy to scale with more articles.
- The contact form stays server-side and does not expose API credentials in the frontend.
