import React from 'react';
import styles from './LocationCard.module.css';

export type LocationCardProps = {
  locationName: string | undefined;
  degree: string | undefined;
  icon: string | undefined;
  description: string | undefined;
};

export default function LocationCard({
  locationName,
  degree,
  icon,
  description,
}: LocationCardProps): JSX.Element {
  return (
    <section className={styles.locationCard}>
      <p>{locationName}</p>
      <article className={styles.locationCard__info}>
        <p>{degree}°</p>
        <img src={icon} />
        <p className={styles.weatherDescription}>{description}</p>
      </article>
    </section>
  );
}
