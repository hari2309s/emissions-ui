'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { DEFAULT_COUNTRY_CODE, DEFAULT_PRODUCT } from '../constants';
import { Country, Filter, IAverage, IProduct } from '../types';

interface AppContextType {
  products: IProduct[];
  setProducts?: Dispatch<SetStateAction<IProduct[]>>;
  countries: Country[];
  setCountries?: Dispatch<SetStateAction<Country[]>>;
  average: IAverage[];
  setAverage?: Dispatch<SetStateAction<IAverage[]>>;
  filter?: Omit<Filter, 'fromDate' | 'toDate'>;
  setFilter?: Dispatch<SetStateAction<Omit<Filter, 'fromDate' | 'toDate'>>>;
}

export const AppContext = createContext<AppContextType>({
  products: [],
  countries: [],
  average: [],
});

export default function AppProvider({ children }: any) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [average, setAverage] = useState<IAverage[]>([]);
  const [filter, setFilter] = useState<Omit<Filter, 'fromDate' | 'toDate'>>({
    country: DEFAULT_COUNTRY_CODE,
    product: DEFAULT_PRODUCT,
  });

  return (
    <AppContext.Provider
      value={{ products, setProducts, countries, setCountries, average, setAverage, filter, setFilter }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
