import React from 'react'
import {Switch, Route,} from 'react-router-dom'

import HomeView from './views/HomeView'
import SearchResultsListView from './views/SearchResultsListView'
import SearchResultsGridView from './views/SearchResultsGridView'
import ProductDetailsView from './views/ProductDetailsView'
import TabbedResults from './TabbedResults'

const Content = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeView}/>
        <Route path="/results" component={TabbedResults}/>
        <Route path="/results/list" component={SearchResultsListView}/>
      <Route path="/results/grid" component={SearchResultsGridView}/>
      <Route path="/results/details/:productId" component={ProductDetailsView}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </div>
);

export default Content