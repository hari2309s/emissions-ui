'use client';

import { useContext, useEffect, useState } from 'react';
import { getCountries, getEmissionsProducts } from '../actions';
import { BarChart } from '../components/bar-chart/bar-chart';
import { FilterBar } from '../components/filter-bar/filter-bar';
import { DEFAULT_COUNTRY_CODE, DEFAULT_PRODUCT } from '../constants';
import { capitalizeFirstLetterProducts, sanitizeCountries } from '../helper';
import { AppContext } from '../providers';
import { IAverage } from '../types';
import styles from './page.module.css';

export default function Chart() {
  const { products, setProducts, countries, setCountries } = useContext(AppContext);
  const [average, setAverage] = useState<IAverage[]>([]);

  useEffect(() => {
    if (Object.entries(countries).length === 0) {
      (async function () {
        const countries = await getCountries();
        setCountries?.(sanitizeCountries(countries));
      })();
    }

    if (products.length === 0) {
      (async function () {
        const products = await getEmissionsProducts();
        setProducts?.(capitalizeFirstLetterProducts(products));
      })();
    }
  }, [countries, setCountries, products, setProducts]);

  return (
    <div className={styles.container}>
      <FilterBar
        countries={countries}
        products={products}
        initialFilterState={{
          country: DEFAULT_COUNTRY_CODE,
          product: DEFAULT_PRODUCT,
          fromDate: '2019-02-01',
          toDate: '2019-03-01',
        }}
        setAverage={setAverage}
      />

      <BarChart average={average} />
    </div>
  );
}

export const dynamic = 'force-dynamic';
