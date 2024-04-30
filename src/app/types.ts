export interface IProduct {
  name: string;
  description: string;
  product_variable: string;
}

export interface ICountry {
  [key: string]: string;
}

export interface Country {
  code: string;
  label: string;
}

export interface Filter {
  country: string;
  product: string;
  fromDate: string;
  toDate: string;
}

export interface IAverage {
  average: number;
  end: string;
  start: string;
}
