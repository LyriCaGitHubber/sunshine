import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useCities from '../../hooks/useCities';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SearchField from '../../components/SearchField/SearchField';
import styles from './AddCity.module.css';

export default function AddCity(): JSX.Element {
  const [addValue, setAddValue] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const history = useHistory();
  const { addCity } = useCities();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (addValue !== '') {
      addCity(addValue);
      history.push('/cities');
    } else {
      setErrorMsg(true);
    }
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
      {errorMsg && (
        <p className={styles.emptyErrorMessage}>Bitte Stadt eingeben</p>
      )}
      <Navbar LinkActive="city" />
    </div>
  );
}
