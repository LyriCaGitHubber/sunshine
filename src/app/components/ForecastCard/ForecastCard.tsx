import React from 'react';
import styles from './ForecastCard.module.css';

export type ForecastCardProps = {
  day: string;
  date: string;
  icon: string;
  degree: number;
  description: string;
};

export default function ForecastCard({
  day,
  date,
  icon,
  degree,
  description,
}: ForecastCardProps): JSX.Element {
  return (
    <section className={styles.forecastCard}>
      <article className={styles.date}>
        <p>{day}</p>
        <p>{date}</p>
      </article>
      <article className={styles.weatherInfos}>
        <p>{degree}°</p>
        <img src={icon} alt={description} />
        <p>{description}</p>
      </article>
    </section>
  );
}
