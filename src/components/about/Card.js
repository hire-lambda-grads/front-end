import React from 'react';

const Card = (props) => {
    return ( 
        <div>
            <h2>{props.name}</h2>
            <video
            preload
            muted
            width='200'
            height='200'
            onMouseOver='play()'
            onMouseOut='pause()'
            >
            <source
                src={props.video}
                type="video/mp4"
            />

            </video>
            
            <p>{props.about}</p>
        </div>
     );
}
 
export default Card;