function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <div className="product-category">{product.category}</div>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ProductItem;