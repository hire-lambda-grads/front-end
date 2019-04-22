import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../store/actions/cardsActions';

import { withRouter } from 'react-router-dom';
import HireVideo from '../../assets/hire-lambda.mp4';
import Cards from './Cards';
import Map from '../map/Map';

class Home extends React.Component {
	componentDidMount() {
		this.props.getData();
		console.log('fetching', getData);
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
								onChange={this.handelSearch}
								placeholder="Start your search here"
							/>
							<button className="search-btn" type="submit">
								<i className="fas fa-search" />
							</button>
						</form>
					</div>
				</div>

				<Map />

				<div className="search-container">
					{this.props.cards.map(cards => (
						<Cards {...this.props} cards={cards} key={cards.id} />
					))}
				</div>
			</div>
		);
	}

	handelSearch = e => {
		e.preventDefault();
	};
}

const mapStateToProps = state => ({
	cards: state.cardsReducer.cards,
	error: state.cardsReducer.error,
	fetching: state.cardsReducer.fetching
});

export default withRouter(
	connect(
		mapStateToProps,
		{ getData }
	)(Home)
);
