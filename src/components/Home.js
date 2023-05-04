import React from 'react';
import Product from './Product';
import productData from '../productData';

function Home() {
  const productComponents = productData.map((prod) => (
    <Product key={prod.id} name={prod.name} image={prod.image} id = {prod.id} />
  ));


  return (
    <div>
      <h1>Ecom</h1>
      <div className="products">{productComponents}</div>
    </div>
  );
}

export default Home;
