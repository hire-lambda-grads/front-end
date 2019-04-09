import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';


import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main>
					<Routes checkLoggedIn={this.checkLoggedIn} />
				</main>
				<Footer />
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
