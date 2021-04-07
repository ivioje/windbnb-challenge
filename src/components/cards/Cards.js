import React from 'react';

const Cards = ({ photo, title, rating, superHost, beds, type }) => {
  return (
    <div className='container'>
      <div>
        <div className='img'>
        <img src={photo} alt='card' />
        </div>
        <div className='des'>
        <div className='first-p'>{superHost === true ? 'Super Host' : <msg className='msg'></msg>} </div>
        <div className='type'>
        <p >{type}.</p>
        </div>
       <p>{beds === null ? '' : beds + ' beds'}</p>
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
