import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
	state = {
		username: '',
		password: '',
		first_name: '',
		last_name: '',
		email: '',
		role_id: 1
	};

	render() {
		return (
			<div className="signup-page">
				<div className="banner-signup">
					<h1>Sign Up</h1>

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
						<div>
							<label htmlFor="username" />
							<input
								name="username"
								id="username"
								value={this.state.username}
								onChange={this.handleInputChange}
								type="text"
								placeholder="Username"
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
							<label htmlFor="first_name" />
							<input
								name="first_name"
								id="first_name"
								value={this.state.first_name}
								onChange={this.handleInputChange}
								type="text"
								placeholder="First Name"
							/>
						</div>
						<div>
							<label htmlFor="last_name" />
							<input
								name="last_name"
								id="last_name"
								value={this.state.last_name}
								onChange={this.handleInputChange}
								type="text"
								placeholder="Last Name"
							/>
						</div>
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
							<button className="btn-red" type="submit">
								Register <i className="far fa-clipboard" />
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		console.log(value);
		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		console.log('handling submit');
		event.preventDefault();

		const endpoint = 'https://halg-backend.herokuapp.com/api/auth/register';

		axios
			.post(endpoint, this.state)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				console.log('successfully submitted');
				this.props.history.push('/dashboard');
			})
			.catch(error => console.error(error));
	};
}

export default withRouter(Signup);
