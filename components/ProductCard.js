import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product, image, index }) => {
  return (
    <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
      <Image
        src={image}
        width='100'
        height='70'
        layout='responsive'
        priority
        className='w-full h-full object-center object-cover group-hover:opacity-75'
        alt={product.fruit_name}
      />

      <div className='flex flex-nowrap justify-between items-center p-4'>
        <h5 className='text-gray-700'>{product.fruit_name}</h5>
        <div className=''>€ {product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
