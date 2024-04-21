import Image from "next/image";
import styles from "./page.module.css";
import { IProduct } from "./types";

const PRODUCTS_API_URL = 'https://api.v2.emissions-api.org/api/v2/products.json';

const getEmissionsProducts = async () => {
  const res = await fetch(PRODUCTS_API_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch products data!');
  }

  return res.json();
}

export default async function Home() {
  const products: IProduct[] = await getEmissionsProducts();

  return (
    <main className={styles.main}>
      <div className={styles.grid}>{products?.map((product: IProduct) => <div key={product.name} className={styles.card}>{product.name}</div>)}</div>
    </main>
  );
}
