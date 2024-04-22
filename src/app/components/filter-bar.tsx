'use client';

import { useState } from 'react';
import { ICountry, IProduct } from '../types';
import styles from './filter-bar.module.css';

interface FilterBarProps {
  countries: ICountry;
  products: IProduct[];
  getAverage: (filter: Filter) => void;
}

interface Filter {
  country: string;
  product: string;
  fromDate: string;
  toDate: string;
}

export const FilterBar = ({ countries, products, getAverage }: FilterBarProps) => {
  const [filter, setFilter] = useState<Filter>({
    country: 'DE',
    product: 'methane',
    fromDate: '2019-02-01',
    toDate: '2019-03-01',
  });

  const onCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((filter) => ({
      ...filter,
      country: e.target.value,
    }));
  };

  const onProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((filter) => ({
      ...filter,
      product: e.target.value,
    }));
  };

  const onFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => { };

  const onToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => { };

  const handleClick = () => {
    getAverage(filter);
  };

  return (
    <div>
      <select
        name="country-select"
        id="country-select"
        defaultValue="DE"
        onChange={onCountryChange}
        className={styles.select}
      >
        {Object.entries(countries).map((country: any) => (
          <option key={country[0]} value={country[0]}>
            {country[1]}
          </option>
        ))}
      </select>
      <select
        name="product-select"
        id="product-select"
        defaultValue="methane"
        onChange={onProductChange}
        className={styles.select}
      >
        {products.map((product: IProduct) => (
          <option key={product.name} value={product.name} style={{}}>
            {product.name}
          </option>
        ))}
      </select>
      <input type="date" name="fromDate" className={styles.date} value={filter?.fromDate} onChange={onFromDateChange} />
      <input type="date" name="toDate" className={styles.date} value={filter?.toDate} onChange={onToDateChange} />

      <button onClick={handleClick} className={styles.show}>
        Show me
      </button>
    </div>
  );
};
