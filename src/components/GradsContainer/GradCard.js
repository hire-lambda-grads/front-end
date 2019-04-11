import React from 'react';

const GradCard = props => {
  return (
    <div className="card">
      <div className="firstinfo">
        <div className="name-box">
          <div className="img-wrap">
            <img src="" alt={props.grad.name} />
          </div>
          <h1>{props.grad.name}</h1>
          <p>Skills: {props.grad.skills.join(', ')}</p>
          <p>Location: {props.grad.location}</p>
          <p>
            Relocation:{' '}
            {props.grad.relocation
              ? 'Open to Relocation'
              : 'Not Considering Relocation'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GradCard;
