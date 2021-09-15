import React, { ReactNode } from 'react';
import styles from './LocationText.module.css';

type LocationTextProps = {
  locationName: ReactNode;
};

export default function LocationText({
  locationName,
}: LocationTextProps): JSX.Element {
  return (
    <p className={styles.locationField}>
      <img src="src/app/assets/location-icon-white.svg" />
      {locationName}
    </p>
  );
}
