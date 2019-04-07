import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import LinkInput from './LinkInput';

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

            <LinkInput id="website" value={this.state.website}
              label="Personal Website (optional):" placeholder="link to your personal website"
              handleInputChange={this.handleInputChange}
            />
            <LinkInput id="linkedin" value={this.state.linkedin}
              label="LinkedIn:" placeholder="link to your LinkedIn profile"
              handleInputChange={this.handleInputChange}
            />
            <LinkInput id="github" value={this.state.github}
              label="GitHub:" placeholder="link to your GitHub profile"
              handleInputChange={this.handleInputChange}
            />
            <LinkInput id="twitter" value={this.state.twitter}
              label="Twitter (optional):" placeholder="link to your Twitter profile"
              handleInputChange={this.handleInputChange}
            />

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
        this.setState({ ...student.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default withRouter(LoggedInStudentDashboard);