import React from 'react';

const GuestsDrawer = () => {
  return (
    <div>
      <div className='all'>
        <div className='items'>
          <div className='search'>
            <div className='search_drawer'>
              <h5>LOCATION</h5>
              <p>Helsink, Finland</p>
            </div>
            <div
              className='search_drawer'
              style={{ border: '1px solid #000', padding: '1rem' }}
            >
              <h5>GUESTS</h5>
              <p style={{ color: '#bbb' }}>Add guests</p>
            </div>
            <div className='search_drawer btn-s'>
              <button className='btn btn-i'>Search</button>
            </div>
          </div>
          <div>
              <Guests />
          </div>
        </div>
      </div>
    </div>
  );
};
export default GuestsDrawer;

const Guests = () => {
  
  return (
    <div className='guest_drawer'>
      <div>
        <h4>Adults</h4>
        <p>Ages 13 or above</p>
        <button className='btn'>-</button>0<button className='btn'>+</button>
     
        <h4>Children</h4>
        <p>Ages 2-12</p>
         <button className='btn'>-</button>0<button className='btn'>+</button>
      </div>
      </div>
  );
};
