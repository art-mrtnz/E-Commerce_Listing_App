import { useState } from "react";
import ProductList from "./ProductList";
import './index.css';

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High quality wireless headphones with noise cancellation.",
    category: "Electronics",
    image: "/wireless_headphones.jpg"
  },
{
    id: 2,
    name: "Classic Sneakers",
    price: 59.99,
    description: "Comfortable and stylish sneakers for everyday wear.",
    category: "Clothing",
    image: "/classic_shoe.jpg"
},
  {
    id: 3,
    name: "Coffee Maker",
    price: 39.99,
    description: "Brew perfect coffee at home with this easy-to-use coffee maker.",
    category: "Home Appliances",
    image: "/coffee_maker.jpg"
  },
  {
    id: 4,
    name: "Graphic T-Shirt",
    price: 19.99,
    description: "Trendy t-shirt with unique graphic designs.",
    category: "Clothing",
    image: "/graphic_shirt.jpg"
  },
  {
    id: 5,
    name: "Smartphone",
    price: 499.99,
    description: "Latest generation smartphone with powerful features.",
    category: "Electronics",
    image: "/smart_phone.jpg"
  },
  {
    id: 6,
    name: "Blender",
    price: 29.99,
    description: "Blend your favorite smoothies and shakes easily.",
    category: "Home Appliances",
    image: "/blender.jpg"
  }
];


function App() {
  const [products] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from products
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  // Filter products by category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="app-container">
      <h1 className="app-title">E-Commerce Product Listing</h1>
      <div className="filter-section">
        <label htmlFor="categoryFilter">Filter by Category: </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;