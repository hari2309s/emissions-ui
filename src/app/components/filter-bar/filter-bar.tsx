'use client';

import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { DEFAULT_COUNTRY_CODE, DEFAULT_PRODUCT } from '@/app/constants';
import { capitalizeFirstLetter } from '@/app/helper';
import { AppContext } from '@/app/providers';
import { getAverage } from '../../actions';
import { Country, Filter, IAverage, IProduct } from '../../types';
import styles from './filter-bar.module.css';

interface FilterBarProps {
  countries: Country[];
  products: IProduct[];
  initialFilterState: Filter;
  setAverage: Dispatch<SetStateAction<IAverage[]>>;
}

export const FilterBar = ({ countries, products, initialFilterState, setAverage }: FilterBarProps) => {
  const [filterObj, setFilterObj] = useState<Filter>(initialFilterState);

  const { setFilter, average } = useContext(AppContext);

  useEffect(() => {
    if (countries.length > 0) {
      setFilterObj((filterObj) => ({
        ...filterObj,
        country: DEFAULT_COUNTRY_CODE,
      }));
    }
  }, [countries]);

  useEffect(() => {
    if (initialFilterState && average.length === 0) {
      (async function () {
        const response = await getAverage(initialFilterState);
        setAverage(response);
      })();
    }
    /* eslint-disable-next-line */
  }, []);

  const onCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterObj((filterObj) => ({
      ...filterObj,
      country: e.target.value,
    }));
  };

  const onProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterObj((filterObj) => ({
      ...filterObj,
      product: e.target.value.toLowerCase(),
    }));
  };

  const onFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterObj((filterObj) => ({
      ...filterObj,
      fromDate: e.target.value,
    }));
  };

  const onToDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterObj((filterObj) => ({
      ...filterObj,
      toDate: e.target.value,
    }));
  };

  const handleClick = async () => {
    const response = await getAverage(filterObj ?? initialFilterState);
    setAverage(response);

    setFilter?.((filter) => ({
      ...filter,
      country: countries.find((country) => country.code === filterObj?.country)?.code || DEFAULT_COUNTRY_CODE,
      product: capitalizeFirstLetter([filterObj.product])[0] || DEFAULT_PRODUCT,
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
        {countries.map((country: Country) => (
          <option key={country.code} value={country.code}>
            {country.label}
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
          <option key={product.name} value={product.name.toLowerCase()}>
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
