'use client';

import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { AppContext } from '@/app/providers';
import { getAverage } from '../../actions';
import { Filter, IAverage, ICountry, IProduct } from '../../types';
import styles from './filter-bar.module.css';
import { DEFAULT_COUNTRY } from '@/app/constants';

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
  const [filterObj, setFilterObj] = useState<Filter>(initialFilterState);

  const { setFilter } = useContext(AppContext);

  useEffect(() => {
    if (Object.entries(countries).length) {
      setFilterObj((filterObj) => ({
        ...filterObj,
        country: 'DE',
      }));
    }
  }, [countries]);

  const onCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterObj((filterObj) => ({
      ...filterObj,
      country: e.target.value,
    }));
  };

  const onProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterObj((filterObj) => ({
      ...filterObj,
      product: e.target.value,
    }));
  };

  const onFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterObj((filterObj) => ({
      ...filterObj,
      fromDate: e.target.value
    }))
  };

  const onToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterObj((filterObj) => ({
      ...filterObj,
      toDate: e.target.value
    }))
  };

  const handleClick = async () => {
    const average = await getAverage(filterObj ?? initialFilterState);
    setAverage(average);

    setFilter?.((filter) => ({
      ...filter,
      country: Object.entries(countries).find((country) => country[0] === filterObj?.country)?.[1] || DEFAULT_COUNTRY,
    }));
  };

  return (
    <div>
      <select
        name="country"
        id="country-select"
        value={filterObj.country}
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
        value={filterObj.product}
        onChange={onProductChange}
        className={styles.select}
      >
        {products.map((product: IProduct) => (
          <option key={product.name} value={product.name} style={{}}>
            {product.name}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="fromDate"
        className={styles.date}
        value={filterObj?.fromDate}
        onChange={onFromDateChange}
      />
      <input type="date" name="toDate" className={styles.date} value={filterObj?.toDate} onChange={onToDateChange} />

      <button onClick={handleClick} className={styles.show}>
        Show me
      </button>
    </div>
  );
};
