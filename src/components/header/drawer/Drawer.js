import React from 'react';
import Search from './search';
import { Items, Top, H6, LocationDiv, GuestTitle, LocTitle, LocationList, GuestDiv, GuestList, Adult, Children, SearchBtn } from '../../../styles/drawer.styles'


const DrawerItems = ({ click,
    otherClick,
    handleClick,
    otherHandleClick,
    handleCloseModal }) => {

    const titleStyle = {
        borderTopLeftRadius: '16px',
        borderBottomLeftRadius: '16px',
        border: '1px solid #4F4F4F',
    }

    return (
        <>
            <Items>
                <Top>
                    <H6>Edit your search</H6>
                    <b onClick={handleCloseModal}>X</b>
                </Top>
                <LocationDiv onClick={handleClick}>
                    <LocTitle style={titleStyle} id='title'>
                        <h6>LOCATION</h6>
                        <input type='text' placeholder='Add location' />
                    </LocTitle>
                    {
                        click ?
                            <LocationList>
                                <p>Helsink, Finland</p>
                                <p>Turku, Finland</p>
                                <p>Oulu, Finland</p>
                                <p>Vaasa, Finland</p>
                            </LocationList>
                            : null
                    }
                </LocationDiv>

                <GuestDiv onClick={otherHandleClick}>
                    <GuestTitle id='guest'>
                        <h6>GUESTS</h6>
                        <input type='text' placeholder='Add guests' />
                    </GuestTitle>
                    {
                        otherClick ?
                            <GuestList className='guest'>
                                <Adult>
                                    <h6>Adults</h6>
                                    <p>Ages 13 or above</p>
                                    <button>-</button>0<button>+</button>
                                </Adult>
                                <Children>
                                    <h6>Children</h6>
                                    <p>Ages 2 - 12</p>
                                    <button>-</button>0<button>+</button>
                                </Children>
                            </GuestList>
                            : null
                    }
                </GuestDiv>

                <SearchBtn>
                    <Search />
                </SearchBtn>
            </Items>

        </>
    )
}

export default DrawerItems;
