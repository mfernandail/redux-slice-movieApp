import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Home } from '../pages/Home/Home';
import { Detail } from '../pages/Detail/Detail';
import { Footer } from '../components/Footer/Footer';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound';

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      
      <Switch>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/movie/:imdbid"
          component={Detail}
        />
        <Route component={PageNotFound} />
      </Switch>

      <Footer />
    </Router>
  )
}
