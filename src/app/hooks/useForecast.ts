import useFetch from './useFetch';

export default function useForecast(city: string) {
  const { data } = useFetch(`/api/weather/forecast?city=${city}`);

  console.log(data);
}
