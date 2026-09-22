# Victor Chukwudebelu — Portfolio

A curated, editorial redesign of the personal portfolio at
[victordebelu.vercel.app](https://victordebelu.vercel.app).

The goal was not to reskin the existing site, but to redesign
the presentation so the strongest work feels curated and
substantial, rather than presented as a long project directory.

## Design direction

- White / warm off-white canvas, near-black typography
- One restrained accent (deep teal `#2f5d50`)
- Editorial serif headlines (Newsreader), Inter for body, JetBrains Mono for technical labels
- Hairline rules, corner ticks, subtle dot-canvas — never gradients or glow
- Generous whitespace, magazine-style composition
- Eight flagship projects with full editorial case studies
- A secondary "More Work" list for additional projects

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom design-token system
- Google Fonts via `<link>` (Inter, Newsreader, JetBrains Mono)
- All project pages prerendered as static HTML

## Structure

```
app/
  layout.tsx               # Root layout, fonts, nav, footer
  page.tsx                 # Home (all sections composed here)
  globals.css              # Design system, tokens, utilities
  work/[slug]/page.tsx     # Project case-study pages
components/
  nav.tsx                  # Fixed nav with scroll-aware background
  hero.tsx                 # Hero with restrained Reference Stack schematic
  selected-work.tsx        # Eight flagship projects (alternating side)
  more-work.tsx            # Compact additional-projects list
  project-plate.tsx        # Editorial project visuals (3 variants)
  experience.tsx           # Editorial timeline + by-the-numbers strip
  about.tsx                # Personal positioning + profile card
  expertise.tsx            # Skills organised by function
  credentials.tsx          # Education + certifications
  contact.tsx              # Closing statement + contact panel
  footer.tsx               # Minimal footer
  case-study.tsx           # Project case-study template
  reveal.tsx               # Subtle IntersectionObserver reveal
lib/
  projects.ts              # Source of truth for project data
  profile.ts               # Source of truth for profile / experience / skills
```

## Content rules

All facts (projects, experience, employers, education, certifications,
links, metrics) are preserved from the existing portfolio. No new
employers, clients, projects, awards, or fabricated metrics were added.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (static)
```
