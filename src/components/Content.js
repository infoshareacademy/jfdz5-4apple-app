import React from 'react'
import { Switch, Route, } from 'react-router-dom'

import HomeView from './views/HomeView'

const Content = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch>
    </div>
);

export default Content