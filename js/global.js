import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Weather from '../components/Weather'
import Today from '../components/Today'



ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={Weather}>
            <Route path="today" component={Today} />
        </Route>
    </Router>
    , document.getElementById('weather')
)
