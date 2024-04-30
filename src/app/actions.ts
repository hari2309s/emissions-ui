'use server';

import { AVERAGE_API_URL, AVERAGE_GEO_DATA_API_URL, COUNTRIES_API_URL, PRODUCTS_API_URL } from './constants';
import { Filter } from './types';

export async function getEmissionsProducts() {
  const res = await fetch(PRODUCTS_API_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch products data!');
  }

  return res.json();
}

export async function getCountries() {
  const res = await fetch(COUNTRIES_API_URL);

  if (!res.ok) {
    throw new Error('Failed to fetch countries data!');
  }

  return res.json();
}

export async function getAverage(filter: Filter) {
  const res = await fetch(
    `${AVERAGE_API_URL}/${filter.product}/average.json?country=${filter.country}&begin=${filter.fromDate}&end=${filter.toDate}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch average data!');
  }

  return res.json();
}

export async function getAverageGeoData(filter: Filter) {
  const res = await fetch(
    `${AVERAGE_GEO_DATA_API_URL}/${filter.product}/geo.json?country=${filter.country}&begin=${filter.fromDate}&end=${filter.toDate}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch average geo data!');
  }

  return res.json();
}
