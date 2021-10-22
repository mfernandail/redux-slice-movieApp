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
import { PageNotFound } from '../pages/Error/Error404';

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <div className="container">      
        <Switch>
          <Route
            path="/movie/:imdbid"
            component={Detail}
          />
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}
