import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Component/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
    },
  },
};

export const Home = (): JSX.Element => <Navbar LinkActive="home" />;
export const City = (): JSX.Element => <Navbar LinkActive="city" />;
export const Search = (): JSX.Element => <Navbar LinkActive="search" />;
