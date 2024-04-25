export interface IProduct {
  name: string;
  description: string;
  product_variable: string;
}

export interface ICountry {
  [key: string]: string;
}

export interface Filter {
  country: string;
  product: string;
  fromDate: string;
  toDate: string;
}
