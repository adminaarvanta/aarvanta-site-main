# AARVANTA LTD — Website

Premium UK-based AI infrastructure company website built with Next.js, Material UI, and Tailwind CSS.

## Tech Stack

- **Next.js 16** (App Router)
- **Material UI 9** — components and theming
- **Tailwind CSS 4** — utility classes where needed
- **Framer Motion** — subtle scroll animations
- **Inter + Manrope** — typography (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all blueprint sections |
| `/about` | Company story and values |
| `/solutions` | AI infrastructure solutions |
| `/products` | LeadOS, WhatsAppOS, VoiceOS, SiteOS, ContentOS, CRMOS |
| `/industries` | Industry-specific use cases |
| `/partner-program` | White-label partner program |
| `/case-studies` | Business outcome highlights |
| `/pricing` | Tier structure (custom pricing) |
| `/blog` | Operational insights and guides |
| `/contact` | Contact form |
| `/book-demo` | Demo booking form |

## Design System

- **Colors:** Off-white `#F8F7F4`, Deep navy `#0F1729`, Muted gold `#C4A962`
- **Tone:** Premium, enterprise-ready, calm confidence
- **Content:** Centralized in `src/lib/content.ts`

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js pages
├── components/
│   ├── home/         # Homepage sections
│   ├── layout/       # Header, Footer, Theme
│   ├── forms/        # Contact & demo forms
│   └── ui/           # Reusable UI components
└── lib/
    ├── content.ts    # All site content
    └── theme.ts      # MUI theme configuration
```
