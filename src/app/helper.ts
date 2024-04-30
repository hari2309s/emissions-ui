import { Country, ICountry } from './types';

export const capitalizeFirstLetter = (items: any[]): any[] => {
  return items.map((item) => ({ ...item, name: item.name.charAt(0).toUpperCase() + item.name.slice(1) }));
};

export const sanitizeCountries = (countries: ICountry): Country[] => {
  const modified = Object.entries(countries)
    .map((country) => ({ code: country[0], label: country[1] as string }))
    .sort((a, b) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0));
  const labels = modified.map(({ label }) => label);
  return modified.filter(({ label }, index) => {
    return labels.includes(label, index + 1);
  });
};
