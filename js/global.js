import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import CMS from '../components/CMS'
import Editor from '../components/Editor'
import Page from '../components/Page'



ReactDOM.render(

    <Router history={browserHistory}>
        <Route path="/" component={CMS}>
            <Route path="page" component={Page} />
            <Route path="editor" component={Editor} />
        </Route>
    </Router>
    , document.getElementById('cms')
)
