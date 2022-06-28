import Image from 'next/image';
import Head from 'next/head';
import { useCart } from 'react-use-cart';
import products from '../utils/data.js';

const Cart = () => {
  const { updateItemQuantity, items, cartTotal } = useCart();
  console.log(items);
  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta property='og:title' content='Cart' key='title' />
      </Head>
      <div>
        {' '}
        {items.map((product) => (
          <div key={product.id} className=''>
            <div className=''>
              <div className=''>
                <Image
                  src={product.image}
                  width='100'
                  height='100'
                  priority
                  className=''
                  alt={product.name}
                />
              </div>
              <div className=''>
                <div className=''>
                  <p className=''>{product.name}</p>
                  <p className=''>
                    {product.quantity} x ${product.price}
                  </p>
                </div>
                <div className='card-body py-0 btn-group float-end'>
                  <button
                    onClick={() =>
                      updateItemQuantity(product.id, product.quantity - 1)
                    }
                    className='btn btn-danger btn-sm rounded-pill me-3'
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
                        d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      updateItemQuantity(product.id, product.quantity + 1)
                    }
                    className='btn btn-primary btn-sm rounded-pill'
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
                        d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>{' '}
            <hr className='my-0 py-0' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
