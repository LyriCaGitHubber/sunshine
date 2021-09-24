import React from 'react';
import useForecast from '../../hooks/useForecast';
import getWeekdayString from '../../utils/getWeekday';
import ForecastCard from '../../components/ForecastCard/ForecastCard';
import Header from '../../components/Header/Header';
import LocationText from '../../components/LocationText/LocationText';
import Navbar from '../../components/Navbar/Navbar';
import useLocationName from '../../hooks/useLocationName';
import styles from './Forecast.module.css';
import getDateStringFormat from '../../utils/getDateStringFormat';

export default function Forecast(): JSX.Element {
  const { cityLocations } = useLocationName();
  const weatherData = useForecast(cityLocations);
  return (
    <div className={styles.container}>
      <section className={styles.topSection}>
        <Header />
        <LocationText locationName={cityLocations} />
      </section>
      <div className={styles.forecastCards}>
        {weatherData !== null &&
          weatherData.weatherData.map((data, key) => (
            <ForecastCard
              key={key}
              day={getWeekdayString(data.date)}
              date={getDateStringFormat(data.date)}
              icon={data.icon}
              maxDegree={data.maxtemp}
              minDegree={data.mintemp}
              description={data.description}
            />
          ))}
      </div>
      <Navbar LinkActive="search" />
    </div>
  );
}
