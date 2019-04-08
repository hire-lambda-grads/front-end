import React from 'react';

import Card from './Card';

//Videos for each person
import jake from '../../assets/about-videos/Jake.mp4';
import tico from '../../assets/about-videos/Tico.mp4';

const About = props => {
	return (
		<div className="about-cards">
			{/* <h1>FOOTER MENU - Interactive About Us Page Goes Here</h1> */}

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
	);
};

export default About;
