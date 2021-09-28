import useLocalStorage from './useLocalStorage';

export default function useCities(): {
  cities: string[];
  addCity: (cityName: string) => void;
  removeCity: (cityName: string) => void;
} {
  const [cities, setCities] = useLocalStorage<string[]>('cities', []);

  function addCity(cityName: string) {
    setCities([...cities, cityName]);
  }

  function removeCity(cityName: string) {
    setCities(cities.filter((city) => city !== cityName));
  }

  return { cities, addCity, removeCity };
}
