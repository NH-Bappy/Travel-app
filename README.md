# 🏕️ Hilink - Modern Travel & Camping Web Application

Welcome to **Hilink**, a modern, responsive, and visual-rich travel and camping web application built to help outdoor enthusiasts explore campgrounds, plan adventures, and navigate wilderness trails.

---

## 📌 Table of Contents
- [About The Project](#-about-the-project)
- [Core Technologies & Frameworks](#-core-technologies--frameworks)
- [How The System Works (Architecture)](#-how-the-system-works-architecture)
- [Key Features](#-key-features)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)

---

## 🌲 About The Project

Hilink is designed to serve as a comprehensive landing and discovery platform for campers and hikers. It provides an intuitive interface showcasing top camping destinations, trail guides, offline navigation highlights, and mobile app download features.

---

## ⚡ Core Technologies & Frameworks

This project leverages modern web development standards and bleeding-edge frontend libraries:

### **1. Core Framework & Library**
* **[Next.js 16 (App Router)](https://nextjs.org/)** – Next-generation React framework providing server-side rendering, optimized page routing (`app/` directory), file-based routing, and built-in image optimization (`next/image`).
* **[React 19](https://react.dev/)** – The core UI library powering modular, declarative component architecture.

### **2. Language**
* **[TypeScript](https://www.typescriptlang.org/)** – End-to-end type safety ensuring robust component interfaces, type-checked constants, and clean developer experience.

### **3. Styling & UI**
* **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first CSS framework for fast, custom, and fully responsive layouts across mobile, tablet, and desktop viewports.
* **[PostCSS `@tailwindcss/postcss`](https://postcss.org/)** – Tool for transforming styles with JS plugins.

### **4. Motion & Icons**
* **[Framer Motion](https://www.framer.com/motion/)** – Animation engine for fluid UI transitions and interactive visual effects.
* **[React Icons](https://react-icons.github.io/react-icons/)** – Comprehensive icon library integration.

---

## ⚙️ How The System Works (Architecture)

The system is structured modularly following Next.js App Router best practices:

```
                  ┌───────────────────────────────┐
                  │    app/layout.tsx (Root)      │
                  │ ┌───────────────────────────┐ │
                  │ │    components/Navbar      │ │
                  │ ├───────────────────────────┤ │
                  │ │    app/page.tsx (Home)    │ │
                  │ │   - Hero                  │ │
                  │ │   - Camp (CampSite)       │ │
                  │ │   - Guide                 │ │
                  │ │   - Features (FeatureItems)││
                  │ │   - GetApp                │ │
                  │ ├───────────────────────────┤ │
                  │ │    components/Footer      │ │
                  │ └───────────────────────────┘ │
                  └───────────────────────────────┘
```

### 1. **Layout & Global Wrapper (`app/layout.tsx`)**
* Wraps all pages in a unified structure containing the global header (`<Navbar />`) and global footer (`<Footer />`).
* Configures metadata (Title, Description) and imports global CSS variables and font styles (`globals.css`).

### 2. **Home Landing Page (`app/page.tsx`)**
* Assembles all primary landing page sections sequentially:
  * **Hero Section (`Hero.tsx`)**: Main headline, star ratings, quick action buttons, and live location info card (elevation, distance).
  * **Camp Showcase (`Camp.tsx` & `CampSite.tsx`)**: Horizontal scrollable gallery displaying featured campgrounds, participant stats, and inspirational callouts.
  * **Guide Section (`Guide.tsx`)**: Step-by-step guidance card overlaying trail map assets.
  * **Features Section (`Features.tsx` & `FeatureItems.tsx`)**: Highlights offline maps, schedule planning, AR technology, and new location updates.
  * **Get App CTA (`GetApp.tsx`)**: Call-to-action inviting users to download the mobile application on iOS and Android.

### 3. **Authentication Route (`app/login/page.tsx`)**
* Dedicated login route allowing users to authenticate into the platform with stateful form inputs.

### 4. **Centralized Data Management (`constants/index.ts`)**
* Keeps navigation links, camp details, feature listings, and footer links organized in strongly-typed constant arrays. Separates content data from visual component code for scalability and easy content updates.

---

## ✨ Key Features

- 📱 **Fully Responsive Layout**: Built with mobile-first breakpoints matching mobile, tablet, and desktop displays.
- 🍔 **Mobile Drawer Menu**: Smooth toggling dropdown navigation on smaller viewports.
- 🏕️ **Horizontal Drag/Scroll Camp Cards**: Scrollable showcase of featured wilderness campsites.
- 🗺️ **Feature Highlights**: Presenting Offline Maps, AR trail guides, and scheduling tools.
- 🔐 **Login Page UI**: Dedicated authentication layout.
- 🚀 **Next.js Image Optimization**: Automatic lazy loading and WebP/AVIF formatting with `next/image`.

---

## 📁 Folder Structure

```
travel_app/
├── app/                  # Next.js App Router routes & layouts
│   ├── favicon.ico
│   ├── globals.css       # Global styles & Tailwind CSS imports
│   ├── layout.tsx        # Root layout (Navbar, Footer, Providers)
│   ├── page.tsx          # Main Home page component
│   └── login/
│       └── page.tsx      # Login route page
├── components/           # Reusable React UI components
│   ├── Button.tsx        # Dynamic button component
│   ├── Camp.tsx          # Campsite section wrapper
│   ├── CampSite.tsx      # Individual camp card component
│   ├── Features.tsx      # Features grid section
│   ├── FeatureItems.tsx  # Feature item card
│   ├── Footer.tsx        # Site footer component
│   ├── FooterColumn.tsx  # Helper subcomponent for footer links
│   ├── GetApp.tsx        # Mobile app promotional CTA section
│   ├── Guide.tsx         # Wilderness guide section
│   ├── Hero.tsx          # Hero banner section
│   └── Navbar.tsx        # Sticky header navigation bar
├── constants/
│   └── index.ts          # Centralized data (Navigation, Features, Footer links)
├── public/               # Static assets (Images, SVG icons, background patterns)
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration for Tailwind CSS
├── tsconfig.json         # TypeScript compiler configuration
└── package.json          # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18.x or higher recommended) and npm/yarn/pnpm installed on your machine.

### Installation

1. **Clone or Navigate to the Repository**
   ```bash
   cd travel_app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🛠️ Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Starts the development server using Turbopack |
| `build` | `npm run build` | Compiles and builds the production bundle |
| `start` | `npm run start` | Runs the built production server |
| `lint` | `npm run lint` | Runs Next.js ESLint checks |

---
