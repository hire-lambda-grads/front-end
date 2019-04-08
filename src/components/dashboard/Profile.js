import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class Profile extends Component {
	state = {};

	componentDidMount() {
		this.fetchStudentInfo();
	}

	render() {
		return (
			<div className="profile-page">
				<div className="banner-profile">
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
				<div className="options-bar">
					<Link to="/dashboard" className="btn-options">
						Edit Profile <i className="fas fa-edit" />
					</Link>
					<button className="btn-options" onClick={this.logout}>
						Logout <i className="fas fa-sign-out-alt" />
					</button>
				</div>
				<div className="wrap-card">
					<div className="content-card">
						<div className="card">
							<div className="firstinfo">
								<div className="img-wrap">
									<img src={this.state.profile_pic} alt="Profile Pictuare" />
								</div>
								<h1>
									Full Name
									{this.state.first_name} {this.state.last_name}
								</h1>
								<div className="profileinfo">
									<div className="bio">
										<h2>About Me:</h2>
										<p>{this.state.about}</p>
									</div>
								</div>
							</div>
						</div>
						<div className="badgescard">
							<h3>Contact Me </h3>
							<a
								href={`${this.state.github}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github" />
							</a>
							<a
								href={`${this.state.linkedin}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin-in" />
							</a>
							<a
								href={`${this.state.twitter}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-twitter" />
							</a>
							<a
								href={`${this.state.website}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fas fa-globe-americas" />
							</a>
						</div>
					</div>
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
			// .get(`https://halg-backend.herokuapp.com/api/students/profile/2`)
			.get(`https://halg-backend.herokuapp.com/api/students/update`)
			.then(student => {
				console.log(
					'this is the student we get back when fetching',
					student.data
				);
				this.setState({ ...student.data });
				// console.log('this should be the new state', this.state);
			})
			.catch(err => {
				console.log('the get students thingy failed', err);
			});
	};

	logout = event => {
		localStorage.removeItem('token');

		this.props.history.push('/login');
	};
}

export default withRouter(Profile);
