import useLocalStorage from './useLocalStorage';

export default function useLocationName(): {
  cityLocations: string;
  addCityLocation: (cityLocation: string) => void;
} {
  const [cityLocations, setCityLocation] = useLocalStorage('location', '');

  function addCityLocation(cityLocation: string): void {
    setCityLocation(cityLocation);
  }

  return { cityLocations, addCityLocation };
}
