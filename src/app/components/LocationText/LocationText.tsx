import React, { ReactNode } from 'react';
import styles from './LocationText.module.css';
import locationIcon from '../../assets/location-icon-white.svg';

type LocationTextProps = {
  locationName: ReactNode;
};

export default function LocationText({
  locationName,
}: LocationTextProps): JSX.Element {
  return (
    <p className={styles.locationField}>
      <img src={locationIcon} />
      {locationName}
    </p>
  );
}
