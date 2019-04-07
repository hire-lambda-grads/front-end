import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class LoggedInStudentDashboard extends Component {

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
  }

  componentDidMount() {
    this.fetchStudentInfo();
  }

	render() {
		return (
			<div className="login-page">
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
				<div className="form-box">
					<form onSubmit={this.handleSubmit}>
						<div>
							<label htmlFor="about">About Me:</label>
							<input
								name="about"
								id="about"
								value={this.state.about}
								onChange={this.handleInputChange}
								type="text"
								placeholder="About Me"
							/>
						</div>
            <div>
							<label htmlFor="website">Personal Website (optional):</label>
							<input
								name="website"
								id="website"
								value={this.state.website}
								onChange={this.handleInputChange}
								type="website"
								placeholder="link to your personal website"
							/>
						</div>
						<div>
							<label htmlFor="linkedin">LinkedIn:</label>
							<input
								name="linkedin"
								id="linkedin"
								value={this.state.linkedin}
								onChange={this.handleInputChange}
								type="linkedin"
								placeholder="link to your LinkedIn profile"
							/>
						</div>
            <div>
							<label htmlFor="github">Github:</label>
							<input
								name="github"
								id="github"
								value={this.state.github}
								onChange={this.handleInputChange}
								type="github"
								placeholder="link to your GitHub profile"
							/>
						</div>
            <div>
							<label htmlFor="twitter">Twitter (optional):</label>
							<input
								name="twitter"
								id="twitter"
								value={this.state.twitter}
								onChange={this.handleInputChange}
								type="twitter"
								placeholder="link to your Twitter profile"
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
		);
	}

	handleInputChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
  };
  
  handleSubmit = event => {
		event.preventDefault();
    const endpoint = 'https://halg-backend.herokuapp.com/api/students/update';
    // const endpoint = 'http://localhost:5000/api/students/update';
		axios
			.post(endpoint, this.state)
			.then(res => {
				this.props.history.push('/dashboard');
			})
			.catch(error => console.error(error));
	};

  fetchStudentInfo = () => {
    axios.interceptors.request.use(function(requestConfig) {
      const token = localStorage.getItem('token');
      requestConfig.headers.authorization = token;
      return requestConfig;
    });
    axios.get('https://halg-backend.herokuapp.com/api/students/update')
    // axios.get('http://localhost:5000/api/students/update')
      .then(student => {
        console.log('this is the student we get back when fetching', student);
        this.setState({ ...student.data });
        console.log('this should be the new state', this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default withRouter(LoggedInStudentDashboard);