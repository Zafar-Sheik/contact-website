# AI Editor Rules and Project Guidelines

This document outlines the core technologies and conventions used in this Next.js application to ensure consistency, maintainability, and adherence to best practices.

## 1. Core Tech Stack

The application is built upon the following technologies:

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (used for all styling, including custom utility classes in `app/globals.css`)
*   **Animation:** `framer-motion` for all complex UI transitions and scroll effects.
*   **Icons:** `lucide-react`
*   **UI Library:** Shadcn/ui (preferred for standard components, though custom components are also used).
*   **Server Logic:** Next.js Route Handlers (`app/api/`) for backend tasks like email processing.
*   **Email Service:** `nodemailer` (used within Route Handlers).

## 2. Library Usage Rules

To maintain a clean and efficient codebase, please adhere to the following rules when introducing new features or components:

| Feature | Preferred Library / Tool | Notes |
| :--- | :--- | :--- |
| **Styling** | Tailwind CSS | Use Tailwind classes exclusively. Ensure designs are responsive by default. |
| **UI Components** | Shadcn/ui | Use pre-built Shadcn components where applicable. If customization is extensive, create a new component in `app/components/`. |
| **Animations** | `framer-motion` | Use for all interactive and scroll-based animations. |
| **Icons** | `lucide-react` | All icons must be sourced from this package. |
| **Routing** | Next.js Link / App Router | Use `next/link` for navigation and adhere to the `app/` directory structure for pages. |
| **API/Server Logic** | Next.js Route Handlers | Use `app/api/route.ts` for any server-side functionality (e.g., form submissions). |
| **Component Structure** | Small, focused files | Every new component or hook must reside in its own file within `app/components/`. |