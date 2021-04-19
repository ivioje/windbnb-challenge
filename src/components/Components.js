import React, { useState } from 'react';
import Stays from './Stays.js';
import { stays } from '../stays.js';
import '../index.css';
import logo from '../assets/logo.svg';
import Modal from 'react-modal';
import LocationDrawer from './LocationDrawer.js';
import GuestsDrawer from './GuestsDrawer.js'
import SearchDrawer from './SearchDrawer.js';

Modal.setAppElement('#root');
const App = () => {
  const [LocationModalIsOpen, setLocationModalIsOpen] = useState(false);
  const [guestmodal, setGuestModal] = useState(false);
  return (
    <div className='App'>
      <div>
        <Modal
          isOpen={LocationModalIsOpen}
          onRequestClose={() => setLocationModalIsOpen(false)}
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
              height: '65vh',
              borderRadius: 'none',
            },
          }}
        >
          <LocationDrawer />
        </Modal>
      </div>
      <Modal isOpen={guestmodal}
          onRequestClose={() => setGuestModal(false)}
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
              height: '65vh',
              borderRadius: 'none',
            },
          }}>
<GuestsDrawer />
      </Modal>
      <div>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='windbnb_logo' />
          </div>
          <div className='filter-drawer'>
    <div className='filter'>
      <div className='stays_location drawer' onClick={() => setLocationModalIsOpen(true)}>
        <h5>Helsink, Finland</h5>
      </div>

      <div className='guest drawer' onClick={() => setGuestModal(true)}>
        <h5>Add guests</h5>
      </div>
      <div className='search_icon drawer'>
        <h5>ICO</h5>
      </div>
    </div>
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
