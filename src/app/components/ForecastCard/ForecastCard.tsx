import React from 'react';
import styles from './ForecastCard.module.css';

export type ForecastCardProps = {
  day: string | null;
  date: string;
  icon: string;
  minDegree: number;
  maxDegree: number;
  avgDegree: number;
  description: string;
};

export default function ForecastCard({
  day,
  date,
  icon,
  minDegree,
  maxDegree,
  avgDegree,
  description,
}: ForecastCardProps): JSX.Element {
  return (
    <section className={styles.forecastCard}>
      <article className={styles.date}>
        <p>{day}</p>
        <p>{date}</p>
      </article>
      <article className={styles.tempSection}>
        <section>
          <p>min:</p>
          <p> {minDegree}°</p>
        </section>
        <section>
          <p>max:</p>
          <p> {maxDegree}°</p>
        </section>
        <section>
          <p>durchschn:</p>
          <p> {avgDegree}°</p>
        </section>
      </article>
      <article className={styles.descriptionSection}>
        <img src={icon} alt={description} />
        <p>{description}</p>
      </article>
    </section>
  );
}
