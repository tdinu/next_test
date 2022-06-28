import React from 'react';
import Head from 'next/head';
import { products } from '../../utils/data';
import Image from 'next/image';
import { useCart } from 'react-use-cart';
import styles from '../../styles/Products.module.css';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard.js';
// import products from '../../products.json';

/* const products = [
  { id: 0, name: 'Product 1', price: 10, description: 'desc 1' },
  { id: 1, name: 'Product 2', price: 20, description: 'desc 2' },
]; */

export const getStaticProps = async () => {
  const data = products;

  return {
    props: { products: data },
  };
};

const Products = ({ products }) => {
  // console.log(products);
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
      {products.map((product) => (
        <div className='' key={product.id}>
          <Link href={'/products/' + product.id}>
            <a className={styles.single}>
              {/*<ProductCard product={product} />*/}
              <div className=''>
                <div className=''>
                  <Image
                    src={product.image}
                    width='150'
                    height='150'
                    priority
                    className=''
                    alt={product.name}
                  />

                  <div className=''>
                    <h6 className=''>{product.name}</h6>
                    <div className=''></div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <div className=''>
            <button className=''>€ {product.price}</button>
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
  );
};

export default Products;
