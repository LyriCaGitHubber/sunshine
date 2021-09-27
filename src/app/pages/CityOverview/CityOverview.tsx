import React from 'react';
import CityCard from '../../components/CityCard/CityCard';
import useAddCity from '../../hooks/useAddCity';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import styles from './CityOverview.module.css';
import useLocationName from '../../hooks/useLocationName';
import { useHistory } from 'react-router';

export default function CityOverview(): JSX.Element {
  const { cities, removeCity } = useAddCity();
  const history = useHistory();
  const { addCityLocation } = useLocationName();

  function handleWeatherClick(city: string) {
    addCityLocation(city);
    history.push('/forecast');
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.cityCards}>
        {cities.map((city, key) => (
          <CityCard
            key={key}
            locationName={city}
            onDeleteClick={() => removeCity(city)}
            onWeatherClick={() => handleWeatherClick(city)}
          />
        ))}
        {cities.length === 0 && (
          <p className={styles.noCities}>Keine Städte zu finden</p>
        )}
      </div>
      <Navbar LinkActive="city" />
    </div>
  );
}
