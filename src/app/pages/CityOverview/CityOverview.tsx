import React from 'react';
import CityCard from '../../components/CityCard/CityCard';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import styles from './CityOverview.module.css';

export default function CityOverview(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.cityCards}>
        <CityCard locationName="Frankfurt" region="Hessen" />
        <CityCard locationName="Frankfurt" region="Hessen" />
        <CityCard locationName="Frankfurt" region="Hessen" />
        <CityCard locationName="Frankfurt" region="Hessen" />
        <CityCard locationName="Frankfurt" region="Hessen" />
        <CityCard locationName="Frankfurt" region="Hessen" />
      </div>
      <Navbar LinkActive="city" />
    </div>
  );
}
