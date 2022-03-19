import React from 'react';
import Modal from 'react-modal';
import DrawerItems from './drawer/Drawer';

const PopUp = ({ open, setModal }) => {
    return (
        <Modal
            isOpen={open}
            onRequestClose={() => setModal(false)}
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
            <DrawerItems />
        </Modal>
    )
}

export default PopUp;
