import React from 'react'
import {Switch, Route,} from 'react-router-dom'

import HomeView from './views/HomeView'
import ProductDetailsView from './views/ProductDetailsView'
import TabbedResults from './TabbedResults'
import FavsProductsView from './views/FavsProductsView'

const Content = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route exact path="/results" component={TabbedResults}/>
            <Route path="/results/details/:productId" component={ProductDetailsView}/>
            <Route path="/favs" component={FavsProductsView}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch>
    </div>
);

export default Content