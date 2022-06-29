import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { images } from '../../utils/images';
import { useCart } from 'react-use-cart';
import styles from '../../styles/Products.module.css';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard.js';

import { gql } from '@apollo/client';
import client from '../../apollo-client';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query allFruits {
        fruits {
          id
          scientific_name
          fruit_name
          description
          producing_countries {
            country
          }
        }
      }
    `,
  });
  const newFruits = data.fruits.slice(0, 8).map((element, i) => ({
    ...element,
    price: parseInt(i) + 1,
  }));
  return {
    props: {
      fruits: newFruits, // data.fruits.slice(0, 8),
    },
  };
}

const Products = ({ fruits }) => {
  const { addItem, inCart, removeItem } = useCart();
  return (
    <div>
      <Head>
        <title>Products</title>
        <meta property='og:title' content='Products' key='title' />
      </Head>
      <div className='grid'>
        <h1>Our Products</h1>{' '}
        <Link href={'/cart'}>
          <a>
            <h1>See Cart</h1>
          </a>
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {fruits.map((product, i) => (
          <div className='' key={product.id}>
            <Link href={'/products/' + product.id} className='group'>
              <a className={styles.single}>
                {/*<ProductCard product={product} />*/}
                <div className=''>
                  <div className='w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8'>
                    <Image
                      src={images[i]}
                      width='100'
                      height='70'
                      layout='responsive'
                      priority
                      className='w-full h-full object-center object-cover group-hover:opacity-75'
                      alt={product.fruit_name}
                    />

                    <div className=''>
                      <h6 className='mt-4 text-sm text-gray-700'>
                        {product.fruit_name}
                      </h6>
                      <div className=''>€ {product.price}</div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
            <div className='mx-8'>
              <button className='mt-1 mr-2 text-lg font-medium text-gray-900'>
                {product.origin}
              </button>
              {inCart(product.id) && (
                <button onClick={() => removeItem(product.id)} className=''>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </button>
              )}

              <button onClick={() => addItem(product)} className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
