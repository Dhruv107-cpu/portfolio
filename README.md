# Dhruv Gupta — Premium AI Portfolio

A world-class personal portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, Lenis, and React Three Fiber.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion, GSAP ScrollTrigger, Lenis smooth scroll
- **3D:** React Three Fiber, Three.js, Drei
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9+

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router (layout, page, SEO)
├── components/
│   ├── layout/          # Navbar, Footer, CursorGlow
│   ├── providers/       # Lenis smooth scroll
│   ├── sections/        # Hero, About, Projects, Skills, etc.
│   ├── three/           # R3F 3D scenes (AI orb, neural network)
│   └── ui/              # Reusable UI (buttons, cards, particles)
├── hooks/               # Lenis, magnetic, count-up, mouse
└── lib/                 # Data, utilities
```

## Customization

### Personal Info

Edit `src/lib/data.ts` to update:

- Name, email, social links
- Projects (problem, solution, tech, GitHub, demo URLs)
- Journey timeline, experience, achievements
- Skill nodes and connections

### Resume

Place your resume at `public/resume.pdf` for the download button in the Contact section.

### Site URL

Update `siteConfig.url` in `src/lib/data.ts` for SEO, sitemap, and Open Graph metadata.

### 3D Performance

On low-end devices, 3D canvases are hidden on smaller breakpoints in the Hero. Adjust `dpr` in `SceneCanvas.tsx` or disable 3D via dynamic imports if needed.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy.

### Environment Variables

None required for the static portfolio. Add analytics keys in Vercel if desired.

### Custom Domain

1. Add your domain in Vercel project settings.
2. Update `siteConfig.url` in `src/lib/data.ts` to match.

## Performance & Accessibility

- Dynamic imports for Three.js (no SSR)
- `prefers-reduced-motion` respected in CSS
- Semantic HTML, ARIA labels, focus-visible styles
- Image formats: AVIF/WebP via Next.js config
- Lighthouse targets: 90+ (run audit after adding real assets)

## License

MIT — © Dhruv Gupta
