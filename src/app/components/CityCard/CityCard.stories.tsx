import React from 'react';
import CityCard from './CityCard';

export default {
  title: 'Component/CityCard',
  component: CityCard,
};

export const CardCity = (): JSX.Element => (
  <CityCard locationName="München" region="Bayern" />
);
