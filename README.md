# YOUR BRAND NAME

A complete Pinterest-inspired gifting brand storefront built with React, Vite, and Tailwind CSS.

## Features

- Responsive storefront homepage with elegant pink boutique styling
- Shop by category pages and product detail pages
- Functional cart with quantity updates, subtotal, shipping, coupon support, and local persistence
- Guest checkout and account/order history flow
- Contact page and admin dashboard mock-up with role protection
- Brand configuration file for easy updates

## Tech stack

- React + Vite
- Tailwind CSS
- React Router
- Lucide React
- LocalStorage for cart and demo state

## Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the development server
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal, typically http://localhost:5173

## Brand configuration

Edit the file `src/config/siteConfig.js` to change:

- brandName
- tagline
- Instagram handle
- WhatsApp number
- email
- address
- shipping fee
- free shipping threshold

## Development / test payment notes

This storefront is set up in development/test mode. It does not process live payments yet.

To enable real Razorpay payments, you would need:

- Razorpay API keys
- secure backend order creation
- signature verification on the server
- live payment confirmation before marking an order as paid

Never store secret keys in frontend code.

## Project structure

- `src/components` – shared storefront UI blocks
- `src/pages` – individual pages
- `src/context` – cart, wishlist, and auth state
- `src/data` – sample products and category data
- `src/config` – centralized branding config

## Notes

This storefront uses sample product data and placeholder brand details so you can replace them with your real final branding and product photography later.
