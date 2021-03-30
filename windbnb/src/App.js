import React from 'react';
import Stays from './components/Stays.js'
import { stays } from './stays.js';
import './index.css';
import './App.css';

const App = () => {
  return ( 
    <div>
<Stays location={stays}/>
    </div>
   );
}
 
export default App;