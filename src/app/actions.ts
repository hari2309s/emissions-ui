'use server';

import { Filter } from './types';

const PRODUCTS_API_URL = 'https://api.v2.emissions-api.org/api/v2/products.json';
const COUNTRIES_API_URL = 'https://api.v2.emissions-api.org/api/v2/countries.json';
const AVERAGE_API_URL = 'https://api.v2.emissions-api.org/api/v2';

export async function getEmissionsProducts() {
  const res = await fetch(PRODUCTS_API_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch products data!');
  }

  console.log('getEmissionsProducts ==> ');

  return res.json();
}

export async function getCountries() {
  const res = await fetch(COUNTRIES_API_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch countries data!');
  }

  console.log('getCountries ==> ');

  return res.json();
}

export async function getAverage(filter: Filter) {
  const res = await fetch(
    `${AVERAGE_API_URL}/${filter.product}/average.json?country=${filter.country}&begin=${filter.fromDate}&end=${filter.toDate}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch average data!');
  }

  console.log('getAverage ==> ');

  return res.json();
}
