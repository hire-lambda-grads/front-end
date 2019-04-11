import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';




class Profile extends Component {
	state = {
		
	};

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
				
				</div>
				<div className="wrap-card">
					<div className="content-card">
						<div className="card">
							<div className="firstinfo">
								<div className="name-box">
									<div className="img-wrap">
										<img src={this.state.profile_pic} alt="Profile Pictuare" />
									</div>
									<h1>
										{this.state.first_name} {this.state.last_name}
									</h1>
									<h2>
										<a
											href={`${this.state.website}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fas fa-globe-americas" />
											{this.state.website}
										</a>
									</h2>
								</div>
								<div className="profileinfo">
									<div className="bio">
										<h2>{this.state.track}</h2>
										<h3>About Me:</h3>
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
		axios
			.get(`https://halg-backend.herokuapp.com/api/students/profile/${this.props.match.params.id}`)
			.then(students => {
				this.setState({ ...students.data });
			})
			.catch(err => {
				console.log('the get students thingy failed', err);
			});
	};


}

export default withRouter(Profile);
