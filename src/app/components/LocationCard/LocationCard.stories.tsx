import React from 'react';
import LocationCard from './LocationCard';

export default {
  title: 'Component/LocationCard',
  component: LocationCard,
};

export const CardLocation = (): JSX.Element => (
  <LocationCard
    place="Aschaffenburg"
    degree={25}
    icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
    description="windig"
  />
);
