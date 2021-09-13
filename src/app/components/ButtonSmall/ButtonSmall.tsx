import React, { ReactNode } from 'react';
import styles from './ButtonSmall.module.css';

type ButtonSmall = {
  type: 'weather' | 'delete';
  children: ReactNode;
};

export default function ButtonSmall({
  type,
  children,
}: ButtonSmall): JSX.Element {
  return (
    <button
      className={`${styles.buttonSmall} ${
        type === 'weather' ? styles.weather : styles.delete
      }`}
    >
      {children}
    </button>
  );
}
