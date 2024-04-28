'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getAverage } from '../../actions';
import { Filter, IAverage, ICountry, IProduct } from '../../types';
import styles from './filter-bar.module.css';

interface FilterBarProps {
  countries: ICountry;
  products: IProduct[];
  setAverage: Dispatch<SetStateAction<IAverage[]>>;
}

const initialFilterState = {
  country: 'DE',
  product: 'methane',
  fromDate: '2019-02-01',
  toDate: '2019-03-01',
};

export const FilterBar = ({ countries, products, setAverage }: FilterBarProps) => {
  const [filter, setFilter] = useState<Filter>(initialFilterState);

  useEffect(() => {
    if (Object.entries(countries).length) {
      setFilter((filter) => ({
        ...filter,
        country: 'DE',
      }));
    }
  }, [countries]);

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

  const onFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const onToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleClick = async () => {
    const average = await getAverage(filter ?? initialFilterState);
    setAverage(average);
  };

  return (
    <div>
      <select
        name="country"
        id="country-select"
        value={filter.country}
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
        name="product"
        id="product-select"
        value={filter.product}
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
