import React from 'react';
import Cards from './cards/Cards.js';

const Stays = ({ location }) => {
  return (
    <div className='location'>
          {
          location.map((locations, i) => {
     return ( 
     <Cards  
        key={location[i].id}
        title={location[i].title}
        rating={location[i].rating}
        photo={location[i].photo}
        city={location[i].city}
        country={location[i].country}
        superHost={location[i].superHost}
        maxGuests={location[i].maxGuests}
        type={location[i].type}
        beds={location[i].beds}
      />
     )
    })}
      </div>
    );
};
export default Stays;
