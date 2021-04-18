import React, { useState } from 'react';
import Stays from './Stays.js';
import { stays } from '../stays.js';
import '../index.css';
import logo from '../assets/logo.svg';
import Filter from './Filter.js';
import FilterDrawer from './FilterDrawer.js';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='App'>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            },
            content: {
              border: 'none',
              overflow: 'auto',
              width: '100%',
              top: '0px',
              left: '0px',
              right: '0px',
              height: '50vh',
            },
          }}
        >
          <FilterDrawer />
        </Modal>
      </div>
      <div>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='windbnb_logo' />
          </div>
          <div onClick={() => setModalIsOpen(true)}>
            <Filter />
          </div>
        </div>
        <div className='stays'>
          <h2>Stays in Finland</h2>
          <h5 className='stays_length'>
            {stays.length > 12 ? '12+ stays' : stays.length + ' stays'}
          </h5>
        </div>
        <Stays location={stays} />
      </div>
    </div>
  );
};

export default App;
