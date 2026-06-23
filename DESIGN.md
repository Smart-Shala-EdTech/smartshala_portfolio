# SmartShala — Design System & UI Specification

**Version:** 1.0  
**Status:** Draft  
**Last Updated:** June 2026

---

## 1. Design Philosophy

SmartShala's visual identity should feel like a well-run campus during fest week — alive, warm, and purposeful. The design avoids the cold precision of corporate SaaS (no flat blues, no neon accents, no glassmorphism). Instead it draws from organic materials: handmade paper, terracotta paths, open lawns, natural stone.

Every decision should answer: **does this feel crafted or generated?**

The design leans into craft: subtle textures, considered whitespace, type that has personality, and motion that feels like breathing rather than a demo.

---

## 2. Color System

### 2.1 Base Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#F5F2EB` | Page background — warm parchment |
| `--color-surface` | `#FDFAF4` | Cards, modals, elevated surfaces |
| `--color-border` | `#E2D9C8` | Default borders and dividers |
| `--color-text-primary` | `#1C1C1A` | Headings, primary body copy |
| `--color-text-secondary` | `#6B6B5E` | Supporting text, captions, labels |

### 2.2 Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-brand-primary` | `#2D7A4F` | Primary CTA buttons, active states, focus rings, key accents |
| `--color-brand-secondary` | `#E07B39` | Secondary accents, highlight callouts, icon accents |
| `--color-brand-soft` | `#A8C5A0` | Hover borders, subtle fills, tag backgrounds |

### 2.3 Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#3A9E5F` | Form success states, confirmation messages |
| `--color-warning` | `#D97706` | Warning badges, non-critical alerts |
| `--color-danger` | `#C0392B` | Error states, destructive actions |

### 2.4 Category Colors

Used for blog tags, service category badges, portfolio labels.

| Category | Hex |
|----------|-----|
| Technology / AI | `#2D7A4F` |
| Cultural / Design | `#E07B39` |
| Sports | `#4A90B8` |
| Workshop | `#D97706` (amber) |
| Gaming | `#7C5CBF` |

### 2.5 Color Usage Rules

- Never use `#2D7A4F` and `#E07B39` as adjacent large fills — they clash. Use one as the primary surface and the other as a small accent.
- Background fills on cards: `#FDFAF4`, not white. Pure white (`#FFFFFF`) should never appear.
- Text on `--color-brand-primary` backgrounds must be white or near-white; verify contrast ≥ 4.5:1.
- Use `--color-brand-soft` (`#A8C5A0`) only as a tint/highlight — never as a text colour.

---

## 3. Typography

### 3.1 Typefaces

| Role | Family | Source |
|------|--------|--------|
| Display / Headings | **Fraunces** | Google Fonts |
| Body | **Plus Jakarta Sans** | Google Fonts |
| Monospace / Code | **JetBrains Mono** | Google Fonts |

**Load strategy:** Load Fraunces with `font-display: swap`. Load `Plus Jakarta Sans` weights 400 and 600 only. Load JetBrains Mono on-demand (only pages/sections with code snippets).

### 3.2 Type Scale

| Token | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-display` | 56px / 3.5rem | 700 | 1.1 | Hero H1 |
| `--text-h1` | 44px / 2.75rem | 700 | 1.15 | Page titles |
| `--text-h2` | 34px / 2.125rem | 600 | 1.2 | Section headings |
| `--text-h3` | 26px / 1.625rem | 600 | 1.3 | Card headings, sub-sections |
| `--text-h4` | 20px / 1.25rem | 600 | 1.4 | Labels, step titles |
| `--text-body-lg` | 18px / 1.125rem | 400 | 1.65 | Lead paragraphs, hero sub |
| `--text-body` | 16px / 1rem | 400 | 1.6 | Default body copy |
| `--text-sm` | 14px / 0.875rem | 400 | 1.5 | Captions, metadata, tags |
| `--text-xs` | 12px / 0.75rem | 500 | 1.4 | Badges, labels (caps) |

**Fraunces** is used for all headings (`h1`–`h4`) and the display size.  
**Plus Jakarta Sans** is used for all body text, labels, CTAs, and form elements.

### 3.3 Responsive Typography

At mobile (`< 768px`):
- `--text-display` scales to 36px
- `--text-h1` scales to 30px
- `--text-h2` scales to 24px
- `--text-h3` scales to 20px

Use `clamp()` for fluid scaling where appropriate:
```css
font-size: clamp(2.25rem, 5vw, 3.5rem); /* display */
```

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

Based on a 4px base unit.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro gaps |
| `--space-2` | 8px | Tight component padding |
| `--space-3` | 12px | Compact padding |
| `--space-4` | 16px | Default inner padding |
| `--space-5` | 20px | Relaxed inner padding |
| `--space-6` | 24px | Card padding, section sub-gaps |
| `--space-8` | 32px | Component gaps |
| `--space-10` | 40px | Section sub-divisions |
| `--space-12` | 48px | Large component gaps |
| `--space-16` | 64px | Section padding (mobile) |
| `--space-24` | 96px | Section padding (desktop) |
| `--space-32` | 128px | Hero vertical padding |

### 4.2 Grid

- Desktop: 12-column grid, `max-width: 1200px`, `margin: 0 auto`, `padding: 0 48px`
- Tablet: 8-column, `padding: 0 32px`
- Mobile: 4-column, `padding: 0 20px`

### 4.3 Section Spacing

Every `<section>` gets `padding-block: var(--space-24)` on desktop, `var(--space-16)` on mobile.

Section headings are always centred with `max-width: 640px; margin: 0 auto` for the heading + subheading block, before content spreads to full width.

---

## 5. Component Specifications

### 5.1 Cards

```
Background:      #FDFAF4
Border:          1px solid #E2D9C8
Border Radius:   12px
Padding:         24px
Shadow (rest):   0 2px 12px rgba(45, 122, 79, 0.07)
Shadow (hover):  0 4px 20px rgba(45, 122, 79, 0.12)
Border (hover):  1px solid #A8C5A0
Transform:       translateY(-2px)
Transition:      150ms ease-out (transform, box-shadow, border-color)
```

Cards must never have a pure white background or a border-radius above 16px.

### 5.2 Buttons

**Primary Button**
```
Background:       #2D7A4F
Text:             #FFFFFF
Font:             Plus Jakarta Sans, 15px, weight 600
Padding:          12px 24px
Border Radius:    8px
Border:           none
Hover Background: #245f3e (darken 10%)
Transition:       background 150ms ease-out, transform 100ms ease-out
Active:           scale(0.98)
Focus Ring:       2px solid #2D7A4F, offset 2px
```

**Secondary Button**
```
Background:       transparent
Text:             #2D7A4F
Border:           1.5px solid #2D7A4F
Padding:          11px 23px (account for border)
Border Radius:    8px
Hover Background: rgba(45, 122, 79, 0.06)
Transition:       background 150ms ease-out
```

**Ghost / Text Button**
```
Background:       transparent
Text:             #2D7A4F
Border:           none
Padding:          8px 12px
Hover:            text underline, background rgba(45, 122, 79, 0.04)
```

Button text should always use sentence case, never ALL CAPS.

### 5.3 Form Elements

**Input / Textarea**
```
Background:       #FDFAF4
Border:           1px solid #E2D9C8
Border Radius:    8px
Padding:          10px 14px
Font:             Plus Jakarta Sans, 15px
Text:             #1C1C1A
Placeholder:      #6B6B5E at 70% opacity
Focus Border:     #2D7A4F
Focus Shadow:     0 0 0 3px rgba(45, 122, 79, 0.12)
Error Border:     #C0392B
Error Shadow:     0 0 0 3px rgba(192, 57, 43, 0.10)
Transition:       border-color 120ms ease, box-shadow 120ms ease
```

Labels are above inputs, never placeholder-only. Font size 14px, weight 500, colour `#1C1C1A`.

### 5.4 Tags / Badges

```
Background:       Category color at 12% opacity
Text:             Category color (full opacity)
Border:           1px solid category color at 30% opacity
Padding:          3px 10px
Border Radius:    99px (pill)
Font:             Plus Jakarta Sans, 12px, weight 600, letter-spacing 0.02em
Text Transform:   none
```

### 5.5 Accordion (FAQ)

- Trigger: full-width clickable row with icon on the right (`+` → `×`)
- Body: smooth height animation, `200ms ease`
- Border: `1px dashed #E2D9C8` between items (use dashed, not solid)
- No outer border on the entire FAQ block; the dashed dividers carry the structure

### 5.6 Navigation

```
Background:       #F5F2EB with backdrop-filter: blur(8px) at scroll > 0
Border Bottom:    1px solid #E2D9C8 (only when scrolled)
Padding:          16px 48px
Max Width:        1200px centred
Logo:             Left-aligned
Links:            Centre/right-aligned, Plus Jakarta Sans 15px weight 500
CTA:              Primary button, right-aligned
```

On mobile: hamburger toggle, full-width slide-down drawer.

Active link: `color: #2D7A4F`, no underline.

---

## 6. Texture & Atmosphere

### 6.1 Paper Grain

A subtle SVG noise texture is applied as a pseudo-element on the `body` to simulate paper grain.

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,..."); /* SVG noise filter */
}
```

Opacity must stay at `0.04`. Higher values look dirty.

### 6.2 Dividers

Use `border-style: dashed` with `#E2D9C8`. Avoid solid horizontal rules except within tables or code blocks.

```css
.divider {
  border-top: 1px dashed #E2D9C8;
  margin-block: var(--space-10);
}
```

### 6.3 Backgrounds

Section backgrounds should alternate subtly between `#F5F2EB` (default) and `#FDFAF4` (slightly lighter). Never use white. Never use a hard colour block — transitions can be a very subtle gradient over 2–3px.

---

## 7. Iconography

### 7.1 Icon Library

Use **Lucide Icons** (already included with ShadCN). Do not mix icon libraries.

### 7.2 Icon Sizing

| Context | Size |
|---------|------|
| In-line with body text | 16px |
| Button icons | 18px |
| Service card icons | 32px |
| Process step icons | 28px |
| Trust badge icons | 20px |
| Navigation icons | 20px |

Icons in service cards should use `--color-brand-primary` (`#2D7A4F`) by default. Secondary accent icons may use `--color-brand-secondary` (`#E07B39`) for variety — but only 1 in every 4 icons should use the secondary colour.

### 7.3 Rules

- Icon-only buttons must have `aria-label`
- Icons accompanying text are `aria-hidden="true"`
- Never scale icons between sizes using CSS transforms; always render at the intended size

---

## 8. Motion & Animation

### 8.1 Transitions

All interactive transitions use `150ms ease-out` unless specified below.

| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Card hover lift | `transform`, `box-shadow` | 150ms | ease-out |
| Button press | `transform` (scale 0.98) | 80ms | ease-in |
| Button release | `transform` | 150ms | ease-out |
| Nav background | `background`, `border` | 200ms | ease |
| Accordion open | `height` | 200ms | ease |
| Dropdown | `opacity`, `transform` | 150ms | ease-out |

### 8.2 Scroll Animations (Framer Motion)

Entrance animation for sections and cards:

```javascript
initial: { opacity: 0, y: 16 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
```

Stagger children (e.g., service cards): `staggerChildren: 0.08`

Do not use entrance animations on text-only elements within a card. Only the card itself should animate.

### 8.3 Skeleton Loaders

For any deferred content (blog posts, portfolio items fetched from API):

```css
background: linear-gradient(90deg, #EDE8DF 25%, #F5F2EB 50%, #EDE8DF 75%);
background-size: 200% 100%;
animation: shimmer 1.5s infinite;
```

Warm shimmer: `#EDE8DF` → `#F5F2EB`. Never use grey or white shimmer.

### 8.4 Reduced Motion

All animations must be wrapped:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 9. Page-by-Page Layout Specs

### 9.1 Hero Section

```
Layout:    Two-column on desktop (60% text / 40% illustration), single column on mobile
Text col:  Fraunces display heading, body-lg subheading, button group, trust badges
Illus col: SVG illustrations, stacked or grouped, slight float animation (reduced on mobile)
Padding:   padding-block: 96px desktop / 64px mobile
Max-W:     1200px
```

Trust badge strip:
- Flex row, `gap: 24px`, `flex-wrap: wrap`
- Each badge: checkmark icon (success green) + label text (14px, weight 500)
- No background fill on badges — they sit directly on the hero background

### 9.2 Services Grid

```
Grid:      3-column desktop / 2-column tablet / 1-column mobile
Gap:       24px
Each card: 280px min-height
```

### 9.3 Why Choose Us Grid

```
Grid:      3-column desktop (2+1 last row if 5 items) / 2-col tablet / 1-col mobile
Cards:     Icon top-left, heading, body paragraph
Accent:    Left border 3px solid --color-brand-primary on each card
```

### 9.4 Process Timeline

**Desktop:** Horizontal numbered steps connected by a dashed line (`#E2D9C8`).

```
Each step:   Icon in circle (brand-primary fill, white icon)
             Step number (Fraunces, small, secondary text colour)
             Step title (Plus Jakarta Sans, 15px, weight 600)
             Description (13px, secondary text)
Connector:   1px dashed line between step circles, colour #E2D9C8
```

**Mobile:** Vertical stepper, left border `2px solid #E2D9C8`, icon circles on the left.

### 9.5 Portfolio Grid

```
Grid:      2-column desktop / 1-column mobile
Gap:       24px
Card:      Image/colour header (120px tall), body with problem/solution/results
Metric:    Highlighted in a small pill (brand-primary bg, white text, 12px)
```

### 9.6 Technologies

```
Layout:    Category label (H4) + horizontal wrap of badge pills below
Gap:       Category sections have 32px between them
Badges:    Use category token colours
```

### 9.7 Contact Form

```
Layout:    Two-column on desktop (form on left, contact info on right)
           Single column on mobile
Form:      Stacked fields, full width within column
Info col:  Icon + label rows for each contact method
           Response promise at bottom in a light callout box
```

---

## 10. Responsive Behaviour Summary

| Component | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Hero | 2-col (60/40) | 2-col (55/45) | 1-col, illustration below |
| Services grid | 3-col | 2-col | 1-col |
| Why Choose Us | 3-col | 2-col | 1-col |
| Process | Horizontal timeline | Horizontal (scrollable) | Vertical stepper |
| Portfolio | 2-col | 2-col | 1-col |
| Technologies | Category rows | Category rows | Horizontal scroll per row |
| Testimonials | 3-col | 2-col | Carousel (1 visible) |
| Contact | 2-col | 2-col | 1-col, info below form |
| Footer | 4-col links | 2-col | 1-col stacked |

---

## 11. Accessibility Specifications

| Rule | Specification |
|------|--------------|
| Focus ring | `outline: 2px solid #2D7A4F; outline-offset: 2px` |
| Focus visible | Only on keyboard navigation (`:focus-visible`, not `:focus`) |
| Skip link | "Skip to main content" as first focusable element |
| Headings | Only one `<h1>` per page; logical heading hierarchy (no skipped levels) |
| Images | All `<img>` have descriptive `alt`; decorative images use `alt=""` |
| Icon buttons | `aria-label` required |
| Form labels | Every input has a `<label>` with matching `htmlFor` |
| Error messages | Associated with input via `aria-describedby` |
| Colour contrast | Body text min 4.5:1; large text min 3:1; verified with `#1C1C1A` on `#F5F2EB` ✓ |
| Motion | `prefers-reduced-motion` media query on all animations |

---

## 12. File & Asset Conventions

### 12.1 Image Formats

| Asset | Format | Notes |
|-------|--------|-------|
| Hero illustrations | SVG | Inline or `<img>` with `width`/`height` set |
| Blog thumbnails | WebP with JPEG fallback | `next/image` with `sizes` prop |
| Team avatars | WebP | Square, 1:1 ratio |
| Open Graph images | PNG, 1200×630 | Static per page |
| Favicon | ICO + SVG | `favicon.ico` and `icon.svg` |

### 12.2 CSS Custom Properties

All design tokens should be defined as CSS custom properties on `:root` and consumed by Tailwind via `tailwind.config.ts` using `extend.colors`, `extend.fontFamily`, and `extend.spacing`.

Never hardcode hex values or pixel values outside the token definitions.

### 12.3 Component File Naming

```
components/
  ui/           ← ShadCN primitives (auto-generated, do not edit)
  marketing/    ← Page sections (Hero, Services, Process, etc.)
  common/       ← Shared components (NavBar, Footer, Card, Badge)
  forms/        ← ContactForm, FormField, etc.
```

---

## 13. Design Anti-Patterns (Do Not Do)

- No pure white (`#FFFFFF`) backgrounds anywhere
- No `border-radius` above `16px` on cards or inputs
- No gradients that span more than 2 colour stops
- No box-shadows with `blur > 24px` (it looks ungrounded)
- No neon colours, no glassmorphism (`backdrop-filter` on cards)
- No uppercase body text
- No italic text in UI components (only acceptable in pull-quotes)
- No placeholder-only form labels (accessibility violation)
- No animation `duration > 400ms` for UI feedback (it feels sluggish)
- No `linear` easing on entrance animations (always `ease-out` or custom cubic)
- No mixing Lucide icons with any other icon set
- No grey shimmer skeletons — warm shimmer only
