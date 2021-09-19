import React from 'react';
import useRevGeoCoding from '../../hooks/useRevGeoCoding';
import styles from './LocationCard.module.css';

export type LocationCardProps = {
  degree: number;
  icon: string;
  description: string;
};

export default function LocationCard({
  degree,
  icon,
  description,
}: LocationCardProps): JSX.Element {
  const cityName = useRevGeoCoding();

  return (
    <section className={styles.locationCard}>
      <p>{cityName}</p>
      <article className={styles.locationCard__info}>
        <p>{degree}°</p>
        <img src={icon} />
        <p>{description}</p>
      </article>
    </section>
  );
}
