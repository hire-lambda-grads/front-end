import React, { Component } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
// import FileInput from './FileInput';
import { withRouter, Link } from 'react-router-dom';

class EditStudentProfile extends Component {
	state = {
		about: '',
		cohort_id: null,
		github: '',
		job_searching: false,
		linkedin: '',
		location: '',
		profile_pic: '',
		relocatable: false,
		twitter: '',
		website: '',
		image: null
	};

	fileInput = React.createRef();

	componentDidMount() {
		this.fetchStudentInfo();
	}

	render() {
		return (
			<div className="dashboard-page">
				<div className="banner-login">
					<h1>Edit Your Profile</h1>

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
									{/* <FileInput /> */}

									<div className="img-wrap">
										<img src={this.state.profile_pic} alt="Profile Pictuare" />
									</div>

									<h2>Upload Profile Picture:</h2>
									<div>
										<input
											type="file"
											name="image"
											onChange={this.handleFileChange}
										/>
									</div>
									<TextInput
										id="website"
										value={this.state.website}
										label="Personal Website (optional):"
										placeholder="link to your personal website"
										handleInputChange={this.handleInputChange}
									/>
									<TextInput
										id="linkedin"
										value={this.state.linkedin}
										label="LinkedIn:"
										placeholder="link to your LinkedIn profile"
										handleInputChange={this.handleInputChange}
									/>
									<TextInput
										id="github"
										value={this.state.github}
										label="GitHub:"
										placeholder="link to your GitHub profile"
										handleInputChange={this.handleInputChange}
									/>
									<TextInput
										id="twitter"
										value={this.state.twitter}
										label="Twitter (optional):"
										placeholder="link to your Twitter profile"
										handleInputChange={this.handleInputChange}
									/>

									<div>
										<label htmlFor="about">About Me:</label>
										<textarea
											name="about"
											id="about"
											value={this.state.about}
											onChange={this.handleInputChange}
											type="text"
											placeholder="About Me"
										/>
									</div>
									<div>
										<button className="btn-red" type="submit">
											Update Profile <i className="fas fa-sign-in-alt" />
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

	handleFileChange = event => {
		this.setState({ image: event.target.files[0] });
	};
	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();

		let payload = this.state;
		delete payload.cohort_options;
		delete payload.profile_pic;
		delete payload.id;
		payload.cohort_id = 1;
		let formData = new FormData();
		formData.append('image', payload.image);
		delete payload.image;
		formData.append('studentInfo', JSON.stringify(payload));

		const endpoint = 'https://halg-backend.herokuapp.com/api/students/update';
		// const endpoint = 'http://localhost:5000/api/students/update';

		axios
			.put(endpoint, formData)
			.then(res => {
				this.props.history.push('/profile');
			})
			.catch(error => {
				console.log('hellooo', error);
			});
	};

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

export default withRouter(EditStudentProfile);
