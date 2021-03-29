import React from 'react';

const Cards = ({ photo, title, rating, superHost, beds, type }) => {
  return (
    <div className='container'>
      <div className='card_items'>
        <img src={photo} alt='card' />
        <button>{superHost === true ? 'Super Host' : ''}</button>
        <p>{type}.</p> <p>{beds === 1 ? beds + ' bed' : beds + ' beds'}</p>
        <p>
          <span>&#9734;</span>
          {rating}
        </p>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Cards;
