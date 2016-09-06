import React, { PropTypes, Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { createHashHistory } from 'history'
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory, useRouterHistory, Redirect } from 'react-router'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

// Other dependencies
import $ from 'jquery'

// Include Components
import App from './app'
import HelloWorld from './hello_world'
import Crm from './crm'
import UserView from './userView'
import NotFound from './not_found'

// Root component
export default class Root extends Component {

	constructor ( props, context ) {

		super( props )
	}

	render() {
		return (
			<Router history={appHistory}>
				<Route path='/' component={ App }>
					<IndexRoute component={ HelloWorld } />
					<Route path='crm' component={ Crm }/>
					<Route path='crm/:userId' component={ UserView }/>
					<Route path='*' component={ NotFound } />
				</Route>
			</Router>
		);
	}
}
