import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class Login extends React.Component {
	state = {
		email: '',
		password: ''
	};

	render() {
		return (
			<div className="login-page">
				<div className="banner-login">
					<h1>Login</h1>

					<div className="code-logos">
						<i className="fab fa-html5" />
						<i className="fab fa-css3-alt" />
						<i className="fab fa-sass" />
						<i className="fab fa-less" />
						<i className="fab fa-react" />
						<i className="fab fa-python" />
						<i className="fab fa-node-js" />
						<i className="fab fa-apple" />
						<i className="fab fa-android" />
					</div>
				</div>
				<div className="form-box">
					<form onSubmit={this.handleSubmit}>
						<p>Have an account? Log in</p>
						<div>
							<label htmlFor="email" />
							<input
								name="email"
								id="email"
								value={this.state.email}
								onChange={this.handleInputChange}
								type="text"
								placeholder="Email Address"
							/>
						</div>
						<div>
							<label htmlFor="password" />
							<input
								name="password"
								id="password"
								value={this.state.password}
								onChange={this.handleInputChange}
								type="password"
								placeholder="Password"
							/>
						</div>

						<div>
							<button className="btn-red" type="submit">
								Login <i className="fas fa-sign-in-alt" />
							</button>
						</div>

						<div className="signup-btn">
							<Link to="/signup" className="btn-blue">
								<i className="fas fa-user-plus" /> Sign Up
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}

	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();

		const endpoint = 'https://halg-backend.herokuapp.com/api/auth/login';
		// const endpoint = 'http://localhost:5000/api/auth/login';

		axios
			.post(endpoint, this.state)
			.then(res => {
				localStorage.setItem('token', res.data.token);

				this.props.history.push('/profile');
			})
			.catch(error => console.error(error));
	};
}

export default withRouter(Login);
