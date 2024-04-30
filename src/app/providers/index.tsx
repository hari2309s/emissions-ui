'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { Filter, IAverage, ICountry, IProduct } from '../types';

interface AppContextType {
  products: IProduct[];
  setProducts?: Dispatch<SetStateAction<IProduct[]>>;
  countries: ICountry;
  setCountries?: Dispatch<SetStateAction<ICountry>>;
  average: IAverage[];
  setAverage?: Dispatch<SetStateAction<IAverage[]>>;
  filter?: Omit<Filter, 'fromDate' | 'toDate'>;
  setFilter?: Dispatch<SetStateAction<Omit<Filter, 'fromDate' | 'toDate'>>>;
}

export const AppContext = createContext<AppContextType>({
  products: [],
  countries: {},
  average: [],
});

export default function AppProvider({ children }: any) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [countries, setCountries] = useState<ICountry>({});
  const [average, setAverage] = useState<IAverage[]>([]);
  const [filter, setFilter] = useState<Omit<Filter, 'fromDate' | 'toDate'>>({ country: 'Germany', product: 'methane' });

  return (
    <AppContext.Provider
      value={{ products, setProducts, countries, setCountries, average, setAverage, filter, setFilter }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
