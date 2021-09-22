import React from 'react';
import styles from './Home.module.css';
import useRevGeoCoding from '../../hooks/useRevGeoCoding';
import useWeather from '../../hooks/useWeather';
import Header from '../../components/Header/Header';
import LocationCard from '../../components/LocationCard/LocationCard';
import Navbar from '../../components/Navbar/Navbar';

export default function Home(): JSX.Element {
  const { cityName, cityIsLoading } = useRevGeoCoding();
  const data = useWeather();

  return (
    <div className={styles.container}>
      <Header></Header>
      <p className={styles.userInfo}>Your location:</p>
      {cityIsLoading && <p className={styles.loadingText}>Loading...</p>}
      {cityIsLoading === false &&
        cityName !== '' &&
        data.degree !== 0 &&
        data.icon !== '' &&
        data.wind !== 0 &&
        data.description !== '' && (
          <LocationCard
            locationName={cityName}
            degree={data.degree}
            icon={data.icon}
            wind={data.wind}
            description={data.description}
          />
        )}
      )
      <Navbar LinkActive="home" />
    </div>
  );
}
