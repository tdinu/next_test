import Image from 'next/image';
import Head from 'next/head';
import { useCart } from 'react-use-cart';
import { images } from '../utils/images';
import Cart from '../components/Cart';

const CartPage = () => {
  const { updateItemQuantity, items, cartTotal } = useCart();
  return (
    <div>
      <Head>
        <title>Cart</title>
        <meta property='og:title' content='Cart' key='title' />
      </Head>
      <Cart />
    </div>
  );
};

export default CartPage;
