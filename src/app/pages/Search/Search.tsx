import React, { useState } from 'react';
import useForecast from '../../hooks/useForecast';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SearchField from '../../components/SearchField/SearchField';
import styles from './Search.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const data = useForecast(searchValue);
  const [cityLocation, setCityLocation] = useLocalStorage('city', searchValue);
  const history = useHistory();

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    setCityLocation(data.cityLocation);
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
