import React from 'react';
import SearchField from './SearchField';

export default {
  title: 'Component/SearchField',
  component: SearchField,
};

export const Search = (): JSX.Element => (
  <SearchField
    type="Search"
    locationSearchValue="Frankfurt"
    setLocationSearchValue={(locationSearchValue) =>
      console.log(locationSearchValue)
    }
    handleSubmit={() => console.log('It works')}
  />
);

export const Add = (): JSX.Element => (
  <SearchField
    type="Add"
    locationSearchValue="Munich"
    setLocationSearchValue={(locationSearchValue) =>
      console.log(locationSearchValue)
    }
    handleSubmit={() => console.log('It works dude')}
  />
);
