import React from 'react';

const Cards = ({ photo, title, rating, superHost, beds, type }) => {
  return (
    <div className='container'>
     
        <img src={photo} alt='card' />

        <button>{superHost === true ? 'Super Host' : ''}</button>
        <p>{type}.</p> <p>{beds === null ? '' : beds + 'beds'}</p>
        <p>
          <span>&#9734;</span>
          {rating}
        </p>
        <h4>{title}</h4>
   
    </div>
  );
};

export default Cards;
