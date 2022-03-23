import React from 'react';
import Modal from 'react-modal';
import DrawerItems from './drawer/Drawer';

const PopUp = ({ open,
    setModal,
    click,
    otherClick,
    handleClick,
    otherHandleClick,
    handleCloseModal,
    filter }) => {

    return (
        <>
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
                        height: '73vh',
                        borderRadius: 'none',

                    },
                }}
            >
                <DrawerItems
                    click={click}
                    otherClick={otherClick}
                    handleClick={handleClick}
                    otherHandleClick={otherHandleClick}
                    handleCloseModal={handleCloseModal}
                    filter={filter}
                />
            </Modal>
        </>
    )
}

export default PopUp;
