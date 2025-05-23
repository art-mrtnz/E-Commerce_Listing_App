import React from "react";
import ProductItem from "./ProductItem"; // <-- Add this line

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;