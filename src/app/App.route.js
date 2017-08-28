import React, {Component} from 'react';
import {
	Router,
	Route,
	IndexRoute,
    browserHistory,
    hashHistory
} from 'react-router';

//导入组件
import App from './App';
import HomeComponent from '../component/home/home';
import LoginComponent from '../component/login/login';
import NotFoundComponent from '../component/notfound/notfound';

//配置路由
const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}> //父组件，默认为空
			<IndexRoute component={HomeComponent} /> //默认调用的子组件，类似'/'调用index.html
			<Route path="login" component={LoginComponent}/>
			
		</Route>
		<Route path="**" component={NotFoundComponent} />
	</Router>
)

export default routes;