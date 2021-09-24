import React from 'react';
import getWeekdayString from '../../utils/getWeekday';
import ForecastCard from './ForecastCard';

export default {
  title: 'Component/ForecastCard',
  component: ForecastCard,
};
// Test functions

const getFormattedDate = () => {
  const today = new Date();
  let day: string | number = today.getDate();
  let month: string | number = today.getMonth() + 1;
  const year = today.getFullYear();
  if (day < 10) {
    day = '0' + day;
  } else if (month < 10) {
    month = '0' + month;
  }
  const fullDate = `${day}.${month}.${year}`;
  return fullDate;
};

// End Test functions

export const CardMonday = (): JSX.Element => (
  <ForecastCard
    minDegree={30}
    maxDegree={30}
    day={getWeekdayString('2021-09-23')}
    date={getFormattedDate()}
    icon="//cdn.weatherapi.com/weather/64x64/day/113.png"
    description="sonnig"
  />
);
