import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Search.module.css';

export default function Search(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
