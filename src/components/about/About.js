import React from 'react';

import Card from './Card';


const About = () => {
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

// class About extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { 
// 			name: name,
// 			video: video,
// 			about: about,
// 		 }
// 	}
// 	render() { 
// 		return ( 
			
// 		 );
// 	}
// }
 
// export default About;