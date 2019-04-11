import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import ReactMap from '../reactMap/ReactMap';
import HireVideo from '../../assets/hire-lambda.mp4';
import Cards from './Cards';



class Home extends React.Component {

	state = {
		cards:[]
	}

	componentDidMount() {
		axios
			.get(`https://halg-backend.herokuapp.com/api/students/cards`)
			.then(res => {
				const cards = res.data;
				this.setState({cards})
			})
	}

	render() {

		
		return (
			<div className="home-page">
						
				<div className="video-container">
					<video autoPlay loop muted>
						<source src={HireVideo} type="video/mp4" />
					</video>
					<div className="search-box">
						<form className="search-bar">
							<h1>Candidates groomed for your business</h1>
							<input
								type="text"
								name="search"
								value=""
								placeholder="Start your search here"
							/>
							<button className="search-btn" type="submit">
								<i className="fas fa-search" />
							</button>
						</form>
					</div>
				</div>
				{/* <ReactMap /> */}
				
				<div className="search-container">
					{this.state.cards.map(cards => (
					 <Link to={`/cards/${cards.first_name}-${cards.last_name}`} key={cards.id}>
						
					 <Cards {...this.props} cards={cards}/>
				
					 </Link>
					)) }
					</div>
				
			</div>
		);
	}

}

export default withRouter(Home);