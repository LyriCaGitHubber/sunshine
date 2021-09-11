import React from 'react';
import ForecastCard from './ForecastCard';

export default {
  title: 'Component/ForecastCard',
  component: ForecastCard,
};
// Test functions

const getFormattedDate = () => {
  const today = new Date();
  let dd: string | number = today.getDate();
  let mm: string | number = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } else if (mm < 10) {
    mm = '0' + mm;
  }
  const fullDate = `${dd}.${mm}.${yyyy}`;
  return fullDate;
};

const getWeekday = () => {
  const date = new Date();
  const options: any = { weekday: 'long' };
  const day = date.toLocaleDateString('de-DE', options);
  return day;
};

// End Test functions

export const CardMonday = (): JSX.Element => (
  <ForecastCard
    degree={25}
    day={getWeekday()}
    date={getFormattedDate()}
    icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
    description="sonnig"
  />
);
