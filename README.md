````markdown
React Products Page - Phase 1

This project is a responsive product showcase application built using React.js, Tailwind CSS, and Vite.

The application displays a collection of tech products using reusable React components and responsive grid layouts.

Project Structure

React-Products-Page-Phase1/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Product.jsx
│   │   └── Products.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

Technologies Used

- React.js
- Tailwind CSS
- JavaScript (ES6)
- Vite

Application Architecture

App.jsx
   ↓
Products.jsx
   ↓
Product.jsx

App Component

The App component acts as the root component of the application.

Responsibilities:
- Displays application heading
- Creates page layout
- Renders Products component

Products Component

The Products component stores product data and dynamically renders all products using the map() method.

Features:
- Product array handling
- Dynamic rendering
- Responsive grid system
- Passing props to Product component

Product Rendering Logic

```jsx
{products.map((product) => (
  <Product key={product.productId} product={product} />
))}
````

Responsive Grid Layout

```jsx
<div className="max-w-7xl mx-auto grid gap-8 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4">
```

Product Component

The Product component displays individual product cards.

Features:

* Product image
* Product name
* Brand name
* Product description
* Product price
* Buy button
* Hover animations

Card Styling

```jsx
<div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
```

Tailwind CSS Features Used

* Grid Layout
* Flexbox
* Shadows
* Hover Effects
* Responsive Breakpoints
* Typography Utilities
* Spacing Utilities

Product Data Structure

```javascript
{
  productId: 1,
  name: "AirPods Pro",
  price: 249,
  brand: "Apple",
  description: "...",
  image: "https://picsum.photos/..."
}
```

Responsive Design

The application adapts to different screen sizes using Tailwind CSS breakpoints.

| Screen Size    | Columns   |
| -------------- | --------- |
| Small Devices  | 2 Columns |
| Medium Devices | 3 Columns |
| Large Devices  | 4 Columns |

How to Run the Project

```bash
npm install
npm run dev
```

Development Server

```text
http://localhost:5173
```

Application Workflow

1. App Component Loads
2. Products Component Receives Product Data
3. Products Render Dynamically Using map()
4. Product Cards Display on UI
5. Responsive Grid Adjusts Based on Screen Size

Concepts Covered

* Functional Components
* Props
* JSX
* Dynamic Rendering
* Responsive Design
* Tailwind CSS
* Component Reusability


```
```
