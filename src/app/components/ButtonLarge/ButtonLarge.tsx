import React from 'react';
import type { ReactNode } from 'react';
import styles from './ButtonLarge.module.css';

export type ButtonLargeProps = {
  children: ReactNode;
};

export default function ButtonLarge({
  children,
}: ButtonLargeProps): JSX.Element {
  return <button className={styles.buttonLarge}>{children}</button>;
}
