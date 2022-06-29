import React from 'react';
import Image from 'next/image';

const ProductDetails = ({ product, image, index, price }) => {
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg mt-8 md:mt-40'>
      <div className='px-4 py-5 sm:px-6'>
        <div className='mx-auto my-20 w-80'>
          <Image
            src={image}
            width='370'
            height='244'
            layout='responsive'
            priority
            className='object-center object-cover group-hover:opacity-75'
            alt={product.fruit_name}
          />
        </div>
      </div>
      <div className='border-t border-gray-200'>
        <dl>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Fruit name</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {product.fruit_name}
            </dd>
          </div>
          <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>
              Scientific name
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {product.scientific_name}
            </dd>
          </div>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>Description</dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
              {product.description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ProductDetails;
