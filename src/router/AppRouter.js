import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AboutShow from '../pages/about-show';
import EpisodeDetails from '../pages/episode-details';
import Header from '../components/header';
import { aboutShow, episodeDetails } from './routes';
import "./AppRouter.scss";

function AppRouter() {
    return (
      <Router>
        <Header />
        <main>
          <Switch>
            <Redirect exact from="/" to="/about-show"/>
            <Route path={aboutShow} component={AboutShow} />
            <Route path={`${episodeDetails}/:season/:number`} component={EpisodeDetails} />
          </Switch>
        </main>
      </Router>
    );
  }
  
  export default AppRouter;