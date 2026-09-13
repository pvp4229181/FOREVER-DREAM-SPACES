# Forever Dream Spaces — Interior Design Website

A modern, full-stack marketing website for an interior design studio, built with **NestJS** (server-rendered with Handlebars) and **MongoDB** (via Mongoose) for storing contact/lead form submissions.

## Pages

- **Home** — hero, stats, services, featured projects, process, testimonials, blog
- **About Us** — story, values, stats, team
- **Services** (overview) + **Residential Interior Design** + **Commercial Interior Design**
- **Projects** — filterable portfolio grid + individual project detail pages
- **Blog** — listing + individual post pages
- **Contact Us** — lead form (saved to MongoDB) + office info + embedded map
- **Thank You** page after a successful enquiry

## Tech stack

- NestJS 11 (Express platform), server-rendered views with `hbs` (Handlebars)
- MongoDB + Mongoose (`@nestjs/mongoose`) — stores every contact-form lead
- Vanilla modern CSS (custom design system, no framework) + vanilla JS (mobile nav, scroll reveals, project filters, AJAX form submit)
- Fraunces + Manrope (Google Fonts), Font Awesome icons

## Images & logo

No AI image-generation tool was available while building this, so:
- The **logo** is a CSS/SVG wordmark matching the "FOREVER DREAM SPACES — Interior Design" mark you shared — see `views/partials/nav.hbs` / `footer.hbs`.
- **All project/hero/gallery photos are placeholder stock photography** (Unsplash, license-free) referenced by URL in `src/common/site-data.ts` under `PLACEHOLDER_IMAGES`. Swap these for your real project photography whenever you have it — just replace the URLs (or point them at `/images/...` files you drop into `public/images/`).

## Getting started

```bash
npm install
cp .env.example .env      # then edit MONGODB_URI if needed
npm run start:dev         # dev server with hot reload, http://localhost:3000
```

MongoDB must be reachable at the `MONGODB_URI` you configure (defaults to `mongodb://127.0.0.1:27017/foreverdreamspaces`). Use a local MongoDB install, Docker (`docker run -d -p 27017:27017 mongo`), or a free MongoDB Atlas cluster.

### Production build

```bash
npm run build
npm run start:prod
```

## Editing content

- **Business info** (address, email, phone, socials): `src/common/site-data.ts` → `BUSINESS`
- **Nav links**: `src/common/site-data.ts` → `NAV_LINKS`
- **Projects / Blog posts / Testimonials / Stats**: same file
- **Styling**: `public/css/style.css` (CSS custom properties at the top control the whole palette/typography)
- **Page markup**: `views/pages/*.hbs`, shared header/footer in `views/partials/`

## Contact form → MongoDB

Submissions from `/contact` are saved via `POST /api/contact` (AJAX, used by the page's JS) or `POST /contact` (plain HTML fallback, redirects to `/thank-you`). Data is stored in the `contacts` collection (`src/contact/schemas/contact.schema.ts`) with name, email, phone, service, city, message and a timestamp.
