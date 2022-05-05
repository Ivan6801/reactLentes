import React from 'react';

function Product({ product, handleAddToCart }) {
  return (
    <div className="Products-item">
      <img width={150} src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>
          {product.title}
          <span> $ {product.price}</span>
        </h2>
          <p>{product.description}</p>
        <button type="button" onClick={handleAddToCart(product)}>
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Product;
