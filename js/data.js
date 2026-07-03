/* ============================================================
   AI-SOLUTIONS — MOCK DATA LAYER
   In a production build this would be served by a backend API
   (e.g. Node/Express + PostgreSQL) — see README.md for the
   recommended schema. Here it is seeded client-side so every
   page (including the admin dashboard) has consistent content
   without requiring a live server for assessment/demo purposes.
   ============================================================ */

const AISOL_INQUIRIES_SEED = [
  { id: 1027, name: "Priya Nathan",     email: "priya.nathan@northgrid.co",     company: "NorthGrid Energy",     country: "United Kingdom", jobTitle: "Head of IT Operations",     industry: "Energy",        date: "2026-06-29", status: "New",        details: "Looking for a rapid prototype to triage VPN drop-outs across 400 remote engineers." },
  { id: 1026, name: "Marcus Ibe",       email: "m.ibe@harrowfin.com",           company: "Harrow Financial",     country: "United Kingdom", jobTitle: "Digital Experience Lead",   industry: "Finance",       date: "2026-06-27", status: "Contacted",  details: "Need an AI assistant to pre-diagnose ticket categories before they reach the service desk." },
  { id: 1025, name: "Sofia Almeida",    email: "sofia.almeida@ondalogix.pt",    company: "Ondalogix",            country: "Portugal",       jobTitle: "Head of Employee Experience", industry: "Logistics",    date: "2026-06-24", status: "Qualified",  details: "Piloting proactive device-health alerts for warehouse handhelds ahead of Q3 rollout." },
  { id: 1024, name: "Tom Fairweather",  email: "tom@fairweather-eng.co.uk",     company: "Fairweather Engineering", country: "United Kingdom", jobTitle: "CTO",                    industry: "Manufacturing",  date: "2026-06-22", status: "New",        details: "Exploring affordable prototyping for a shop-floor diagnostics dashboard." },
  { id: 1023, name: "Hana Yoshida",     email: "hana.yoshida@aozora-tech.jp",   company: "Aozora Tech",          country: "Japan",          jobTitle: "IT Service Manager",        industry: "Retail",        date: "2026-06-19", status: "Contacted",  details: "Interested in the virtual assistant for password-reset deflection across 12 regions." },
  { id: 1022, name: "Liam O'Connor",    email: "liam.oconnor@brightfield.ie",   company: "Brightfield Health",   country: "Ireland",        jobTitle: "Head of Workplace Tech",    industry: "Healthcare",    date: "2026-06-15", status: "Qualified",  details: "Clinician onboarding is slow — want to prototype a guided device-setup flow." },
  { id: 1021, name: "Grace Muthoni",    email: "grace.muthoni@savannapay.co.ke",company: "SavannaPay",           country: "Kenya",          jobTitle: "Product Director",          industry: "Fintech",       date: "2026-06-10", status: "New",        details: "Need proactive detection of app crash patterns before support tickets spike." },
  { id: 1020, name: "Erik Lindqvist",   email: "erik.l@nordfrakt.se",           company: "NordFrakt AB",         country: "Sweden",         jobTitle: "Director of IT",            industry: "Logistics",     date: "2026-06-05", status: "Closed",     details: "Ran a 6-week pilot on predictive laptop-battery health scoring — moving to rollout." }
];

const AISOL_SOLUTIONS = [
  {
    tag: "Diagnostics",
    title: "Proactive Issue Detection",
    desc: "Continuous, AI-driven monitoring that flags device, network and application issues before they reach the service desk — so employees rarely notice a problem happened.",
    icon: "pulse"
  },
  {
    tag: "Automation",
    title: "AI Virtual Assistant",
    desc: "A conversational assistant embedded in the employee's workflow that answers questions, resolves common issues, and routes anything it can't handle to the right human.",
    icon: "chat"
  },
  {
    tag: "Prototyping",
    title: "Rapid, Affordable Prototyping",
    desc: "Working prototypes of new digital-experience tools in days, not months, so you can validate an idea with real users before committing engineering budget.",
    icon: "layers"
  },
  {
    tag: "Insight",
    title: "Experience Analytics",
    desc: "Dashboards that turn raw telemetry into a clear picture of digital-employee-experience health across devices, teams and regions.",
    icon: "chart"
  },
  {
    tag: "Integration",
    title: "Workflow Integration",
    desc: "Solutions that sit inside the tools your teams already use — ticketing, chat, MDM — rather than asking anyone to learn a new system.",
    icon: "grid"
  },
  {
    tag: "Engineering",
    title: "Custom Systems Engineering",
    desc: "Bespoke systems-engineering work for organisations with requirements our off-the-shelf modules don't yet cover.",
    icon: "cpu"
  }
];

const AISOL_CASE_STUDIES = [
  {
    industry: "Energy",
    client: "NorthGrid Energy",
    title: "Cutting VPN incident volume by 61% for 400 remote engineers",
    summary: "NorthGrid's field engineers lost hours each week to unreliable VPN sessions. We prototyped a proactive diagnostic agent that predicted drop-outs from signal and session telemetry and pre-emptively reconnected or rerouted sessions before failure.",
    metrics: [ ["Incident volume","−61%"], ["Prototype to pilot","3 weeks"], ["Engineers covered","400"] ]
  },
  {
    industry: "Healthcare",
    client: "Brightfield Health",
    title: "Guided onboarding that cut clinician device setup from 45 to 9 minutes",
    summary: "New clinicians were losing their first shift to device setup. Our AI assistant walked each person through configuration conversationally, catching mistakes in real time instead of after the fact.",
    metrics: [ ["Setup time","45 → 9 min"], ["Support tickets","−73%"], ["Clinicians onboarded","1,200+"] ]
  },
  {
    industry: "Fintech",
    client: "SavannaPay",
    title: "Predicting app-crash clusters two days before they hit support queues",
    summary: "SavannaPay needed to catch instability before customers did. A lightweight anomaly-detection prototype now flags crash clusters as they form, giving the engineering team a head start most competitors don't have.",
    metrics: [ ["Lead time on incidents","~2 days"], ["Time to first prototype","11 days"], ["False-positive rate","4%"] ]
  },
  {
    industry: "Logistics",
    client: "NordFrakt AB",
    title: "Predictive battery-health scoring for a 2,000-device handheld fleet",
    summary: "Dead scanners were stalling warehouse floors. We built a scoring model that predicts battery failure a full shift in advance, letting NordFrakt swap devices proactively instead of reactively.",
    metrics: [ ["Unplanned downtime","−48%"], ["Devices monitored","2,000"], ["Pilot duration","6 weeks"] ]
  }
];

const AISOL_TESTIMONIALS = [
  { rating: 5, quote: "AI-Solutions had a working prototype in front of our engineers in under three weeks. That speed changed how we plan pilots.", name: "Priya Nathan", role: "Head of IT Operations, NorthGrid Energy" },
  { rating: 5, quote: "The virtual assistant deflected more password-reset and access tickets in month one than our previous tooling did all year.", name: "Hana Yoshida", role: "IT Service Manager, Aozora Tech" },
  { rating: 4, quote: "Clear communication throughout, and the proactive alerts genuinely caught problems before our clinicians noticed anything was wrong.", name: "Liam O'Connor", role: "Head of Workplace Tech, Brightfield Health" },
  { rating: 5, quote: "What impressed us most was how affordable the prototyping phase was — we validated the idea before committing real budget.", name: "Marcus Ibe", role: "Digital Experience Lead, Harrow Financial" },
  { rating: 5, quote: "Battery failures used to be a daily fire drill. The predictive model gave our ops team a full shift's notice.", name: "Erik Lindqvist", role: "Director of IT, NordFrakt AB" },
  { rating: 4, quote: "A genuinely proactive approach — most vendors we spoke to were still thinking in terms of ticket queues, not prevention.", name: "Grace Muthoni", role: "Product Director, SavannaPay" }
];

const AISOL_ARTICLES = [
  { date: "2026-06-18", tag: "Perspective", title: "Why 'proactive' is the most overused word in IT — and how to actually earn it", excerpt: "Most platforms that call themselves proactive are still reactive with better dashboards. Here's the difference between alerting fast and preventing entirely." },
  { date: "2026-06-02", tag: "Field Notes", title: "What six weeks of prototyping taught us about warehouse device fleets", excerpt: "Notes from the NordFrakt pilot on predictive battery scoring, including the assumptions that turned out to be wrong." },
  { date: "2026-05-21", tag: "Company", title: "AI-Solutions is expanding beyond the UK — here's our thinking", excerpt: "Our mission has always been global. This month we're opening our first conversations with partners outside the UK." },
  { date: "2026-05-09", tag: "Perspective", title: "The digital employee experience gap nobody puts in the boardroom deck", excerpt: "Leadership sees uptime dashboards. Employees experience friction. The two rarely tell the same story — and that gap has a cost." },
  { date: "2026-04-27", tag: "Field Notes", title: "Designing a virtual assistant employees actually want to talk to", excerpt: "The early version of our assistant was technically accurate and universally ignored. Here's what changed." },
  { date: "2026-04-11", tag: "Company", title: "How we price prototyping so a good idea never dies in procurement", excerpt: "A look at the thinking behind affordable, fixed-scope prototyping engagements." }
];

const AISOL_EVENTS = [
  { day: "14", mon: "Jul", title: "Digital Workplace Summit — Manchester", desc: "Live demo of the proactive diagnostics engine, 11:30am on the Innovation Stage." },
  { day: "02", mon: "Aug", title: "Webinar: Prototyping AI Assistants on a Startup Budget", desc: "A practical, no-slides walkthrough with our engineering lead. Open Q&A." },
  { day: "19", mon: "Aug", title: "Sunderland Tech Meetup — Host & Sponsor", desc: "AI-Solutions hosts this month's meetup at our Sunderland HQ." },
  { day: "09", mon: "Sep", title: "Enterprise DEX Roundtable — London", desc: "Invite-only roundtable on the future of digital employee experience with IT leaders." }
];
