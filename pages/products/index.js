import styles from '../../styles/Products.module.css';
import Link from 'next/link';

const products = [
  { id: 0, name: 'Product 1', price: 10, description: 'desc 1' },
  { id: 1, name: 'Product 2', price: 20, description: 'desc 2' },
];

const Products = () => {
  // console.log(products);

  return (
    <div>
      <h1>All Products</h1>
      {products.map((product) => (
        <Link href={'/products/' + product.id} key={product.id}>
          <a className={styles.single}>
            <h3>{product.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Products;
