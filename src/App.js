import React from 'react';
import { stays } from './components/stays.js'
import CardList from './components/card/cardList.js';
import './App.css';

const App = () => {
  return (
    <div>
      <CardList stays={stays} />
    </div>
  );
};

export default App;
