# RedSec Edu

A premium Next.js website for a cybersecurity initiative focused on protecting schools, students, and education platforms.

## Stack

- Next.js App Router
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React

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

The site supports one project-level public variable:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Use it when you want canonical URLs, sitemap entries, OpenGraph metadata, and `robots.txt` to point to your final production domain.

If `NEXT_PUBLIC_SITE_URL` is not set, the site will automatically fall back to Vercel system URLs during deployment, and `http://localhost:3000` during local development.

The contact form also requires Resend on the server:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=RedSec Edu <security@your-verified-domain.com>
```

`RESEND_FROM_EMAIL` must be a sender you have verified inside Resend. The form sends all inquiries to `nu727027@gmail.com` and sets `reply-to` to the visitor's email address.

## Contact Form Setup

### 1. Create a Resend API key

1. Sign in to [Resend](https://resend.com/).
2. Open the API Keys section.
3. Create a new API key for your project.
4. Copy the key and store it only in `.env.local` locally and in Vercel environment variables for deployment.

### 2. Configure `.env.local`

Create or update `.env.local` in the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=RedSec Edu <security@your-verified-domain.com>
```

### 3. Test the form locally

Run the app:

```bash
npm install
npm run dev
```

Open `http://localhost:3000/contact`, submit the form, and confirm the inquiry arrives in `nu727027@gmail.com`.

### 4. Add the variables on Vercel

In the Vercel project dashboard:

1. Open `Settings`.
2. Open `Environment Variables`.
3. Add:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
4. Redeploy the project after saving the variables.

## Deployment

### Vercel

This project is compatible with Vercel without additional config files.

- Framework preset: `Next.js`
- Build command: `npm run build`
- Output directory: `.next` (managed by Vercel automatically)
- Install command: `npm install`

Recommended production environment variable:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

For the contact form to work in production, also add:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=RedSec Edu <security@your-verified-domain.com>
```

## Project Structure

```text
app/
  api/contact/route.ts
  about/
  contact/
  methodology/
  services/
  fonts/
  globals.css
  layout.tsx
  icon.svg
  page.tsx
  robots.ts
  sitemap.ts
components/
  contact-form.tsx
  cta-section.tsx
  footer.tsx
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
  site.tsx
lib/
  contact-inquiry.ts
  metadata.ts
  site.ts
  utils.ts
```

## Notes

- The contact form sends inquiries through a server-side Next.js route using Resend.
- Fonts are bundled locally so the build does not depend on external font downloads.
- Page metadata, OpenGraph data, `robots.txt`, and `sitemap.xml` are already included.
- The production URL should be set with `NEXT_PUBLIC_SITE_URL` once your final domain is known.
