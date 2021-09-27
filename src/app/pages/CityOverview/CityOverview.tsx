import React from 'react';
import CityCard from '../../components/CityCard/CityCard';
import useAddCity from '../../hooks/useAddCity';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import styles from './CityOverview.module.css';

export default function CityOverview(): JSX.Element {
  const { cities, removeCity } = useAddCity();
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.cityCards}>
        {cities.map((city, key) => (
          <CityCard
            key={key}
            locationName={city}
            region={city.region}
            onDeleteClick={() => removeCity(city)}
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
