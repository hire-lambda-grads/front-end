import React, { Component } from 'react';
import { Route, NavLink, withRouter, Link, Switch } from 'react-router-dom';
import './App.scss';
import logo from './assets/hire-lambda-logo.svg';
import logoWhite from './assets/hire-lambda-logo-white.svg';

import About from './components/about/About';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import LoggedInStudentDashboard from './components/dashboard/LoggedInStudentDashboard';
import Profile from './components/dashboard/Profile';
import Privacy from './components/static-pages/PrivacyPolicy';
import Contact from './components/static-pages/Contact';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<div className="top-bar">
						<div className="hl-logo">
							<NavLink exact to="/">
								<img src={logo} alt="Logo" />
							</NavLink>
						</div>
						<Link to="/login" className="btn-red">
							login <i className="fas fa-sign-out-alt" />
						</Link>
					</div>
				</header>
				<main>
					<Switch>
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
								return this.checkLoggedIn() ? (
									<LoggedInStudentDashboard {...props} />
								) : (
									<Dashboard {...props} />
								);
							}}
						/>
						<Route
							path="/profile"
							render={props => {
								console.log(props);
								return <Profile {...props} />;
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
						<Route path="/privacy-policy" component={Privacy} />;
						<Route path="/contact" component={Contact} />;
					</Switch>
				</main>
				<footer>
					<nav>
						<NavLink exact to="/">
							Home
						</NavLink>

						<NavLink to="/about">About</NavLink>

						<NavLink to="/privacy-policy">Privacy Policy</NavLink>
						<NavLink to="/contact">Contact Hire Lambda</NavLink>
					</nav>
					<div className="hl-logo">
						<NavLink exact to="/">
							<img src={logoWhite} alt="Logo" />
						</NavLink>
					</div>
				</footer>
			</div>
		);
	}

	checkLoggedIn = () => {
		if (localStorage.getItem('token') === null) {
			return false;
		} else {
			return true;
		}
	};
}

export default withRouter(App);
