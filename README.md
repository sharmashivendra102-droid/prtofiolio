# Portfolio — Shivendra Sharma

A production-grade personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Syne (display) · Figtree (body) · JetBrains Mono (code)
- **Icons**: Lucide React

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
open http://localhost:3000
```

---

## Deploying to Vercel

### Option A: Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Or deploy to production directly
vercel --prod
```

### Option B: Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done. Your site is live.

---

## Customization Checklist

Replace these placeholders before deploying:

| Location | What to change |
|---|---|
| `app/layout.tsx` | Update `metadata.url`, `openGraph.url` |
| `components/Nav.tsx` | Your GitHub URL |
| `components/Hero.tsx` | Your GitHub URL |
| `components/Contact.tsx` | Your email, GitHub, LinkedIn URLs |
| `components/Footer.tsx` | Your GitHub, LinkedIn, email |
| `public/og-image.png` | Add a 1200×630 Open Graph image |
| `app/layout.tsx` | Update `twitter.creator` handle |

---

## Adding Real Contact Form Submission

The contact form simulates submission by default. To make it real:

### With Formspree (simplest, free)

1. Create account at [formspree.io](https://formspree.io)
2. Create a new form, get your form ID
3. In `components/Contact.tsx`, replace the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setSubmitted(true);
  setLoading(false);
};
```

### With Resend (email API)

1. Create account at [resend.com](https://resend.com)
2. Get API key → add to `.env.local` as `RESEND_API_KEY`
3. Create `app/api/contact/route.ts` with a Next.js API route
4. POST to `/api/contact` from the form

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Design system, utilities
├── components/
│   ├── Nav.tsx             # Sticky nav with blur
│   ├── Hero.tsx            # Animated hero section
│   ├── About.tsx           # About + stats
│   ├── Projects.tsx        # Project cards
│   ├── Skills.tsx          # Skills with progress bars
│   ├── Leadership.tsx      # Leadership section
│   ├── Achievements.tsx    # Awards section
│   ├── Contact.tsx         # Contact form + links
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind theme
├── next.config.mjs         # Next.js config
├── tsconfig.json           # TypeScript config
└── package.json
```

---

## Environment Variables

No backend required. For contact form (optional):

```bash
# Copy example file
cp .env.example .env.local

# Fill in values if using Formspree or Resend
```

---

## Performance Notes

- All fonts loaded via `next/font/google` (zero layout shift)
- Images use Next.js `Image` optimization
- Animations use Framer Motion with `useInView` (only animates when visible)
- Fully responsive, mobile-first
- Lighthouse score target: 95+ Performance, 100 Accessibility
