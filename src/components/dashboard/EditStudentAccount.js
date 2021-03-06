import React, { Component } from 'react';
import axios from 'axios';
import tokenConfig from '../../auth/tokenInterceptorConfig';
import Input from './Input';
import { withRouter, Link } from 'react-router-dom';

axios.interceptors.request.use(tokenConfig);

class EditStudentAccount extends Component {
	state = {
		email: '',
		first_name: '',
		last_name: ''
	};

	componentDidMount() {
		this.fetchStudentAccount();
	}

	render() {
		return (
			<div className="dashboard-page">
				<div className="banner-login">
					<h1>Edit Your Account Info</h1>

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
				<div className="options-bar">
					<Link to="/profile" className="btn-options">
						Cancel <i className="fas fa-ban" />
					</Link>
				</div>
				<div className="wrap-card">
					<div className="content-card">
						<div className="card">
							<div className="firstinfo">
								<form onSubmit={this.handleSubmit}>
									<Input
										id="first_name"
										value={this.state.first_name}
										label="First name:"
										placeholder="first name"
										handleInputChange={this.handleInputChange}
										type="text"
									/>
									<Input
										id="last_name"
										value={this.state.last_name}
										label="Last Name:"
										placeholder="last name"
										handleInputChange={this.handleInputChange}
										type="text"
									/>
									<Input
										id="email"
										value={this.state.email}
										label="Email:"
										placeholder="email"
										handleInputChange={this.handleInputChange}
										type="text"
									/>
									{/* <Input
										id="password"
										value={this.state.password}
										label="Password:"
										placeholder="password"
										handleInputChange={this.handleInputChange}
									/> */}

									<button className="btn-red" type="submit">
										Update Account <i className="fas fa-sign-in-alt" />
									</button>
								</form>
							</div>
						</div>
					</div>
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

		const endpoint = 'https://halg-backend.herokuapp.com/api/accounts/update';
		const { role, verified_student, ...filteredState } = this.state;

		axios
			.put(endpoint, filteredState)
			.then(res => {
				this.props.history.push('/profile');
			})
			.catch(error => {
				console.log('hellooo', error);
			});
	};

	fetchStudentAccount = () => {
		axios
			.get('https://halg-backend.herokuapp.com/api/accounts/update')
				.then(student => {
					this.setState({ ...student.data });
				})
				.catch(err => {
					console.log(err);
				});
	};
}

export default withRouter(EditStudentAccount);
