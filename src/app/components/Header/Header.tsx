import React from 'react';
import styles from './Header.module.css';
import SunIcon from '../../assets/SunIcon';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <SunIcon />
      Sunshine
    </header>
  );
}
