import React from 'react';
import ButtonSmall from './ButtonSmall';

export default {
  title: 'Component/ButtonSmall',
  component: ButtonSmall,
};

export const SmallButtonWeather = (): JSX.Element => (
  <ButtonSmall type="weather">Weather</ButtonSmall>
);

export const SmallButtonDelete = (): JSX.Element => (
  <ButtonSmall type="delete">Delete</ButtonSmall>
);
