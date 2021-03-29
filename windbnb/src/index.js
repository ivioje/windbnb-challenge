import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stays from './components/Stays.js';
// import App from './App';
import { stays } from './stays.js';


ReactDOM.render(
    <Stays location={stays}/>, document.getElementById('root')
);

