import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Forecast from './pages/Forecast/Forecast';
import CityOverview from './pages/CityOverview/CityOverview';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/forecast">
          <Forecast />
        </Route>
        <Route path="/overview">
          <CityOverview />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
