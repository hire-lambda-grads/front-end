
import React from 'react';

import Card from './Card';

//Videos for each person
import jake from '../../assets/movie 1.mp4'


const About = (props) => {
	return (
		<div>
			<h1>FOOTER MENU - Interactive About Us Page Goes Here</h1>
			<h2>Social Cards for Each Team Member Appear Here</h2>
			<Card 
			name= 'Brandon Gardner'
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Tico Thepsourinthone'
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'A. Lowell Richardson'
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Julian Moreno'
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Ryan Clark'
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Jake Thomas'
			video= {jake}
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Jamie Goodnight'
			about= 'I am basically a walking computer! Calculating.....'
			/>
		</div>
	);
	
};

export default About;