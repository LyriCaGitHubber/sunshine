import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import SearchField from '../../components/SearchField/SearchField';
import styles from './AddCity.module.css';

export default function AddCity(): JSX.Element {
  return (
    <div className={styles.container}>
      <Header />
      <SearchField
        locationSearchValue="Germering"
        type="Add"
        setLocationSearchValue={() => {
          console.log('Frankfurt');
        }}
        handleSubmit={() => console.log('submit')}
      />
      <Navbar LinkActive="city" />
    </div>
  );
}
