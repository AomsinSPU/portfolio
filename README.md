# Saral Nithisombatsakul (Aomsin) - Modern Developer Portfolio

A modern, high-performance, and data-driven personal portfolio website engineered for **Saral Nithisombatsakul (Aomsin)**, a Computer Science & Software Innovation student and Full-Stack Developer.

Built with **React 18 + Vite + TypeScript + Tailwind CSS + Lucide Icons + Framer Motion**.

---

## 🌟 Key Features

1. **Bilingual Localization (EN / TH)**:
   - Built-in multi-language toggle (`EN | TH`) with **English as Default** for global/international recruiters.
   - Smooth instant language switching that persists preferences in `localStorage`.
   - All content (Hero, About, Skills, Projects, Experience, Education, Form validation, and Footer) is fully translated.

2. **Dual Document Switcher (CV vs. Resume)**:
   - Recruiter can switch between:
     - **📄 Targeted Resume**: Concise 1-page summary tailored for Software / Full-Stack Developer roles.
     - **📑 Curriculum Vitae (CV)**: Comprehensive multi-page academic, research, and project breakdown.
   - Built-in browser preview modal with direct PDF download button linking to your real PDF resume (`public/assets/resume.pdf`).

3. **Modern Tech Design & Theming**:
   - **Dark Mode by default** with a clean **Light Mode** toggle.
   - Custom Cyber-Slate & Electric Cyan / Indigo aesthetic with subtle ambient glows.
   - Fluid typography using **Inter** and **JetBrains Mono**.
   - Zero generic template bloat, high visual hierarchy, and full compliance with `prefers-reduced-motion`.

4. **Deep-Dive Project Showcase**:
   - Filter tabs: `All`, `Full Stack`, `Backend & APIs`, `Systems & Management`.
   - **Featured Project Spotlight**: Large hero card showcasing the Warehouse Management System (WMS).
   - **Interactive Project Modal**: Displays Problem, Solution, Key Features, Tech Stack, Challenges, Key Learnings, and an interactive **System Architectural Pipeline Diagram** (Client UI → API Gateway → Server Core → Database Persistence).

5. **Interactive Experience & Education Timeline**:
   - Real practical experience: Part-Time Logistics Associate at Nitori, Freelance 3D Template & Asset Designer, and Corporate Data Entry Specialist at AIA Thailand.
   - Academic excellence: Sripatum University (B.Sc. Software Innovation, GPAX 3.82) & Siam Technological College (Vocational Certificate in Digital Graphics, GPAX 3.72).

6. **Verified Certificate Showcase**:
   - Certificate gallery with modal zoom previews, credential verification badges, and official links.

7. **Validated Contact Form**:
   - Input validation (Name, Email format regex, Subject, Message).
   - Dynamic loading spinner, error alerts, and a confetti celebration on dispatch.
   - Ready to bind to EmailJS, Formspree, or your custom backend API.

---

## 📂 Project Architecture & Folder Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── profile.jpg             # Real uploaded portrait photo
│   │   ├── resume.pdf              # Real PDF CV/Resume document
│   │   └── projects/               # High-res vector SVG illustrations
│   │       ├── wms-preview.svg
│   │       ├── court-preview.svg
│   │       ├── sports-preview.svg
│   │       ├── cert-fullstack.svg
│   │       ├── cert-dotnet.svg
│   │       ├── cert-db.svg
│   │       └── cert-graphics.svg
│   └── favicon.svg                 # Custom modern monogram favicon
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx           # Reusable button with variants & loading state
│   │   │   ├── Badge.tsx            # Category & status tags
│   │   │   ├── Card.tsx             # Interactive surface container
│   │   │   ├── SectionHeading.tsx   # Consistent section headers
│   │   │   ├── Modal.tsx            # Accessible modal dialog (ESC / backdrop dismiss)
│   │   │   ├── ArchitectureDiagram.tsx # Tiered 4-layer system flow diagram
│   │   │   ├── ThemeToggle.tsx      # Dark / Light mode switch
│   │   │   ├── LanguageToggle.tsx   # EN / TH language switch
│   │   │   └── SocialIcons.tsx      # Inline SVG GitHub & LinkedIn icons
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx           # Sticky blurred header with scrollspy
│   │   │   └── MobileMenu.tsx       # Slide-out drawer for mobile devices
│   │   ├── Hero/
│   │   │   └── Hero.tsx             # Main hero with portrait & floating pills
│   │   ├── About/
│   │   │   └── About.tsx            # Narrative, stats grid (GPAX 3.82), current focus
│   │   ├── Skills/
│   │   │   └── Skills.tsx           # Categorized skills with evidence-based descriptions
│   │   ├── Projects/
│   │   │   ├── Projects.tsx         # Featured spotlight & categorized project grid
│   │   │   └── ProjectDetailModal.tsx # Architectural modal deep-dive
│   │   ├── Experience/
│   │   │   └── Experience.tsx       # Vertical timeline of practical experience
│   │   ├── Education/
│   │   │   └── Education.tsx        # Academic degrees, coursework & honors
│   │   ├── Certificates/
│   │   │   └── Certificates.tsx     # Certificate gallery with zoom modal
│   │   ├── Resume/
│   │   │   ├── DocumentSection.tsx  # Dual CV vs. Resume switcher
│   │   │   └── DocumentViewerModal.tsx # In-browser document reader & downloader
│   │   ├── Contact/
│   │   │   └── Contact.tsx          # Direct contact info + validated form
│   │   └── Footer/
│   │       └── Footer.tsx           # Social links, sitemap & back-to-top button
│   ├── context/
│   │   ├── ThemeContext.tsx         # Dark / Light theme state & persistence
│   │   └── LanguageContext.tsx      # Bilingual EN / TH state & translation helpers
│   ├── data/
│   │   ├── portfolio.ts             # Global contact, socials, and document settings
│   │   ├── translations.ts          # Comprehensive EN & TH dictionary
│   │   ├── projects.ts              # Projects data, architecture tiers & problem/solution
│   │   ├── skills.ts                # Categorized technical arsenal
│   │   ├── experience.ts            # Work history & freelance achievements
│   │   ├── education.ts             # SPU & Siamtech academic curriculum
│   │   └── certificates.ts          # Credential IDs & verification items
│   ├── hooks/
│   │   ├── useScrollSpy.ts          # Section detection for navbar pills
│   │   └── useReducedMotion.ts      # Accessibility motion detection
│   ├── types/
│   │   └── index.ts                 # Strong TypeScript contracts & models
│   ├── App.tsx                      # Root application layout
│   ├── index.css                    # Tailwind imports & custom utilities
│   └── main.tsx                     # Entry point
├── index.html                       # SEO meta tags, title & font preconnects
├── package.json                     # Dependencies & scripts
├── tailwind.config.js               # Theme colors, glow effects & animations
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── .env.example
```

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js**: v18.x or higher (v24.x LTS recommended)
- **npm**: v9.x or higher

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to the localhost URL shown in the terminal (typically `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
This performs a full TypeScript check (`tsc -b`) and generates optimized production assets in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ✏️ How to Edit Portfolio Data (Data-Driven Architecture)

All website content is cleanly decoupled from the UI inside the `src/data/` directory:

| File | What to Edit |
| :--- | :--- |
| `src/data/portfolio.ts` | Change your name, email, phone number, LinkedIn/GitHub links, and resume filenames. |
| `src/data/translations.ts` | Modify English and Thai text for headers, bios, form labels, and section descriptions. |
| `src/data/projects.ts` | Add new projects, update screenshots, edit problems/solutions, or add live demo URLs. |
| `src/data/skills.ts` | Add new technologies, frameworks, or database systems to your skills arsenal. |
| `src/data/experience.ts` | Update job titles, companies, dates, or bulleted responsibilities. |
| `src/data/education.ts` | Update GPAX, coursework, or academic milestones. |
| `src/data/certificates.ts` | Add new certificates, credential IDs, and verification URLs. |
| `public/assets/profile.jpg` | Replace with a new portrait image if needed. |
| `public/assets/resume.pdf` | Replace with your latest PDF resume file. |

---

## 🚀 Deployment Instructions

### 1. Vercel (Recommended)
1. Push your repository to GitHub (`git push origin main`).
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Click **Deploy**.

### 2. Netlify
1. Drag and drop the `dist/` folder directly into the Netlify dashboard, or connect your Git repository.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

### 3. GitHub Pages
1. In `vite.config.ts`, add:
   ```ts
   base: '/repository-name/',
   ```
2. Build the project: `npm run build`.
3. Deploy the contents of `dist/` to the `gh-pages` branch using `gh-pages` package.

---

## 🛡️ License
Designed and developed for Saral Nithisombatsakul. All rights reserved.
