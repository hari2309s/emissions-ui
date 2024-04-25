'use client';

import { createContext } from 'react';
import { ICountry, IProduct } from '../types';

interface AppContextType {
  products: IProduct[];
  countries: ICountry;
  average: any[];
}

const AppContext = createContext<AppContextType>({
  products: [],
  countries: {},
  average: [],
});

export default function AppProvider({ children }: any) {
  return <AppContext.Provider value={{ products: [], countries: {}, average: [] }}>{children}</AppContext.Provider>;
}
