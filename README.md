# 🛋️ Furniture Mini-Mart

A modern, high-performance E-commerce web application for furniture, built with **Next.js 14**, **Tailwind CSS**, and **TanStack Query**.

---

## 🚀 Features

* **Responsive Hero Section:** Eye-catching banner with floating info cards.
* **Dynamic Product Listing:** Fetches data from local JSON using TanStack Query with built-in caching and skeleton loaders.
* **Detailed Product Pages:** Dynamic routing (`/products/[slug]`) to showcase full product specifications and ratings.
* **Functional Shopping Cart:** Global state management using Context API for adding, removing, and updating quantities.
* **Validated Checkout:** Secure checkout form with real-time validation via React Hook Form.
* **Toast Notifications:** Instant feedback for user actions (Add to cart, Login, Order success) using React Hot Toast.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** | Framework (App Router & Optimized Images) |
| **TanStack Query** | Data fetching, caching, and state sync |
| **Tailwind CSS** | Responsive and modern UI styling |
| **Lucide React** | Clean and consistent iconography |
| **React Hook Form** | Efficient form handling and validation |
| **React Hot Toast** | Beautiful popup notifications |

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── (withCommonLayout)/
│   │   ├── products/
│   │   │   ├── [slug]/       # Product Details Page
│   │   │   └── page.jsx      # Product Listing Page
│   │   ├── cart/             # Shopping Cart Page
│   │   ├── checkout/         # Checkout Page
│   │   └── page.jsx          # Home Page (Hero + Featured)
│   └── layout.jsx            # Global Providers & Toaster
├── components/
│   ├── shared/               # Container & Global Components
│   └── _component/           # Feature-specific components (Cards, Banner)
├── context/
│   └── CartContext.jsx       # Global Cart State Logic
└── public/
    └── products.json         # Product Database

```
## ⚙️ Installation & Setup

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/furniture-mini-mart.git](https://github.com/your-username/furniture-mini-mart.git)

```
### 2 Navigate to the Project Directory
```bash

cd furniture-mini-mart

```
### 3 Install Dependencies

```bash

# Using npm
npm install @tanstack/react-query react-hook-form react-hot-toast lucide-react

# OR using yarn
# yarn add @tanstack/react-query react-hook-form react-hot-toast lucide-react

```

### 4 Run the Development Server

```bash

npm run dev

```