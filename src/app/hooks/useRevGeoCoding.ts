import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import getCoords from '../utils/getCoords';

export default function useRevGeoCoding(): string | null {
  const [location, setLocation] = useState<{ lat: number; long: number }>({
    lat: 0,
    long: 0,
  });

  useEffect(() => {
    async function run() {
      const location = await getCoords();
      setLocation(location);
    }
    run();
  }, []);

  const { data } = useFetch<{ city: string }>(
    `/api/geolocation/?latitude=${location.lat}&longitude=${location.long}`
  );

  console.log(data?.city);
  return data?.city || null;
}
