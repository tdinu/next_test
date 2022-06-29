import Image from 'next/image';
import { images } from '../../utils/images';
import ProductDetails from '../../components/ProductDetails';

import { gql } from '@apollo/client';
import client from '../../apollo-client';

export const getStaticPaths = async () => {
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
  // map data to an array of path objects with params (id)
  const paths = data.fruits.slice(0, 8).map((item) => {
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
  const id = parseInt(context.params.id);
  const { data } = await client.query({
    query: gql`
      query oneFruit {
        fruit(id: ${id}) {
          id
          scientific_name
          tree_name
          fruit_name
          family
          description
        }
      }
    `,
  });

  return {
    props: { product: data.fruit },
  };
};

const Details = ({ product }) => {
  return (
    <div className='w-9/12 h-9/12 mx-auto'>
      <ProductDetails
        product={product}
        image={images[parseInt(product.id) - 1]}
        index={parseInt(product.id)}
      />
    </div>
  );
};

export default Details;
