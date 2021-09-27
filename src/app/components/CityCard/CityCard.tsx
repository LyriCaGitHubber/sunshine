import React from 'react';
import ButtonSmall from '../ButtonSmall/ButtonSmall';
import styles from './CityCard.module.css';

type CityCardProps = {
  locationName: string;
  region: string;
  onDeleteClick: () => void;
  onWeatherClick: () => void;
};

export default function CityCard({
  locationName,
  region,
  onWeatherClick,
  onDeleteClick,
}: CityCardProps): JSX.Element {
  return (
    <section className={styles.cityCard}>
      <p>{locationName}</p>
      <p>{region}</p>
      <div className={styles.buttonArea}>
        <ButtonSmall onclick={onWeatherClick} type="weather">
          Weather
        </ButtonSmall>
        <ButtonSmall onclick={onDeleteClick} type="delete">
          Delete
        </ButtonSmall>
      </div>
    </section>
  );
}
