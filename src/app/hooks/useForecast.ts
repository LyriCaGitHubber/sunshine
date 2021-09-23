import useFetch from './useFetch';

type ForeCastData = {
  cityLocation: string;
  weatherData: [
    {
      date: string;
      description: string;
      icon: string;
      maxtemp: number;
      mintemp: number;
    }
  ];
};

export default function useForecast(city: string): ForeCastData {
  const { data } = useFetch(`/api/weather/forecast?city=${city}`);
  return data;
}
