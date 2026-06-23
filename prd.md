# SmartShala — Product Requirements Document

**Version:** 1.0  
**Status:** Draft  
**Prepared by:** Deepanshu  
**Last Updated:** 23 june 2026

---

## 1. Overview

### 1.1 Product Summary

SmartShala is a software and AI agency website built to convert visitors into clients. It communicates trust, expertise, and professionalism through warm, organic design paired with clear service messaging. The site replaces any prior static or template-based presence with a fully dynamic, SEO-optimised, conversion-focused product.

### 1.2 Problem Statement

Agencies frequently lose potential clients at the awareness and consideration stage because their websites fail to clearly communicate:

- What they actually build
- Who they've built it for
- Why they should be trusted over alternatives

SmartShala needs a website that makes these three things immediately legible, then removes every friction point between interest and a booked consultation call.

### 1.3 Goals

| Goal | Metric |
|------|--------|
| Increase qualified enquiry volume | Contact form submissions + consultation bookings |
| Reduce bounce from landing page | Session duration > 2 min, bounce rate < 50% |
| Communicate service range clearly | Visitors view ≥ 2 service cards per session |
| Build SEO presence organically | Core Web Vitals: all green; Lighthouse ≥ 90 |

### 1.4 Non-Goals

- No client portal or authenticated dashboard (Phase 1)
- No live chat widget (Phase 1; may be added later)
- No e-commerce or payment processing
- No CMS (content is code-managed in Phase 1)

---

## 2. Target Audience

### 2.1 Primary Users

**Decision Makers at Startups & SMBs**
- Founders, CTOs, Product Managers at early- to growth-stage startups
- Operations or IT heads at SMBs evaluating custom software
- Non-technical stakeholders who need to justify vendor selection

**What they need from this website:**
- Confidence that SmartShala can handle their specific problem
- A sense of process, timeline, and cost transparency
- Social proof (case studies, testimonials)
- A frictionless way to start a conversation

### 2.2 Secondary Users

**Technical Evaluators**
- Engineers auditing the tech stack before a contract is signed
- They will look at: technology badges, GitHub links, deployment details

---

## 3. Features & Requirements

### 3.1 Pages

| Page | Priority | Notes |
|------|----------|-------|
| Home (Landing) | P0 | Core conversion page |
| Services | P0 | Detail for each service offering |
| Portfolio | P0 | Case studies with real metrics |
| Contact | P0 | Primary lead-capture surface |
| About | P1 | Company story, values, team |
| Blog | P1 | Content SEO, category filtered |
| Terms & Conditions | P1 | Legal requirement |
| Privacy Policy | P1 | Legal requirement |
| 404 | P1 | Graceful error handling |

---

### 3.2 Home Page

#### Hero Section

**Requirements:**
- `H1`: "Build Intelligent Software That Grows Your Business" — must be the largest text element on viewport load
- Subheading: 1–2 sentences summarising who SmartShala helps and how
- Primary CTA: "Book Free Consultation" — links to contact section with `?type=consultation` param pre-filled
- Secondary CTA: "Explore Services" — smooth scroll to Services section
- Illustrations representing AI, software engineering, mobile apps, and cloud infrastructure; SVG preferred for performance
- Trust badge strip beneath CTAs: four badges with checkmark icons

**Trust Badges:**
1. End-to-End Development
2. AI-Powered Solutions
3. Scalable Architecture
4. Long-Term Support

**Acceptance Criteria:**
- Hero loads above the fold on 1280px, 768px, and 375px viewports
- CTA buttons are keyboard accessible with visible focus ring
- Illustrations do not cause CLS (Cumulative Layout Shift)

---

#### Services Section

Each service is displayed as a card. Cards must be scannable without clicking.

**Services:**

| Service | Technologies to show |
|---------|---------------------|
| Mobile App Development | Flutter, React Native, Android, iOS |
| Custom Software Development | CRM, ERP, SaaS, Web Apps |
| Backend & API Development | FastAPI, Node.js, PostgreSQL, REST |
| Cloud Deployment & Automation | Docker, AWS, CI/CD, DevOps |
| AI & Intelligent Automation | LangChain, OpenAI, RAG, LLM, Agents |

**Each card must include:**
- Service icon (SVG)
- Service name
- 1–2 sentence description
- Technology tag pills
- 2–3 key benefit bullet points
- Hover state: border colour shifts to `#A8C5A0`, card lifts `translateY(-2px)`

---

#### Why Choose SmartShala

Five premium feature cards. Content:

1. **End-to-End Product Development** — From idea to deployment, one team, zero handoffs.
2. **Fast and Transparent Delivery** — Clear milestones and weekly updates, no black boxes.
3. **Scalable Architecture** — Built to handle growth without costly rewrites.
4. **AI Integration Expertise** — Modern AI capabilities embedded where they add real value.
5. **Long-Term Support** — Active maintenance and iteration after launch.

---

#### Process Section

Horizontal timeline (desktop) / vertical stepper (mobile).

**Steps:**
1. Discovery Call
2. Requirement Analysis
3. Proposal & Timeline
4. UI/UX Design
5. Development
6. Testing
7. Deployment
8. Maintenance & Support

Each step: icon, step name, 1-sentence description. Steps 1–8 must be clearly numbered. Scroll-triggered entrance animation.

---

#### Portfolio Section

Grid of project case study cards. Each card:

- Project name + category tag
- Problem statement (1 sentence)
- Solution summary (1–2 sentences)
- Results with at least one quantified metric (e.g., "40% reduction in manual processing time")
- Hover: reveal full summary overlay

**Minimum at launch:** 3 case study cards (placeholder data acceptable for v1 if real data unavailable).

---

#### Technologies Section

Grouped badge display across five categories:

- **Frontend:** React, Next.js, Flutter
- **Backend:** Python, FastAPI, Node.js
- **Databases:** PostgreSQL, MongoDB
- **Cloud:** Docker, AWS
- **AI Stack:** LangChain, OpenAI APIs, Vector Databases

Badges should use the relevant category colour from the design system.

---

#### Testimonials Section

Minimum 3 testimonial cards. Each includes:
- Quote text
- Client name and role
- Company name
- Optional: avatar or company logo

Cards should use a horizontal scroll carousel on mobile.

---

#### FAQ Section

Accordion component. Five questions:

1. How much does a project cost?
2. How long does development take?
3. Do you provide support after launch?
4. Can AI be integrated into existing software?
5. How do we start working together?

Default: all collapsed. One open at a time.

---

#### Contact Section

**Heading:** "Let's Build Something Amazing Together"

**Form fields:**
- Name (required)
- Email (required, validated)
- Phone Number (optional)
- Company Name (optional)
- Project Type (dropdown: Mobile App / Web App / AI Solution / Backend/API / Cloud Setup / Other)
- Budget Range (dropdown: Under ₹5L / ₹5L–15L / ₹15L–50L / ₹50L+ / Let's discuss)
- Message (textarea, required)

**CTAs:**
- Primary: "Send Inquiry"
- Secondary: "Book Consultation" (links to Calendly or equivalent)

**Additional contact info:**
- Email address
- WhatsApp link
- LinkedIn profile
- GitHub profile
- Location (city)
- Response promise: "We typically reply within 24 hours."

**Validation:** Client-side with Zod; server-side via API route. On success: inline success state with confirmation text. On error: field-level error messages.

---

### 3.3 About Page

Sections:
1. Company origin story (2–3 paragraphs)
2. Mission statement
3. Core values (cards): Innovation, Trust, Transparency, Continuous Learning, Human-Centered Design
4. Team section (optional for v1, placeholder-ready)

---

### 3.4 Blog Page

- Category filter bar: AI / Software Development / Mobile Development / Cloud / Automation / DevOps / Case Studies
- Card grid: thumbnail, category tag, title, excerpt, read time, date
- SEO: dynamic `<title>` and `<meta description>` per post
- Open Graph image per post

**Phase 1:** Static MDX posts, minimum 2 seed articles.

---

### 3.5 Terms & Conditions Page

Sections to include:
- Scope of Work
- Payment Terms
- Project Milestones
- Revision Policy
- Intellectual Property
- Confidentiality
- Cancellation Policy
- Maintenance and Support
- Dispute Resolution

---

### 3.6 Privacy Policy Page

Sections to include:
- What data we collect
- How we use it
- Cookies
- Contact form data
- Third-party services (Resend, Google Analytics, Clarity)
- Data security
- User rights and contact

---

## 4. Technical Requirements

### 4.1 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS + ShadCN UI |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Email | Resend |
| Authentication | Clerk (admin only, if needed) |
| Database | PostgreSQL (form submissions) |
| Backend API | FastAPI (optional microservice) or Next.js API routes |
| Deployment | Vercel |
| Analytics | Google Analytics 4 + Microsoft Clarity |

### 4.2 Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

### 4.3 SEO Requirements

- Dynamic `<title>` and `<meta description>` for every page using Next.js Metadata API
- Structured data (JSON-LD): `Organization`, `WebSite`, `Service`, `FAQPage`
- Open Graph tags on all pages
- `sitemap.xml` auto-generated
- `robots.txt`
- Canonical URLs
- Image alt text on every `<img>` element

### 4.4 Accessibility

- WCAG 2.1 AA compliance
- All interactive elements keyboard accessible
- Focus ring: `2px solid #2D7A4F`, offset `2px`
- ARIA labels on icon-only buttons
- `prefers-reduced-motion` respected for all animations
- Colour contrast ratios: minimum 4.5:1 for body text, 3:1 for large text

### 4.5 Responsiveness

Three breakpoints minimum:

| Breakpoint | Width |
|------------|-------|
| Mobile | 375px – 767px |
| Tablet | 768px – 1279px |
| Desktop | 1280px+ |

---

## 5. Content Requirements

### 5.1 Copy Tone

- Warm, direct, and confident — not corporate, not salesy
- Use active voice throughout
- Avoid jargon unless the audience is explicitly technical
- Every headline should state a clear benefit, not just a category name

### 5.2 Images & Illustrations

- Hero illustrations: SVG, optimised, `<100KB` each
- No stock photography of people in suits
- Icons: consistent line-style or solid, from a single icon set (Lucide or Phosphor)
- All images must have descriptive `alt` attributes

---

## 6. Analytics & Tracking

| Event | Trigger |
|-------|---------|
| `cta_hero_consultation` | Click on "Book Free Consultation" in hero |
| `cta_hero_services` | Click on "Explore Services" in hero |
| `form_submitted` | Successful contact form submission |
| `faq_opened` | FAQ accordion item expanded |
| `portfolio_card_hover` | Hover on case study card > 1s |
| `service_card_view` | Service card enters viewport |

---

## 7. Launch Checklist

- [ ] All P0 pages complete and reviewed
- [ ] Contact form submission tested end-to-end (email delivery via Resend confirmed)
- [ ] Lighthouse scores ≥ 90 on all core pages
- [ ] Responsive tested on Chrome, Safari, Firefox at 375px, 768px, 1280px
- [ ] `sitemap.xml` and `robots.txt` live and indexed
- [ ] Google Analytics and Clarity tracking verified
- [ ] All legal pages (Terms, Privacy) reviewed
- [ ] Favicon and Open Graph images in place
- [ ] Domain and SSL configured

---

## 8. Out of Scope (Future Phases)

- Client login portal
- Project management dashboard
- Integrated CMS (Sanity, Contentlayer)
- Live chat / support widget
- Multilingual support
- Job board / careers page
- Invoice / payment processing
