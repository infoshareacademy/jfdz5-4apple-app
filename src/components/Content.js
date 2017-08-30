import React from 'react'
import {Switch, Route,} from 'react-router-dom'

import HomeView from './views/HomeView'
import SearchResultsListView from './views/SearchResultsListView'

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeView}/>
      <Route path="/results/list" component={SearchResultsListView}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </div>
);

export default Content