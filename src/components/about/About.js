import React from 'react';

import Card from './Card';

//Videos for each person
import jake from '../../assets/about-videos/Jake.mp4';
import tico from '../../assets/about-videos/Tico.mp4';

const About = props => {
	return (
		<div className="about-cards">
			<div className="banner-about">
				<h1>About Us</h1>

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
			<div className="cards-container">
				<Card
					name="Brandon Gardner"
					video={jake}
					about="I am basically a walking computer! Calculating....."
				/>
				<Card
					name="Tico Thepsourinthone"
					video={tico}
					about="I am basically a walking computer! Calculating....."
				/>
				<Card
					name="A. Lowell Richardson"
					video={jake}
					about="I am basically a walking computer! Calculating....."
				/>
				<Card
					name="Julian Moreno"
					video={jake}
					about="I am basically a walking computer! Calculating....."
				/>
				<Card
					name="Ryan Clark"
					video={jake}
					about="I am basically a walking computer! Calculating....."
				/>
				<Card
					name="Jake Thomas"
					video={jake}
					about="I am basically a walking computer! Calculating....."
				/>
			</div>
		</div>
	);
};

export default About;
