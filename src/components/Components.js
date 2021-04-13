import React from 'react';
import Stays from './Stays.js';
import { stays } from '../stays.js';
import '../index.css';
import logo from '../assets/logo.svg';
import Filter from './Filter.js';
import FilterDrawer from './FilterDrawer.js';

const App = () => {
  return (
    <div className='App'>
      <FilterDrawer />
      <div>
      <div className='header'>
        <div className='logo'>
          <img src={logo} alt='windbnb_logo' />
        </div>
        <Filter />
      </div>
      <div className='stays'>
        <h2>Stays in Finland</h2>
        <h5 className='stays_length'>{stays.length > 12 ? '12+ stays' : stays.length + ' stays'}</h5>
      </div>
      <Stays location={stays} />
    </div>
    </div>
  );
};

export default App;
