import React, { Component } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import { withRouter, Link } from 'react-router-dom';
import tokenConfig from '../../auth/tokenInterceptorConfig';

axios.interceptors.request.use(tokenConfig);

class AccountStudent extends Component {
	state = {
		email: '',
		first_name: '',
		last_name: '',
		verified_student: false,
		role: ''
	};

	fileInput = React.createRef();

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
									<TextInput
										id="first_name"
										value={this.state.first_name}
										label="First name:"
										placeholder="name"
										handleInputChange={this.handleInputChange}
									/>
									<TextInput
										id="last_name"
										value={this.state.last_name}
										label="Last Name:"
										placeholder="last name"
										handleInputChange={this.handleInputChange}
									/>
									<TextInput
										id="email"
										value={this.state.email}
										label="Email:"
										placeholder="email"
										handleInputChange={this.handleInputChange}
									/>

									<div>
										<button className="btn-red" type="submit">
											Update Account Info <i className="fas fa-sign-in-alt" />
										</button>
									</div>
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

		const accountUpdate = {
			email: this.state.email,
			first_name: this.state.first_name,
			last_name: this.state.last_name
		};

		const endpoint = 'https://halg-backend.herokuapp.com/api/accounts/update';
		axios
			.put(endpoint, accountUpdate)
			.then(res => {
				console.log(res.data);
				this.props.history.push('/account');
			})
			.catch(error => {
				console.log('hellooo', error);
			});
	};

	fetchStudentAccount = () => {
		axios.interceptors.request.use(function(requestConfig) {
			const token = localStorage.getItem('token');
			requestConfig.headers.authorization = token;
			return requestConfig;
		});
		axios
			.get('https://halg-backend.herokuapp.com/api/accounts/update')
			// axios.get('http://localhost:5000/api/students/update')
			.then(student => {
				console.log(
					'student data recieved from get /api/students/update',
					student.data
				);
				this.setState({ ...student.data }, function() {
					console.log(this.state);
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export default withRouter(AccountStudent);
