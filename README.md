# 🏕️ Hilink - Complete Multi-Page Travel & Wilderness Camping Platform

Welcome to **Hilink**, a full-scale, modern travel and wilderness camping web application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

Originally a single-page landing site, Hilink has been expanded into a **complete multi-page travel platform** featuring interactive destination discovery, dynamic campsite reservation pages, guided expedition itineraries, service deep-dives, membership pricing matrixes, company sustainability background, contact inquiry workflows, and full user authentication.

---

## 📌 Table of Contents
- [Newly Added Pages & Features](#-newly-added-pages--features)
- [Design System & Dark/Light Mode Styling](#-design-system--darklight-mode-styling)
- [Architecture & Data Flow](#-architecture--data-flow)
- [Technologies & Libraries Used](#-technologies--libraries-used)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Scripts & Production Build](#-scripts--production-build)

---

## 🚀 Newly Added Pages & Features

The platform now features **8 dedicated pages & dynamic sub-routes**, built with full interactive state and responsive design:

### 1. 🏞️ **Destinations Catalog (`app/destinations/page.tsx`)**
- **Category Filtering**: Filter campgrounds across 4 terrain types (*Mountain*, *Forest*, *Lake*, *Desert*) plus an *All* view.
- **Difficulty Selector**: Filter by hiking difficulty level (*Easy*, *Moderate*, *Challenging*, *Advanced*).
- **Real-Time Search Bar**: Live query matching across campsite titles, region names, and descriptions.
- **Item Count & Badges**: Live count of matching destinations, elevation stats (e.g., *2,040 m*), hiking time, star ratings, price per night, and key amenities.
- **Interactive Card CTA**: Direct link to dynamic campsite details pages.

### 2. 📍 **Dynamic Campsite Details (`app/destinations/[id]/page.tsx`)**
- **Next.js 16 Dynamic Segment**: Routes dynamically to any destination ID (`/destinations/putuk-truno`, `/destinations/emerald-lake`, `/destinations/aguas-calientes`, etc.).
- **Header & Stats Bar**: Full-width cover imagery with elevation, hike duration, rating score, and best season badges.
- **Interactive Booking Widget**:
  - Check-in date picker.
  - Camper count selector (1 Camper, 2 Campers, 4 Family Site, 6 Group Site).
  - Add-on checkbox for ultralight tent & sleeping bag rental (+$35).
  - Automatic total price calculation.
  - State-driven booking confirmation modal with instant feedback.
- **Wilderness Guidelines**: Detailed overview, included amenities list, and Leave-No-Trace rules.

### 3. 🧗 **Guided Tours & Packages (`app/tours/page.tsx`)**
- **Expedition Packages**: Multi-day guided treks (e.g., *3-Day Truno Alpine Summit Hike*, *5-Day Machu Picchu Cloud Ridge*, *Weekend Emerald Lake Kayak & Camp*, *7-Day Extreme Glacier Survival*).
- **Day-by-Day Itinerary Modal**: Interactive timeline popup breaking down daily routes, checkpoints, and activities.
- **Inclusions & Difficulty**: Displays certified guide credentials, meals, porters, safety equipment, and max group sizes.
- **Instant Expedition Booking**: State-managed reservation confirmation inside the itinerary modal.

### 4. ⚙️ **Services & Technology Overview (`app/services/page.tsx`)**
- **Interactive Service Explorer**: Switch seamlessly between 6 core outdoor services:
  1. *3D AR Offline Maps* (Patented LiDAR terrain technology).
  2. *Certified Outdoor Guides* (Background-checked wilderness leaders).
  3. *Smart Gear Rental Network* (Sanitized ultralight equipment delivery).
  4. *24/7 Satellite SOS Beacon* (Global emergency search & rescue relay).
  5. *AI Adventure Planner* (Micro-climate weather and energy calculations).
  6. *Global Climbers Community* (Crowd-sourced trail logs and real-time hazard reports).
- **Detail Showcase Card**: Interactive card updating live with full descriptions, key capability lists, and upgrade CTAs.

### 5. 💳 **Pricing & Membership Plans (`app/pricing/page.tsx`)**
- **Monthly / Annual Billing Toggle**: Dynamic price calculations with a highlighted **Save 25%** badge for annual billing.
- **Tiered Membership Cards**:
  - *Explorer Free* ($0/mo) - Basic offline 2D maps and community access.
  - *Pro Hiker* ($19/mo or $14/mo billed annually) - Unlimited 3D AR maps, turn-by-turn audio, satellite tracking, 15% gear rental discount. *(Most Popular)*
  - *Expedition Elite* ($49/mo or $39/mo billed annually) - 24/7 Satellite SOS guarantee, guide consultations, 25% discounts.
- **Feature Comparison Matrix**: Table comparing map limits, live GPS lock, SOS priority, gear discounts, and guide consultations.
- **Expandable FAQ Accordion**: Interactive Q&A accordion addressing common billing, safety, and map download questions.

### 6. 🌲 **About Us & Sustainability (`app/about/page.tsx`)**
- **Impact Stat Counters**:
  - *120K+* Trails Mapped
  - *45K+* Guided Treks
  - *100%* Carbon Neutral Operations
  - *4.9★* Community Rating
- **Sustainability Charter**: Details 1% For The Planet contributions, leave-no-trace ethics, and national park trail restoration.
- **Leadership Team Grid**: Profiles of Hilink founders, GIS engineers, and wilderness rescue leaders.

### 7. 📞 **Contact & 24/7 Emergency Support (`app/contact/page.tsx`)**
- **Interactive Inquiry Form**: Category selector, trip departure urgency flag, message validation, and state-driven submission confirmation.
- **Satellite Emergency SOS Banner**: Pulsing 24/7 hotline banner for active field search & rescue dispatch.
- **Global Basecamp Offices**: Addresses and contact details for North America HQ (Boulder, CO), European Alpine Hub (Chamonix, France), and Asia-Pacific Trail Center (Pasuruan, Indonesia).

### 8. 🔐 **User Authentication (`app/register/page.tsx` & `app/login/page.tsx`)**
- **Sign Up / Register**: Account creation form with outdoor experience level selector (*Beginner Day Hiker*, *Intermediate Backpacker*, *Advanced Mountaineer*), terms agreement, social auth buttons (Apple ID, Google), and instant success activation state.
- **Sign In / Login**: Redesigned login view featuring brand logo, password recovery, social login options, and redirection to `/destinations`.

---

## 🎨 Design System & Dark/Light Mode Styling

The application includes a **dual-theme design system** supporting crisp light mode and high-contrast dark mode across all pages and components:

### **Light Mode Aesthetics**
- **Page Container**: Soft gradient `bg-gradient-to-b from-gray-50 to-white`.
- **Cards & Inputs**: Clean white backgrounds (`bg-white`), subtle borders (`border-gray-100` / `border-gray-200`), and soft drop shadows (`shadow-xl` / `shadow-lg`).
- **Typography**: Dark charcoal headings (`text-gray-900`) and slate body text (`text-gray-700` / `text-gray-600`).
- **Primary Color Accents**: Deep emerald green (`#30AF5B` / `emerald-600` / `emerald-700`) and teal gradients (`from-emerald-950 via-teal-900 to-emerald-900`).

### **Dark Mode Aesthetics**
- **Page Container**: Deep dark background `dark:bg-zinc-950` / `dark:from-zinc-950 dark:to-zinc-900`.
- **Cards & Inputs**: Dark zinc containers (`dark:bg-zinc-900`), dark borders (`dark:border-gray-800`), and dark input fields (`dark:bg-zinc-800`).
- **Typography**: Crisp white titles (`dark:text-white`) and light gray body text (`dark:text-gray-300`).
- **Navigation & Footer**: Semi-transparent dark backdrops (`dark:bg-zinc-950/90`), inverted social icon badges (`dark:invert`), and clean logo containers (`dark:bg-white`).

---

## ⚙️ Architecture & Data Flow

```
                        ┌──────────────────────────────────────────────┐
                        │             app/layout.tsx (Root)            │
                        │ ┌──────────────────────────────────────────┐ │
                        │ │          components/Navbar.tsx           │ │
                        │ │  (Active Link Detection via usePathname) │ │
                        │ ├──────────────────────────────────────────┤ │
                        │ │             PAGE ROUTING                 │ │
                        │ │  - /                   (Home Landing)    │ │
                        │ │  - /destinations       (Filter Catalog)  │ │
                        │ │  - /destinations/[id]  (Dynamic Details) │ │
                        │ │  - /tours              (Guided Expeditions)│
                        │ │  - /services           (Tech Breakdown)  │ │
                        │ │  - /pricing            (Plans & Matrix)  │ │
                        │ │  - /about              (Story & Team)    │ │
                        │ │  - /contact            (Form & SOS)      │ │
                        │ │  - /register & /login  (Authentication)  │ │
                        │ ├──────────────────────────────────────────┤ │
                        │ │          components/Footer.tsx           │ │
                        │ └──────────────────────────────────────────┘ │
                        └──────────────────────────────────────────────┘
```

### **1. Centralized Data Architecture (`constants/index.ts`)**
Static datasets are separated from UI logic and strongly typed with TypeScript interfaces:
- `DESTINATIONS`: Full campsite list with elevation, price, rating, season, and features.
- `TOURS`: Expedition packages with day-by-day itineraries and inclusions.
- `SERVICES_LIST`: Hilink outdoor technology breakdown and benefit arrays.
- `PRICING_PLANS`: Tiered subscription plans with monthly/annual pricing.
- `TEAM_MEMBERS`: Leadership profiles.
- `FAQS`: Accordion question and answer pairs.

### **2. Active Navigation & Routing**
- **`Navbar.tsx`**: Uses `usePathname()` to detect active route segments and highlight desktop links and mobile drawer items.
- **`Footer.tsx`**: Connects footer links directly to internal Next.js routes.

### **3. Asynchronous Dynamic Route Resolution**
- **`app/destinations/[id]/page.tsx`**: Resolves asynchronous route parameters using React 19 `use(params)`.

---

## ⚡ Technologies & Libraries Used

| Technology / Library | Version | Purpose & Usage |
| :--- | :--- | :--- |
| **Next.js** | `^16.1.6` | Next-gen React framework for App Router, dynamic routes (`[id]`), and image optimization (`next/image`). |
| **React** | `^19.0.0` | Core declarative UI library using hooks (`useState`, `useMemo`, `use()`). |
| **TypeScript** | `^5.0.0` | Strongly typed interfaces, props definitions, and compile-time verification. |
| **Tailwind CSS** | `^4.0.0` | Utility-first CSS framework for custom responsive design and dark mode styling. |
| **PostCSS `@tailwindcss/postcss`** | `^4.0.0` | PostCSS processing engine for Tailwind v4. |
| **Framer Motion** | `^12.34.3` | Fluid UI transitions, drawer states, and interactive animations. |
| **React Icons** | `^5.5.0` | Vector icon integration. |
| **`@tailwindcss/oxide-linux-x64-gnu`** | `latest` | Native Linux binary engine for Tailwind CSS v4. |

---

## 📁 Folder Structure

```
travel_app/
├── app/                      # Next.js App Router pages & layouts
│   ├── favicon.ico
│   ├── globals.css           # Tailwind CSS imports & root CSS variables
│   ├── layout.tsx            # Root layout (Navbar, Footer, metadata)
│   ├── page.tsx              # Main Home landing page
│   ├── destinations/         # Destinations page & dynamic subroute
│   │   ├── page.tsx          # Campsite catalog with search & category filters
│   │   └── [id]/
│   │       └── page.tsx      # Dynamic campsite detail page with booking widget
│   ├── tours/
│   │   └── page.tsx          # Guided tours & day-by-day itinerary modal
│   ├── services/
│   │   └── page.tsx          # Technology breakdown & 6 core outdoor services
│   ├── pricing/
│   │   └── page.tsx          # Subscription plans, monthly/annual toggle & FAQs
│   ├── about/
│   │   └── page.tsx          # Mission, impact stats & leadership team grid
│   ├── contact/
│   │   └── page.tsx          # Inquiry form & 24/7 Satellite SOS hotline
│   ├── login/
│   │   └── page.tsx          # Authentication login page
│   └── register/
│       └── page.tsx          # User sign-up & experience level registration
├── components/               # Reusable UI components
│   ├── Button.tsx            # Reusable button component
│   ├── Camp.tsx              # Home campsite showcase section
│   ├── CampSite.tsx          # Individual camp card component
│   ├── Features.tsx          # Home features section
│   ├── FeatureItems.tsx      # Feature item card
│   ├── Footer.tsx            # Global footer component with dark mode support
│   ├── FooterColumn.tsx      # Footer column helper component
│   ├── GetApp.tsx            # Mobile app download CTA
│   ├── Guide.tsx             # Wilderness guide section
│   ├── Hero.tsx              # Home hero banner
│   └── Navbar.tsx            # Sticky header navigation bar with active route hooks
├── constants/
│   └── index.ts              # Strongly typed datasets (Destinations, Tours, Services, FAQs)
├── public/                   # Static assets (PNG images, SVG icons, background patterns)
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration for Tailwind CSS v4
├── tsconfig.json             # TypeScript compiler settings
└── package.json              # Project dependencies & npm scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or higher recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone & Navigate to Repository**
   ```bash
   cd travel_app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Local Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Web Browser**
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Scripts & Production Build

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Starts local development server with Turbopack |
| `build` | `npm run build` | Compiles production bundle for all 12 static and dynamic routes |
| `start` | `npm run start` | Launches built production server |
| `lint` | `npm run lint` | Evaluates codebase for ESLint standards |

All 12 static and dynamic routes have been compiled and verified with `npm run build`:
```text
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /about
├ ○ /contact
├ ○ /destinations
├ ƒ /destinations/[id]
├ ○ /login
├ ○ /pricing
├ ○ /register
├ ○ /services
└ ○ /tours
```
