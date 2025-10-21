# Berke Cengiz - Portfolio

Backend Developer portfolio showcasing 4+ years of experience in microservices and cloud-native applications.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (minimal setup)
- **Theme**: next-themes (dark/light mode with system preference)
- **Analytics**: Vercel Analytics
- **Design**: Brutalist aesthetic with glassmorphism effects

## Project Structure

```
├── app/                    # Next.js app router
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   ├── about.tsx          # About section
│   ├── contact.tsx        # Contact form
│   ├── footer.tsx         # Footer
│   ├── hero.tsx           # Hero section
│   ├── navigation.tsx     # Navigation with scroll tracking
│   ├── projects.tsx       # Projects grid
│   └── theme-toggle.tsx   # Dark/light mode toggle
├── data/                  # Data layer
│   └── portfolio-data.ts  # Projects, experience, skills data
├── types/                 # TypeScript type definitions
│   └── index.ts          # Shared interfaces
└── lib/                   # Utilities
    └── utils.ts          # cn() helper
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Building

```bash
npm run build
npm start
```

## Customization

### Update Content

Edit `/data/portfolio-data.ts` to update:
- Projects
- Work experience
- Skills
- Contact information
- Social links

### Update Styling

- Global styles: `app/globals.css`
- Color scheme: CSS variables in `app/globals.css` (`:root` and `.dark`)
- Tailwind config: Uses Tailwind v4 with inline theme configuration

### Update Metadata

Edit `app/layout.tsx` to update:
- SEO metadata
- Open Graph tags
- Structured data (JSON-LD)

## Features

- Responsive design with mobile navigation
- Dark/light mode with system preference detection
- Optimized scroll tracking with debouncing
- Accessibility features (skip links, keyboard navigation, ARIA labels)
- SEO optimized with structured data
- Performance optimized (Server Components where possible)
- Error boundary for graceful error handling
- Type-safe with TypeScript


