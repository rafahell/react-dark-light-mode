import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home';

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </HashRouter>
    );
}

export default Router;