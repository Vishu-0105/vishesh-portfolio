# Vishesh Jain — Personal Portfolio

A production-ready personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes (dark/light)
- **Notifications:** Sonner
- **Contact Form:** Formspree

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home / Landing
│   ├── about/             # About page
│   ├── projects/          # Projects list + [id] detail pages
│   ├── experience/        # Experience timeline
│   ├── research/          # Research page
│   ├── skills/            # Skills visualization
│   ├── achievements/      # Certs & patents
│   ├── resume/            # Resume preview + download
│   ├── contact/           # Contact form
│   ├── not-found.tsx      # Custom 404
│   └── layout.tsx         # Root layout with nav/footer
├── components/
│   ├── animations/        # FadeIn, StaggerContainer, StaggerItem
│   ├── effects/           # MouseGlow, ScrollProgress, AnimatedBackground
│   └── layout/            # Navigation, Footer, ThemeProvider
├── data/
│   └── portfolio.ts       # ALL content — edit this file only
├── hooks/                 # useScrollProgress, useMediaQuery
├── lib/
│   └── utils.ts           # cn() utility
└── types/
    └── index.ts           # TypeScript interfaces
```

---

## How to Edit Content

**All content lives in one file:** `src/data/portfolio.ts`

### Update personal info
```ts
export const personal = {
  name: "Your Name",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  // ...
};
```

### Add a new project
Add an object to the `projects` array in `src/data/portfolio.ts`:
```ts
{
  id: "my-new-project",          // URL slug: /projects/my-new-project
  title: "Project Title",
  subtitle: "Short description",
  status: "Completed",           // or "In Progress"
  featured: true,                // shows on homepage
  category: ["Deep Learning"],
  accuracy: "95% accuracy",
  dataset: "Custom dataset",
  github: "https://github.com/...",
  demo: null,                    // or "https://..."
  overview: "...",
  problem: "...",
  features: ["Feature 1", "Feature 2"],
  architecture: "...",
  tech: ["PyTorch", "OpenCV"],
  challenges: ["Challenge 1"],
  learnings: ["Learning 1"],
  impact: "...",
  future: ["Future plan 1"],
}
```

### Update accuracy numbers
Find the relevant project in `src/data/portfolio.ts` and update the `accuracy` field and bullets.

---

## Setting Up the Contact Form

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form and get your Form ID
3. In `src/app/contact/page.tsx`, replace `YOUR_FORM_ID`:
   ```ts
   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

---

## Adding Your Resume PDF

Place your resume at:
```
public/vishesh_jain_resume.pdf
```

The download button on the Resume page will automatically use it.

---

## Adding Your Profile Photo

Place your photo at:
```
public/images/profile.jpg
```

Then update `src/app/about/page.tsx` to use `<Image>` instead of the initials placeholder.

---

## Deployment

### Vercel (Recommended — zero config)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) and it deploys automatically on every push.

### Netlify

```bash
npm run build
# Upload the .next/ folder or connect GitHub repo at netlify.com
```

Add build command: `npm run build`  
Publish directory: `.next`

### GitHub Pages (static export)

Add to `next.config.js`:
```js
const nextConfig = {
  output: 'export',
};
```

Then:
```bash
npm run build
# Deploy the out/ folder to GitHub Pages
```

---

## Custom Domain

After deploying to Vercel:
1. Go to your project settings → Domains
2. Add your domain (e.g. `visheshjain.dev`)
3. Update DNS records at your registrar

Update `src/app/layout.tsx` metadata URLs and `public/sitemap.xml` to your actual domain.

---

## SEO Checklist

- [x] `<title>` and `<meta description>` on every page
- [x] Open Graph metadata
- [x] Twitter card metadata
- [x] `robots.txt`
- [x] `sitemap.xml`
- [ ] Replace `visheshjain.dev` with your actual deployed URL in sitemap and metadata
- [ ] Add Google Analytics ID in `src/app/layout.tsx` (analytics placeholder included)

---

## Analytics (Optional)

In `src/app/layout.tsx`, add before `</body>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
```

---

## License

MIT — feel free to use as a template. Attribution appreciated but not required.
