
import React from 'react';

import Card from './Card';

import jake from '../../assets/movie 1.mp4';


const About = () => {
	return (
		<div>
			<h1>FOOTER MENU - Interactive About Us Page Goes Here</h1>
			<h2>Social Cards for Each Team Member Appear Here</h2>
			<Card 
			name= 'Brandon Gardner'
			//video= {}
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Tico Thepsourinthone'
			//video= {}
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'A. Lowell Richardson'
			//video= {}
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Julian Moreno'
			//video= {}
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Ryan Clark'
			//video= {}
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Jake Thomas'
			video= {jake}
			about= 'I am basically a walking computer! Calculating.....'
			/>
			<Card 
			name= 'Jamie Goodnight'
			//video= {}
			about= 'I am basically a walking computer! Calculating.....'
			/>
		</div>
	);
};

export default About;