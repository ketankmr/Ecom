import React from 'react';

function Product(props) {
  return (
    <div className="product">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <p> {props.id}</p>
    </div>
  );
}

export default Product;
