import React, { ReactNode } from 'react';
import styles from './ButtonSmall.module.css';

type ButtonSmall = {
  onclick: () => void;
  type: 'weather' | 'delete';
  children: ReactNode;
};

export default function ButtonSmall({
  onclick,
  type,
  children,
}: ButtonSmall): JSX.Element {
  return (
    <button
      onClick={onclick}
      className={`${styles.buttonSmall} ${
        type === 'weather' ? styles.weather : styles.delete
      }`}
    >
      {children}
    </button>
  );
}
