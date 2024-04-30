'use client';

import { useContext, useEffect } from 'react';
import { getEmissionsProducts } from '../actions';
import { capitalizeFirstLetter } from '../helper';
import { AppContext } from '../providers';
import { IProduct } from '../types';
import styles from './page.module.css';

export default function Products() {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    (async function () {
      const products = await getEmissionsProducts();
      setProducts?.(capitalizeFirstLetter(products));
    })();
  }, [setProducts]);

  return (
    <div className={styles.grid}>
      {products?.map((product: IProduct) => (
        <div key={product.name} className={styles.card}>
          <span>{product.name}</span>
          <p>{product.description.replace(', total column', '.')}</p>
          <a href={`https://en.wikipedia.org/wiki/${product.name}`} rel="noopener noreferrer" target="_blank">
            {`Read more on Wikipedia >>`}
          </a>
        </div>
      ))}
    </div>
  );
}
