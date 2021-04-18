import React from 'react';

const FilterDrawer = () => {
  return (
    <div className='all'>
      <div className='items'>
        <div className='search'>
          <div className='search_drawer'>
            <h5>LOCATION</h5>
            <p>Helsink, Finland</p>
          </div>
          <div className='search_drawer'>
            <h5>GUESTS</h5>
            <p style={{ color: '#bbb' }}>Add guests</p>
          </div>
          <div className='search_drawer btn-s'>
            <button className='btn btn-i'>Search</button>
          </div>
        </div>
        <div className='sub_item'>
          <Location />
        </div>
      </div>
    </div>
  );
};

const Location = () => {
  return (
    <div>
      <div>
        <p>Helsink,Finland</p>
        <p>Turku,Finland</p>
        <p>Oulu,Finland</p>
        <p>Vaasa,Finland</p>
      </div>
    </div>
  );
};

const Guests = () => {
  return (
    <div>
      <div>
        <p>Adults</p>
        <p>Ages 13 or above</p>
        <div>
          <button className='btn'>-</button> 0 <butt>+</butt>
        </div>
      </div>
      <div>
        <p>Children</p>
        <p>Ages 2-12</p>
        <div>
          <button className='btn'>-</button> 0 <butt>+</butt>
        </div>
      </div>
    </div>
  );
};
export default FilterDrawer;
