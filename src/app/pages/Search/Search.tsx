import React, { useState } from 'react';
import useForecast from '../../hooks/useForecast';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SearchField from '../../components/SearchField/SearchField';
import styles from './Search.module.css';

export default function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  console.log(useForecast(searchValue));
  const history = useHistory();
  return (
    <div className={styles.container}>
      <Header />
      <SearchField
        type="Search"
        locationSearchValue={searchValue}
        setLocationSearchValue={setSearchValue}
        handleSubmit={() => history.push('/forecast')}
      />
      <Navbar LinkActive="search" />
    </div>
  );
}
