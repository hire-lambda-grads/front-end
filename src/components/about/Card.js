import React from 'react';

const Card = (props) => {

    return (

        <div>
            <h2>{props.name}</h2>

            <video
                src={props.video}
                type="video/mp4"
                onMouseOver='play()'
                onMouseOut='pause()'
                width='200'
                height='200'>
            </video>

            <p>{props.about}</p>
        </div>
    );
}



export default Card;