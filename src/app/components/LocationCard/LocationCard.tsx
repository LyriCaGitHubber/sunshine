import React from 'react';
import styles from './LocationCard.module.css';

export type LocationCardProps = {
  locationName: string | null;
  degree: number;
  icon: string;
  description: string;
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
        <p>{description}</p>
      </article>
    </section>
  );
}
