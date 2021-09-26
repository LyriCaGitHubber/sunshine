import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import getCoords from '../utils/getCoords';

type useWeatherType = {
  degree: number;
  icon: string;
  description: string;
  wind: number;
};

export default function useWeather(): useWeatherType {
  const [location, setLocation] = useState<{
    lat?: number | null;
    long?: number | null;
  } | null>();

  useEffect(() => {
    async function run() {
      const location = await getCoords();
      setTimeout(() => setLocation(location), 2000);
    }

    run();
  }, []);

  const { data } = useFetch<{
    wind: number;
    degree: number;
    icon: string;
    description: string;
  }>(`/api/weather/?latitude=${location?.lat}&longitude=${location?.long}`);

  if (data) {
    return {
      degree: data.degree,
      icon: data.icon,
      description: data.description,
      wind: data.wind,
    };
  }
  const degree = 0;
  const icon = '';
  const description = '';
  const wind = 0;
  return { degree, icon, description, wind };
}
