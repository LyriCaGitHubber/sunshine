import React from 'react';
import styles from './LocationCard.module.css';

export type LocationCardProps = {
  place: string;
  degree: number;
  icon: string;
  description: string;
};

export default function LocationCard({
  place,
  degree,
  icon,
  description,
}: LocationCardProps): JSX.Element {
  return (
    <section className={styles.locationCard}>
      <p>{place}</p>
      <article>
        <p>{degree}°</p>
        <p>{icon}</p>
        <p>{description}</p>
      </article>
    </section>
  );
}
