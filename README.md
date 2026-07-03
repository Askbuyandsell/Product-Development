# AI-Solutions — Website Prototype

A static, front-end prototype of the AI-Solutions marketing site and admin
area, built to the brief in the assignment scenario (Computer Systems
Engineering).

## How to view it
Open `index.html` in any modern browser — no build step or server required.
Every internal link is relative, so the whole folder can be zipped, hosted on
any static host (Netlify, GitHub Pages, S3), or opened directly from disk.

## Site map & requirements coverage

| Brief requirement | Where it lives |
|---|---|
| Software solutions offered | `solutions.html` (+ preview on `index.html`) |
| Highlights of past solutions to industries | `work.html` — 4 case studies with metrics |
| Customer feedback with ratings | `testimonials.html` — star ratings, 6 reviews |
| Articles promoting the company | `articles.html` — 6 articles |
| Photo galleries of promotional events | `gallery.html` — 6 event visuals |
| Upcoming events | `events.html` |
| Contact Us form (no account/password) | `contact.html` — name, email, phone, company, country, job title, job details |
| Password-protected admin area | `admin/login.html` → `admin/dashboard.html` |
| AI virtual assistant (unique selling point) | Illustrated on `index.html`; described across `solutions.html` |

## Architecture (this prototype)

- Plain HTML5 / CSS3 / vanilla JS — no framework, no build tooling.
- `css/style.css` — single design-system stylesheet (colour/type tokens, layout, components).
- `js/data.js` — mock content (solutions, case studies, testimonials, articles, events, seed inquiries).
- `js/main.js` — shared behaviour: nav, renderers, contact-form validation, admin login gate, dashboard rendering.
- `js/footer.js` — injects a shared footer on every page so it only needs to be maintained once.
- Fully responsive (tested down to ~360px) with visible keyboard focus states and `prefers-reduced-motion` support.

## Important: this is a front-end prototype, not a production system

Two things are deliberately simplified for a static, no-backend demo, and are
flagged here so they read as informed decisions rather than oversights:

**1. Contact form submission.**
The form validates client-side and shows a success state, but there is no
server to persist the data. A production version would `POST` to a real API
endpoint, e.g.:

```
POST /api/inquiries
{
  "fullName": "string", "email": "string", "phone": "string",
  "company": "string", "country": "string", "jobTitle": "string",
  "details": "string"
}
```

Suggested database table:

```sql
CREATE TABLE inquiries (
  id           SERIAL PRIMARY KEY,
  full_name    VARCHAR(120)  NOT NULL,
  email        VARCHAR(160)  NOT NULL,
  phone        VARCHAR(30)   NOT NULL,
  company      VARCHAR(160)  NOT NULL,
  country      VARCHAR(80)   NOT NULL,
  job_title    VARCHAR(120)  NOT NULL,
  details      TEXT          NOT NULL,
  status       VARCHAR(20)   NOT NULL DEFAULT 'New',
  created_at   TIMESTAMPTZ   NOT NULL DEFAULT now()
);
```

Server-side input validation and rate-limiting would sit in front of this
table in addition to the client-side checks already implemented, since
client-side validation alone is not a security control.

**2. Admin authentication.**
`admin/login.html` uses a hard-coded demo password purely so the
password-protected area can be demonstrated without a backend. A production
deployment must instead:

- Store only salted/hashed passwords (e.g. bcrypt/argon2), never plaintext.
- Authenticate against a server-side session or signed token (e.g. JWT in an
  HttpOnly cookie), not a value checked in client-side JavaScript.
- Gate `/admin/*` routes at the server, not just by redirecting in the
  browser — the current `?auth=1` query check is a UI convenience only and is
  trivially bypassable, which is expected and acceptable for a static
  prototype but must not ship as-is.
- Add rate-limiting / lockout on repeated failed attempts, and ideally
  multi-factor authentication for admin accounts.

## Design system

- **Palette:** ink navy `#10151F`, warm paper `#F6F5F0`, signal blue `#3E6AE1`,
  data cyan `#6FE7DD`, amber `#F5A623` (ratings).
- **Type:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono
  (data/labels) — chosen for a technical, engineering-documentation feel that
  matches an AI systems-engineering company, rather than a generic corporate
  serif/sans pairing.
- **Signature element:** the animated diagnosis → prototype → deploy pipeline
  diagram on the homepage hero, which visualises the company's actual value
  proposition instead of a decorative hero graphic.
