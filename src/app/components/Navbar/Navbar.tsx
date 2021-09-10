import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/HomeIcon';
import CityIcon from '../../assets/CityIcon';
import SearchIcon from '../../assets/SearchIcon';
import styles from './Navbar.module.css';

export type NavbarProps = {
  LinkActive: 'home' | 'city' | 'search';
};

export default function Navbar({ LinkActive }: NavbarProps): JSX.Element {
  const active = {
    fill: 'var(--clr-primary)',
  };

  const inactive = {
    fill: 'var(--clr-icon-inactive)',
  };

  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <HomeIcon {...(LinkActive === 'home' ? active : inactive)} />
      </Link>
      <Link to="/city">
        <CityIcon {...(LinkActive === 'city' ? active : inactive)} />
      </Link>
      <Link to="/search">
        <SearchIcon {...(LinkActive === 'search' ? active : inactive)} />
      </Link>
    </nav>
  );
}
