import React from 'react'
import {Switch, Route,} from 'react-router-dom'

import HomeView from './views/HomeView'
import ProductDetailsView from './views/ProductDetailsView'
import TabbedResults from './TabbedResults'
import OrdersList from "./views/OrdersList";

const Content = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route exact path="/results" component={TabbedResults}/>
            <Route path="/results/details/:productId" component={ProductDetailsView}/>
            <Route path="/results/details/orders:productId" component={OrdersList}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch>
    </div>
);

export default Content