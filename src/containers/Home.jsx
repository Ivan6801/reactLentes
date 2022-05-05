import React from 'react';
import Products from '../components/Products';
import initialState from '../data/initialState';

function Home() {
  return <Products products={initialState.products} />;
}

export default Home;
