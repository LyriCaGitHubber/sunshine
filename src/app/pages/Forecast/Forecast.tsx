import React from 'react';
import ForecastCard from '../../components/ForecastCard/ForecastCard';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Forecast.module.css';

export default function Forecast(): JSX.Element {
  return (
    <div className={styles.container}>
      <section className={styles.topSection}>
        <Header />
        <p className={styles.locationField}>
          <img src="src/app/assets/location-icon-white.svg" />
          Karlsfeld
        </p>
      </section>
      <div className={styles.forecastCards}>
        <ForecastCard
          day="Monday"
          date="23-09-2021"
          icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
          degree={25}
          description="sonnig"
        />
        <ForecastCard
          day="Monday"
          date="23-09-2021"
          icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
          degree={25}
          description="sonnig"
        />
        <ForecastCard
          day="Monday"
          date="23-09-2021"
          icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
          degree={25}
          description="sonnig"
        />
        <ForecastCard
          day="Monday"
          date="23-09-2021"
          icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
          degree={25}
          description="sonnig"
        />
        <ForecastCard
          day="Monday"
          date="23-09-2021"
          icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
          degree={25}
          description="sonnig"
        />
      </div>
      <Navbar LinkActive="search" />
    </div>
  );
}
