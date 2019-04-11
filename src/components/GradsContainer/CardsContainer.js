import React from 'react';

import GradCard from './GradCard';

const CardsContainer = props => {
  return (
    <div className="grads-container">
      {/* TODO add grad.id as `key` */}
      {props.gradsList.map((grad, index) => (
        <GradCard grad={grad} key={index} />
      ))}
    </div>
  );
};

export default CardsContainer;