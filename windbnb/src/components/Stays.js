import React from 'react';
import Cards from './Cards.js';

const Stays = ({ location }) => {
  const cities = location.map((locations, i) => {
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
    );
  });
  return <div className='location'>{cities}</div>
};
export default Stays;
