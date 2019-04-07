import React from 'react';
import ReactMap from '../reactMap/ReactMap';
import Travaho from '../../assets/Travaho.mp4';
import Whiteboard from '../../assets/Whiteboard.mp4';

const Home = () => {
	return (
		<div>
			<h1>Home/Landing Page</h1>
			<video className="bg-video" autoPlay loop muted>
				<source src={Travaho} type="video/mp4" />
			</video>
			<ReactMap />
			<video className="bg-video" autoPlay loop muted>
				<source src={Whiteboard} type="video/mp4" />
			</video>
		</div>
	);
};

export default Home;
