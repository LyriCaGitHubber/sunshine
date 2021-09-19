import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import LocationCard from '../../components/LocationCard/LocationCard';
import Navbar from '../../components/Navbar/Navbar';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header></Header>
      <p className={styles.userInfo}>Your location:</p>
      <LocationCard
        degree={25}
        icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
        description="sonnig"
      />
      <Navbar LinkActive="home" />
    </div>
  );
}
