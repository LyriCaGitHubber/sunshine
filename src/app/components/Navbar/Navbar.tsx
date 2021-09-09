import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/HomeIcon';
import CityIcon from '../../assets/CityIcon';
import SearchIcon from '../../assets/SearchIcon';
import styles from './Navbar.module.css';

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/city">
        <CityIcon />
      </Link>
      <Link to="/search">
        <SearchIcon />
      </Link>
    </nav>
  );
}
