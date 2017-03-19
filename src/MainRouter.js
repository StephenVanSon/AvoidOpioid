/**
 * Created by steph on 2017-03-19.
 */
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import React from 'react';
import Map from './components/Map';
import LearnMore from './components/LearnMore';


class MainRouter extends React.Component
{
    render()
    {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/map" component={Map}/>
                    <Route path="/LearnMore" component={LearnMore}/>
                </Route>
            </Router>
        )
    }
}

export default MainRouter;
