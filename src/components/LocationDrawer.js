import React from 'react';

const LocationDrawer = () => {
  return (
    <div className='all'>
      <div className='items'>
        <div className='search'>
          <div className='search_drawer' style={{border: '1px solid #000', padding:'1rem'}}>
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
        <div>
          <Location />
        </div>
      </div>
    </div>
  );
};

const Location = () => {
  return (
    <div>
      <div className='location_list'>
        <p>Helsink,Finland</p>
        <p>Turku,Finland</p>
        <p>Oulu,Finland</p>
        <p>Vaasa,Finland</p>
      </div>
    </div>
  );
};
export default LocationDrawer;
