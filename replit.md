# Toninho Aqui Modas

## Overview
A Brazilian fashion e-commerce storefront built with React, Vite, and Tailwind CSS. The app features product browsing, cart functionality, and multiple pages (Home, Products, Product Detail, About, Stores, Contact).

## Recent Changes
- 2026-02-14: Imported from Lovable to Replit. Updated Vite config to serve on port 5000 with all hosts allowed. Removed lovable-tagger plugin.

## Project Architecture
- **Framework**: React 18 + TypeScript + Vite 5
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: react-router-dom v6
- **State**: React Context (CartContext) + TanStack React Query
- **Type**: Frontend-only (no backend server)

### Directory Structure
```
src/
  App.tsx              - Main app with routing
  main.tsx             - Entry point
  index.css            - Global styles
  assets/              - Static assets (hero-banner.jpg)
  components/          - App components (Header, Footer, CartDrawer, ProductCard, etc.)
  components/ui/       - shadcn/ui primitives
  contexts/            - CartContext for cart state
  data/                - Product data (products.ts)
  hooks/               - Custom hooks (use-toast, use-mobile)
  lib/                 - Utility functions
  pages/               - Route pages (HomePage, ProductsPage, ProductDetailPage, AboutPage, StoresPage, ContactPage)
```

### Key Pages
- `/` - Home page with hero banner, featured products
- `/produtos` - Products listing
- `/produto/:id` - Product detail
- `/sobre` - About page
- `/lojas` - Stores page
- `/contato` - Contact page

## User Preferences
- Portuguese (Brazilian) language for UI text
