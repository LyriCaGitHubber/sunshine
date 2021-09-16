import React from 'react';
import styles from './Home.module.css';
import getCoords from '../../utils/getCoords';
import Header from '../../components/Header/Header';
import LocationCard from '../../components/LocationCard/LocationCard';
import Navbar from '../../components/Navbar/Navbar';

console.log(await getCoords());

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header></Header>
      <p className={styles.userInfo}>Your location:</p>
      <LocationCard
        locationName="München"
        degree={25}
        icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
        description="windig"
      />
      <Navbar LinkActive="home" />
    </div>
  );
}
