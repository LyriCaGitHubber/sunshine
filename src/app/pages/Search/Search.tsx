import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SearchField from '../../components/SearchField/SearchField';
import styles from './Search.module.css';
import useLocationName from '../../hooks/useLocationName';

export default function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const { addCityLocation } = useLocationName();

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    addCityLocation(searchValue);
    history.push('/forecast');
  }

  return (
    <div className={styles.container}>
      <Header />
      <SearchField
        type="Search"
        locationSearchValue={searchValue}
        setLocationSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
      />
      <Navbar LinkActive="search" />
    </div>
  );
}
