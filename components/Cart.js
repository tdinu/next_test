import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { images } from '../utils/images';

const Cart = () => {
  const { updateItemQuantity, items, cartTotal } = useCart();
  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta property='og:title' content='Cart' key='title' />
      </Head>
      <div className='w-9/12 mx-auto mt-8'>
        <div className='pointer-events-auto'>
          <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
            <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
              <div className='flex items-start justify-between'>
                <h2
                  className='text-lg font-medium text-gray-900'
                  id='slide-over-title'
                >
                  Shopping cart
                </h2>
              </div>{' '}
              <div className='mt-8'>
                <div className='flow-root'>
                  <ul role='list' className='-my-6 divide-y divide-gray-200'>
                    {items.length > 0 ? (
                      items.map((product) => (
                        <li key={product.id} className='flex py-6'>
                          <div className='flex'>
                            <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                              <Image
                                src={images[parseInt(product.id) - 1]}
                                width='100'
                                height='100'
                                layout='responsive'
                                priority
                                className=''
                                alt={product.fruit_name}
                              />
                            </div>
                            <div className='ml-4 flex flex-1 flex-col'>
                              <div className='px-4'>
                                <p className=''>{product.fruit_name}</p>
                                <p className=' py-2'>
                                  {product.quantity} x € {product.price}
                                </p>
                              </div>
                              
                              <div className='my-2 flex items-start content-start flex-wrap md:flex-nowrap'>
                              
                                <button
                                  onClick={() =>
                                    product.quantity > 0 &&
                                    updateItemQuantity(
                                      product.id,
                                      product.quantity - 1,
                                    )
                                  }
                                  className='ml-4'
                                >
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-6 w-6'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='red'
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
                                    updateItemQuantity(
                                      product.id,
                                      product.quantity + 1,
                                    )
                                  }
                                  className='ml-2'
                                >
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
                                <div className='px-4'>
                                <p className=''>Total : € {product.itemTotal}</p>
                                
                              </div>
                              </div>
                            </div>
                          </div>{' '}
                          <hr className='my-0 py-0' />
                        </li>
                      ))
                    ) : (
                      <div>No products added</div>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>€ {cartTotal}</p>
              </div>
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"><Link href={'/products'}>
                  <a
                    className={
                      'font-medium text-indigo-600 hover:text-indigo-500'
                    }
                  >
                  Continue Shopping
                  </a>
                </Link><span aria-hidden="true"> &rarr;</span></button>
                </p>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
