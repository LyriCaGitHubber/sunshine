import React from 'react';
import styles from './Header.module.css';
import SunIcon from '../../assets/SunIcon';

export type HeaderProps = {
  headline: string;
};

export default function Header({ headline }: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <SunIcon />
      {headline}
    </header>
  );
}
