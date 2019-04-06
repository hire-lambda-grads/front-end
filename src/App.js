import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.scss';
import logo from './assets/hire-lambda-logo.svg';

import About from './components/about/About';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<div className="nav-bar">
						<div className="hl-logo">
							<NavLink exact to="/">
								<img src={logo} alt="Logo" />
							</NavLink>
						</div>
						<nav>
							<NavLink exact to="/">
								Home
							</NavLink>

							<NavLink to="/about">About Us</NavLink>

							<NavLink to="/dashboard">Dashboard</NavLink>

							<NavLink to="/login">Login</NavLink>

							<NavLink to="/signup">Sign Up</NavLink>
						</nav>

						<button className="btn-red" onClick={this.logout}>
							Log Out <i className="fas fa-sign-out-alt" />
						</button>
					</div>
				</header>
				<main>
					<Route
						exact
						path="/"
						render={props => {
							console.log(props);
							return <Home {...props} />;
						}}
					/>
					<Route
						path="/about"
						render={props => {
							console.log(props);
							return <About {...props} />;
						}}
					/>
					<Route
						path="/dashboard"
						render={props => {
							console.log(props);
							return <Dashboard {...props} />;
						}}
					/>
					<Route
						path="/login"
						render={props => {
							console.log(props);
							return <Login {...props} />;
						}}
					/>
					<Route
						path="/signup"
						render={props => {
							console.log(props);
							return <Signup {...props} />;
						}}
					/>
				</main>
			</div>
		);
	}

	logout = event => {
		localStorage.removeItem('token');

		this.props.history.push('/login');
	};
}

export default withRouter(App);
