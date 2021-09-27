import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAddCity from '../../hooks/useAddCity';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SearchField from '../../components/SearchField/SearchField';
import styles from './AddCity.module.css';

export default function AddCity(): JSX.Element {
  const [addValue, setAddValue] = useState('');
  const history = useHistory();
  const { addCity } = useAddCity();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    addCity(addValue);
    history.push('/cities');
  }

  return (
    <div className={styles.container}>
      <Header />
      <SearchField
        locationSearchValue={addValue}
        type="Add"
        setLocationSearchValue={setAddValue}
        handleSubmit={handleSubmit}
      />
      <Navbar LinkActive="city" />
    </div>
  );
}
