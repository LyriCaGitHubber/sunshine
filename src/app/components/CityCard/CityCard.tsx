import React from 'react';
import ButtonSmall from '../ButtonSmall/ButtonSmall';
import styles from './CityCard.module.css';

type CityCardProps = {
  locationName: string;
  region: string;
};

export default function CityCard({
  locationName,
  region,
}: CityCardProps): JSX.Element {
  return (
    <section className={styles.cityCard}>
      <p>{locationName}</p>
      <p>{region}</p>
      <div className={styles.buttonArea}>
        <ButtonSmall type="weather">Weather</ButtonSmall>
        <ButtonSmall type="delete">Delete</ButtonSmall>
      </div>
    </section>
  );
}
