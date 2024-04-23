import { FilterBar } from './components/filter-bar';
import styles from './page.module.css';
import { ICountry, IProduct } from './types';

const PRODUCTS_API_URL = 'https://api.v2.emissions-api.org/api/v2/products.json';
const COUNTRIES_API_URL = 'https://api.v2.emissions-api.org/api/v2/countries.json';

const getEmissionsProducts = async () => {
  const res = await fetch(PRODUCTS_API_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch products data!');
  }

  return res.json();
};

const getCountries = async () => {
  const res = await fetch(COUNTRIES_API_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch countries data!');
  }

  return res.json();
};

export default async function Home() {
  const products: IProduct[] = await getEmissionsProducts();
  const countries: ICountry = await getCountries();

  return (
    <main className={styles.main}>
      <FilterBar products={products} countries={countries} />
      <div className={styles.grid}>
        {products?.map((product: IProduct) => (
          <div key={product.name} className={styles.card}>
            <span>{product.name}</span>
            <p>{product.description.replace(', total column', '.')}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
