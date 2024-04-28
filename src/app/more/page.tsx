'use client';

import { useContext, useEffect, useState } from 'react';
import { getCountries, getEmissionsProducts } from '../actions';
import { BarChart } from '../components/bar-chart/bar-chart';
import { FilterBar } from '../components/filter-bar/filter-bar';
import { AppContext } from '../providers';
import { IAverage, ICountry, IProduct } from '../types';
import styles from './page.module.css';

export default function More() {
  const { products, setProducts, countries, setCountries } = useContext(AppContext);
  const [average, setAverage] = useState<IAverage[]>([]);

  useEffect(() => {
    (async function () {
      const countries = await getCountries();
      setCountries?.(countries);
    })();

    (async function () {
      const products = await getEmissionsProducts();
      setProducts?.(products);
    })();
  }, [setCountries, setProducts]);

  return (
    <div className={styles.container}>
      <FilterBar countries={countries} products={products} />
      <BarChart average={average} />
    </div>
  );
}
