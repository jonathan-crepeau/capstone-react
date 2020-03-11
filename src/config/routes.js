import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../components/Homepage/Homepage';
import Favorites from '../components/Favorites/Favorites';
import Orders from '../components/Orders/Orders';
import PostFeed from '../components/PostFeed/PostFeed';
import Profile from '../components/Profile/Profile';


export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/favorites" component={Favorites} />
    <Route path="/orders" component={Orders} />
    <Route path="/feed" component={PostFeed} />
    <Route path="/profile" component={Profile} />
  </Switch>
);