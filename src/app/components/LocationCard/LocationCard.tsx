import React from 'react';
import styles from './LocationCard.module.css';

export type LocationCardProps = {
  locationName: string;
  degree: number;
  icon: string;
  wind: number | null;
  description: string;
};

export default function LocationCard({
  locationName,
  degree,
  icon,
  wind,
  description,
}: LocationCardProps): JSX.Element {
  return (
    <section className={styles.locationCard}>
      <p>{locationName}</p>
      <article className={styles.locationCard__info}>
        <div className={styles.infoValues}>
          <p>{degree}°</p>
          <img src={icon} />
          <p>
            Wind:
            <br /> {wind} km/h
          </p>
        </div>
        <p className={styles.weatherDescription}>{description}</p>
      </article>
    </section>
  );
}
