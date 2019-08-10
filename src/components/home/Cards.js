import React from 'react'
import { Link } from 'react-router-dom';


export default function Cards(props) {
	const {id, first_name, skills, profile_pic, track, last_name} = props.cards;
   
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
								<Link to={`/cards/${id}`} className="btn-card" > Learn More ..</Link>
						</div>
					</div>
				</div>
			</>
  )
}

