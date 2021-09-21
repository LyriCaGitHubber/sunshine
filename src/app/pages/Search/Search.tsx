import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SearchField from '../../components/SearchField/SearchField';
import styles from './Search.module.css';

export default function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className={styles.container}>
      <Header />
      <SearchField
        type="Search"
        locationSearchValue={searchValue}
        setLocationSearchValue={setSearchValue}
        handleSubmit={() => console.log('submit')}
      />
      <Navbar LinkActive="search" />
    </div>
  );
}
