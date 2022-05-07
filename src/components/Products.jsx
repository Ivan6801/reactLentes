import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';
import '../styles/components/Products.scss';

function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className="Products">
        <div className="Products-items">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <br />
    </>
  );
}

export default Products;
