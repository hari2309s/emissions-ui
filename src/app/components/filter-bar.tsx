'use client';

import { useEffect, useState } from 'react';
import { ICountry, IProduct } from '../types';
import styles from './filter-bar.module.css';

interface FilterBarProps {
  countries: ICountry;
  products: IProduct[];
}

interface FilterProps {
  country: string;
  product: string;
  fromDate: string;
  toDate: string;
}

export const FilterBar = ({ countries, products }: FilterBarProps) => {
  const [filter, setFilter] = useState<FilterProps | null>(null);

  const onCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('eeee ', e.target.value);
    console.log('selected value ', countries[e.target.value]);
  };

  useEffect(() => {
    setFilter({
      country: 'DE',
      product: 'methane',
      fromDate: '',
      toDate: '',
    });
    console.log('using effect!!!');
  }, [countries, products]);

  return (
    <div>
      <select
        name="country-select"
        id="country-select"
        defaultValue="DE"
        onChange={onCountryChange}
        className={styles.country}
      >
        {Object.entries(countries).map((country: any) => (
          <option key={country[0]} value={country[0]}>
            {country[1]}
          </option>
        ))}
      </select>
    </div>
  );
};
