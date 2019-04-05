import { GetAllPlaces } from 'purple-maps-api';

export default searchTerm => new Promise((resolve, reject) => {
  GetAllPlaces()
    .then((allPlaces) => {
      const countries = allPlaces.filter(country => country.country_id);
      const cities = allPlaces.filter(city => city.city_id && city.name.toLowerCase().startsWith(searchTerm));

      cities.forEach((city) => {
        const { name, country_code } = countries.find(c => c.country_code === city.country_code);
        city.country_name = name; // eslint-disable-line no-param-reassign
        city.country = country_code; // eslint-disable-line no-param-reassign
      });

      resolve(cities);
    })
    .catch((err) => {
      reject(err);
    });
});
