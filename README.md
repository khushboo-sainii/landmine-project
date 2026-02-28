<div align="center">
  <img src="https://raw.githubusercontent.com/khushboo-sainii/landmine-project/main/public/favicon.ico" alt="Next.js Logo" width="80" height="80">
  <br/>
  <h1>🚀 Landmine Website</h1>
  <p><strong>A modern, premium corporate web application built with Next.js 16, React 19, and Tailwind CSS v4.</strong></p>
</div>

---

## ✨ Overview

Welcome to the **Landmine** project repository! This application is designed to deliver a visually stunning, high-performance experience with immersive UI components, responsive layouts, and seamless animations. 

We utilize a robust stack consisting of **Next.js (App Router)** for optimized routing, **React 19** for state-of-the-art UI rendering, and **Tailwind CSS 4** combined with **Framer Motion** for sleek, glassmorphic designs and micro-animations.

---

## 🗺️ Page Architecture & Features

The website contains beautifully structured pages offering engaging and dynamic content across different routes.

### 🏠 Home (`/home`)
The landing page focuses on creating a striking first impression. 
- **Hero Section:** Ambient gradient backgrounds with a strong value proposition and call-to-actions.
- **Service Highlights:** Animated cards displaying core offerings (`ServiceCard` component) that feature smooth hover expansions.
- **Featured Work:** A grid system previewing top case studies and technical outcomes.
- **Social Proof:** Dedicated testimonials & statistics sections utilizing custom bento grids.

### 📖 About Us (`/about`)
A deep dive into the company’s foundation, culture, and people.
- **Mission & Vision:** Detailed principles structured in elevated, floating cards.
- **Team Leadership:** Interactive layout showcasing the minds behind the project.
- **Culture & Differentiators:** Animated bento boxes portraying "Life at Landmine" and what sets the company apart from competitors.

### 🛠️ Services (`/services`)
A comprehensive catalog of standard offerings.
- **Deliverables Breakdown:** Step-by-step insight into technology stacks and precise deliverables for each service.
- **Industry Solutions:** Specific sections highlighting adaptability across different sectors.
- **Tech Stack Grid:** Clear visual representation of the technologies mastered by the team.

### 💼 Careers (`/careers`)
A portal for growth and hiring, built to attract top talent.
- **Dynamic Marquee:** Continuous moving banners displaying required skills and technologies.
- **Hiring Process Pipeline:** Step-by-step roadmap showing the interview stages.
- **Open Roles Filtering:** Interactive layout to filter currently open positions by department (e.g., Engineering, Design, Internships).

### 📞 Contact (`/contact`)
An accessible hub for communication and client inquiries.
- **Interactive Form:** Comprehensive inquiry form covering project details, budget, and sources. Includes animated success states upon submission.
- **Response Times:** Clear, transparent breakdown of expected response times per channel.
- **Expandable FAQ:** Accordion-style Frequently Asked Questions section to provide immediate answers.

### 💼 Work (`/work`)
A dynamic showcase of case studies and impactful digital solutions.
- **mmersive Hero Section:** Visually engaging hero with blurred background imagery, layered gradient overlay, and animated headline introducing the portfolio experience.
- **Technology Badges:** Clearly structured stack indicators for each project, emphasizing tools and frameworks used in delivery.
- **Outcome-Focused Insights:** Concise result statements to demonstrate real-world impact and business transformation.

### 📜 Terms & Conditions (`/terms`)
A structured legal framework outlining platform policies, service governance, and user responsibilities.
- **Usage & Intellectual Property:** Clearly defines website usage rules, ownership of content, licensing terms, and restrictions on redistribution or misuse of materials.
- **Client Services & Agreements:** Establishes the relationship between the company and clients, covering project scope, deliverables, timelines, and contractual precedence such as SLA or MSA.
- **Legal Disclaimer & Liability:** Details limitations of liability, warranty exclusions, compliance with applicable laws, and protection clauses governing platform usage.

### 🔐 Privacy Policy (`/privacy`)
A transparent overview of how user data is collected, processed, and protected across the platform.
- **Data Collection & Usage:** Clearly outlines the types of personal and technical information collected (contact details, inquiries, log data), along with how it is used to operate services, improve user experience, and communicate effectively.
- **Security & Compliance:** Defines data protection practices, security measures, legal compliance standards, and policy update procedures to ensure responsible handling of user information.

### 🔐 Authentication (`/login` & `/signup`)
A grouped route structure dedicated to secure onboarding and session management through localized, specific layouts.

---

## ⚙️ Tech Stack & Tooling

| Category | Technology | Description |
|---|---|---|
| **Framework** | ⚡ [Next.js 16](https://nextjs.org/) | App Router architecture with localized layouts. |
| **Library** | ⚛️ [React 19](https://react.dev/) | Utilizing the latest concurrent features. |
| **Styling** | 🎨 [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework natively optimized via PostCSS. |
| **Animations** | 🪄 [Framer Motion](https://www.framer.com/motion/) | Production-ready React animation library for micro-interactions. |
| **Icons** | ❇️ [Lucide React](https://lucide.dev/) | Clean, customizable SVG icons. |
| **Language** | 📘 TypeScript | Strict, robust type-checking for predictable behavior. |

---

## 🚀 Getting Started

To run this project locally, simply follow these steps:

1. **Install Dependencies:**
   ```bash
   npm install
   
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
  
   ```

3. **View the Application:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The application will hot-reload as you make modifications to files within the `src/app` directory.

---

## 🎨 Component Design System
The `src/components/ui/` directory houses specialized, reusable components used heavily across pages to maintain design consistency:
- **`AnimateCard.tsx`** & **`TestiCard.tsx`**: High-fidelity cards with depth, shadows, and hover dynamics.
- **`SectionHeader.tsx`**: Consistent headers with branded gradient accents.
- **`StatsSection.tsx`**: Counter components for numerical highlights.
- **`TestiCard.tsx`**: Reusable component for testimonial highlights.

---

> *"Built to push boundaries. Designed to captivate."* — **Landmine Projects**
