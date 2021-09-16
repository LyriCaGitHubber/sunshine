import React, { ReactNode } from 'react';
import styles from './LocationText.module.css';
import LocationIcon from '../../assets/LocationIcon';

type LocationTextProps = {
  locationName: ReactNode;
};

export default function LocationText({
  locationName,
}: LocationTextProps): JSX.Element {
  return (
    <p className={styles.locationField}>
      <LocationIcon />
      {locationName}
    </p>
  );
}
