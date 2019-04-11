import React from 'react'
import { Route, NavLink } from 'react-router-dom';


export default function Cards(props) {
	console.log('cars from cards', props)
	const {website, first_name, skills, profile_pic, track, relocatable, last_name, match} = props.cards;
  console.log("here",props.match.params)
//    const { id } = match.params;


    //   const cards = cards.find(cards => `${cards.id}` === id); 
  
  
  return (
	<>
				<div className="card">
					<div className="firstinfo">
						<div className="name-box">
							<div className="img-wrap">
								<img src={profile_pic} alt="Profile Pictuare" />
							</div>
							<h1>{first_name} {last_name}</h1>
							<p>{track}</p>
							<p>Skills: {skills} </p>
							<p>Location</p>
							<p></p>
						</div>
					</div>
				</div>
			</>
  )
}

