import React from 'react';
import { Link } from 'react-router-dom';
import CityCard from '../../components/CityCard/CityCard';
import useCities from '../../hooks/useCities';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import styles from './CityOverview.module.css';
import useLocationName from '../../hooks/useLocationName';
import { useHistory } from 'react-router';
import ButtonLarge from '../../components/ButtonLarge/ButtonLarge';

export default function CityOverview(): JSX.Element {
  const { cities, removeCity } = useCities();
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
        <Link to="/city">
          <ButtonLarge>Add</ButtonLarge>
        </Link>
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
