import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class Profile extends Component {
	state = {
		about: '',
		account_id: null,
		careers_approved: false,
		cohort_id: null,
		did_pm: false,
		github: '',
		id: null,
		job_searching: false,
		linkedin: '',
		location: '',
		profile_pic: '',
		relocatable: false,
		twitter: '',
		website: ''
	};

	componentDidMount() {
		this.fetchStudentInfo();
	}

	render() {
		return (
			<div className="login-page">
				<div className="banner-login">
					<h1>Profile</h1>

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
					<button className="btn-red" onClick={this.logout}>
						Logout <i className="fas fa-sign-out-alt" />
					</button>
					<Link to="/dashboard" className="btn-red">
						Edit Profile <i className="fas fa-sign-out-alt" />
					</Link>
					<h2>About Me:</h2>
					<p>{this.state.about}</p>

					<h2>Personal Website</h2>
					<p>{this.state.website}</p>

					<h2>LinkedIn:</h2>
					<p>{this.state.linkedin}</p>

					<h2>Github:</h2>
					<p>{this.state.github}</p>

					<h2>Twitter</h2>
					<p>{this.state.twitter}</p>
				</div>
			</div>
		);
	}

	fetchStudentInfo = () => {
		axios.interceptors.request.use(function(requestConfig) {
			const token = localStorage.getItem('token');
			requestConfig.headers.authorization = token;
			return requestConfig;
		});
		axios
			.get('https://halg-backend.herokuapp.com/api/students/update')
			// axios.get('http://localhost:5000/api/students/update')
			.then(student => {
				console.log('this is the student we get back when fetching', student);
				this.setState({ ...student.data });
				console.log('this should be the new state', this.state);
			})
			.catch(err => {
				console.log(err);
			});
	};

	logout = event => {
		localStorage.removeItem('token');

		this.props.history.push('/login');
	};
}

export default withRouter(Profile);
