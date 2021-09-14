import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
