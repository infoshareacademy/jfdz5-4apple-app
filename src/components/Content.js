import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import { Grid } from 'react-bootstrap'

import HomeView from './views/HomeView'

const Content = () => (
    <Grid >
        <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch>
    </Grid>
);

export default Content