import React from 'react';
import ButtonLarge from './ButtonLarge';

export default {
  title: 'Component/ButtonLarge',
  component: ButtonLarge,
};

export const ButtonLargeSearch = (): JSX.Element => (
  <ButtonLarge>Search</ButtonLarge>
);
export const ButtonLargeAdd = (): JSX.Element => <ButtonLarge>Add</ButtonLarge>;
