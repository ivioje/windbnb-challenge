import React from 'react';

const Cards = ({ photo, title, rating, superHost, beds, type }) => {
  return (
    <div className='container'>
      <div>
        <img src={photo} alt='card' />
        <div className='des'>
        <p>{superHost === true ? 'Super Host' : ''}</p>
        <p>{type}.</p> <p>{beds === null ? '' : beds + ' beds'}</p>
        <p>
          <span>&#9734;</span>
          {rating}
        </p>
        </div>
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Cards;
