import React from 'react';
import Stays from './components/Stays.js'
import { stays } from './stays.js';
import './index.css';

const App = () => {
  return ( 
    <div className='details'>
<Stays location={stays}/>
    </div>
   );
}
 
export default App;