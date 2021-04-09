import React from 'react';
import Stays from './components/Stays.js';
import { stays } from './stays.js';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='stays'>
        <h2>Stays in Finland</h2>
        <h5>{stays.length > 12 ? '12+ stays' : stays.length + ' stays'}</h5>
      </div>
      <Stays location={stays} />
    </div>
  );
};

export default App;
