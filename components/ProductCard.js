import React from 'react';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.price}</div>
    </div>
  );
};

export default ProductCard;
