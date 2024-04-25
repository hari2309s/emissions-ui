import { getEmissionsProducts } from '../actions';
import { IProduct } from '../types';
import styles from './page.module.css';

export default async function Products() {
  const products: IProduct[] = await getEmissionsProducts();

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
