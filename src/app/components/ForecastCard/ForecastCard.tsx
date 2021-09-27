import React from 'react';
import NightIcon from '../../assets/NightIcon';
import DayIcon from '../../assets/DayIcon';
import styles from './ForecastCard.module.css';

export type ForecastCardProps = {
  day: string | null;
  date: string;
  icon?: string;
  minDegree: number;
  maxDegree: number;
  description: string;
};

export default function ForecastCard({
  day,
  date,
  minDegree,
  maxDegree,
  description,
}: ForecastCardProps): JSX.Element {
  return (
    <section className={styles.forecastCard}>
      <article className={styles.date}>
        <p>{day}</p>
        <p>{date}</p>
      </article>
      <article className={styles.tempSection}>
        <div className={styles.nightDegree}>
          <NightIcon /> <span>{minDegree}°</span>
        </div>
        <div className={styles.dayDegree}>
          <DayIcon />
          <span> {maxDegree}°</span>
        </div>
      </article>
      <article className={styles.descriptionSection}>
        <p>{description}</p>
      </article>
    </section>
  );
}
