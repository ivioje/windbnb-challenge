import React from 'react';
import logo from '../../assets/logo.svg';
import { Drawer, Logo, Container } from '../../styles/Header';
import Modal from 'react-modal';
import PopUp from './Modal';

Modal.setAppElement('#root');

const Header = ({
    setOpenModal,
    openModal,
    click,
    setClick,
    otherClick,
    setOtherClick,
    handleClick,
    otherHandleClick,
    handleCloseModal,
    filter,
    filterLocation,
    setFilterLocation,
    stays }) => {

    return (
        <Container>
            <Logo>
                <img src={logo} alt='windbnb_logo' />
            </Logo>
            <Drawer onClick={() => setOpenModal(true)}>
                <div className='d1'>
                    <p>Search Location</p>
                </div>
                <div style={{ 'color': '#BDBDBD' }}>
                    <p>Add guests</p>
                </div>
                <div style={{ 'border': 'none' }}>
                    <svg style={{ 'width': '24px', 'height': '24px' }} viewBox="0 0 24 24">
                        <path fill="#DC143C" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,
                        15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,
                        14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                </div>

            </Drawer>
            <PopUp
                open={openModal}
                setModal={setOpenModal}
                click={click}
                setClick={setClick}
                otherClick={otherClick}
                setOtherClick={setOtherClick}
                handleClick={handleClick}
                otherHandleClick={otherHandleClick}
                handleCloseModal={handleCloseModal}
                filter={filter}
                filterLocation={filterLocation}
                setFilterLocation={setFilterLocation}
                stays={stays}
            />
        </Container>
    )
}

export default Header
