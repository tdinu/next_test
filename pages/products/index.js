import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { images } from '../../utils/images';
import { useCart } from 'react-use-cart';
import styles from '../../styles/Products.module.css';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard.js';
import Cart from '../../components/Cart.js';

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
  const {
    addItem,
    inCart,
    removeItem,
    updateItemQuantity,
    totalUniqueItems,
    items,
  } = useCart();
  console.log('items::', items);
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <Head>
        <title>Products</title>
        <meta property='og:title' content='Products' key='title' />
      </Head>
      <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 w-9/12 mx-auto'>
        {fruits.map((product, i) => {
          const result = items.filter((item) => {
            return item.id == product.id;
          });
          const resultQ = result[0];
          const q = resultQ ? resultQ.quantity : '';
          return (
            <div className='' key={product.id}>
              <Link href={'/products/' + product.id} className='group'>
                <a className={styles.single}>
                  <ProductCard product={product} image={images[i]} index={i} />
                </a>
              </Link>
              <div className='flex justify-between mx-8'>
                <div className='flex items-center'>
                  {' '}
                  {inCart(product.id) && (
                    <>
                      <button
                        onClick={() => removeItem(product.id)}
                        className='mr-1'
                      >
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
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          />
                        </svg>
                      </button>
                      <span className='text-sm'>{q} in cart</span>
                    </>
                  )}
                </div>
                <div>
                  <button onClick={() => addItem(product)} className=''>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='blue'
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
