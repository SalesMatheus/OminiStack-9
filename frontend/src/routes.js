import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import New from './pages/New/index';
import Login from './pages/Login/index';
import Dashboard from './pages/Dashboard/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/new" component={New} />
                <Route path="/dashBoard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}