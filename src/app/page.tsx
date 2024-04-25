import { getCountries, getEmissionsProducts } from './actions';
import { FilterBar } from './components/filter-bar/filter-bar';
import styles from './page.module.css';
import Products from './products/page';
import { ICountry, IProduct } from './types';

export default async function Home() {
  const products: IProduct[] = await getEmissionsProducts();
  const countries: ICountry = await getCountries();

  return (
    <main className={styles.main}>
      {/* <FilterBar products={products} countries={countries} /> */}
      <Products />
    </main>
  );
}
