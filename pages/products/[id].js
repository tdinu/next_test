import Image from 'next/image';
import { images } from '../../utils/images';

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
    <div>
      <div className=''>
        <div className=''>
          <Image
            src={images[parseInt(product.id) - 1]}
            width='150'
            height='150'
            priority
            className=''
            alt={product.fruit_name}
          />

          <div className=''>
            <h6 className=''>{product.fruit_name}</h6>
            <div className=''>{product.origin}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
