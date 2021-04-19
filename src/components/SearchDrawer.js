import React from 'react';

const SearchDrawer = () => {
    return ( 
        <div>
      <div className='all'>
        <div className='items'>
          <div className='search'>
            <div className='search_drawer' style={{ border: '1px solid #000', padding: '1rem' }}>
              <h5>LOCATION</h5>
              <p>Helsink, Finland</p>
            </div>
            <div
              className='search_drawer'
            >
              <h5>GUESTS</h5>
              <p style={{ color: '#bbb' }}>Add guests</p>
            </div>
            <div className='search_drawer btn-s'>
              <button className='btn btn-i'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default SearchDrawer;