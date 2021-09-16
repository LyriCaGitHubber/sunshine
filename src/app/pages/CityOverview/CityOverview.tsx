import React from 'react';
import CityCard from '../../components/CityCard/CityCard';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import styles from './CityOverview.module.css';

export default function CityOverview(): JSX.Element {
  const cityMockdata = [
    {
      locationName: 'Frankfurt',
      region: 'Hessen',
    },
    {
      locationName: 'München',
      region: 'Bayern',
    },
    {
      locationName: 'Essen',
      region: 'Nordrhein-Westfalen',
    },
    {
      locationName: 'Stuttgart',
      region: 'Baden-Württemberg',
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.cityCards}>
        {cityMockdata.map((city, key) => (
          <CityCard
            key={key}
            locationName={city.locationName}
            region={city.region}
          />
        ))}
      </div>
      <Navbar LinkActive="city" />
    </div>
  );
}
