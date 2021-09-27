import React from 'react';
import useForecast from '../../hooks/useForecast';
import ButtonSmall from '../ButtonSmall/ButtonSmall';
import styles from './CityCard.module.css';

type CityCardProps = {
  locationName: string;
  onDeleteClick: () => void;
  onWeatherClick: () => void;
};

export default function CityCard({
  locationName,
  onWeatherClick,
  onDeleteClick,
}: CityCardProps): JSX.Element {
  const data = useForecast(locationName);
  return (
    <section className={styles.cityCard}>
      <p>{locationName}</p>
      <p>{data?.region}</p>
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
