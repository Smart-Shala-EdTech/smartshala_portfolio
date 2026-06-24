# SmartShala Marketing Website

SmartShala is a conversion-focused marketing website for a software and AI agency. The UI follows `DESIGN.md`: warm parchment surfaces, Fraunces headings, Plus Jakarta Sans body text, terracotta and campus green accents, dashed dividers, accessible forms, and structured shared components.

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS with design tokens from `DESIGN.md`
- Lucide React icons
- React Hook Form and Zod validation
- API route for contact form validation

## Project Structure

```text
app/
  api/contact/route.ts       Contact form API validation
  globals.css                Design tokens, base styles, accessibility
  layout.tsx                 Metadata, fonts, root shell
  page.tsx                   Marketing page composition
components/
  common/                    Shared UI components
  forms/                     Contact form
  marketing/                 Page sections
data/
  marketing.ts               Site content and section data
  seo.ts                     Structured data
lib/
  contact-schema.ts          Shared Zod schema
  utils.ts                   Class name helper
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` starts the local Next.js server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs Next.js linting.
- `npm run typecheck` runs TypeScript without emitting files.

## Design Notes

- Do not use pure white backgrounds; use `--color-bg` and `--color-surface`.
- Font stacks are defined as CSS variables for Fraunces, Plus Jakarta Sans, and JetBrains Mono. Add local font files or a hosted font loader before production if exact font rendering is required in every environment.
- Keep card radii at or below 16px.
- Use Lucide icons only.
- Keep form labels visible and connected to inputs.
- Respect `prefers-reduced-motion`.
- Add new marketing content through `data/marketing.ts` when possible.

## Contact Form

The form validates on the client and server with the shared schema in `lib/contact-schema.ts`. The current API route returns a success response and is ready to be connected to Resend, a database, or a CRM in a later integration step.
