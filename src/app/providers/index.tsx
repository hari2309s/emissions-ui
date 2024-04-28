'use client';

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { IAverage, ICountry, IProduct } from '../types';

interface AppContextType {
  products: IProduct[];
  setProducts?: Dispatch<SetStateAction<IProduct[]>>;
  countries: ICountry;
  setCountries?: Dispatch<SetStateAction<ICountry>>;
  average: IAverage[];
  setAverage?: Dispatch<SetStateAction<IAverage[]>>;
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

  return (
    <AppContext.Provider value={{ products, setProducts, countries, setCountries, average, setAverage }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
