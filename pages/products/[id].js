import Image from 'next/image';
import { products } from '../../utils/data';

export const getStaticPaths = async () => {
  const data = products;

  // map data to an array of path objects with params (id)
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = products.filter((item) => item.id.toString() === id)[0];

  return {
    props: { product: data },
  };
};

const Details = ({ product }) => {
  return (
    <div>
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
            <div className=''>{product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
