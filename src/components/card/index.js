import React from 'react';
import './index.css';

const Card = (props) => {

  return (
    <div className="Card">
      <img className="card-image" src={require(`../../assets/images/${props.image}.png`)} alt="card-img" />
    </div>
  );
}

export default Card;
