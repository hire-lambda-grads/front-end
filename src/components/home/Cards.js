import React from 'react'
import { Route, NavLink, withRouter, browserHistory } from 'react-router-dom';


export default function Cards(props) {
	console.log('cars from cards', props)
	const {website, first_name, skills, profile_pic, track, relocatable, last_name} = props.cards;
  console.log("here",props.match.params)



    //   const cards = cards.find(cards => `${props.cards.id}` === id); 
  
  
  return (
	<>
				<div className="card">
					<div className="firstinfo">
						<div className="name-box">
								<div className="img-wrap">
									<img src={profile_pic} alt="Profile Pictuare" />
								</div>
								<h1>{first_name} {last_name}</h1>
								<p className="card-track">{track}</p>
								<hr/>
								<p>Skills: {skills} JS, React.JS, Python, Node.JS</p>
								<p>Location: USA</p>
						</div>
					</div>
				</div>
			</>
  )
}

