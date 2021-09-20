import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import getCoords from '../utils/getCoords';

type useWeatherType = {
  degree: string | undefined;
  icon: string | undefined;
  description: string | undefined;
};

export default function useWeather(): useWeatherType {
  const [location, setLocation] = useState<{ lat?: number; long?: number }>({});

  useEffect(() => {
    async function run() {
      const location = await getCoords();
      setLocation(location);
    }
    run();
  }, []);

  const { data } = useFetch<{
    degree: string;
    icon: string;
    description: string;
  }>(`/api/weather/?latitude=${location.lat}&longitude=${location.long}`);
  const degree = data?.degree;
  const icon = data?.icon;
  const description = data?.description;

  return { degree, icon, description };
}
