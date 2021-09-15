import React from 'react';
import ForecastCard from '../../components/ForecastCard/ForecastCard';
import Header from '../../components/Header/Header';
import LocationText from '../../components/LocationText/LocationText';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Forecast.module.css';

export default function Forecast(): JSX.Element {
  const forecastDays = [
    {
      day: 'Montag',
      date: '23-09-2021',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      degree: 25,
      description: 'windig',
    },
    {
      day: 'Dienstag',
      date: '23-09-2021',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      degree: 25,
      description: 'windig',
    },
    {
      day: 'Mittwoch',
      date: '23-09-2021',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      degree: 25,
      description: 'windig',
    },
    {
      day: 'Donnerstag',
      date: '23-09-2021',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      degree: 25,
      description: 'windig',
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.topSection}>
        <Header />
        <LocationText locationName="München" />
      </section>
      <div className={styles.forecastCards}>
        {forecastDays.map((forecastDay) => (
          <ForecastCard
            day={forecastDay.day}
            date={forecastDay.date}
            icon={forecastDay.icon}
            degree={forecastDay.degree}
            description={forecastDay.description}
          />
        ))}
      </div>
      <Navbar LinkActive="search" />
    </div>
  );
}
