import React from 'react';
import styles from './SearchField.module.css';
import ButtonLarge from '../ButtonLarge/ButtonLarge';

type SearchFieldProps = {
  type: 'Search' | 'Add';
  locationSearchValue: string;
  setLocationSearchValue: (locationSearchValue: string) => void;
  handleSubmit: (event: React.FormEvent) => void;
};

export default function SearchField({
  type,
  locationSearchValue,
  setLocationSearchValue,
  handleSubmit,
}: SearchFieldProps): JSX.Element {
  return (
    <form className={styles.formSection} onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={locationSearchValue}
          className={styles.formInput}
          placeholder={type}
          onChange={(event) => {
            event.preventDefault();
            setLocationSearchValue(event.target.value);
          }}
        />
      </label>
      <ButtonLarge children={type === 'Search' ? 'Search' : 'Add'} />
    </form>
  );
}
