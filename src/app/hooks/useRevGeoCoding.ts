import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import getCoords from '../utils/getCoords';

type useRevGeoCodingType = {
  cityName: string | undefined;
  cityIsLoading: boolean;
};

export default function useRevGeoCoding(): useRevGeoCodingType {
  const [location, setLocation] = useState<{ lat: number; long: number }>({
    lat: 0,
    long: 0,
  });

  useEffect(() => {
    async function run() {
      const location = await getCoords();
      setTimeout(() => setLocation(location), 2000);
    }
    run();
  }, []);

  const { data, isLoading: cityIsLoading } = useFetch<{ city: string }>(
    `/api/geolocation/?latitude=${location.lat}&longitude=${location.long}`
  );
  const cityName = data?.city;
  return { cityName, cityIsLoading };
}
