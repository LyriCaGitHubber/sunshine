import useFetch from './useFetch';

type ForeCastData = {
  cityLocation: string;
  region: string;
  weatherData: [
    {
      date: string;
      description: string;
      icon: string;
      maxtemp: number;
      mintemp: number;
      avgtemp: number;
    }
  ];
};

export default function useForecast(city: string): ForeCastData | null {
  const { data } = useFetch<ForeCastData>(`/api/weather/forecast?city=${city}`);
  return data;
}
